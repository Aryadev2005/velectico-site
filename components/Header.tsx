import Link from "next/link";
import { LogoMark } from "./Logo";

const links = [
  { href: "/products/", label: "Products" },
  { href: "/agencies/", label: "For agencies" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  return (
    <header className="nav">
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Velectico home">
          <LogoMark />
          <span>Velectico</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link className="btn btn-white" href="/contact/">Talk to us</Link>
        </nav>
        <details className="menu">
          <summary>Menu</summary>
          <nav className="menu-panel" aria-label="Main, mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/contact/">Talk to us</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
