// All site copy and facts live here, so pages stay consistent.
// Rule: nothing goes in this file that Velectico can't back up on a call.

export const site = {
  name: "Velectico",
  legalName: "Velectico Consulting Private Limited",
  url: "https://www.velectico.com",
  email: "aryadev.chatterjee@velectico.com",
  phone: "+91 82403 48911",
  phoneHref: "tel:+918240348911",
  whatsapp: "+91 93396 99347",
  whatsappHref:
    "https://wa.me/919339699347?text=Hi%2C%20I%20found%20Velectico%20and%20would%20like%20to%20talk%20about%20a%20project.",
  address: {
    street: "C-302 Yamuna Block, Koyla Vihar Abhinandan, VIP Road",
    city: "Kolkata",
    postcode: "700052",
    region: "West Bengal",
    country: "India",
  },
  founded: 2018,
  businessesOnOurSoftware: 23,
  description:
    "Velectico is a software company in Kolkata. We build and run software for businesses, and build for agencies in the UK, Australia and New Zealand under their name.",
};

export type Shot = { src: string; alt: string; caption?: string };

export type Product = {
  slug: string;
  name: string;
  status: "live" | "launching" | "feature";
  statusLabel: string;
  forWho: string;
  summary: string;
  metaDescription: string;
  features: string[];
  hero: Shot;
  phones?: Shot[];
  phoneSteps?: { title: string; body: string }[];
  gallery: { title: string; body: string; shot: Shot }[];
  setup?: string[];
  note?: string;
};

const p = (path: string) => `/images/products/${path}`;
const w = (path: string) => `/images/work/${path}`;

