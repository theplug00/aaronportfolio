import { useState } from "react";
import { faqs } from "../data";
import { Fade } from "../ui";

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.3em] text-gold">06</span>
              <span className="h-px w-12 bg-sage/40" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">FAQ</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[0.98] tracking-tight">
              Asked,
              <br />
              <span className="text-outline">answered.</span>
            </h2>
            <p className="mt-7 max-w-sm leading-relaxed text-fog">
              The questions every new client asks — answered here so our first
              call can be about your project.
            </p>
            <a
              href="mailto:godsona504@gmail.com"
              className="link-sweep mt-8 inline-block font-mono text-sm tracking-[0.06em] text-sage"
            >
              Something else? → godsona504@gmail.com
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Fade>
            <ul className="border-t border-cream/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-cream/10">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className={`font-mono text-xs ${isOpen ? "text-gold" : "text-fog"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl ${
                            isOpen ? "text-sage" : "group-hover:text-sage/85"
                          }`}
                        >
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 font-display text-2xl leading-none transition-transform duration-500 ${
                          isOpen ? "rotate-45 text-gold" : "text-fog"
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div className={`acc-body ${isOpen ? "open" : ""}`}>
                      <div className="acc-inner">
                        <p className="max-w-xl pb-7 pl-[2.9rem] leading-relaxed text-fog">{f.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
}
