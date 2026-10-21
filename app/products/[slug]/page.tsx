import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, site } from "@/lib/content";
import { Status, Frame, Phones, ContactBand, Crumbs, JsonLd } from "@/components/Bits";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.slug === "smart-inventory" ? "Smart inventory for shops" : `${p.name}: software for ${p.forWho.toLowerCase()}`,
    description: p.metaDescription,
    alternates: { canonical: `/products/${p.slug}/` },
    openGraph: { images: [{ url: p.hero.src }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = products.filter((x) => x.slug !== p.slug);
  const isSmart = p.slug === "smart-inventory";

  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: p.metaDescription,
    publisher: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <JsonLd data={ld} />
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { href: "/products/", label: "Products" }, { label: p.name }]} />
          <div><Status status={p.status} label={p.statusLabel} /></div>
          <h1>{isSmart ? "A buy list that knows where each rupee earns most" : p.name}</h1>
          <p className="lede">{isSmart ? "Each week it says what to buy more of, what to buy less of and what to clear, using the shop's own sales." : `For ${p.forWho.toLowerCase()}. ${p.summary}`}</p>
          <div className="actions">
            <Link className="btn btn-white" href="/contact/">{p.status === "launching" ? "Talk to us about a pilot" : "Book a demo"}</Link>
          </div>
          <div className="media">
            {p.phones ? (
              <Phones shots={p.phones} caption="Sample data" />
            ) : (
              <Frame shot={p.hero} eager caption={p.note ?? "Sample data"} />
            )}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap cols">
          <div>
            <h2 className="h-sub">What it does</h2>
            <ul className="ticks">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            {isSmart ? (
              <div className="prose">
                <h2>How it decides</h2>
                <p>It starts from what each item earned you in the last few weeks and how fast it sold, then looks ahead: the season coming up, stock already promised to pre-orders, and how many days your supplier takes to deliver.</p>
                <p>Your budget is filled one pack at a time with whatever earns the most per rupee spent. Items with enough stock are left alone. Items that haven&apos;t sold in weeks are flagged to clear, with an idea for how.</p>
                <p>The owner sees the list, changes anything they want, and sends purchase orders grouped by supplier.</p>
              </div>
            ) : p.setup ? (
              <div className="start">
                <h3>How we set it up</h3>
                <ol>{p.setup.map((s) => <li key={s}><div><span style={{ color: "var(--ink)" }}>{s}</span></div></li>)}</ol>
                <Link className="btn btn-blue" href="/contact/">Book a demo</Link>
              </div>
            ) : (
              <div className="start">
                <h3>Running a padel club in the Gulf?</h3>
                <p style={{ color: "var(--ink-2)" }}>We&apos;re looking for a small number of clubs to start with. Tell us how many courts you run and how you take bookings today.</p>
                <Link className="btn btn-blue" href="/contact/">Talk to us about a pilot</Link>
              </div>
            )}
          </div>
        </div>
        {p.note && !isSmart && <div className="wrap"><p className="note">{p.note}</p></div>}
      </section>

      {p.phoneSteps && (
        <section className="block mist" aria-labelledby="inside-h">
          <div className="wrap">
            <div className="intro"><h2 id="inside-h">Inside {p.name}</h2></div>
            <div className="p-steps">
              {p.phoneSteps.map((st, k) => (
                <div className="p-step" key={st.title}>
                  <div className="phone"><img src={p.phones![k].src} alt={p.phones![k].alt} width={585} height={1266} loading="lazy" decoding="async" /></div>
                  <h3>{st.title}</h3>
                  <p>{st.body}</p>
                </div>
              ))}
            </div>
            <p className="sample">Sample data</p>
          </div>
        </section>
      )}

      {p.gallery.length > 0 && (
        <section className="block mist" aria-labelledby="inside-h">
          <div className="wrap">
            <div className="intro"><h2 id="inside-h">Inside {p.name}</h2></div>
            <div className="gallery">
              {p.gallery.map((g) => (
                <div className="g-item" key={g.title}>
                  <div className="g-copy"><h3>{g.title}</h3><p>{g.body}</p></div>
                  <Frame shot={g.shot} caption={p.slug === "courtwise" ? "Sample club and data" : "Sample data"} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="block tight">
        <div className="wrap">
          <div className="next">
            <span>More from Velectico</span>
            {others.map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}/`}>{o.name}</Link>
            ))}
            <Link href="/work/">Our work</Link>
          </div>
        </div>
      </section>

      <ContactBand
        title={p.status === "launching" ? "Want CourtWise at your club?" : isSmart ? "Want smart inventory in your shop?" : `Want ${p.name} for your shop?`}
        body="Message us and we'll show it to you on a short call."
      />
    </>
  );
}