export const products: Product[] = [
  {
    slug: "boutique-os",
    name: "Boutique OS",
    status: "live",
    statusLabel: "Live",
    forWho: "Boutiques and clothing stores",
    summary:
      "Orders from WhatsApp, Instagram and Facebook arrive on one screen, and billing, stock, GST and Tally run from the same place.",
    metaDescription:
      "Boutique OS is billing, orders, stock, stitching and festive offers for boutiques and clothing stores in India, with WhatsApp and Instagram orders on one screen.",
    features: [
      "Sales, orders, dues and low stock on the owner's first screen",
      "A storefront customers order from, with stock kept up to date",
      "Stitching and alterations, with saved measurements",
      "Customer dues, birthdays and anniversaries in one list",
      "Festive offers sent as WhatsApp broadcasts",
      "GST billing that syncs with Tally",
    ],
    hero: { src: p("boutique/dashboard.webp"), alt: "Boutique OS owner app beside the live customer storefront" },
    gallery: [
      {
        title: "Every order in one place",
        body: "Orders from the website, the app, WhatsApp and Instagram land on one board. Each move, from packed to delivered, sends the customer an update.",
        shot: { src: p("boutique/orders.webp"), alt: "Boutique OS orders board with orders from Instagram, WhatsApp, the website and the app" },
      },
      {
        title: "Billing at the counter",
        body: "Tap items to bill a walk-in customer. Stock, the customer's history and their dues update, and the bill goes to them on WhatsApp.",
        shot: { src: p("boutique/billing.webp"), alt: "Boutique OS billing screen with product tiles and the current bill" },
      },
      {
        title: "Stitching and alterations",
        body: "Measurements are saved once per customer. Every job is tracked from cutting to trial, and the customer hears when their outfit is ready.",
        shot: { src: p("boutique/stitching.webp"), alt: "Boutique OS stitching jobs with saved measurements" },
      },
      {
        title: "Festive offers",
        body: "Pick the festival and who should get it. The message and product photos are ready to send on WhatsApp in one go.",
        shot: { src: p("boutique/festive.webp"), alt: "Boutique OS festive offer builder with a WhatsApp preview" },
      },
    ],
    setup: [
      "We set it up at your shop and load your stock and customers",
      "We train your staff at the counter",
      "Support on WhatsApp and phone after you go live",
    ],
  },
  {
    slug: "cycle-os",
    name: "Cycle OS",
    status: "live",
    statusLabel: "Live",
    forWho: "Bicycle and parts shops, retail and wholesale",
    summary:
      "The owner runs every counter and branch from a phone: today's profit, billing, stock, staff and dealer dues.",
    metaDescription:
      "Cycle OS is billing, stock, daily profit and dealer dues for bicycle and parts shops in India, run from the owner's phone.",
    features: [
      "Today's profit, split by cash, UPI and credit",
      "Retail and wholesale billing with the margin on every item",
      "Reorder alerts based on how fast each item sells",
      "Profit by day, worked out from every bill",
      "Dealer dues by age, with WhatsApp reminders in one tap",
      "Staff attendance across shops",
    ],
    hero: { src: p("cycle/main.webp"), alt: "Cycle OS home screen with today's profit" },
    phones: [
      { src: p("cycle/main.webp"), alt: "Cycle OS home: today's profit, sales and how customers paid" },
      { src: p("cycle/billing.webp"), alt: "Cycle OS new bill with retail and wholesale prices" },
      { src: p("cycle/stock.webp"), alt: "Cycle OS stock with margins and a suggested reorder" },
      { src: p("cycle/profit.webp"), alt: "Cycle OS profit by day" },
      { src: p("cycle/dues.webp"), alt: "Cycle OS money to collect from dealers" },
    ],
    phoneSteps: [
      { title: "Today, at a glance", body: "Profit, sales, bills and margin for every shop and counter, and how the money came in: cash, UPI or credit." },
      { title: "Bill in seconds", body: "Fast movers are one tap. Switch between retail and wholesale, scan a barcode, and send the bill on WhatsApp." },
      { title: "Know what to reorder", body: "Every item shows stock, margin and how fast it sells, so low stock comes with a suggested order." },
      { title: "Profit by day", body: "Sales, gross profit and margin for each day, worked out from every bill." },
      { title: "Collect what you're owed", body: "Dealer dues sorted by age and credit limit. Overdue dealers get a WhatsApp reminder in one tap." },
    ],
    gallery: [],
    setup: [
      "We set it up across your counters and branches",
      "We load your items, prices and dealers",
      "We train your staff, then support you on WhatsApp and phone",
    ],
  },
  {
    slug: "courtwise",
    name: "CourtWise",
    status: "launching",
    statusLabel: "Launching",
    forWho: "Padel clubs in the Gulf",
    summary:
      "One system for a padel club: bookings from every channel, pricing that fills quiet hours, players, coaching and billing. In English and Arabic.",
    metaDescription:
      "CourtWise is padel club software for the Gulf: bookings from every channel, off-peak pricing, WhatsApp offers, players, coaching and billing, in English and Arabic.",
    features: [
      "Bookings from every channel on one court board",
      "A forecast of which slots won't sell, with a suggested price",
      "Offers sent from the club's own WhatsApp to fill quiet hours",
      "A fourth player found for games that are one short",
      "Players, coaches and lesson payouts",
      "Café, pro shop and memberships billed in the same system",
    ],
    hero: { src: p("courtwise/yield.webp"), alt: "CourtWise forecast of which court slots will sell, with a suggested price" },
    gallery: [
      {
        title: "The club this morning",
        body: "Who is on court, which courts are free, what the front desk noted and what came in on WhatsApp overnight.",
        shot: { src: p("courtwise/today.webp"), alt: "CourtWise front-desk view with six courts in play" },
      },
      {
        title: "Fill the quiet hours",
        body: "Each open slot gets a chance of selling at the rate card. Slots that won't sell get a lower price, within limits the owner sets.",
        shot: { src: p("courtwise/yield.webp"), alt: "CourtWise yield and fill screen" },
      },
      {
        title: "Every booking, every channel",
        body: "Bookings from booking apps, the club app, WhatsApp and the front desk on one grid, with unpaid players and short games flagged.",
        shot: { src: p("courtwise/bookings.webp"), alt: "CourtWise bookings grid across six courts" },
      },
      {
        title: "Know your players",
        body: "Levels, visits, plans and who is at risk of leaving, so the club can win back regulars before they drift.",
        shot: { src: p("courtwise/players.webp"), alt: "CourtWise players list with levels and risk of leaving" },
      },
    ],
    note: "CourtWise is launching. We're talking to clubs now, and no club is live yet. Screens use a sample club and sample data.",
  },
  {
    slug: "smart-inventory",
    name: "Smart inventory",
    status: "feature",
    statusLabel: "Feature",
    forWho: "Shops that buy stock every week",
    summary:
      "A buy list that knows where each rupee earns most. Each week it says what to buy more of, what to buy less of and what to clear, from the shop's own sales.",
    metaDescription:
      "Smart inventory is a weekly buy list for Indian shops: it fills your budget with the items that earn the most per rupee, and flags stock to buy less of or clear.",
    features: [
      "Set the week's budget, and the most profitable items fill it first",
      "Return on every ₹1 of stock, by category",
      "Allows for supplier delivery times, pre-orders and the season ahead",
      "Flags dead stock with an idea to clear it",
      "Turns into purchase orders, grouped by supplier",
    ],
    hero: { src: p("smart-inventory/buy-list.webp"), alt: "Smart buy list with the weekly budget and return per rupee by category" },
    gallery: [],
    note: "Shown here in our stationery shop build, with sample data.",
  },
];

