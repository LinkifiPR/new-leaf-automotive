import Image from "next/image";
import Link from "next/link";
import CoverageMap from "@/components/CoverageMap";

const serviceItems = [
  {
    title: "Diagnostic scan / basic health check",
    price: "£40",
    detail: "Mobile module scan and baseline health check."
  },
  {
    title: "Diagnostic scan plus basic coding",
    price: "£60",
    detail: "Diagnostics combined with entry-level coding support."
  },
  {
    title: "Driver assist coding",
    price: "£80",
    detail: "Driver assist and related feature coding where vehicle supports it."
  },
  {
    title: "Minor ADAS misalignment reset",
    price: "£100",
    detail: "Minor post-repair reset and correction workflow."
  },
  {
    title: "Additional coding",
    price: "£40",
    detail: "Extra coding requests added during your booking."
  },
  {
    title: "Reverse camera retrofit",
    price: "P.O.A.",
    detail:
      "VWAG camera systems vary by model and spec, so quotes are vehicle specific."
  },
  {
    title: "Pre-purchase scan / inspection",
    price: "£60",
    detail:
      "Checks underlying fault codes, potential warning-light tampering, and mileage authenticity indicators."
  },
  {
    title: "Small mechanical and electrical works",
    price: "P.O.A.",
    detail:
      "Examples include temperature sensors and heater fan resistors, with costs agreed in advance."
  },
  {
    title: "Auto-light retrofits (on request)",
    price: "P.O.A.",
    detail: "Additional retrofit requests can be provided on compatible vehicles."
  },
  {
    title: "Anything not listed",
    price: "Get in touch",
    detail: "Contact us and we will confirm what can be done for your vehicle."
  }
];

const highlights = [
  "Home and work appointments",
  "Flexible hours to suit you",
  "Weekend slots available",
  "No waiting for garage availability",
  "Quotes can include mileage/travel"
];

const supportedBrands = ["Volkswagen", "Audi", "SEAT", "Skoda"];

const coverageAreas = [
  {
    county: "Lincolnshire",
    focus: "Core service zone"
  },
  {
    county: "Nottinghamshire",
    focus: "Mobile visits available"
  },
  {
    county: "Derbyshire",
    focus: "Flexible appointment windows"
  },
  {
    county: "South Yorkshire",
    focus: "Booked route coverage"
  }
];

const diagnosticsGallery = [
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
];

const retrofitsGallery = [
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
  }
];

const codingGallery = {
  src: "/gallery/coding/coding-driver-assist.jpeg",
  alt: "Driver assist coding workflow displayed on VCDS",
  width: 1079,
  height: 1378
};

const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61585919633010",
  linkedin: "https://www.linkedin.com/company/new-leaf-automotive/"
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "New Leaf Automotive",
  areaServed: coverageAreas.map((area) => area.county),
  description:
    "Mobile VAG diagnostics, coding, retrofit and inspection services across Lincolnshire, Nottinghamshire, Derbyshire, and South Yorkshire.",
  serviceType: serviceItems.map((item) => item.title),
  brand: supportedBrands
};

