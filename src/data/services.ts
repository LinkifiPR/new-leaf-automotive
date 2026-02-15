export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  tag?: string;
};

export type ServicePriceRow = {
  item: string;
  price: string;
  note?: string;
};

export type ServiceStep = {
  title: string;
  detail: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  slugAliases?: string[];
  title: string;
  strapline: string;
  summary: string;
  longDescription: string[];
  keyPoints: string[];
  idealFor: string[];
  processSteps: ServiceStep[];
  faqs: ServiceFaq[];
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
    slugAliases: ["mobile-diagnostics", "diagnostic-scans"],
    title: "Mobile Diagnostics",
    strapline: "Fault finding and health checks at your location.",
    summary:
      "Comprehensive VWAG diagnostics for known faults, hidden issues, and pre-repair assessment.",
    longDescription: [
      "Our mobile diagnostics service is built for owners who want accurate answers before spending money on parts or labour. We run a full module scan, check vehicle health status, and explain exactly what has been found in plain language.",
      "This service is ideal when warning lights appear, faults are intermittent, or repairs have already been attempted but confidence is still low. You get a practical direction on what to do next and what can wait."
    ],
    keyPoints: [
      "Full module scans using specialist VWAG diagnostic tooling",
      "Clear explanation of active and stored fault data",
      "Suitable as a baseline before coding or retrofit work",
      "On-location service at home or workplace"
    ],
    idealFor: [
      "Engine, ABS, steering, or airbag warning lights",
      "Intermittent electrical faults with no clear root cause",
      "Post-repair confidence checks",
      "A pre-coding or pre-retrofit technical health baseline"
    ],
    processSteps: [
      {
        title: "Initial scan and symptom review",
        detail:
          "We capture full module data and match it to your reported symptoms and recent vehicle history."
      },
      {
        title: "Fault interpretation",
        detail:
          "Fault codes are prioritised by relevance so you can separate urgent issues from secondary entries."
      },
      {
        title: "Action plan",
        detail:
          "You receive practical next steps, including whether immediate repair is needed or monitoring is acceptable."
      }
    ],
    faqs: [
      {
        question: "Can diagnostics be done at my house or work?",
        answer:
          "Yes. This service is fully mobile and carried out at your location where practical access is available."
      },
      {
        question: "Will I get a clear result, not just a code list?",
        answer:
          "Yes. The aim is understandable fault context and practical next steps, not just raw code output."
      },
      {
        question: "Can small repairs be done if needed?",
        answer:
          "Small mechanical and electrical remedies can be undertaken by agreement with costs approved in advance."
      }
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
        height: 1440,
        tag: "Scan"
      },
      {
        src: "/gallery/diagnostics/diagnostics-column-work.jpeg",
        alt: "Steering column strip-down during diagnostics and repair work",
        width: 1080,
        height: 574,
        tag: "Repair Context"
      },
      {
        src: "/gallery/diagnostics/diagnostics-steering-module.jpeg",
        alt: "Close view of steering module and connector assembly",
        width: 1079,
        height: 1440,
        tag: "Module"
      },
      {
        src: "/gallery/diagnostics/diagnostics-abs-coding-fault.jpeg",
        alt: "ABS coding fault identified through diagnostics",
        width: 1079,
        height: 1441,
        tag: "Fault Trace"
      }
    ],
    footerNote:
      "Mileage costs may apply depending on location. Bespoke quotes include travel where relevant."
  },
  {
    slug: "coding",
    slugAliases: ["mobile-coding", "driver-assist-coding"],
    title: "Mobile Coding",
    strapline: "Feature activation and behavior changes with vehicle-specific checks.",
    summary:
      "Coding support for driver assist settings, module behavior changes, and additional requests.",
    longDescription: [
      "Coding work is delivered with a compatibility-first approach. Before changes are applied, your exact model, module generation, and current setup are checked to avoid poor outcomes.",
      "Popular requests include driver assist behavior changes, memory-function style preferences, and additional coding while the vehicle is already booked in for diagnostics."
    ],
    keyPoints: [
      "Driver assist coding and behavior adjustments",
      "Additional coding requests during the same visit",
      "Vehicle-specific compatibility checks before change application",
      "Diagnostics-led workflow for safer coding sessions"
    ],
    idealFor: [
      "Owners who want specific feature behavior changes",
      "Vehicles with available coding options not currently enabled",
      "Post-repair vehicles requiring coding alignment",
      "Customers combining diagnostics and coding in one booking"
    ],
    processSteps: [
      {
        title: "Compatibility check",
        detail:
          "Vehicle modules are assessed first so unsupported requests are filtered out early."
      },
      {
        title: "Coding implementation",
        detail:
          "Requested changes are applied using specialist VWAG tooling and verified after write."
      },
      {
        title: "Validation and handover",
        detail:
          "Feature behaviour is checked with you present so expected operation is confirmed before completion."
      }
    ],
    faqs: [
      {
        question: "Can every coding request be done on every vehicle?",
        answer:
          "No. Capability depends on model year, module hardware, and software level. Compatibility is always checked first."
      },
      {
        question: "Can coding be done without diagnostics?",
        answer:
          "Yes, but diagnostics is recommended where possible to detect underlying faults before or after changes."
      },
      {
        question: "Can I request something not listed?",
        answer:
          "Yes. Send the request and vehicle details and we will confirm feasibility before booking."
      }
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
        height: 1378,
        tag: "Driver Assist"
      },
      {
        src: "/gallery/diagnostics/diagnostics-abs-coding-fault.jpeg",
        alt: "Control module coding fault readout from diagnostic software",
        width: 1079,
        height: 1441,
        tag: "Module Coding"
      },
      {
        src: "/brand/coding-poster.jpg",
        alt: "New Leaf Automotive coding campaign visual",
        width: 1024,
        height: 1416,
        tag: "Service"
      }
    ],
    footerNote:
      "If a requested change is not listed, get in touch and we can confirm what can be done on your vehicle."
  },
  {
    slug: "retrofits",
    slugAliases: ["mobile-retrofits", "reverse-camera-retrofit"],
    title: "Retrofits",
    strapline: "OEM-style upgrade work including reverse camera and auto-light requests.",
    summary:
      "Retrofit support for customers who want practical feature upgrades with clean integration.",
    longDescription: [
      "Retrofit projects are quoted per vehicle because parts, wiring paths, and module requirements vary widely across VWAG platforms. We identify the best route for your specific vehicle before any commitment.",
      "Current demand centres on reverse camera retrofit work, while additional requests such as auto-light retrofits can also be reviewed and quoted on request."
    ],
    keyPoints: [
      "Reverse camera retrofit support",
      "Auto-light retrofit requests accepted",
      "Vehicle-specific quoting before work begins",
      "Coding and diagnostics alignment after installation"
    ],
    idealFor: [
      "Owners adding convenience and safety features",
      "Vehicles missing factory options now desired",
      "Customers wanting clean OEM-style integration",
      "Drivers who prefer one provider for fitment and coding"
    ],
    processSteps: [
      {
        title: "Vehicle assessment",
        detail:
          "Your existing infotainment and module setup is checked to determine compatible retrofit options."
      },
      {
        title: "Quote and parts route",
        detail:
          "You receive a clear quote based on your exact camera/system requirements and installation scope."
      },
      {
        title: "Install, code, validate",
        detail:
          "Retrofit hardware is integrated, then coded and tested so final operation is confirmed before handover."
      }
    ],
    faqs: [
      {
        question: "Why is reverse camera pricing P.O.A.?",
        answer:
          "VWAG vehicles use multiple camera and module combinations, so pricing must match your specific setup."
      },
      {
        question: "Can you retrofit features not listed here?",
        answer:
          "Yes. Share your request and vehicle details and we will confirm feasibility and quote accordingly."
      },
      {
        question: "Is coding included in retrofit work?",
        answer:
          "Where required, coding and post-install checks are part of ensuring correct final operation."
      }
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
        height: 577,
        tag: "Camera Retrofit"
      },
      {
        src: "/gallery/retrofits/retrofit-dashboard-stripdown.jpeg",
        alt: "Dashboard strip-down for retrofit installation",
        width: 1079,
        height: 804,
        tag: "Installation"
      },
      {
        src: "/brand/service-overview.jpg",
        alt: "Overview visual of New Leaf Automotive retrofit and coding services",
        width: 1536,
        height: 1024,
        tag: "Overview"
      }
    ],
    footerNote:
      "All retrofit pricing is provided in advance once vehicle system type and parts route are confirmed."
  },
  {
    slug: "inspections-and-salvage",
    slugAliases: ["pre-purchase-inspections", "salvage-support"],
    title: "Inspections and Salvage Support",
    strapline: "Pre-purchase checks now, salvage support services coming soon.",
    summary:
      "Protect your purchase decisions with diagnostics-led inspections and future salvage support.",
    longDescription: [
      "Pre-purchase scans are designed to reduce costly surprises before money changes hands. We check underlying fault codes, warning-light tampering indicators, and evidence suggesting mileage history may not be genuine.",
      "New Leaf Automotive is also preparing salvage repaired vehicle sales and day-rate support for customers taking on their own salvage projects but needing specialist diagnostics capability."
    ],
    keyPoints: [
      "Pre-purchase scan with diagnostics evidence",
      "Warning-light tampering indicators assessed",
      "Mileage authenticity indicators reviewed",
      "Coming soon: salvage day-rate project support"
    ],
    idealFor: [
      "Buyers checking a used vehicle before purchase",
      "Owners who suspect warning-light tampering",
      "Customers validating vehicle history claims",
      "Salvage project owners who need specialist support"
    ],
    processSteps: [
      {
        title: "Inspection setup",
        detail:
          "Vehicle context and seller claims are reviewed before diagnostics evidence is collected."
      },
      {
        title: "Technical check",
        detail:
          "Fault history, module status, and warning-system behaviour are checked for consistency."
      },
      {
        title: "Decision support",
        detail:
          "Findings are summarised clearly so you can proceed, renegotiate, or walk away with confidence."
      }
    ],
    faqs: [
      {
        question: "Can this confirm if a vehicle is perfect?",
        answer:
          "No inspection can guarantee perfection, but diagnostics-led checks significantly reduce hidden-risk surprises."
      },
      {
        question: "What does mileage authenticity check mean?",
        answer:
          "It means looking for technical indicators that support or contradict reported mileage history."
      },
      {
        question: "When does salvage day-rate support launch?",
        answer:
          "This is marked as coming soon. You can register interest and discuss likely project requirements now."
      }
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
        src: "/gallery/diagnostics/diagnostics-vcds-clean.jpeg",
        alt: "Diagnostic data capture during inspection work",
        width: 1079,
        height: 1440,
        tag: "Inspection Scan"
      },
      {
        src: "/gallery/diagnostics/diagnostics-abs-coding-fault.jpeg",
        alt: "Diagnostic screen used to identify control module issues",
        width: 1079,
        height: 1441,
        tag: "Risk Check"
      },
      {
        src: "/gallery/diagnostics/diagnostics-column-work.jpeg",
        alt: "Vehicle interior teardown context from technical support work",
        width: 1080,
        height: 574,
        tag: "Project Context"
      }
    ],
    footerNote:
      "If your project is bigger than expected, get in touch and we can discuss practical next-step support."
  }
];

function normalizeSlug(slug: string): string {
  return slug.trim().toLowerCase();
}

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  const normalized = normalizeSlug(slug);

  return servicePages.find((service) => {
    if (service.slug === normalized) {
      return true;
    }

    return service.slugAliases?.some((alias) => alias === normalized) ?? false;
  });
}

export function getAllServiceSlugs(): string[] {
  const slugs = servicePages.flatMap((service) => [
    service.slug,
    ...(service.slugAliases ?? [])
  ]);

  return Array.from(new Set(slugs));
}
