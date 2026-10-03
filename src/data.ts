export type Project = {
  id: string;
  name: string;
  sector: string;
  year: string;
  stack: string[];
  tagline: string;
  description: string[];
  outcomes: { value: string; label: string }[];
  image: string;
  role: string;
};

export const projects: Project[] = [
  {
    id: "simco",
    name: "Simco Renewable Solutions Limited",
    sector: "Solar and Construction",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    role: "Design engineering",
    tagline: "A professional Portfolio For A Solar and Construction Company",
    description: [
      "Simco Renewable Solutions Limited is a solar and construction company that specializes in providing sustainable energy solutions. We designed and developed a professional portfolio website to showcase their services, projects, and expertise in the renewable energy sector.",
    ],
    outcomes: [,
    ],
    image: "src/assets/aarondev.jpg",
  },
  {
    id: "fernway",
    name: "Fernway",
    sector: "Botanical e-commerce",
    year: "2025",
    stack: ["Shopify Hydrogen", "React", "GSAP", "Sanity"],
    role: "Frontend build · Motion system",
    tagline: "Editorial commerce for a plant studio — stories first, cart always near.",
    description: [
      "Fernway sells rare plants the way galleries sell art. We built a storefront where each species gets a full editorial moment — care rituals, origins, slow zooming photography — while the cart stays one thumb away at all times.",
      "The motion system is deliberate: nothing moves unless it guides. Scroll choreography was tested with real customers until it felt inevitable rather than decorative.",
    ],
    outcomes: [
      { value: "+52%", label: "conversion rate" },
      { value: "99", label: "Lighthouse perf" },
      { value: "4.9★", label: "shop rating" },
    ],
    image: "https://image.qwenlm.ai/generated-images/911daf95-bff7-4cc5-94df-01bfff654dfd/_result.png",
  },
  {
    id: "orbitpay",
    name: "OrbitPay",
    sector: "Fintech dashboard",
    year: "2024",
    stack: ["React", "TypeScript", "D3", "WebSockets"],
    role: "Product frontend · Data visualization",
    tagline: "A treasury dashboard that streams 4,000 events a minute at 60fps.",
    description: [
      "OrbitPay's traders stare at this screen for eight hours a day, so every pixel had to earn its keep. We engineered a virtualised rendering pipeline that keeps live charts glassy-smooth under heavy load.",
      "Alerts arrive as gentle peripheral pulses instead of red klaxons. Calm dashboards make calmer decisions — their risk team noticed within a month.",
    ],
    outcomes: [
      { value: "60fps", label: "under peak load" },
      { value: "12ms", label: "interaction latency" },
      { value: "−41%", label: "alert fatigue reports" },
    ],
    image: "https://image.qwenlm.ai/generated-images/7783faba-d281-4e6d-bf0b-531763311d5e/_result.png",
  },
  {
    id: "kavella",
    name: "Kavella",
    sector: "Architecture studio",
    year: "2024",
    stack: ["Next.js", "Three.js", "WebGL", "Vercel"],
    role: "Creative frontend · WebGL scenes",
    tagline: "A portfolio that walks you through buildings like light through windows.",
    description: [
      "Kavella designs quiet buildings, and their site needed the same discipline. We built weightless WebGL transitions between projects — plans unfold, sections rise, daylight shifts — all running on mid-range phones.",
      "The restraint was the hard part. Every effect exists to explain space, never to impress. The result was shortlisted by two design award juries.",
    ],
    outcomes: [
      { value: "2×", label: "avg. session length" },
      { value: "1.2s", label: "first interactive" },
      { value: "2", label: "award shortlists" },
    ],
    image: "https://image.qwenlm.ai/generated-images/cdbbabae-6174-4589-90f6-02da63284000/_result.png",
  },
];

export type Service = {
  n: string;
  title: string;
  body: string;
  tags: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    n: "01",
    title: "Web applications",
    body: "SaaS products, dashboards and internal tools built in React and TypeScript. Component-driven, tested, and documented",
    tags: ["React", "Next.js", "TypeScript", "Testing"],
    timeline: "6–12 weeks",
  },
  {
    n: "02",
    title: "Marketing & brand sites",
    body: "Editorial sites that load before your visitor finishes blinking. CMS-wired, SEO-tuned, and built so your team can ship pages without filing a ticket.",
    tags: ["Editorial", "CMS", "SEO 95+", "A/B ready"],
    timeline: "1–2 weeks",
  },
  {
    n: "03",
    title: "Graphic Design",
    body: "Tokens, component libraries and living documentation in Storybook. One source of truth that ends the eternal 'which button is the real button' debate.",
    tags: ["Canva", "Photoshop", "Figma sync", "Brand guidelines"],
    timeline: "1 week",
  },
  {
    n: "04",
    title: "Motion Effects",
    body: "Subtle, performance-conscious motion design that guides attention.",
    tags: ["CapCut", "Premiere Pro", "After Effects", "GSAP"],
    timeline: "1–2 weeks",
  },
  {
    n: "05",
    title: "Performance Rescue",
    body: "We inherit the site everyone's afraid to touch, audit it forensically, and bring Core Web Vitals back to green. You get a before/after report you'll want to frame.",
    tags: ["Audits", "Core Web Vitals", "Bundle diet", "CWV green"],
    timeline: "1–3 weeks",
  },
];

