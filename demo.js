import React, { useMemo, useState } from "react";

/**
 * Nova Horizon — Executive Demo (ROI-first)
 * Single-file React demo using Tailwind classes only.
 * Palette D (Executive):
 *  - Midnight Navy #0B1C2C
 *  - Platinum      #E6E6E6
 *  - Graphite      #3A3F47
 *  - Paper         #FAFAFA
 *  - Copper Accent #B87333
 * Typography: Headings Sora, Body Inter (fallback to system if not available).
 * Imagery: Abstract geometric tech (subtle diagonal layers).
 * Pages in demo: Home • Artikelen (overzicht + detail) • Use cases (overzicht + detail) • Cookiebeleid
 */

// Tiny utilities
const cx = (...c) => c.filter(Boolean).join(" ");

// Inline SVG icons (minimal set)
const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M12 3l7 4v5c0 5-3.4 8.3-7 9-3.6-.7-7-4-7-9V7l7-4z" />
  </svg>
);
const ScaleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M12 3v18M4 7h16M6 7l-3 6h6L6 7zm12 0l-3 6h6l-3-6z" />
  </svg>
);
const BoltIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const ChartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M4 19V5m5 14V9m5 10V7m5 12V3" />
  </svg>
);

// Design tokens (Tailwind arbitrary colors via classes)
const colors = {
  navy: "#0B1C2C",
  platinum: "#E6E6E6",
  graphite: "#3A3F47",
  paper: "#FAFAFA",
  copper: "#B87333",
};

// Demo router pages
const PAGES = {
  HOME: "Home",
  ARTICLES: "Artikelen",
  ARTICLE: "Artikel",
  USECASES: "UseCases",
  USECASE: "UseCase",
  COOKIE: "Cookiebeleid",
};

// Placeholder content
const articleList = [
  {
    slug: "roi-van-ai-6-12-weken",
    title: "De ROI van AI in 6–12 weken: van pilot naar product",
    teaser: "Een pragmatische route naar meetbare resultaten zonder vendor lock-in.",
    date: "2025-08-31",
    read: "6 min",
    tags: ["ROI", "Implementatie"],
  },
  {
    slug: "avg-en-eu-ai-act-in-praktijk",
    title: "AVG & EU AI Act in de praktijk: wat moet je nu regelen?",
    teaser: "Concrete maatregelen voor privacy, explainability en governance.",
    date: "2025-07-12",
    read: "8 min",
    tags: ["Compliance", "Risk"],
  },
  {
    slug: "guardrails-en-evaluatie",
    title: "Guardrails & evaluatie: hoe voorkom je hallucinaties?",
    teaser: "Meetmethodes, evaluatiekaders en fail-safes die echt werken.",
    date: "2025-06-02",
    read: "5 min",
    tags: ["Kwaliteit", "MLOps"],
  },
];

const useCaseList = [
  {
    slug: "cao-assistent",
    name: "CAO Assistent",
    outcome: ["-40% afhandeltijd", "+20% NPS"],
    blurb: "Vragen over CAO/HR automatisch beantwoorden met traceerbare bronnen.",
  },
  {
    slug: "groot-pdf-naar-rapport",
    name: "Groot PDF → Rapport",
    outcome: ["-70% handwerk", "<3 mnd payback"],
    blurb: "Lange PDF's samenvatten naar een direct bruikbaar Word-rapport.",
  },
  {
    slug: "inkomende-opdrachten-automatisch",
    name: "Inkomende opdrachten automatisch verwerken",
    outcome: ["+33% productiviteit"],
    blurb: "Orders uit e-mail/WhatsApp identificeren en boeken in systemen.",
  },
  {
    slug: "n8n-integraties",
    name: "n8n Integraties",
    outcome: ["Snelle koppelingen", "Geen lock-in"],
    blurb: "Workflow-automatisering tussen ERP/CRM en AI-services.",
  },
];

