import { useEffect, useState } from "react";
import { stats, testimonials } from "../data";
import { useCountUp, useInView, useReducedMotion } from "../hooks";
import { Fade, SectionHead } from "../ui";

function Stat({
  value,
  suffix,
  label,
  note,
  accent,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  accent?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const n = useCountUp(value, inView, 1600);
  return (
    <div ref={ref} className="group px-6 py-10 transition-colors duration-500 hover:bg-cream/[0.03] md:px-10 md:py-14">
      <p
        className={`font-display font-semibold leading-none tracking-tight tabular-nums ${
          accent ? "text-[clamp(3rem,7vw,5.5rem)] text-sage" : "text-[clamp(2.4rem,5vw,4rem)] text-cream"
        }`}
      >
        {n}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/85">{label}</p>
      <p className="mt-2 max-w-[22ch] font-mono text-[10px] leading-relaxed tracking-[0.08em] text-fog">
        {note}
      </p>
    </div>
  );
}

function Testimonials() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => window.clearInterval(id);
  }, [reduced, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <figure key={t.name} className="w-full shrink-0 px-1">
              <span className="font-display text-7xl leading-none text-gold" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-2 max-w-4xl font-display text-2xl font-medium leading-snug tracking-tight text-cream md:text-4xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fern font-display text-sm font-semibold text-sage">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <span>
                  <span className="block font-display font-semibold">{t.name}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-2.5">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show quote ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-sage" : "w-4 bg-cream/20 hover:bg-cream/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous quote"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 transition-all duration-300 hover:border-sage hover:bg-sage hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M20 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => setIndex((index + 1) % testimonials.length)}
            aria-label="Next quote"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 transition-all duration-300 hover:border-sage hover:bg-sage hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="relative border-t border-cream/8">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        {/* stats strip */}
        <Fade>
          <div className="mb-28 grid grid-cols-1 divide-y divide-cream/10 rounded-[22px] border border-cream/10 sm:grid-cols-2 sm:divide-x md:mb-36 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} accent={i === 0} />
            ))}
          </div>
        </Fade>

        <SectionHead
          index="04"
          label="Kind words"
          title={
            <>
              Clients sleep <span className="text-outline">better</span>.
            </>
          }
        />
        <Fade>
          <Testimonials />
        </Fade>
      </div>
    </section>
  );
}
