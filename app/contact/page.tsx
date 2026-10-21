import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Crumbs } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to Velectico on WhatsApp, email or phone. We reply within your working day.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
          <h1>Talk to us</h1>
          <p className="lede">Message us about a build, a product demo or extra hands for your agency. We reply within your working day.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="channels">
            <div className="channel">
              <h2>WhatsApp</h2>
              <p>The fastest way to reach us, from anywhere.</p>
              <a className="big" href={site.whatsappHref} target="_blank" rel="noopener">{site.whatsapp}</a>
            </div>
            <div className="channel">
              <h2>Email</h2>
              <p>Best for briefs, documents and anything longer.</p>
              <a className="big" href={`mailto:${site.email}?subject=Project%20enquiry`}>{site.email}</a>
            </div>
            <div className="channel">
              <h2>Phone</h2>
              <p>Monday to Saturday, Indian time.</p>
              <a className="big" href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="block mist">
        <div className="wrap cols">
          <div className="prose">
            <h2>What to send us</h2>
            <p>A few lines is enough to start. It helps to know:</p>
            <ul className="ticks">
              <li>What you want built, or the problem you want solved</li>
              <li>Whether you&apos;re an agency building for a client, or the business itself</li>
              <li>Roughly when you need it, and any budget you have in mind</li>
              <li>A good time for a 20-minute call, with your time zone</li>
            </ul>
          </div>
          <div className="prose">
            <h2>Visit us</h2>
            <p>
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.city} {site.address.postcode}, {site.address.region}, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
