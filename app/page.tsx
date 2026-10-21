import Link from "next/link";
import { products, builds, clients, site } from "@/lib/content";
import { Status, Frame, Phones, ContactBand } from "@/components/Bits";

export default function Home() {
  const [boutique, cycle, courtwise, smart] = products;
  const quoted = clients.filter((c) => c.quote);
  const [lead, ...rest] = quoted;

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-text">
            <h1>Software that runs real businesses, built and looked after by one team.</h1>
            <p>
              We&apos;re Velectico, a software company in Kolkata. Since {site.founded} we&apos;ve built platforms for
              clients in the US, the Gulf and Africa, and our own shop software now runs multiple
              businesses in India. Agencies in the UK, Australia and New Zealand use us to build under their name.
            </p>
            <div className="actions">
              <Link className="btn btn-white" href="/contact/">Book a 20-minute call</Link>
              <Link className="btn btn-ghost" href="/agencies/">How we work with agencies</Link>
            </div>
            <p className="shown">
              Below: CourtWise, our padel club software launching in the Gulf, and the smart buy list from our shop software. Sample data.
            </p>
          </div>
          <div className="stage">
            <div className="desk">
              <img src="/images/products/courtwise/yield.webp" alt="CourtWise forecasting which padel court slots will sell this week, with a suggested price" width={1600} height={1067} />
            </div>
            <div className="card">
              <img src="/images/products/smart-inventory/return-card.webp" alt="Smart inventory: return on every rupee of stock, by category" width={800} height={651} />
            </div>
          </div>
        </div>
      </section>

      <div className="clients">
        <div className="wrap">
          <p>
            We&apos;ve built and maintained platforms for <b>RestoGPT AI</b> in the US, <b>East West International</b> and{" "}
            <b>Interlogistics</b> in the Gulf, <b>sendacash</b> in Africa, and <b>SeedUp</b> and <b>Innate</b> in India.
          </p>
        </div>
      </div>

      <section className="block" aria-labelledby="products-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="products-h">We run our own software, every day.</h2>
            <p>
              Shops use these products to bill customers, track stock and collect what they&apos;re owed. Keeping them running is
              the same work we do for clients: fixing things fast, shipping updates and answering the phone.
            </p>
          </div>

          <article className="product">
            <div className="copy">
              <Status status={boutique.status} label={boutique.statusLabel} />
              <h3><Link href={`/products/${boutique.slug}/`}>{boutique.name}</Link></h3>
              <p>For {boutique.forWho.toLowerCase()}. {boutique.summary}</p>
              <ul className="ticks">{boutique.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
              <Link className="more-link" href={`/products/${boutique.slug}/`}>See Boutique OS</Link>
            </div>
            <Frame shot={boutique.hero} caption="Sample data" />
          </article>

          <article className="product flip">
            <div className="copy">
              <Status status={cycle.status} label={cycle.statusLabel} />
              <h3><Link href={`/products/${cycle.slug}/`}>{cycle.name}</Link></h3>
              <p>For bicycle and parts shops that sell both retail and wholesale. {cycle.summary}</p>
              <ul className="ticks">{cycle.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
              <Link className="more-link" href={`/products/${cycle.slug}/`}>See Cycle OS</Link>
            </div>
            <Phones shots={[cycle.phones![0], cycle.phones![2], cycle.phones![4]]} caption="Sample data" />
          </article>

          <article className="product">
            <div className="copy">
              <Status status={smart.status} label="Smart inventory" />
              <h3><Link href={`/products/${smart.slug}/`}>A buy list that knows where each rupee earns most</Link></h3>
              <p>Built into our shop software. Each week, before the owner orders, it says what to buy more of, what to buy less of and what to clear, using the shop&apos;s own sales.</p>
              <ul className="ticks">{smart.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
              <Link className="more-link" href={`/products/${smart.slug}/`}>How it works</Link>
            </div>
            <Frame shot={smart.hero} caption="Shown in our stationery shop build, with sample data" />
          </article>

          <article className="product flip">
            <div className="copy">
              <Status status={courtwise.status} label={courtwise.statusLabel} />
              <h3><Link href={`/products/${courtwise.slug}/`}>{courtwise.name}</Link></h3>
              <p>For padel clubs, built for the Gulf in English and Arabic. We&apos;re talking to clubs now.</p>
              <ul className="ticks">{courtwise.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
              <Link className="more-link" href={`/products/${courtwise.slug}/`}>See CourtWise</Link>
            </div>
            <Frame shot={courtwise.gallery[0].shot} caption="Sample club and data" />
          </article>
        </div>
      </section>

      <section className="block mist" aria-labelledby="agency-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="agency-h">Building for an agency? We work under your name.</h2>
            <p>For agencies in the UK, Australia and New Zealand that win more build work than their team can take on.</p>
          </div>
          <div className="cols">
            <div className="promises">
              <div><h3>Your client never hears of us</h3><p>We sign your NDA. Nothing we deliver carries our name, and we never contact or work for your clients directly.</p></div>
              <div><h3>Answers the same day</h3><p>Our working day overlaps with UK mornings and Australian afternoons, so your questions don&apos;t wait overnight.</p></div>
              <div><h3>One senior person on your project</h3><p>The same lead stays with you from the first call to handover. You always know who to message.</p></div>
            </div>
            <div className="start">
              <h3>How we start</h3>
              <ol>
                <li><div><b>A 20-minute call</b><span>Tell us about the build and how your team works. We&apos;ll say honestly if we&apos;re not the right fit.</span></div></li>
                <li><div><b>A two-week paid trial</b><span>We build a small, real part of a live project, so you can judge our code and communication first.</span></div></li>
                <li><div><b>Monthly, or fixed price</b><span>Carry on month by month or by project. Work starts within 7 to 10 days of sign-off.</span></div></li>
              </ol>
              <Link className="btn btn-blue" href="/agencies/">Read how it works</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="work-h">
        <div className="wrap">
          <div className="intro">
            <h2 id="work-h">Systems for businesses that run on paper</h2>
            <p>We sit with the owner, see where the manual work is, and build around how the business already runs. A few recent builds, shown with sample data:</p>
          </div>
          <div className="builds">
            {builds.slice(0, 3).map((b, i) => (
              <article className={`build${i === 0 ? " wide" : ""}`} key={b.slug}>
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

      <section className="block quotes" aria-label="What clients say">
        <div className="wrap">
          <p className="lead">“{lead.quote}”</p>
          <p className="who"><b>{lead.person}</b>, {lead.role}</p>
          <div className="more">
            {rest.map((c) => (
              <div key={c.name}>
                <p>“{c.quote}”</p>
                <p className="who"><b>{c.person}</b>, {c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
