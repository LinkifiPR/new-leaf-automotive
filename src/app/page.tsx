export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <span className="brand-tag">New Leaf Automotive</span>
        <h1>Modern automotive care that keeps your car road-ready.</h1>
        <p className="lead">
          From routine maintenance to advanced diagnostics, New Leaf Automotive
          delivers dependable service with clear communication and no surprise
          costs.
        </p>

        <div className="grid" aria-label="Core services">
          <article className="card">
            <h2>Routine Servicing</h2>
            <p>Oil, filters, fluid checks, and scheduled maintenance plans.</p>
          </article>
          <article className="card">
            <h2>Diagnostics</h2>
            <p>Accurate fault finding with modern scanning and testing tools.</p>
          </article>
          <article className="card">
            <h2>Brake & Safety</h2>
            <p>Brake systems, tires, and full safety inspections you can trust.</p>
          </article>
        </div>

        <div className="cta-wrap">
          <a className="btn btn-primary" href="#contact">
            Book an Appointment
          </a>
          <a className="btn btn-outline" href="#services">
            View Services
          </a>
        </div>
      </section>

      <footer id="contact">
        <strong>New Leaf Automotive</strong> | Contact: (555) 010-2026 |
        hello@newleafautomotive.com
      </footer>
    </main>
  );
}