export type Phase = {
  n: string;
  title: string;
  body: string;
  points: string[];
};

export const phases: Phase[] = [
  {
    n: "01",
    title: "Listen",
    body: "We start with your users' frustrations, not a moodboard. One discovery call, one honest audit, one page of findings — no forty-slide decks.",
    points: ["Stakeholder interview", "Technical & CWV audit", "Success metrics agreed"],
  },
  {
    n: "02",
    title: "Blueprint",
    body: "Wireframes and a clickable prototype inside two weeks. Scope, timeline and price are fixed in writing before a single component is built.",
    points: ["Interactive prototype", "Fixed scope & quote", "Design tokens defined"],
  },
  {
    n: "03",
    title: "Build",
    body: "A staging link from day three and a demo every Friday. You watch the site grow in the open — surprises are for launches, not invoices.",
    points: ["Live staging from day 3", "Weekly demo cadence", "Accessibility built-in"],
  },
  {
    n: "04",
    title: "Breathe",
    body: "Launch is a non-event — because nothing breaks. We monitor the first two weeks, hand over clean documentation, and train your team until they don't need us.",
    points: ["Zero-drama launch", "14-day monitoring", "Handover without hostage"],
  },
];

export const stats = [
  { value: 48, suffix: "", label: "projects shipped", note: "since 2019, zero abandoned" },
  { value: 99, suffix: "", label: "median Lighthouse", note: "performance score, last 12 launches" },
  { value: 6, suffix: " yrs", label: "of calm delivery", note: "every deadline met. all of them." },
  { value: 0, suffix: "", label: "rage-click incidents", note: "measured across client analytics" },
];

export const testimonials = [
  {
    quote: "Aaron's team shipped our rebuild two weeks early. I never once wondered what was happening — in twelve years of shipping software, that has literally never happened before.",
    name: "Maya Patel",
    role: "Founder, Fernway",
  },
  {
    quote: "The dashboard is so fast our traders asked if it was cached. It wasn't. They now describe checking it as 'weirdly relaxing', which is not a phrase I expected in fintech.",
    name: "Richard Quaye",
    role: "Head of Product, CITS Learning",
  },
  {
    quote: "They treat stress like a bug — reported, reproduced, fixed. Our support queue dropped by a third and my blood pressure followed. Can't recommend them enough.",
    name: "Simon Yeboah",
    role: "Founder, Simco Renewable Solutions Limited",
  },
];

export const faqs = [
  {
    q: "What does a project cost?",
    a: "Marketing sites start around ¢2k, web applications around ¢2k, and performance rescues from ¢3k.",
  },
  {
    q: "How long until launch?",
    a: "Two to Three weeks for a marketing site, Three to Four for an application. You'll have a live staging link within three days of kickoff.",
  },
  {
    q: "Do you work with our in-house designers?",
    a: "Happily. Roughly half our projects pair your brand team with our engineering. We speak fluent Figma, leave components exactly where designers expect them, and never 'interpret' spacing liberties.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes fourteen days of monitoring on us. After that, optional care plans cover updates, analytics reviews and quarterly performance tune-ups. No lock-in, no hostage codebases.",
  },
  {
    q: "Why 'stress-free'? Is that just a slogan?",
    a: "It's the spec. We measure stress objectively — rage clicks, error states, load jank, ambiguous flows — and budget against it like any performance metric. Calm is not a vibe; it's a column in our acceptance criteria.",
  },
];

export const clients = ["Simco Renewable Solutions Limited", "Catalog", "Dynamo", "Kavella", "Nimbus Labs", "Terra & Co", "Bluebird Health", "Arcade Audio"];

export const tools = ["React", "TypeScript", "Next.js", "Canva", "Photoshop", "HTML & Javascript", "Tailwind", "Figma", "Storybook", "Photoshop", "Vite", "Php"];

export const tickerItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Web Design",
  "Performance Monitoring",
  "Ticketing and POS System",
  "Motion Effects",
  "Tshirt Branding",
  "Graphic Design",
];
