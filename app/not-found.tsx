import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>We couldn&apos;t find that page</h1>
        <p className="lede">It may have moved when we rebuilt the site. Try the home page, or message us and we&apos;ll point you to it.</p>
        <div className="actions">
          <Link className="btn btn-white" href="/">Go to the home page</Link>
          <Link className="btn btn-ghost" href="/contact/">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
