import type { Metadata } from "next";
import Link from "next/link";
import { builds, clients } from "@/lib/content";
import { ContactBand, Crumbs, Frame } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Platforms Velectico has built and maintained for clients in the US, the Gulf, Africa and India, and systems we've designed for businesses that run on paper.",
  alternates: { canonical: "/work/" },
};

export default function Work() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "Work" }]} />
          <h1>Work we&apos;ve built, and still look after.</h1>
          <p className="lede">Client platforms we&apos;ve built and maintained since 2018, and systems we&apos;ve designed for businesses that run on paper.</p>
        </div>
      </section>

      <section className="block" aria-labelledby="clients-h">
        <div className="wrap">
          <div className="intro"><h2 id="clients-h">Client work</h2></div>
          <div className="cases">
            {clients.map((c) => (
              <div className="case" key={c.name}>
                <h3>{c.name} <small>{c.region}</small></h3>
                <p>{c.what}</p>
                {c.quote && <blockquote>“{c.quote}”<cite>{c.person}, {c.role}</cite></blockquote>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block mist" aria-labelledby="builds-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="builds-h">Systems for businesses that run on paper</h2>
            <p>We sit with the owner, see where the manual work is, and build around how the business already runs. Each is shown with sample data.</p>
          </div>
          <div className="builds">
            {builds.map((b, i) => (
              <article className={`build${i === 0 ? " wide" : ""}`} key={b.slug}>
                <Link href={`/work/${b.slug}/`}>
                  <Frame shot={b.shots[0].shot} />
                  <h3>{b.name}</h3>
                </Link>
                <p>{b.short}</p>
                <span className="kind">{b.kind} · sample data</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand title="Have a business that still runs on paper?" body="Tell us how it works today. We'll show you what we'd build." />
    </>
  );
}
