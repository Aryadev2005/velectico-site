import Link from "next/link";
import { LogoMark } from "./Logo";
import { site, products, builds } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" href="/" aria-label="Velectico home">
              <LogoMark light={false} />
              <span>Velectico</span>
            </Link>
            <address>
              {site.legalName}
              <br />
              {site.address.street}, {site.address.city} {site.address.postcode}, India
            </address>
          </div>
          <div>
            <h2>Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}><Link href={`/products/${p.slug}/`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Work</h2>
            <ul>
              <li><Link href="/agencies/">For agencies</Link></li>
              <li><Link href="/work/">All work</Link></li>
              {builds.slice(0, 3).map((b) => (
                <li key={b.slug}><Link href={`/work/${b.slug}/`}>{b.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={site.whatsappHref} target="_blank" rel="noopener">WhatsApp {site.whatsapp}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><Link href="/about/">About us</Link></li>
            </ul>
          </div>
        </div>
        <p className="legal">© {new Date().getFullYear()} {site.legalName}. Product screens on this site use sample data.</p>
      </div>
    </footer>
  );
}
