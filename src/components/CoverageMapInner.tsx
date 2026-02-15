"use client";

import { useEffect, useMemo } from "react";
import L from "leaflet";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import type {
  Feature,
  FeatureCollection,
  GeoJsonObject,
  Polygon
} from "geojson";

type CountyProperties = { name: string };
type CountyFeature = Feature<Polygon, CountyProperties>;

const COUNTY_FEATURES: FeatureCollection<Polygon, CountyProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Lincolnshire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.05, 53.2],
            [-0.95, 53.62],
            [-0.33, 53.84],
            [0.6, 53.45],
            [0.4, 53.06],
            [0.3, 52.7],
            [-0.1, 52.5],
            [-0.8, 52.53],
            [-1.0, 52.85],
            [-1.05, 53.2]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Nottinghamshire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.5, 53.07],
            [-1.5, 53.32],
            [-1.3, 53.5],
            [-0.84, 53.48],
            [-0.72, 53.3],
            [-0.74, 52.89],
            [-0.95, 52.83],
            [-1.27, 52.87],
            [-1.5, 53.07]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Derbyshire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-2.3, 53.37],
            [-2.0, 53.62],
            [-1.55, 53.66],
            [-1.22, 53.45],
            [-1.33, 53.12],
            [-1.59, 52.93],
            [-1.9, 52.92],
            [-2.18, 53.11],
            [-2.3, 53.37]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "South Yorkshire" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-1.73, 53.7],
            [-1.31, 53.7],
            [-1.03, 53.52],
            [-1.07, 53.34],
            [-1.27, 53.28],
            [-1.59, 53.31],
            [-1.79, 53.44],
            [-1.73, 53.7]
          ]
        ]
      }
    }
  ]
};

function FitBounds({
  data
}: {
  data: FeatureCollection<Polygon, CountyProperties>;
}) {
  const map = useMap();

  useEffect(() => {
    if (!data.features.length) {
      return;
    }

    const layer = L.geoJSON(data as unknown as GeoJsonObject);
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
        const county = feature.properties?.name;

        if (!county || !(layer instanceof L.Path)) {
          return;
        }

        layer.bindTooltip(county, {
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
          data={COUNTY_FEATURES as unknown as GeoJsonObject}
          style={geoJsonStyle}
          onEachFeature={onEachCounty}
        />
        <FitBounds data={COUNTY_FEATURES} />
      </MapContainer>
      <div className="coverage-map-legend">
        <span /> Service area counties
      </div>
    </div>
  );
}
