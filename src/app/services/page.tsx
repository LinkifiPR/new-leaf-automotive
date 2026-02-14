import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/data/services";

export default function ServicesIndexPage() {
  return (
    <main className="servicehub-shell">
      <section className="servicehub-hero">
        <p className="servicehub-kicker">Service Pages</p>
        <h1>Choose the Exact Service You Need</h1>
        <p>
          Each page below explains how the work is delivered, what is included,
          and how pricing is structured for your vehicle.
        </p>
      </section>

      <section className="servicehub-grid" aria-label="Service categories">
        {servicePages.map((service) => (
          <article className="servicehub-card" key={service.slug}>
            <div className="servicehub-image-wrap">
              <Image
                src={service.images[0].src}
                alt={service.images[0].alt}
                width={service.images[0].width}
                height={service.images[0].height}
              />
            </div>
            <div className="servicehub-content">
              <h2>{service.title}</h2>
              <p className="servicehub-strapline">{service.strapline}</p>
              <p>{service.summary}</p>
              <Link className="servicehub-link" href={`/services/${service.slug}`}>
                Open {service.title}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="servicehub-back">
        <Link href="/">Back to homepage</Link>
      </section>
    </main>
  );
}
