import Link from "next/link";
import type { Product, Shot } from "@/lib/content";
import { site } from "@/lib/content";

export function Status({ status, label }: { status: Product["status"]; label: string }) {
  return (
    <span className={`status ${status}`}>
      {status !== "feature" && <i />}
      {label}
    </span>
  );
}

export function Frame({ shot, eager = false, caption }: { shot: Shot; eager?: boolean; caption?: string }) {
  return (
    <figure>
      <div className="frame">
        <img src={shot.src} alt={shot.alt} width={1600} height={1067} loading={eager ? "eager" : "lazy"} decoding="async" />
      </div>
      {caption && <figcaption className="sample">{caption}</figcaption>}
    </figure>
  );
}

export function Phones({ shots, caption }: { shots: Shot[]; caption?: string }) {
  return (
    <figure>
      <div className={`phones${shots.length === 5 ? " five" : ""}`}>
        {shots.map((s) => (
          <div className="phone" key={s.src}>
            <img src={s.src} alt={s.alt} width={585} height={1266} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      {caption && <figcaption className="sample">{caption}</figcaption>}
    </figure>
  );
}

export function ContactBand({
  title = "Got a project your team can't fit in this month?",
  body = "Send us a message. We'll reply within your working day.",
}: { title?: string; body?: string }) {
  return (
    <section className="contact" aria-labelledby="contact-band">
      <div className="wrap">
        <h2 id="contact-band">{title}</h2>
        <p>{body}</p>
        <div className="ways">
          <a className="wa" href={site.whatsappHref} target="_blank" rel="noopener">WhatsApp {site.whatsapp}</a>
          <a href={`mailto:${site.email}?subject=Project%20enquiry`}>{site.email}</a>
          <a href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function Crumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.label}>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          {i < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