export type Build = {
  slug: string;
  name: string;
  short: string;
  kind: "Demo build" | "Concept";
  business: string;
  problem: string[];
  built: string[];
  metaDescription: string;
  shots: { title: string; body: string; shot: Shot }[];
};

export const builds: Build[] = [
  {
    slug: "textile-wholesale",
    name: "Textile wholesale trader",
    short: "Credit by party and by age, WhatsApp orders turned into GST bills, and stock by design number. In Hindi and English.",
    kind: "Demo build",
    business:
      "A wholesale cloth trader with a gaddi, a retail counter and a godown, selling sarees, kurtis and suits on credit to retailers across the state.",
    problem: [
      "Credit to dozens of retailers kept in a paper bahi, with no easy view of who is overdue",
      "Orders arriving as WhatsApp photos and voice notes, typed into bills by hand",
      "Stock tracked by design number, colour and size set in a register",
    ],
    built: [
      "Credit for every party, sorted by how old each bill is, with WhatsApp reminders and statements",
      "WhatsApp orders turned into draft GST bills for the munim to check",
      "Stock by design, colour and size set, with dead stock flagged",
      "The whole app in Hindi and English",
    ],
    metaDescription: "A demo build for a textile wholesale trader: credit ageing, WhatsApp orders into GST bills, and stock by design number, in Hindi and English.",
    shots: [
      { title: "Today at the gaddi", body: "Sales across the gaddi, counter and godown, collections, cash in the galla and total credit.", shot: { src: w("textile/dashboard.webp"), alt: "Textile trader dashboard with sales, collections and credit" } },
      { title: "Credit and recovery", body: "Every party and every bill, sorted by age, with a reminder ready to send.", shot: { src: w("textile/credit.webp"), alt: "Credit by party with age buckets and a WhatsApp reminder" } },
      { title: "Stock by design", body: "Design number, colours, size set, age and how fast it sells.", shot: { src: w("textile/stock.webp"), alt: "Stock by design number with dead stock flagged" } },
    ],
  },
  {
    slug: "two-restaurants",
    name: "Two restaurants, one owner",
    short: "Billing, stock tracked down to each recipe, and profit for each outlet and both together.",
    kind: "Demo build",
    business: "One owner running a lounge bar and a restaurant in the same city, with dine-in and delivery orders.",
    problem: [
      "Two separate billing systems, so no single view of the day",
      "Stock counted by hand, with no link between what sold and what was used",
      "Profit only known at month end, after the accountant",
    ],
    built: [
      "One console for both outlets, or each on its own",
      "Billing with tables, delivery orders and a printed receipt",
      "Stock that drops with each dish sold, using its recipe",
      "Profit and loss for each outlet and both together",
    ],
    metaDescription: "A demo build for a two-outlet restaurant owner: one console for billing, recipe-level stock and profit for each outlet.",
    shots: [
      { title: "Both outlets at a glance", body: "Net sales, gross and net profit, bills and what needs attention, for one outlet or both.", shot: { src: w("restaurants/overview.webp"), alt: "Two-outlet overview with sales by day and alerts" } },
      { title: "The billing counter", body: "Tables, delivery orders, the menu and the bill, with the dish cost shown as you bill.", shot: { src: w("restaurants/billing.webp"), alt: "Restaurant billing counter with tables and menu" } },
      { title: "Stock from recipes", body: "Every ingredient against its par level, with stock moving as bills are settled.", shot: { src: w("restaurants/inventory.webp"), alt: "Restaurant inventory against par levels" } },
      { title: "Profit and loss", body: "Sales down to net profit for each outlet, with where every ₹100 of sales goes.", shot: { src: w("restaurants/profit.webp"), alt: "Profit and loss for both outlets" } },
    ],
  },
  {
    slug: "food-maker-distributor",
    name: "Food maker and distributor",
    short: "Production batches, van routes, the credit ledger and Tally for a papad maker who also trades dry goods.",
    kind: "Demo build",
    business: "A papad manufacturer with a shop and a factory-godown, who also trades dry goods and delivers to retailers by van on fixed weekly routes.",
    problem: [
      "Production tracked on paper across dough, rolling, drying and packing",
      "Home workers paid by weight, with no check on wastage",
      "Credit to retailers spread across towns and routes",
    ],
    built: [
      "Production batches from dough to packing, with recipes scaled to the batch",
      "Home worker dough in and papad back, with wastage flagged",
      "Weekly van routes with stops, load sheets and collections",
      "The credit ledger, GST returns and Tally sync",
    ],
    metaDescription: "A demo build for a food manufacturer and distributor: production batches, van routes, credit ledger and Tally sync.",
    shots: [
      { title: "The owner's desk", body: "Sales, collections, credit, stock and the day's production, with WhatsApp orders ready to bill.", shot: { src: w("food-distributor/desk.webp"), alt: "Owner's desk with alerts and WhatsApp orders" } },
      { title: "Production", body: "Batches from dough to packing, recipes scaled to the batch, and home workers' wastage.", shot: { src: w("food-distributor/production.webp"), alt: "Papad production batches and home workers" } },
      { title: "Routes and dispatch", body: "A fixed weekly line to every town, with stops, orders and collections per stop.", shot: { src: w("food-distributor/routes.webp"), alt: "Van route map with stops and collections" } },
      { title: "Credit ledger", body: "Every retailer's ledger, aged by how long the money has been out, with reminders in Hindi.", shot: { src: w("food-distributor/ledger.webp"), alt: "Credit ledger by retailer with a reminder" } },
    ],
  },
  {
    slug: "stationery-shop",
    name: "Stationery shop",
    short: "GST billing plus school-kit pre-orders with advances, accounts for schools and offices, and the smart buy list.",
    kind: "Demo build",
    business: "A stationery shop opposite a school, selling to parents, students, schools, coaching centres and offices.",
    problem: [
      "A rush every new session, with class lists handled by hand",
      "Schools and offices buying on credit with no statements",
      "Stock bought on instinct, so the wrong items sit on the shelf",
    ],
    built: [
      "GST billing with barcode scanning and WhatsApp bills",
      "School kits parents book from a link, with an advance",
      "Monthly credit accounts with statements and reminders",
      "The smart buy list, filling the week's budget by return per rupee",
    ],
    metaDescription: "A demo build for a stationery shop: GST billing, school-kit pre-orders, credit accounts for institutions and a smart buy list.",
    shots: [
      { title: "Today", body: "Sales, margin, kit pre-orders, dues and what to buy this week.", shot: { src: w("stationery/dashboard.webp"), alt: "Stationery shop dashboard" } },
      { title: "School kits", body: "Parents book a class kit from a link, pay an advance and pick a time. Stock is held the moment they book.", shot: { src: w("stationery/school-kits.webp"), alt: "School kit bookings and what the parent sees" } },
      { title: "Accounts for schools and offices", body: "Each gets its own credit limit, monthly statement and reminders.", shot: { src: w("stationery/accounts.webp"), alt: "Credit accounts with a monthly statement" } },
      { title: "Fast billing", body: "Scan a barcode, type an item or tap a best seller. GST is worked out per item.", shot: { src: w("stationery/billing.webp"), alt: "New bill screen with best sellers" } },
    ],
  },
  {
    slug: "grain-intake",
    name: "Grain intake for a processing plant",
    short: "Quality deductions at the weighbridge, stock across silos and godowns, and daily rates sent to suppliers.",
    kind: "Concept",
    business: "A grain processing plant buying maize from hundreds of suppliers, with onsite silos and outside godowns.",
    problem: [
      "Quality deductions worked out by hand at the weighbridge, and argued over at payment",
      "No single view of stock across silos and godowns",
      "Rates sent to suppliers one call at a time",
    ],
    built: [
      "Moisture, foreign matter and damage deductions worked out per truck",
      "Days of stock cover across every site at the plant's crush rate",
      "The day's buying rate sent to suppliers on WhatsApp",
      "Weighbridge slips and bills checked against the gate log",
    ],
    metaDescription: "A concept for a grain processing plant: weighbridge quality deductions, stock cover across silos and supplier rates on WhatsApp.",
    shots: [
      { title: "Gate and quality", body: "Every truck weighed today, with its deductions and what the supplier is owed.", shot: { src: w("grain-intake/gate.webp"), alt: "Weighbridge log with quality deductions" } },
      { title: "Stock cover", body: "Grain held across silos and godowns, and how many days it lasts.", shot: { src: w("grain-intake/stock.webp"), alt: "Stock across silos and godowns" } },
      { title: "Rates to suppliers", body: "Mandi prices, the plant's buying rate and the message to suppliers.", shot: { src: w("grain-intake/rates.webp"), alt: "Mandi rates and a supplier message" } },
      { title: "Slip checking", body: "Weighbridge slips read and matched with the gate log, with mismatches held for QC.", shot: { src: w("grain-intake/slips.webp"), alt: "Weighbridge slip checked against the gate log" } },
    ],
  },
];

