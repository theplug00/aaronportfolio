import { useEffect, useState } from "react";
import { useInView, useScramble } from "../hooks";
import { ArrowIcon, Magnetic, Reveal } from "../ui";

function EqBars({ delay = 0 }: { delay?: number }) {
  return (
    <span className="flex h-5 items-end gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-sage"
          style={{ height: "100%", animationDelay: `${delay + i * 0.18}s` }}
        />
      ))}
    </span>
  );
}

function Vitals() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const rows = [
    { label: "LCP", value: "0.8s" },
    { label: "INP", value: "12ms" },
    { label: "CLS", value: "0.00" },
  ];
  return (
    <div ref={ref} className="relative">
      {/* breathing orb behind the panel */}
      <div
        className="animate-breathe absolute -right-10 -top-14 -z-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-breathe absolute -bottom-16 -left-10 -z-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
        style={{ animationDelay: "2.5s" }}
        aria-hidden="true"
      />

      <div className="glass rounded-[22px] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.12)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">
            Live vitals
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse-soft" />
            aaron.dev
          </span>
        </div>

        <ul className="divide-y divide-cream/8">
          {rows.map((r, i) => (
            <li key={r.label} className="flex items-center justify-between py-3.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                {r.label}
              </span>
              <EqBars delay={i * 0.3} />
              <span className="font-display text-xl font-semibold tabular-nums">
                {r.value}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-2 border-t border-cream/8 pt-4">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              Lighthouse
            </span>
            <span className="font-display text-2xl font-semibold text-sage tabular-nums">
              99<span className="text-sm text-fog">/100</span>
            </span>
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-cream/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-mint to-sage transition-[width] duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{ width: inView ? "99%" : "4%" }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-fern/70 px-4 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            Stress index
          </span>
          <span className="font-display text-lg font-semibold text-gold">0.0% ▼</span>
        </div>
      </div>

      {/* rotating badge */}
      <div className="animate-spin-slow absolute -left-12 -top-12 hidden h-28 w-28 md:block" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <circle cx="50" cy="50" r="49" className="fill-ink/60" />
          <text className="fill-sage font-mono text-[8.2px] uppercase" style={{ letterSpacing: "1.8px" }}>
            <textPath href="#badge-circle">stress-free web · est. 2019 ·</textPath>
          </text>
        </svg>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold">
          <ArrowIcon className="h-4 w-4 rotate-90" />
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(id);
  }, []);
  const calm = useScramble("CALM", ready, 60);

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ambient background */}
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-40 top-[-20%] h-[42rem] w-[42rem] rounded-full bg-mint/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-15%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-gold/[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-14 px-6 pb-16 pt-36 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-40">
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            <span className="h-2 w-2 rounded-full bg-sage animate-pulse-soft" />
            Frontend studio — portfolio 2026
          </div>

          <h1 className="font-display text-[clamp(3.6rem,12.5vw,10.5rem)] font-semibold leading-[0.9] tracking-[-0.02em]">
            <Reveal>
              <span className="tabular-nums">{calm}</span>
              <span className="text-gold">.</span>
            </Reveal>
            <Reveal delay={120}>
              <span className="text-fog">is a</span>
            </Reveal>
            <Reveal delay={240}>
              <span className="text-outline">feature</span>
            </Reveal>
          </h1>

          <Reveal delay={360}>
            <p className="mt-9 max-w-md text-lg leading-relaxed text-fog">
              Aaron Dev designs and engineers websites that load fast, feel
              light and never raise your blood pressure.{" "}
              <span className="text-cream">Frontend without the friction.</span>
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Magnetic>
              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-sage px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-cream"
              >
                See the work
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowIcon className="h-4 w-4 rotate-90" />
                </span>
              </a>
            </Magnetic>
            <a
              href="mailto:hello@aarondev.studio"
              className="link-sweep font-mono text-sm tracking-[0.08em] text-sage"
            >
              hello@aarondev.studio
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Vitals />
        </div>
      </div>

      {/* bottom strip */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 md:px-10">
        <div className="flex items-center gap-4">
          <span className="relative block h-10 w-px overflow-hidden bg-cream/15">
            <span className="animate-scroll-cue absolute inset-0 bg-sage" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            Scroll — the calm continues
          </span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-fog sm:block">
          6.5244° N, 3.3792° E — remote worldwide
        </span>
      </div>
    </section>
  );
}
