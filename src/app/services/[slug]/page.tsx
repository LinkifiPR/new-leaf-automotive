import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllServiceSlugs,
  getServiceBySlug
} from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isAliasPath = slug !== service.slug;

  return (
    <main className="servicepage-shell">
      <section className="servicepage-hero">
        <p className="servicepage-kicker">New Leaf Automotive</p>
        <h1>{service.title}</h1>
        <p className="servicepage-strapline">{service.strapline}</p>
        <p>{service.summary}</p>

        {isAliasPath ? (
          <p className="servicepage-canonical-note">
            You are viewing this page via an older link. Canonical URL: {" "}
            <Link href={`/services/${service.slug}`}>{`/services/${service.slug}`}</Link>
          </p>
        ) : null}

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

      <section className="servicepage-detail-grid" aria-label="Service details">
        <article className="servicepage-detail-card">
          <h2>Ideal For</h2>
          <ul>
            {service.idealFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="servicepage-detail-card">
          <h2>Booking Flow</h2>
          <ol>
            {service.processSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </article>
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
            <div className="servicepage-gallery-overlay">
              {image.tag ? <span>{image.tag}</span> : null}
              <p>{image.alt}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="servicepage-faq" aria-label="Frequently asked questions">
        <h2>Frequently Asked Questions</h2>
        <div className="servicepage-faq-list">
          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="servicepage-note">
        <p>{service.footerNote}</p>
      </section>

      <footer className="servicepage-footer">
        <Link href="/services">Back to all services</Link>
        <span aria-hidden> | </span>
        <Link href="/">Back to homepage</Link>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            provider: "New Leaf Automotive",
            areaServed: service.coverage,
            serviceType: service.title,
            description: service.summary
          })
        }}
      />
    </main>
  );
}