export const clients = [
  {
    name: "RestoGPT AI",
    region: "US",
    what: "Platform development, maintenance, new features and security for a restaurant technology company, over two years.",
    quote:
      "Very fast, competent and prompt customer service, professional and highly skilled development teams. Working together and creating complex solutions was made easy with Velectico.",
    person: "Gary Chaglasyan",
    role: "CEO, RestoGPT AI",
  },
  {
    name: "sendacash",
    region: "Africa",
    what: "A marketplace website built from the client's goals up. They then kept us on for ongoing updates.",
    quote:
      "They took time to understand the objectives and the desired deliverables to produce a beautiful, functional marketplace website… we have since contracted them to work on updates.",
    person: "Samson Mashava Layisi",
    role: "CEO, sendacash.com",
  },
  {
    name: "East West International Trading",
    region: "Gulf",
    what: "Platform development, security, cloud and hosting for a trading group, with continued support.",
    quote: "Their professionalism, expertise, and timely delivery have been exemplary.",
    person: "Aniruddha Roychowdhury",
    role: "Director, East West International Trading",
  },
  {
    name: "Interlogistics",
    region: "Gulf",
    what: "A platform for a logistics company operating across the Gulf.",
  },
  {
    name: "SeedUp",
    region: "India",
    what: "Development and ongoing maintenance of the SeedUp platform.",
    quote: "From development to ongoing maintenance, their team has consistently delivered top-notch service.",
    person: "Shekhar Kumar Jain",
    role: "Director, SeedUp",
  },
  {
    name: "Innate",
    region: "India",
    what: "Website development, maintenance, security, cloud and hosting over several years.",
    quote: "Their team's professionalism, expertise, and unwavering commitment to timely delivery have been truly commendable.",
    person: "Anirban Bhaduri",
    role: "Co-founder, Innate",
  },
];

// Team: add photos to /public/team/<file> and they appear on the About page.
// Set techLead to null to hide the tech lead card.
export const team = {
  founders: [
    { name: "Sarmistha Gupta", role: "Co-founder", photo: "sarmistha-gupta.jpg" },
    { name: "Amrita Roy", role: "Co-founder", photo: "amrita-roy.jpg" },
  ],
  techLead: { name: "Aryadev Chatterjee", role: "Tech Lead", photo: "aryadev-chatterjee.jpg" } as null | { name: string; role: string; photo: string },
};
