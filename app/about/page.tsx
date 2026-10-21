import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { site, team } from "@/lib/content";
import { ContactBand, Crumbs } from "@/components/Bits";

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
    <div className="person">
      <div className="ph">
        {hasPhoto(photo) ? <img src={`/team/${photo}`} alt={name} width={600} height={600} loading="lazy" /> : <span aria-hidden="true">{initials}</span>}
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          <h1>A software company in Kolkata, since {site.founded}.</h1>
          <p className="lede">
            We build software for clients, keep it running for years, and make our own products for shops in India.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="prose">
            <h2>What we do</h2>
            <p>
              Velectico Consulting started in {site.founded}, building websites and platforms for clients. Many of them are still
              with us years later, because we didn&apos;t just build and leave: we kept fixing, updating and hosting what we
              built.
            </p>
            <p>
              Today we work in three ways. We build for agencies abroad, under their name. We build platforms and business
              systems for companies directly. And we make our own software for Indian shops, which {site.businessesOnOurSoftware} businesses
              use every day.
            </p>
            <h2>How we work</h2>
            <p>
              We start by sitting with the people who&apos;ll use the software and watching how the work gets done today. We
              build around that, ship early, and stay on after launch. The same people who build it answer the phone when
              something needs fixing.
            </p>
          </div>
          <div className="facts" style={{ marginTop: 64 }}>
            <div><b>Since {site.founded}</b><span>Building and maintaining software for clients</span></div>
            <div><b>{site.businessesOnOurSoftware} businesses</b><span>Run their shops on our own software</span></div>
            <div><b>Four regions</b><span>Clients in the US, the Gulf, Africa and India</span></div>
          </div>
        </div>
      </section>

      <section className="block mist" aria-labelledby="team-h">
        <div className="wrap">
          <div className="intro"><h2 id="team-h">The people behind Velectico</h2></div>
          <div className="people">
            {team.founders.map((f) => <Person key={f.name} {...f} />)}
            {team.techLead && <Person {...team.techLead} />}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap prose">
          <h2>Where we are</h2>
          <p>
            {site.legalName}
            <br />
            {site.address.street}
            <br />
            {site.address.city} {site.address.postcode}, {site.address.region}, India
          </p>
        </div>
      </section>

      <ContactBand title="Want to work with us?" body="Message us on WhatsApp or email. We reply within your working day." />
    </>
  );
}
