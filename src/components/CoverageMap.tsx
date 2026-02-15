"use client";

import { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import {
  GeoJSON,
  MapContainer,
  TileLayer,
  useMap
} from "react-leaflet";
import { feature as topojsonFeature } from "topojson-client";
import type {
  Feature,
  FeatureCollection,
  Geometry,
  GeoJsonProperties
} from "geojson";

type CountyFeature = Feature<Geometry, GeoJsonProperties>;

const TARGET_COUNTIES = [
  "lincolnshire",
  "nottinghamshire",
  "derbyshire",
  "south yorkshire"
];

const SOURCE_URL =
  "https://martinjc.github.io/UK-GeoJSON/json/administrative/eng/ctyua.json";

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function countyNameFromProperties(properties: GeoJsonProperties): string | null {
  if (!properties) {
    return null;
  }

  for (const value of Object.values(properties)) {
    if (typeof value !== "string") {
      continue;
    }

    const normalized = normalize(value);

    if (TARGET_COUNTIES.includes(normalized)) {
      return normalized;
    }
  }

  return null;
}

function ensureFeatureCollection(input: unknown): FeatureCollection {
  if (!input || typeof input !== "object") {
    return {
      type: "FeatureCollection",
      features: []
    };
  }

  const obj = input as Record<string, unknown>;

  if (obj.type === "FeatureCollection" && Array.isArray(obj.features)) {
    return obj as unknown as FeatureCollection;
  }

  if (obj.type === "Topology" && obj.objects && typeof obj.objects === "object") {
    const objects = obj.objects as Record<string, unknown>;
    const firstObjectKey = Object.keys(objects)[0];

    if (!firstObjectKey) {
      return {
        type: "FeatureCollection",
        features: []
      };
    }

    const topology = obj as unknown as Parameters<typeof topojsonFeature>[0];
    const topologyObject = objects[
      firstObjectKey
    ] as unknown as Parameters<typeof topojsonFeature>[1];

    const converted = topojsonFeature(topology, topologyObject) as
      | FeatureCollection
      | Feature;

    if ("features" in converted) {
      return converted;
    }

    return {
      type: "FeatureCollection",
      features: [converted]
    };
  }

  return {
    type: "FeatureCollection",
    features: []
  };
}

function FitBounds({ data }: { data: FeatureCollection }) {
  const map = useMap();

  useEffect(() => {
    if (!data.features.length) {
      return;
    }

    const layer = L.geoJSON(data as unknown as GeoJSON.GeoJsonObject);
    const bounds = layer.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [28, 28],
        maxZoom: 8
      });
    }
  }, [data, map]);

  return null;
}

export default function CoverageMap() {
  const [counties, setCounties] = useState<FeatureCollection | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCountyData() {
      try {
        const response = await fetch(SOURCE_URL, {
          cache: "force-cache"
        });

        if (!response.ok) {
          throw new Error(`Boundary data request failed (${response.status}).`);
        }

        const raw = (await response.json()) as unknown;
        const featureCollection = ensureFeatureCollection(raw);

        const filteredFeatures = featureCollection.features.filter((feature) => {
          return Boolean(countyNameFromProperties(feature.properties));
        }) as CountyFeature[];

        if (!cancelled) {
          setCounties({
            type: "FeatureCollection",
            features: filteredFeatures
          });
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load coverage map data right now."
          );
        }
      }
    }

    loadCountyData();

    return () => {
      cancelled = true;
    };
  }, []);

  const geoJsonStyle = useMemo(
    () => ({
      color: "#8bff4d",
      weight: 2,
      fillColor: "#44e25c",
      fillOpacity: 0.26
    }),
    []
  );

  const onEachCounty = useMemo(
    () =>
      (feature: CountyFeature, layer: L.Layer) => {
        const county = countyNameFromProperties(feature.properties);

        if (!county || !(layer instanceof L.Path)) {
          return;
        }

        const label = county
          .split(" ")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(" ");

        layer.bindTooltip(label, {
          sticky: true,
          direction: "top",
          className: "coverage-map-tooltip"
        });

        layer.on("mouseover", () => {
          layer.setStyle({
            fillOpacity: 0.36,
            weight: 2.5
          });
        });

        layer.on("mouseout", () => {
          layer.setStyle({
            fillOpacity: 0.26,
            weight: 2
          });
        });
      },
    []
  );

  if (error) {
    return <p className="coverage-map-status">{error}</p>;
  }

  if (!counties) {
    return <p className="coverage-map-status">Loading coverage map…</p>;
  }

  return (
    <div className="coverage-map-wrap">
      <MapContainer
        className="coverage-map"
        center={[53.2, -1.2]}
        zoom={7}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <GeoJSON
          data={counties as unknown as GeoJSON.GeoJsonObject}
          style={geoJsonStyle}
          onEachFeature={onEachCounty}
        />
        <FitBounds data={counties} />
      </MapContainer>
      <div className="coverage-map-legend">
        <span /> Service area counties
      </div>
    </div>
  );
}
