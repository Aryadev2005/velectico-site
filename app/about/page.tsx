import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { clients, products, site, team } from "@/lib/content";
import { ContactBand, Crumbs, Frame } from "@/components/Bits";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Velectico Consulting is a software company in Kolkata, building and maintaining software for clients since 2018, with its own products for shops in India.",
  alternates: { canonical: "/about/" },
};

function hasPhoto(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "team", file));
}

function Person({ name, role, photo }: { name: string; role: string; photo: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="member">
      <div className="avatar">
        {hasPhoto(photo) ? <img src={`/team/${photo}`} alt={name} width={240} height={240} loading="lazy" /> : <span aria-hidden="true">{initials}</span>}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

const ways = [
  {
    href: "/agencies/",
    title: "For agencies abroad",
    body: "Agencies in the UK, Australia and New Zealand hand us builds they can't fit in. We deliver under their name.",
  },
  {
    href: "/work/",
    title: "Systems for businesses",
    body: "Platforms and business systems built around how a company already works, then kept running for years.",
  },
  {
    href: "/products/",
    title: "Our own products",
    body: "Software for Indian shops and padel clubs: Boutique OS, Cycle OS and CourtWise.",
  },
];

const principles = [
  { title: "We watch before we build", body: "We sit with the people who'll use the software and see how the work gets done today." },
  { title: "We ship early", body: "You see working software in the first weeks, not a long document." },
  { title: "We stay after launch", body: "Fixes, updates and hosting carry on for years. Many clients are still with us long after launch." },
  { title: "The builders pick up the phone", body: "The people who build your software are the people who answer when something needs fixing." },
];

export default function About() {
  const years = new Date().getFullYear() - site.founded;
  const ownProducts = products.filter((p) => p.status !== "feature");
  const lead = clients.find((c) => c.quote)!;
  const boutique = products.find((p) => p.slug === "boutique-os")!;
  const cycle = products.find((p) => p.slug === "cycle-os")!;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.address.street}, ${site.address.city} ${site.address.postcode}`
  )}`;

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          <h1>A software company in Kolkata, since {site.founded}.</h1>
          <p className="lede">
            We build software for clients, keep it running for years, and make our own products for shops in India.
          </p>
          <div className="about-media">
            <Frame shot={boutique.hero} eager />
            {cycle.phones && (
              <div className="about-phones">
                {cycle.phones.slice(0, 2).map((s) => (
                  <div className="phone" key={s.src}>
                    <img src={s.src} alt={s.alt} width={585} height={1266} decoding="async" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="sample">Boutique OS and Cycle OS, two of our own products. Sample data.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap cols">
          <div className="prose">
            <h2>What we do</h2>
            <p>
              Velectico Consulting started in {site.founded}, building websites and platforms for clients. Many of them are
              still with us years later, because we didn&apos;t just build and leave: we kept fixing, updating and hosting what
              we built.
            </p>
            <p>
              Today the same team builds for agencies abroad, builds systems for companies directly, and makes its own
              software for Indian shops, which multiple businesses use every day.
            </p>
          </div>
          <div className="way-list">
            {ways.map((w) => (
              <Link className="way" href={w.href} key={w.href}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="numbers" aria-label="Velectico in numbers">
        <div className="wrap">
          <div><b>{years} years</b><span>Building and looking after software since {site.founded}</span></div>
          <div><b>4 regions</b><span>Clients in the US, the Gulf, Africa and India</span></div>
          <div><b>{ownProducts.length} products</b><span>{ownProducts.map((p) => p.name).join(", ")}</span></div>
        </div>
      </section>

      <section className="block" aria-labelledby="clients-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="clients-h">Who we&apos;ve worked with</h2>
            <p>Companies that have trusted us with their platforms, several of them for years.</p>
          </div>
          <ul className="client-grid">
            {clients.map((c) => (
              <li key={c.name}>
                <b>{c.name}</b>
                <span>{c.region}</span>
              </li>
            ))}
          </ul>
          <figure className="about-quote">
            <blockquote>“{lead.quote}”</blockquote>
            <figcaption><b>{lead.person}</b>, {lead.role}</figcaption>
          </figure>
          <Link className="more-link" href="/work/">See our work →</Link>
        </div>
      </section>

      <section className="block mist" aria-labelledby="how-h">
        <div className="wrap">
          <div className="intro"><h2 id="how-h">How we work</h2></div>
          <div className="principles">
            {principles.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="team-h">
        <div className="wrap cols">
          <div className="prose">
            <h2 id="team-h">The people behind Velectico</h2>
            <p>
              A small team in Kolkata. The people you speak to on the first call are the people who plan, build and look
              after your software.
            </p>
          </div>
          <div className="members">
            {team.founders.map((f) => <Person key={f.name} {...f} />)}
            {team.techLead && <Person {...team.techLead} />}
          </div>
        </div>
      </section>

      <section className="block tight mist" aria-labelledby="visit-h">
        <div className="wrap">
          <div className="visit">
            <div>
              <h2 id="visit-h">Where we are</h2>
              <p>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.city} {site.address.postcode}, {site.address.region}, India
              </p>
              <a className="more-link" href={mapHref} target="_blank" rel="noopener">Open in Google Maps →</a>
            </div>
            <div>
              <h2>Reach us</h2>
              <p>
                WhatsApp <a href={site.whatsappHref} target="_blank" rel="noopener">{site.whatsapp}</a>
                <br />
                Phone <a href={site.phoneHref}>{site.phone}</a>
                <br />
                Email <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="hours">Monday to Saturday, Indian time. We reply within your working day.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactBand title="Want to work with us?" body="Message us on WhatsApp or email. We reply within your working day." />
    </>
  );
}
