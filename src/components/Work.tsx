import { useEffect, useState } from "react";
import { projects, type Project } from "../data";
import { useReducedMotion } from "../hooks";
import { ArrowIcon, Fade, SectionHead } from "../ui";

function CaseModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [shown, setShown] = useState(false);

  const handleClose = () => {
    setShown(false);
    window.setTimeout(onClose, 350);
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[85] overflow-y-auto transition-opacity duration-300 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <div
        className="fixed inset-0 bg-ink/85 backdrop-blur-md"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className={`relative mx-auto my-6 w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] md:my-14 ${
          shown ? "translate-y-0 scale-100" : "translate-y-10 scale-[0.98]"
        }`}
      >
        <div className="overflow-hidden rounded-[22px] border border-cream/12 bg-pine shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          <div className="relative h-60 md:h-96">
            <img
              src={project.image}
              alt={`${project.name} — ${project.sector}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/20 to-transparent" />
            <button
              onClick={handleClose}
              className="glass absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-cream transition-all duration-300 hover:rotate-90 hover:bg-sage hover:text-ink"
              aria-label="Close case study"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="p-7 md:p-12">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                  {project.sector} — {project.year}
                </p>
                <h3 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
                  {project.name}
                </h3>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
                {project.role}
              </p>
            </div>

            <p className="mb-8 border-l-2 border-sage pl-5 font-display text-xl font-medium leading-snug text-cream md:text-2xl">
              {project.tagline}
            </p>

            <div className="mb-10 grid gap-5 md:grid-cols-2">
              {project.description.map((p, i) => (
                <p key={i} className="leading-relaxed text-fog">
                  {p}
                </p>
              ))}
            </div>

            <div className="mb-10 grid gap-px overflow-hidden rounded-xl border border-cream/10 bg-cream/10 sm:grid-cols-3">
              {project.outcomes.map((o) => (
                <div key={o.label} className="bg-pine p-5">
                  <p className="font-display text-3xl font-semibold text-sage">{o.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-cream/12 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fog"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={handleClose}
                className="group flex items-center gap-3 rounded-full bg-sage px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors duration-300 hover:bg-gold"
              >
                Start something similar
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<Project | null>(null);

  const jumpTo = (id: string) => {
    document.getElementById(`proj-${id}`)?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        index="01"
        label="Selected work"
        title={
          <>
            Built to feel <span className="text-outline">weightless</span>.
          </>
        }
        right={
          <p className="font-mono text-xs leading-relaxed tracking-[0.14em] text-fog">
            2019 → 2026 · 48 shipped
            <br />
            four favourites, zero regrets
          </p>
        }
      />

      <div className="grid gap-14 lg:grid-cols-12">
        {/* sticky index */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-32">
            <p className="mb-8 max-w-xs leading-relaxed text-fog">
              Every project here shipped on time, under budget, and still runs
              quiet. Open any one for the full story.
            </p>
            <ul className="border-t border-cream/10">
              {projects.map((p, i) => (
                <li key={p.id} className="border-b border-cream/10">
                  <button
                    onClick={() => jumpTo(p.id)}
                    className="group flex w-full items-baseline gap-4 py-4 text-left"
                  >
                    <span className="font-mono text-xs text-gold">0{i + 1}</span>
                    <span className="font-display text-2xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-sage">
                      {p.name}
                    </span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                      {p.year}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              Currently booking Q3 2026
            </p>
          </div>
        </div>

        {/* project rows */}
        <div className="space-y-24 lg:col-span-8">
          {projects.map((p, i) => (
            <Fade key={p.id} delay={80}>
              <article id={`proj-${p.id}`} className="group">
                <button
                  onClick={() => setActive(p)}
                  data-hover
                  className="block w-full text-left"
                  aria-label={`Open ${p.name} case study`}
                >
                  <div className="relative overflow-hidden rounded-[18px] border border-cream/10">
                    <img
                      src={p.image}
                      alt={`${p.name} interface`}
                      loading="lazy"
                      className={`aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.045] ${
                        i % 2 ? "md:object-right" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                    <span className="glass absolute left-5 top-5 rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-cream">
                      {p.sector}
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold">
                      <ArrowIcon className="h-5 w-5 -rotate-45" />
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-sage md:text-4xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 max-w-lg leading-relaxed text-fog">{p.tagline}</p>
                    </div>
                    <span className="font-display text-2xl font-medium text-cream/25">
                      0{i + 1}
                    </span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-cream/10 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fog transition-colors duration-300 group-hover:border-sage/40 group-hover:text-sage"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </button>
              </article>
            </Fade>
          ))}
        </div>
      </div>

      {active ? <CaseModal project={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}