function Container({ className = "", children }) {
  return <div className={cx("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>{children}</div>;
}

function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: cx(
      base,
      "shadow-sm",
      "text-white",
      "bg-copper hover:bg-[#a3682d] focus:ring-copper",
      "ring-offset-white"
    ),
    ghost: cx(base, "text-[#0B1C2C] hover:bg-[#E6E6E6]"),
    outline: cx(
      base,
      "text-[#0B1C2C] border border-[#0B1C2C]/20 bg-white hover:bg-[#FAFAFA]"
    ),
  };
  return (
    <button className={cx(styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={cx(
      "rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_10px_30px_rgba(0,0,0,0.04)]",
      className
    )}>
      {children}
    </div>
  );
}

function Nav({ page, setPage }) {
  const items = [
    { key: PAGES.HOME, label: "Home" },
    { key: PAGES.ARTICLES, label: "Artikelen" },
    { key: PAGES.USECASES, label: "Use cases" },
    { key: PAGES.COOKIE, label: "Cookiebeleid" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E6E6] bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.copper}, ${colors.graphite})` }} />
          <span className="font-semibold tracking-wide" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Nova Horizon</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => setPage(it.key)}
              className={cx(
                "text-sm transition",
                page === it.key ? "text-[#0B1C2C]" : "text-slate-600 hover:text-[#0B1C2C]"
              )}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button onClick={() => setPage(PAGES.USECASES)} className="hidden md:inline-flex">Bekijk use-cases</Button>
          <Button variant="outline" onClick={() => alert('CTA voorbeeld: plan intake')}>Plan intake</Button>
        </div>
      </Container>
    </header>
  );
}

function AbstractBackdrop() {
  // Subtle diagonal geometry background
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, rgba(11,28,44,0.06), rgba(250,250,250,0))`,
      }}
    >
      <div className="absolute -right-24 -top-24 h-72 w-96 rotate-12 rounded-3xl" style={{
        background: `linear-gradient(135deg, ${colors.paper}, ${colors.platinum})`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        opacity: 0.6,
      }} />
      <div className="absolute -left-24 top-40 h-80 w-[34rem] -rotate-6 rounded-[2rem]" style={{
        background: `linear-gradient(135deg, ${colors.graphite}, ${colors.navy})`,
        opacity: 0.08,
      }} />
      <div className="absolute right-10 bottom-0 h-56 w-56 rotate-6 rounded-2xl" style={{
        background: `radial-gradient(circle at 30% 30%, ${colors.copper}, transparent 60%)`,
        opacity: 0.08,
      }} />
    </div>
  );
}

function StatsStrip() {
  const stats = [
    { k: "–40%", v: "doorlooptijd" },
    { k: "+33%", v: "productiviteit" },
    { k: "< 3 mnd", v: "payback" },
  ];
  return (
    <div className="grid grid-cols-3 divide-x divide-[#E6E6E6] rounded-2xl bg-white shadow-sm">
      {stats.map((s, i) => (
        <div key={i} className="p-4 text-center">
          <div className="text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>{s.k}</div>
          <div className="text-xs text-slate-600">{s.v}</div>
        </div>
      ))}
    </div>
  );
}

function ModelBadge() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-[#0B1C2C] text-white grid place-items-center">AA</div>
        <div className="text-sm">
          <div className="font-semibold text-[#0B1C2C]">AAE + Developer</div>
          <div className="text-slate-600">Volledig pakket, vast tarief, duidelijke deliverables</div>
        </div>
      </div>
    </Card>
  );
}

