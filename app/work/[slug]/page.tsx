import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { builds } from "@/lib/content";
import { ContactBand, Crumbs, Frame } from "@/components/Bits";

export function generateStaticParams() {
  return builds.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = builds.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: b.name,
    description: b.metaDescription,
    alternates: { canonical: `/work/${b.slug}/` },
    openGraph: { images: [{ url: b.shots[0].shot.src }] },
  };
}

export default async function BuildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = builds.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const b = builds[i];
  const next = builds[(i + 1) % builds.length];

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { href: "/work/", label: "Work" }, { label: b.name }]} />
          <h1>{b.name}</h1>
          <p className="lede">{b.short}</p>
          <div className="media">
            <Frame shot={b.shots[0].shot} eager caption={`${b.kind}, shown with sample data. Names and figures are made up.`} />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="prose" style={{ marginBottom: 56 }}>
            <h2>The business</h2>
            <p>{b.business}</p>
          </div>
          <div className="lists">
            <div>
              <h2>What was slowing them down</h2>
              <ul className="ticks">{b.problem.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <h2>What we built</h2>
              <ul className="ticks">{b.built.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block mist" aria-labelledby="screens-h">
        <div className="wrap">
          <div className="intro"><h2 id="screens-h">Inside the system</h2></div>
          <div className="gallery">
            {b.shots.map((s) => (
              <div className="g-item" key={s.title}>
                <div className="g-copy"><h3>{s.title}</h3><p>{s.body}</p></div>
                <Frame shot={s.shot} caption="Sample data" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block tight">
        <div className="wrap">
          <div className="next">
            <Link href="/work/">All work</Link>
            <Link href={`/work/${next.slug}/`}>Next: {next.name}</Link>
          </div>
        </div>
      </section>

      <ContactBand title="Want something like this for your business?" body="Tell us how your business runs today. We'll show you what we'd build." />
    </>
  );
}