export default function Home() {
  return (
    <main className="home-shell">
      <section className="hero-section">
        <div className="grid-overlay" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <header className="hero-top">
          <Link className="logo-wrap" href="/" aria-label="New Leaf Automotive home">
            <Image
              src="/brand/logo.jpeg"
              alt="New Leaf Automotive logo"
              width={200}
              height={200}
              priority
            />
          </Link>
          <nav className="hero-nav" aria-label="Page sections">
            <Link href="/services">Services</Link>
            <a href="#work">Work</a>
            <a className="nav-cta" href="#book">
              Book Mobile Visit
            </a>
          </nav>
        </header>

        <div className="hero-main">
          <div>
            <p className="eyebrow">Mobile VWAG Specialists</p>
            <h1>Diagnostics, Coding, Retrofits, and Inspection Support on Location.</h1>
            <p className="hero-copy">
              New Leaf Automotive brings practical, specialist support to your
              driveway, workplace, or project location with clear pricing and
              up-front communication.
            </p>

            <div className="hero-actions">
              <a className="btn btn-neon" href="#services">
                View Services & Pricing
              </a>
              <a className="btn btn-ghost" href="#work">
                See Work Examples
              </a>
            </div>

            <div className="price-badges">
              <span>Diagnostic checks from £40</span>
              <span>Driver assist coding £80</span>
              <span>Pre-purchase inspection £60</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Service highlights">
            <h2>Built around your schedule</h2>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="services-section" id="services" aria-label="Service and pricing menu">
        <div className="section-head">
          <p className="section-kicker">Service Menu</p>
          <h2>Transparent Pricing and Vehicle-Specific Support</h2>
          <p className="section-subcopy">
            Need a full breakdown? Visit the dedicated service pages for deeper
            explanations and relevant galleries.
          </p>
          <Link className="section-inline-link" href="/services">
            Open Service Pages
          </Link>
        </div>

        <div className="service-grid service-grid-pricing">
          {serviceItems.map((service) => (
            <article className="service-card service-card-pricing" key={service.title}>
              <div className="service-row">
                <h3>{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="coverage-section" aria-label="Coverage area">
        <div className="section-head">
          <p className="section-kicker">Coverage</p>
          <h2>Serving Across Four Counties</h2>
        </div>
        <div className="coverage-layout">
          <div className="coverage-grid">
            {coverageAreas.map((area) => (
              <article className="coverage-card" key={area.county}>
                <span className="coverage-card-dot" aria-hidden />
                <div className="coverage-card-content">
                  <p>{area.focus}</p>
                  <h3>{area.county}</h3>
                </div>
              </article>
            ))}
          </div>
          <CoverageMap />
        </div>
        <p className="coverage-note">
          Prices are subject to mileage costs to your location. Contact us for a
          bespoke quote with travel included.
        </p>
      </section>

      <section className="brand-strip" aria-label="Supported brands">
        {supportedBrands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </section>

      <section className="work-section" id="work" aria-label="Recent diagnostics, coding, and retrofit work">
        <div className="section-head">
          <p className="section-kicker">Recent Work</p>
          <h2>Real Vehicle Examples from Site Visits</h2>
        </div>

        <div className="work-mosaic">
          <article className="work-card work-card-large">
            <Image
              src={diagnosticsGallery[0].src}
              alt={diagnosticsGallery[0].alt}
              width={diagnosticsGallery[0].width}
              height={diagnosticsGallery[0].height}
            />
            <div className="work-label">Diagnostics</div>
          </article>

          <article className="work-card">
            <Image
              src={diagnosticsGallery[1].src}
              alt={diagnosticsGallery[1].alt}
              width={diagnosticsGallery[1].width}
              height={diagnosticsGallery[1].height}
            />
          </article>

          <article className="work-card">
            <Image
              src={retrofitsGallery[0].src}
              alt={retrofitsGallery[0].alt}
              width={retrofitsGallery[0].width}
              height={retrofitsGallery[0].height}
            />
            <div className="work-label">Retrofits</div>
          </article>

          <article className="work-card">
            <Image
              src={diagnosticsGallery[2].src}
              alt={diagnosticsGallery[2].alt}
              width={diagnosticsGallery[2].width}
              height={diagnosticsGallery[2].height}
            />
          </article>

          <article className="work-card">
            <Image
              src={retrofitsGallery[1].src}
              alt={retrofitsGallery[1].alt}
              width={retrofitsGallery[1].width}
              height={retrofitsGallery[1].height}
            />
          </article>

          <article className="work-card work-card-tall">
            <Image
              src={codingGallery.src}
              alt={codingGallery.alt}
              width={codingGallery.width}
              height={codingGallery.height}
            />
            <div className="work-label">Coding</div>
          </article>

          <article className="work-card">
            <Image
              src={diagnosticsGallery[3].src}
              alt={diagnosticsGallery[3].alt}
              width={diagnosticsGallery[3].width}
              height={diagnosticsGallery[3].height}
            />
          </article>

          <article className="work-card">
            <Image
              src="/brand/service-overview.jpg"
              alt="Overview visual of New Leaf Automotive services"
              width={1536}
              height={1024}
            />
          </article>
        </div>
      </section>

      <section className="services-section services-section-coming" aria-label="Coming soon services">
        <div className="section-head">
          <p className="section-kicker">Coming Soon</p>
          <h2>Salvage Repaired Vehicle Sales and Day-Rate Support</h2>
        </div>
        <div className="service-grid service-grid-coming">
          <article className="service-card">
            <h3>Salvage repaired vehicle sales</h3>
            <p>
              Vehicles repaired with diagnostics-led checks and transparent
              condition reporting.
            </p>
          </article>
          <article className="service-card">
            <h3>Salvage repair day rate</h3>
            <p>
              Hands-on support if you are buying and repairing your own salvage
              vehicle but need specialist diagnostics equipment and guidance.
            </p>
          </article>
          <article className="service-card">
            <h3>Project rescue support</h3>
            <p>
              If your driveway project has grown beyond your current setup, get
              in touch for practical mobile support.
            </p>
          </article>
        </div>
      </section>

      <section className="booking-cta" id="book">
        <div>
          <p className="section-kicker">Get A Quote</p>
          <h2>Send Your Vehicle Details and Location</h2>
          <p>
            Include make/model/year, your postcode, and the service you need.
            We will reply with a quote including mileage where required.
          </p>
        </div>
        <div className="booking-actions">
          <a
            className="btn btn-neon"
            href={socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Message on Facebook
          </a>
          <a
            className="btn btn-ghost"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>
        </div>
      </section>

      <section className="disclaimer-strip" aria-label="Pricing notes">
        <p>
          Reverse camera and retrofit prices are vehicle dependent (P.O.A.).
          Additional works are quoted and agreed before starting.
        </p>
      </section>

      <footer className="site-footer">
        <p>
          New Leaf Automotive | Mobile VWAG Diagnostics, Coding, Retrofits, and
          Inspection Support
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
