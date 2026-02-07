import Image from "next/image";

const services = [
  {
    title: "Mobile VAG Diagnostics",
    detail: "Dealer-level fault scanning and health checks from only £40."
  },
  {
    title: "Mobile VAG Coding",
    detail: "Feature changes and coding updates tailored to your vehicle."
  },
  {
    title: "Mobile VAG Retrofits",
    detail: "Smart upgrades and adaptations for VW, Audi, SEAT, and Skoda."
  },
  {
    title: "VAG Vehicle Sales",
    detail: "Salvage-repaired VAG vehicle sales with confidence-focused checks."
  }
];

const highlights = [
  "Home and work appointments",
  "Flexible hours to suit you",
  "Weekend slots available",
  "No waiting for garage availability"
];

const supportedBrands = ["Volkswagen", "Audi", "SEAT", "Skoda"];

const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61585919633010",
  linkedin: "https://www.linkedin.com/company/new-leaf-automotive/"
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "New Leaf Automotive",
  areaServed: "Lincolnshire",
  description:
    "Mobile VAG diagnostics, coding, and retrofit services for VW, Audi, SEAT, and Skoda.",
  serviceType: [
    "Mobile VAG diagnostics",
    "Mobile VAG coding",
    "Mobile VAG retrofits",
    "Vehicle sales"
  ],
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
          <a className="logo-wrap" href="/" aria-label="New Leaf Automotive home">
            <Image
              src="/brand/logo.jpeg"
              alt="New Leaf Automotive logo"
              width={200}
              height={200}
              priority
            />
          </a>
          <a className="nav-cta" href="#book">
            Book Mobile Visit
          </a>
        </header>

        <div className="hero-main">
          <div>
            <p className="eyebrow">Mobile VAG Specialists</p>
            <h1>Diagnostics, Coding, and Retrofits at Your Doorstep.</h1>
            <p className="hero-copy">
              New Leaf Automotive delivers mobile VAG services across
              Lincolnshire for VW, Audi, SEAT, and Skoda drivers who want speed,
              clarity, and zero garage waiting lines.
            </p>

            <div className="hero-actions">
              <a className="btn btn-neon" href="#book">
                Book Appointment
              </a>
              <a className="btn btn-ghost" href="#services">
                Explore Services
              </a>
            </div>

            <div className="price-badges">
              <span>Diagnostics from £40</span>
              <span>Lane Assist Coding £80</span>
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

      <section className="services-section" id="services" aria-label="Core services">
        <div className="section-head">
          <p className="section-kicker">What We Do</p>
          <h2>Precision Mobile Support for VAG Vehicles</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-strip" aria-label="Supported brands">
        {supportedBrands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </section>

      <section className="showcase" aria-label="Recent service visuals">
        <article className="showcard showcard-tall">
          <Image
            src="/brand/diagnostics-poster.jpg"
            alt="New Leaf Automotive mobile diagnostics promotional visual"
            width={1024}
            height={1536}
          />
        </article>
        <article className="showcard showcard-tall">
          <Image
            src="/brand/coding-poster.jpg"
            alt="New Leaf Automotive coding and adaptations promotional visual"
            width={1024}
            height={1416}
          />
        </article>
        <article className="showcard">
          <Image
            src="/brand/mobile-diagnostics.jpg"
            alt="Overview of mobile diagnostics service and coverage"
            width={1536}
            height={1024}
          />
        </article>
        <article className="showcard">
          <Image
            src="/brand/service-overview.jpg"
            alt="Overview of mobile diagnostics coding retrofits and vehicle sales"
            width={1536}
            height={1024}
          />
        </article>
      </section>

      <section className="booking-cta" id="book">
        <div>
          <p className="section-kicker">Ready To Start</p>
          <h2>Book Your Mobile Appointment</h2>
          <p>
            Tell us your model, location, and preferred time. We bring the
            diagnostics setup to you.
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

      <footer className="site-footer">
        <p>New Leaf Automotive | Lincolnshire Mobile VAG Services</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </main>
  );
}
