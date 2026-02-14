import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicePages } from "@/data/services";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | New Leaf Automotive"
    };
  }

  return {
    title: `${service.title} | New Leaf Automotive`,
    description: service.summary
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="servicepage-shell">
      <section className="servicepage-hero">
        <p className="servicepage-kicker">New Leaf Automotive</p>
        <h1>{service.title}</h1>
        <p className="servicepage-strapline">{service.strapline}</p>
        <p>{service.summary}</p>

        <div className="servicepage-actions">
          <a
            className="btn btn-neon"
            href="https://www.facebook.com/profile.php?id=61585919633010"
            target="_blank"
            rel="noreferrer"
          >
            Book via Facebook
          </a>
          <Link className="btn btn-ghost" href="/services">
            View All Services
          </Link>
        </div>
      </section>

      <section className="servicepage-main">
        <article className="servicepage-copy">
          <h2>How This Service Works</h2>
          {service.longDescription.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h3>What You Can Expect</h3>
          <ul>
            {service.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <aside className="servicepage-pricing" aria-label="Pricing table">
          <h2>Pricing</h2>
          <div className="servicepage-pricing-table">
            {service.priceRows.map((row) => (
              <div className="servicepage-price-row" key={`${row.item}-${row.price}`}>
                <div>
                  <h3>{row.item}</h3>
                  {row.note ? <p>{row.note}</p> : null}
                </div>
                <strong>{row.price}</strong>
              </div>
            ))}
          </div>

          <h3>Coverage</h3>
          <div className="servicepage-coverage">
            {service.coverage.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="servicepage-gallery" aria-label="Service gallery">
        {service.images.map((image, index) => (
          <article className="servicepage-gallery-card" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={index === 0}
            />
          </article>
        ))}
      </section>

      <section className="servicepage-note">
        <p>{service.footerNote}</p>
      </section>

      <footer className="servicepage-footer">
        <Link href="/">Back to homepage</Link>
      </footer>
    </main>
  );
}
