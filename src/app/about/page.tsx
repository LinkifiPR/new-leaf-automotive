import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ash | New Leaf Automotive",
  description:
    "Meet Ash of New Leaf Automotive: VWAG enthusiast, problem solver, and hands-on specialist with more than a decade around cars."
};

const originStory = [
  "I'm Ash of New Leaf Automotive.",
  "I'm a keen car enthusiast and I have tinkered with cars for just over a decade now. I started out helping my dad with his tools and learning basic car maintenance from him. I am very mechanically minded, I enjoy repairing things, and that is why I started early with studying Engineering at school. He gave me the start I needed and I've ran with it from there.",
  "Apart from a brief foray into French hatchbacks, I've been a VWAG enthusiast for most, if not all, of my tenure on the road."
];

const milestones = [
  {
    title: "Started Young",
    detail:
      "Hands-on learning began with tools, basic maintenance, and practical garage time at home."
  },
  {
    title: "Built To Solve",
    detail:
      "Engineering study sharpened the mechanical mindset that now drives diagnosis, repairs, and retrofits."
  },
  {
    title: "VWAG Focused",
    detail:
      "Most of the journey on the road has been centered around Volkswagen Group cars and how to keep them performing properly."
  }
];

const projectHighlights = [
  "Mk1 Fabia vRS restoration brought back to life and strengthened for a four-thousand-mile Euro road trip.",
  "Category N and Category S vehicles repaired back to safe, roadworthy, and reliable use.",
  "Factory-spec improvements, coding changes, and retrofit work that make a good car even better."
];

const ethos = [
  "Repair properly, not just quickly.",
  "Explain the work in plain English.",
  "Keep more cars on the road for longer.",
  "Treat every vehicle like it matters."
];

export default function AboutPage() {
  return (
    <main className="about-shell">
      <section className="about-hero">
        <div className="grid-overlay" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />

        <div className="about-hero-copy">
          <p className="section-kicker">About Ash</p>
          <h1>
            Built in the garage.
            <br />
            Refined on the road.
          </h1>
          <p className="about-intro-lead">
            New Leaf Automotive comes from years of practical hands-on work,
            real enthusiasm for VWAG cars, and a genuine drive to keep vehicles
            running as they should.
          </p>

          <div className="about-copy-stack">
            {originStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-hero-actions">
            <Link className="btn btn-neon" href="/services">
              Explore Services
            </Link>
            <Link className="btn btn-ghost" href="/#book">
              Book A Visit
            </Link>
          </div>
        </div>

        <aside className="about-portrait-panel" aria-label="Ash at New Leaf Automotive">
          <div className="about-portrait-frame">
            <Image
              src="/About/headshot.jpeg"
              alt="Ash of New Leaf Automotive"
              width={886}
              height={1084}
              priority
            />
          </div>

          <div className="about-stat-grid">
            <article className="about-stat-card">
              <strong>10+ Years</strong>
              <span>Hands-on with cars</span>
            </article>
            <article className="about-stat-card">
              <strong>BA</strong>
              <span>University of Lincoln</span>
            </article>
            <article className="about-stat-card">
              <strong>VWAG</strong>
              <span>Focused specialist mindset</span>
            </article>
          </div>
        </aside>
      </section>

      <section className="about-milestones" aria-label="Background highlights">
        {milestones.map((item) => (
          <article className="about-milestone-card" key={item.title}>
            <p className="section-kicker">{item.title}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="about-story-grid" aria-label="Ash's story">
        <article className="about-story-card">
          <p className="section-kicker">Real Projects</p>
          <h2>From restorations to salvage rebuilds</h2>
          <p>
            From a mk1 Fabia vRS restoration and successful resurrection, to
            upping the horsepower for a long-distance European road trip, the
            work has always been hands-on, ambitious, and built around getting
            the result right.
          </p>
          <ul>
            {projectHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="about-story-card about-story-card-accent">
          <p className="section-kicker">The New Leaf Way</p>
          <h2>More than maintenance</h2>
          <p>
            The skills that began as a necessity for keeping personal cars on
            the road have grown into a wider mission: keeping more cars on the
            road, improving them where possible, and delivering work that feels
            thoughtful rather than rushed.
          </p>
          <p>
            Whether it carries a Volkswagen badge, Skoda, SEAT, Audi, or another
            marque under the VWAG umbrella, the aim is the same: get it back on
            the road as it should be.
          </p>
        </article>
      </section>

      <section className="about-ethos-section" aria-label="Working ethos">
        <div className="section-head">
          <p className="section-kicker">Working Ethos</p>
          <h2>A happy car is a happy customer.</h2>
          <p className="section-subcopy">
            From an Audi S3 to a Skoda Fabia, the standard stays the same:
            careful work, sharp diagnosis, and a real interest in getting the
            car back to where it should be.
          </p>
        </div>

        <div className="about-ethos-grid">
          {ethos.map((item) => (
            <article className="about-ethos-card" key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-manifesto">
        <p className="section-kicker">What Drives It</p>
        <h2>
          Buried in books.
          <br />
          Buried under bonnets.
        </h2>
        <p>
          Ash brings a mix of academic discipline, practical engineering
          instinct, and genuine enthusiasm for bigger challenges. New Leaf
          Automotive exists for owners who want someone who cares about the
          result, not just the appointment slot.
        </p>
      </section>

      <footer className="about-footer">
        <Link href="/services">View Services</Link>
        <span aria-hidden> | </span>
        <Link href="/">Back to homepage</Link>
      </footer>
    </main>
  );
}
