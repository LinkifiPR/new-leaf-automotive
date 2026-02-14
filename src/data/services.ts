export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServicePriceRow = {
  item: string;
  price: string;
  note?: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  longDescription: string[];
  keyPoints: string[];
  priceRows: ServicePriceRow[];
  coverage: string[];
  images: ServiceImage[];
  footerNote: string;
};

const coverageAreas = [
  "Lincolnshire",
  "Nottinghamshire",
  "Derbyshire",
  "South Yorkshire"
];

export const servicePages: ServicePageData[] = [
  {
    slug: "diagnostics",
    title: "Mobile Diagnostics",
    strapline: "Fault finding and health checks at your location.",
    summary:
      "Comprehensive VWAG diagnostics for known faults, hidden issues, and pre-repair assessment.",
    longDescription: [
      "Our mobile diagnostics service is designed for drivers who need accurate answers before committing to repairs. We run a full module scan, assess the current health state of the vehicle, and explain findings in plain language.",
      "This service is useful for warning lights, intermittent faults, post-repair validation, and baseline checks before coding or retrofit work. Where needed, we can guide next steps or complete minor remedy work by agreement."
    ],
    keyPoints: [
      "Full module scans using specialist VWAG tooling",
      "Clear, practical explanation of what fault data means",
      "Suitable for pre-work checks and fault confirmation",
      "No garage waiting lines, all done on location"
    ],
    priceRows: [
      {
        item: "Diagnostic scan / basic health check",
        price: "£40"
      },
      {
        item: "Diagnostic scan plus basic coding",
        price: "£60"
      },
      {
        item: "Minor ADAS misalignment reset",
        price: "£100"
      },
      {
        item: "Small mechanical and electrical works",
        price: "P.O.A.",
        note:
          "Examples include temperature sensors and heater fan resistors; quoted in advance."
      }
    ],
    coverage: coverageAreas,
    images: [
      {
        src: "/gallery/diagnostics/diagnostics-vcds-clean.jpeg",
        alt: "VCDS diagnostics screen showing steering assist checks",
        width: 1079,
        height: 1440
      },
      {
        src: "/gallery/diagnostics/diagnostics-column-work.jpeg",
        alt: "Steering column strip-down during diagnostics and repair work",
        width: 1080,
        height: 574
      },
      {
        src: "/gallery/diagnostics/diagnostics-steering-module.jpeg",
        alt: "Close view of steering module and connector assembly",
        width: 1079,
        height: 1440
      },
      {
        src: "/gallery/diagnostics/diagnostics-abs-coding-fault.jpeg",
        alt: "ABS coding fault identified through diagnostics",
        width: 1079,
        height: 1441
      }
    ],
    footerNote:
      "Mileage costs may apply depending on location. Bespoke quotes include travel where relevant."
  },
  {
    slug: "coding",
    title: "Mobile Coding",
    strapline: "Feature activation and behavior changes with vehicle-specific checks.",
    summary:
      "Coding support for driver assist settings, module behavior changes, and additional requests.",
    longDescription: [
      "Coding work is carried out with a practical, compatibility-first approach. We confirm what is possible for your specific model and module versions before making changes.",
      "Common requests include driver assist behavior adjustments, additional coding sessions, and coding alongside diagnostics so any underlying issues are visible first."
    ],
    keyPoints: [
      "Driver assist coding and related behavior changes",
      "Additional coding sessions available",
      "Vehicle-specific compatibility checks before changes",
      "Diagnostics-led approach for safer implementation"
    ],
    priceRows: [
      {
        item: "Driver assist coding",
        price: "£80"
      },
      {
        item: "Additional coding",
        price: "£40"
      },
      {
        item: "Diagnostic scan plus basic coding",
        price: "£60"
      }
    ],
    coverage: coverageAreas,
    images: [
      {
        src: "/gallery/coding/coding-driver-assist.jpeg",
        alt: "Driver assist coding workflow displayed on VCDS",
        width: 1079,
        height: 1378
      },
      {
        src: "/gallery/diagnostics/diagnostics-abs-coding-fault.jpeg",
        alt: "Control module coding fault readout from diagnostic software",
        width: 1079,
        height: 1441
      },
      {
        src: "/brand/coding-poster.jpg",
        alt: "New Leaf Automotive coding campaign visual",
        width: 1024,
        height: 1416
      }
    ],
    footerNote:
      "If a requested change is not listed, get in touch and we can confirm what can be done on your vehicle."
  },
  {
    slug: "retrofits",
    title: "Retrofits",
    strapline: "OEM-style upgrade work including reverse camera and auto-light requests.",
    summary:
      "Retrofit support for customers who want practical feature upgrades with clean integration.",
    longDescription: [
      "Retrofit jobs are priced per vehicle because hardware and wiring requirements vary across VWAG platforms. We assess your current setup and quote for the most suitable route.",
      "Current demand is focused on reverse camera retrofits, and additional requests such as auto-light retrofits can also be reviewed on request."
    ],
    keyPoints: [
      "Reverse camera retrofit support",
      "Auto-light retrofit requests accepted",
      "Vehicle-specific quoting before work starts",
      "Diagnostics and coding alignment after installation"
    ],
    priceRows: [
      {
        item: "Reverse camera retrofit",
        price: "P.O.A.",
        note:
          "Numerous camera systems exist across VWAG models; quotes are vehicle specific."
      },
      {
        item: "Auto-light retrofits",
        price: "P.O.A."
      }
    ],
    coverage: coverageAreas,
    images: [
      {
        src: "/gallery/retrofits/retrofit-reverse-camera-screen.jpeg",
        alt: "Reverse camera retrofit active on in-dash display",
        width: 1080,
        height: 577
      },
      {
        src: "/gallery/retrofits/retrofit-dashboard-stripdown.jpeg",
        alt: "Dashboard strip-down for retrofit installation",
        width: 1079,
        height: 804
      },
      {
        src: "/brand/service-overview.jpg",
        alt: "Overview visual of New Leaf Automotive retrofit and coding services",
        width: 1536,
        height: 1024
      }
    ],
    footerNote:
      "All retrofit pricing is provided in advance once vehicle system type and parts route are confirmed."
  },
  {
    slug: "inspections-and-salvage",
    title: "Inspections and Salvage Support",
    strapline: "Pre-purchase checks now, salvage support services coming soon.",
    summary:
      "Protect your purchase decisions with diagnostics-led inspections and future salvage support.",
    longDescription: [
      "Pre-purchase scans are designed to help buyers spot costly surprises before money changes hands. We check underlying fault codes, signs of deliberate warning-light tampering, and indicators that mileage history may not be genuine.",
      "Coming soon, New Leaf Automotive will also offer salvage repaired vehicle sales and day-rate support for owners tackling their own salvage projects."
    ],
    keyPoints: [
      "Pre-purchase scan with diagnostics evidence",
      "Warning-light tampering indicators assessed",
      "Mileage authenticity indicators reviewed",
      "Coming soon: salvage day-rate project support"
    ],
    priceRows: [
      {
        item: "Pre-purchase scan / inspection",
        price: "£60"
      },
      {
        item: "Salvage repaired vehicle sales",
        price: "Coming soon"
      },
      {
        item: "Salvage repair day rate services",
        price: "Coming soon"
      }
    ],
    coverage: coverageAreas,
    images: [
      {
        src: "/gallery/diagnostics/diagnostics-column-work.jpeg",
        alt: "Vehicle interior work during diagnostic inspection",
        width: 1080,
        height: 574
      },
      {
        src: "/brand/mobile-diagnostics.jpg",
        alt: "New Leaf Automotive mobile diagnostics campaign visual",
        width: 1536,
        height: 1024
      },
      {
        src: "/brand/diagnostics-poster.jpg",
        alt: "New Leaf Automotive diagnostics campaign visual",
        width: 1024,
        height: 1536
      }
    ],
    footerNote:
      "If your project is bigger than expected, get in touch and we can discuss practical next-step support."
  }
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find((service) => service.slug === slug);
}
