import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { Status, Frame, Phones, ContactBand, Crumbs } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Velectico's own software: Boutique OS for clothing stores, Cycle OS for cycle and parts shops, smart inventory, and CourtWise for padel clubs.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Crumbs items={[{ href: "/", label: "Home" }, { label: "Products" }]} />
          <h1>Our own products</h1>
          <p className="lede">
            Software we build, sell and keep running ourselves. Two are live in shops across India, one is a feature inside them,
            and one is launching for padel clubs in the Gulf.
          </p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          {products.map((p, i) => (
            <article className={`product${i % 2 ? " flip" : ""}`} key={p.slug}>
              <div className="copy">
                <Status status={p.status} label={p.statusLabel} />
                <h3><Link href={`/products/${p.slug}/`}>{p.name}</Link></h3>
                <p>For {p.forWho.toLowerCase()}. {p.summary}</p>
                <ul className="ticks">{p.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
                <Link className="more-link" href={`/products/${p.slug}/`}>See {p.name}</Link>
              </div>
              {p.phones ? (
                <Phones shots={[p.phones[0], p.phones[2], p.phones[4]]} caption="Sample data" />
              ) : (
                <Frame shot={p.hero} caption={p.slug === "courtwise" ? "Sample club and data" : "Sample data"} />
              )}
            </article>
          ))}
        </div>
      </section>
      <ContactBand title="Want one of these for your shop?" body="Tell us what you sell and how you work today. We'll show you the product on a short call." />
    </>
  );
}