function LogoMarquee() {
  const logos = ["acme", "globex", "initech", "stark", "umbrella", "wayne"];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white py-6">
      <div className="group flex min-w-max gap-16 whitespace-nowrap [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((name, i) => (
          <div key={i} className="flex items-center gap-3 opacity-70 transition hover:opacity-100">
            <div className="h-8 w-8 rounded-md bg-[#E6E6E6]" />
            <span className="text-sm text-slate-600">{name.toUpperCase()}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="relative border-b border-[#E6E6E6] bg-[#FAFAFA] py-16">
        <AbstractBackdrop />
        <Container className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-[#0B1C2C] md:text-5xl" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>
              Van pilot naar product: AI die binnen 6–12 weken rendeert
            </h1>
            <p className="mb-6 max-w-xl text-slate-700">
              Roadmap, implementatie en borging door een <strong>AAE + Developer</strong> team—zonder vendor lock‑in. Transparant tarief, duidelijke KPI’s, elke sprint tastbare waarde.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => alert('Demo CTA: Plan intake')}>Plan adviesgesprek</Button>
              <Button variant="ghost">Bekijk use‑cases</Button>
            </div>
            <div className="mt-6 max-w-lg"><StatsStrip /></div>
          </div>
          <div className="space-y-4">
            <ModelBadge />
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <ChartIcon className="mt-0.5 h-5 w-5 text-copper" />
                <div className="text-sm text-slate-700">
                  <strong>ROI‑strip</strong> met concrete KPI’s en payback‑berekening. Geen black box; we leveren metrics per fase.
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <ShieldIcon className="mt-0.5 h-5 w-5 text-[#3A3F47]" />
                <div className="text-sm text-slate-700">
                  <strong>AVG & EU AI Act</strong> verwerkt in aanpak: dataminimalisatie, explainability, en documentatie out‑of‑the‑box.
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <LogoMarquee />
        </Container>
      </section>

      <section className="py-10">
        <Container className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <BoltIcon className="h-6 w-6 text-copper" />
            <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Snel resultaat</h3>
            <p className="text-sm text-slate-700">Sprints van 2 weken met duidelijk oplevermoment. Elke sprint tastbaar.</p>
          </Card>
          <Card className="p-6">
            <ScaleIcon className="h-6 w-6 text-[#0B1C2C]" />
            <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Geen lock‑in</h3>
            <p className="text-sm text-slate-700">Open standaarden, portable configuraties, en overdraagbare code.</p>
          </Card>
          <Card className="p-6">
            <ShieldIcon className="h-6 w-6 text-[#3A3F47]" />
            <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Privacy by design</h3>
            <p className="text-sm text-slate-700">Datalocatie, encryptie en toegangsbeheer geregeld vanaf dag één.</p>
          </Card>
        </Container>
      </section>
    </main>
  );
}

