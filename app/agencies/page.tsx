import type { Metadata } from "next";
import Link from "next/link";
import { clients, builds } from "@/lib/content";
import { ContactBand, Crumbs, Frame, JsonLd } from "@/components/Bits";

export const metadata: Metadata = {
  title: "White-label development for agencies",
  description:
    "Velectico builds web platforms, apps and business systems for agencies in the UK, Australia and New Zealand, under the agency's name. Start with a two-week paid trial.",
  alternates: { canonical: "/agencies/" },
};

const faqs = [
  {
    q: "Who owns the code?",
    a: "You do, or your client does, as your contract with them says. Everything we write is handed over with the repository, documentation and access.",
  },
  {
    q: "Will our client ever know you exist?",
    a: "Not from us. We sign your NDA, work in your tools and under your name, and never contact or take work from your clients directly.",
  },
  {
    q: "What hours do you work?",
    a: "We're in India (IST). Our day overlaps with UK mornings and early afternoons, and with Australian and New Zealand afternoons. We agree fixed overlap hours with you at the start.",
  },
  {
    q: "How do you price?",
    a: "Either a monthly rate for ongoing work or a fixed price for a defined project. We quote after the first call, once we know the scope.",
  },
  {
    q: "What does the two-week trial cover?",
    a: "A small, real piece of one of your live projects, chosen with you. It's paid, so you get working code either way, and you can stop after it with nothing owed beyond the trial.",
  },
  {
    q: "What stack do you work in?",
    a: "Tell us yours on the call. We'll say plainly whether we've shipped production work in it, and if we haven't, we'll say that too.",
  },
  {
    q: "What if it isn't working out?",
    a: "Monthly work can be stopped with notice agreed at the start. If someone on our side isn't the right fit, we replace them.",
  },
];

export default function Agencies() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const quoted = clients.filter((c) => c.quote).slice(0, 2);

  return (
    <>
      <JsonLd data={ld} />
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "For agencies" }]} />
          <h1>Your build, our engineers, your name on it.</h1>
          <p className="lede">
            For agencies in the UK, Australia and New Zealand that win more build work than their team can take on. We&apos;ve
            built and maintained platforms for clients in the US, the Gulf and Africa since 2018.
          </p>
          <div className="actions">
            <Link className="btn btn-white" href="/contact/">Book a 20-minute call</Link>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="what-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="what-h">What we take on</h2>
            <p>The work agencies most often can&apos;t fit in, from a single build to ongoing monthly work.</p>
          </div>
          <div className="offer">
            <div><h3>Web platforms and portals</h3><p>Marketplaces, client portals, booking systems and the admin behind them.</p></div>
            <div><h3>Business systems</h3><p>Billing, stock, orders and reporting for your clients&apos; operations, built around how they actually work.</p></div>
            <div><h3>Mobile apps</h3><p>Owner and staff apps that run on a phone, connected to the same system.</p></div>
            <div><h3>Maintenance and hosting</h3><p>Keeping existing platforms running: fixes, updates, security and cloud hosting.</p></div>
            <div><h3>Extra hands on your project</h3><p>A developer working inside your team, your tools and your process, month by month.</p></div>
            <div><h3>Fixed-price builds</h3><p>A defined project with a fixed quote, delivered under your brand.</p></div>
          </div>
        </div>
      </section>

      <section className="block mist" aria-labelledby="terms-h">
        <div className="wrap">
          <div className="intro"><h2 id="terms-h">How we work with you</h2></div>
          <div className="cols">
            <div className="promises">
              <div><h3>Your client never hears of us</h3><p>We sign your NDA. Nothing we deliver carries our name, and we never contact or work for your clients directly.</p></div>
              <div><h3>Answers the same day</h3><p>Fixed overlap hours with your team, agreed at the start, so questions don&apos;t wait overnight.</p></div>
              <div><h3>One senior person on your project</h3><p>The same lead stays with you from the first call to handover. You always know who to message.</p></div>
              <div><h3>Code your team can take over</h3><p>Clean and documented, so your developers can pick it up. Or we keep running it for you each month.</p></div>
            </div>
            <div className="start">
              <h3>How we start</h3>
              <ol>
                <li><div><b>A 20-minute call</b><span>Tell us about the build and how your team works. We&apos;ll say honestly if we&apos;re not the right fit.</span></div></li>
                <li><div><b>A two-week paid trial</b><span>We build a small, real part of a live project, so you can judge our code and communication before committing.</span></div></li>
                <li><div><b>Monthly, or fixed price</b><span>Carry on month by month or by project. Work starts within 7 to 10 days of sign-off.</span></div></li>
              </ol>
              <Link className="btn btn-blue" href="/contact/">Book the call</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="proof-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="proof-h">What our clients say</h2>
          </div>
          <div className="cases">
            {quoted.map((c) => (
              <div className="case" key={c.name}>
                <h3>{c.name} <small>{c.region}</small></h3>
                <p>{c.what}</p>
                <blockquote>“{c.quote}”<cite>{c.person}, {c.role}</cite></blockquote>
              </div>
            ))}
          </div>
          <div className="builds" style={{ marginTop: 72 }}>
            {builds.slice(0, 2).map((b) => (
              <article className="build" key={b.slug}>
                <Link href={`/work/${b.slug}/`}>
                  <Frame shot={b.shots[0].shot} />
                  <h3>{b.name}</h3>
                </Link>
                <p>{b.short}</p>
              </article>
            ))}
          </div>
          <div className="actions"><Link className="btn btn-line" href="/work/">See all our work</Link></div>
        </div>
      </section>

      <section className="block mist" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="intro"><h2 id="faq-h">Questions agencies ask</h2></div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
