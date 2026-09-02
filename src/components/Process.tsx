import { phases } from "../data";
import { Reveal } from "../ui";

export default function Process() {
  return (
    <section id="process" className="relative bg-cream text-ink">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="mb-14 md:mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-ink/45">03</span>
            <span className="h-px w-12 bg-ink/25" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/55">Method</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
              <Reveal>Four phases.</Reveal>
              <Reveal delay={120}>
                <span className="text-outline-ink">Zero surprises.</span>
              </Reveal>
            </h2>
            <p className="max-w-sm leading-relaxed text-ink/60">
              The same choreographed process on every project — because
              predictability is the whole point. Cards stack as you scroll.
            </p>
          </div>
        </div>

        <div className="relative">
          {phases.map((ph, i) => (
            <div
              key={ph.n}
              className="sticky mb-8"
              style={{ top: `calc(6rem + ${i * 1.75}rem)` }}
            >
              <div
                className={`grid gap-8 rounded-[22px] border border-ink/15 bg-gradient-to-br from-white to-[#e7e7e2] p-8 shadow-[0_-24px_60px_rgba(0,0,0,0.18)] md:grid-cols-12 md:gap-10 md:p-14 ${
                  i % 2 ? "lg:rotate-[0.35deg]" : "lg:-rotate-[0.35deg]"
                }`}
              >
                <div className="md:col-span-3">
                  <span className="text-outline-ink font-display text-7xl font-bold leading-none md:text-8xl">
                    {ph.n}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                    {ph.title}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-ink/60">{ph.body}</p>
                </div>
                <ul className="space-y-4 self-center md:col-span-4">
                  {ph.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-4 border-t border-ink/12 pt-4">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/75">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