function ArticlesOverview({ onOpen }) {
  return (
    <main className="bg-[#FAFAFA] py-12">
      <Container>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Artikelen</h2>
            <p className="text-slate-600">Nieuws & updates (MDX-ready). Filters: categorie • sector • datum.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articleList.map((a) => (
            <Card key={a.slug} className="flex flex-col">
              <div className="h-28 rounded-t-2xl bg-gradient-to-br from-[#E6E6E6] to-white" />
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 text-xs text-slate-500">{new Date(a.date).toLocaleDateString()}</div>
                <h3 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>{a.title}</h3>
                <p className="mb-3 line-clamp-3 text-sm text-slate-700">{a.teaser}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="text-xs text-slate-500">{a.read} leestijd</div>
                  <Button variant="ghost" onClick={() => onOpen(a.slug)}>Lees verder</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}

function ArticlePage({ slug }) {
  const article = useMemo(() => articleList.find((a) => a.slug === slug) || articleList[0], [slug]);
  const mdx = `## Inleiding\n\nDit is een MDX-voorbeeld. Hier plaatsen we inzichten, grafieken en links.\n\n### Kernpunten\n- Meetbare KPI's per sprint\n- Transparantie in tooling en kosten\n- Governance & documentatie standaard inbegrepen\n\n### Conclusie\nEen pragmatische aanpak levert binnen 6–12 weken rendement.`;
  return (
    <main className="py-10">
      <Container className="grid gap-10 md:grid-cols-[1fr_280px]">
        <article>
          <h1 className="mb-2 text-3xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>{article.title}</h1>
          <div className="mb-6 text-sm text-slate-500">
            {new Date(article.date).toLocaleDateString()} • {article.read} leestijd
          </div>
          <Card className="mb-6 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[#0B1C2C]/10 to-copper/10" />
          </Card>
          <div className="prose prose-slate max-w-none">
            {/* Simple MDX-like rendering */}
            {mdx.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) return <h2 key={i}>{block.replace("## ", "")}</h2>;
              if (block.startsWith("### ")) return <h3 key={i}>{block.replace("### ", "")}</h3>;
              if (block.startsWith("- ")) return (
                <ul key={i}>
                  {block.split("\n").map((li, j) => (
                    <li key={j}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
              return <p key={i}>{block}</p>;
            })}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Button>Plan intake</Button>
            <Button variant="outline">Deel artikel</Button>
          </div>
        </article>
        <aside className="space-y-4">
          <Card className="p-4">
            <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>In dit artikel</h4>
            <ul className="list-disc pl-5 text-sm text-slate-700">
              <li>Inleiding</li>
              <li>Kernpunten</li>
              <li>Conclusie</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Gerelateerd</h4>
            <ul className="space-y-2 text-sm">
              {articleList.slice(0, 2).map((a) => (
                <li key={a.slug} className="text-[#0B1C2C] underline decoration-[#E6E6E6] underline-offset-[3px]">{a.title}</li>
              ))}
            </ul>
          </Card>
        </aside>
      </Container>
    </main>
  );
}

function UseCasesOverview({ onOpen }) {
  return (
    <main className="bg-[#FAFAFA] py-12">
      <Container>
        <h2 className="mb-2 text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Use‑cases</h2>
        <p className="mb-6 text-slate-600">Sectorfilter en uitkomst‑tags. Klik voor detail.</p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {useCaseList.map((u) => (
            <Card key={u.slug} className="p-5">
              <div className="h-16 rounded-xl bg-gradient-to-r from-[#E6E6E6] to-white" />
              <h3 className="mt-4 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>{u.name}</h3>
              <p className="mt-1 text-sm text-slate-700">{u.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {u.outcome.map((o, i) => (
                  <span key={i} className="rounded-full border border-[#E6E6E6] px-2 py-0.5 text-xs text-slate-600">{o}</span>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="ghost" onClick={() => onOpen(u.slug)}>Bekijk</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}

function UseCasePage({ slug }) {
  const uc = useMemo(() => useCaseList.find((u) => u.slug === slug) || useCaseList[0], [slug]);
  return (
    <main className="py-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <section>
            <h1 className="mb-2 text-3xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>{uc.name}</h1>
            <p className="mb-6 text-slate-700 max-w-2xl">{uc.blurb}</p>
            <Card className="mb-6 h-48 bg-gradient-to-br from-[#0B1C2C]/10 to-copper/10" />
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="p-5">
                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Probleem</h4>
                <p className="text-sm text-slate-700">Beschrijf de huidige frictie (wachttijd, handwerk, fouten, compliance‑risico).</p>
              </Card>
              <Card className="p-5">
                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Aanpak (AAE + Dev)</h4>
                <p className="text-sm text-slate-700">Sprints, integraties (n8n/ERP), evaluatiekaders en guardrails. Documentatie en overdraagbaarheid.</p>
              </Card>
              <Card className="p-5">
                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Impact</h4>
                <p className="text-sm text-slate-700">{uc.outcome.join(" · ")} — met KPI’s en payback‑schatting.</p>
              </Card>
            </div>
            <div className="mt-8 flex gap-3">
              <Button>Plan intake</Button>
              <Button variant="outline">Download 1‑pager</Button>
            </div>
          </section>
          <aside className="space-y-4">
            <Card className="p-4">
              <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Stack</h4>
              <ul className="list-disc pl-5 text-sm text-slate-700">
                <li>MDX content + Next.js</li>
                <li>n8n workflows</li>
                <li>ERP/CRM koppelvlak</li>
                <li>Evaluatie & logging</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Testimonial</h4>
              <p className="text-sm text-slate-700">“Binnen 8 weken zagen we –35% doorlooptijd en betere klanttevredenheid.”</p>
            </Card>
          </aside>
        </div>
      </Container>
    </main>
  );
}

function CookiePolicy() {
  return (
    <main className="bg-[#FAFAFA] py-12">
      <Container>
        <Card className="p-6">
          <h1 className="mb-2 text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Cookiebeleid</h1>
          <p className="mb-4 text-slate-700">Wij gebruiken cookies om onze site te laten functioneren en om het gebruik anoniem te analyseren. Voor niet‑essentiële cookies vragen wij jouw toestemming.</p>
          <div className="overflow-hidden rounded-xl border border-[#E6E6E6]">
            <table className="w-full text-sm">
              <thead className="bg-[#FAFAFA]">
                <tr>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Doel</th>
                  <th className="p-3 text-left">Bewaartermijn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E6E6E6]">
                  <td className="p-3">Noodzakelijk</td>
                  <td className="p-3">Basisfunctionaliteit, beveiliging, load‑balancing</td>
                  <td className="p-3">Sessie/12 mnd</td>
                </tr>
                <tr className="border-t border-[#E6E6E6]">
                  <td className="p-3">Statistiek</td>
                  <td className="p-3">Anonieme analyse (GA4 met IP‑masking)</td>
                  <td className="p-3">24 mnd</td>
                </tr>
                <tr className="border-t border-[#E6E6E6]">
                  <td className="p-3">Marketing</td>
                  <td className="p-3">LinkedIn Insight Tag voor campagne‑effect</td>
                  <td className="p-3">6–24 mnd</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex gap-3">
            <Button>Alles accepteren</Button>
            <Button variant="outline">Alles weigeren</Button>
            <Button variant="ghost">Instellingen</Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="border-t border-[#E6E6E6] bg-white py-10 text-sm">
      <Container className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'Sora, Inter, ui-sans-serif' }}>Nova Horizon</div>
          <p className="text-slate-600">De executive AI‑partner voor Nederland.</p>
        </div>
        <div>
          <div className="mb-2 font-semibold text-[#0B1C2C]">Pagina's</div>
          <ul className="space-y-1">
            <li><button onClick={() => setPage(PAGES.HOME)} className="text-slate-600 hover:text-[#0B1C2C]">Home</button></li>
            <li><button onClick={() => setPage(PAGES.ARTICLES)} className="text-slate-600 hover:text-[#0B1C2C]">Artikelen</button></li>
            <li><button onClick={() => setPage(PAGES.USECASES)} className="text-slate-600 hover:text-[#0B1C2C]">Use‑cases</button></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold text-[#0B1C2C]">Juridisch</div>
          <ul className="space-y-1">
            <li><button onClick={() => setPage(PAGES.COOKIE)} className="text-slate-600 hover:text-[#0B1C2C]">Cookiebeleid</button></li>
            <li className="text-slate-400">Privacyverklaring (placeholder)</li>
            <li className="text-slate-400">Algemene Voorwaarden (placeholder)</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 font-semibold text-[#0B1C2C]">Contact</div>
          <p className="text-slate-600">info@novahorizon.nl<br />+31 (0)70 000 0000</p>
          <div className="mt-3"><Button>Plan intake</Button></div>
        </div>
      </Container>
    </footer>
  );
}

function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[min(100%,64rem)] px-4">
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-4 shadow-lg md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          We gebruiken cookies voor functionaliteit en anonieme statistiek. Je kunt je voorkeuren aanpassen.
        </p>
        <div className="flex gap-2">
          <Button onClick={() => setVisible(false)}>Accepteren</Button>
          <Button variant="outline" onClick={() => setVisible(false)}>Weigeren</Button>
          <Button variant="ghost">Instellingen</Button>
        </div>
      </div>
    </div>
  );
}

export default function NovaHorizonExecutiveDemo() {
  const [page, setPage] = useState(PAGES.HOME);
  const [articleSlug, setArticleSlug] = useState(articleList[0].slug);
  const [usecaseSlug, setUsecaseSlug] = useState(useCaseList[0].slug);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
      <Nav page={page} setPage={setPage} />

      {page === PAGES.HOME && <Home />}
      {page === PAGES.ARTICLES && (
        <ArticlesOverview onOpen={(slug) => { setArticleSlug(slug); setPage(PAGES.ARTICLE); }} />
      )}
      {page === PAGES.ARTICLE && <ArticlePage slug={articleSlug} />}
      {page === PAGES.USECASES && (
        <UseCasesOverview onOpen={(slug) => { setUsecaseSlug(slug); setPage(PAGES.USECASE); }} />
      )}
      {page === PAGES.USECASE && <UseCasePage slug={usecaseSlug} />}
      {page === PAGES.COOKIE && <CookiePolicy />}

      <Footer setPage={setPage} />
      <CookieBanner />
    </div>
  );
}
