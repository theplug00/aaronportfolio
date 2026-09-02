import { useState } from "react";
import { services } from "../data";
import { Fade, SectionHead } from "../ui";

export default function Services() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="services" className="relative border-t border-cream/8 bg-pine/60">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <SectionHead
          index="02"
          label="Capabilities"
          title={
            <>
              Everything a calm
              <br />
              web presence <span className="text-outline-cream">needs</span>.
            </>
          }
          right={
            <p className="leading-relaxed text-fog">
              Five disciplines, one team, zero hand-offs into the void. Expand
              each to see what you actually get.
            </p>
          }
        />

        <Fade>
          <ul className="border-t border-cream/10">
            {services.map((s, i) => {
              const isOpen = open === i;
              return (
                <li key={s.n} className="border-b border-cream/10">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-7 text-left md:gap-10 md:py-9"
                  >
                    <span
                      className={`font-mono text-xs tracking-[0.2em] transition-colors duration-300 ${
                        isOpen ? "text-gold" : "text-fog"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`font-display text-2xl font-semibold tracking-tight transition-all duration-500 md:text-5xl ${
                        isOpen ? "translate-x-2 text-sage" : "text-cream group-hover:translate-x-2 group-hover:text-sage/80"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`relative ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? "rotate-45 border-sage bg-sage text-ink"
                          : "border-cream/15 text-cream group-hover:border-sage group-hover:text-sage"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute h-3.5 w-px bg-current" />
                      <span className="absolute h-px w-3.5 bg-current" />
                    </span>
                  </button>

                  <div className={`acc-body ${isOpen ? "open" : ""}`}>
                    <div className="acc-inner">
                      <div className="grid gap-8 pb-10 pl-0 md:grid-cols-12 md:pl-[4.5rem]">
                        <p className="max-w-xl leading-relaxed text-fog md:col-span-6">
                          {s.body}
                        </p>
                        <div className="md:col-span-4">
                          <ul className="flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <li
                                key={t}
                                className="rounded-full bg-fern px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-sage"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold md:col-span-2 md:text-right">
                          {s.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </section>
  );
}
