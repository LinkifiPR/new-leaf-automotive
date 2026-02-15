"use client";

import dynamic from "next/dynamic";

const CoverageMapInner = dynamic(() => import("@/components/CoverageMapInner"), {
  ssr: false,
  loading: () => <p className="coverage-map-status">Loading coverage map…</p>
});

export default function CoverageMap() {
  return <CoverageMapInner />;
}
