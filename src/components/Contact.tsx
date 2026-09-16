import { useState, type FormEvent } from "react";
import { useClock } from "../hooks";
import { ArrowIcon, Magnetic, Reveal } from "../ui";

const inputClass =
  "w-full border-b border-cream/15 bg-transparent py-3 text-cream placeholder:text-fog/60 outline-none transition-colors duration-300 focus:border-sage";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const time = useClock("Africa/Accra");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-cream/8 bg-pine/60">
      <div
        className="absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-mint/20 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-28 md:px-10 md:pt-40">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          07 — Next project
        </p>
        <h2 className="font-display text-[clamp(3rem,9.5vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.02em]">
          <Reveal>Let's make it</Reveal>
          <Reveal delay={140}>
            <span className="text-outline">feel effortless.</span>
          </Reveal>
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          {/* details */}
          <div className="space-y-10 lg:col-span-5">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">Email us</p>
              <a
                href="mailto:godsona504@gmail.com"
                className="link-sweep font-display text-2xl font-semibold tracking-tight text-cream transition-colors hover:text-sage md:text-4xl"
              >
                godsona504@gmail.com
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">Response time</p>
                <p className="font-display text-xl font-medium">≤ 24 hours</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">usually much faster</p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">Studio time</p>
                <p className="font-display text-xl font-medium tabular-nums">
                  {time} <span className="text-sage">GMT</span>
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Accra — remote worldwide</p>
              </div>
            </div>
            <div className="glass inline-flex items-center gap-3 rounded-full px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse-soft" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage">
                2 build slots open.
              </span>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[22px] p-7 md:p-10">
              {sent ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-ink">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Received.</h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-fog">
                    Expect a reply within 24 hours — usually faster. Until then:
                    breathe easy, the hard part is over.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="link-sweep mt-8 font-mono text-xs uppercase tracking-[0.25em] text-sage"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-7 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Name</span>
                    <input type="text" name="name" required placeholder="Ada Lovelace" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Email</span>
                    <input type="email" name="email" required placeholder="ada@gmail.com" className={inputClass} />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Budget</span>
                    <select name="budget" className={`${inputClass} appearance-none`} defaultValue="$8k – $25k">
                      <option className="bg-pine">Under ¢2k</option>
                      <option className="bg-pine">¢3k – ¢5k</option>
                      <option className="bg-pine">¢6k+</option>
                      <option className="bg-pine">Not sure yet</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-fog">
                      What are we building?
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="A website that finally doesn't stress us out…"
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                  <div className="md:col-span-2">
                    <Magnetic className="w-full">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-full bg-sage px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-cream"
                      >
                        Send it — stress-free
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                          <ArrowIcon className="h-4 w-4" />
                        </span>
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="mt-28 border-t border-cream/10 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <p className="text-outline-cream select-none font-display text-[clamp(2.2rem,7vw,5.5rem)] font-bold leading-none tracking-tight">
              AARON DEV
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/15 transition-all duration-500 hover:-translate-y-1.5 hover:border-sage hover:bg-sage hover:text-ink"
            >
              <ArrowIcon className="h-5 w-5 -rotate-90" />
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-cream/10 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-fog md:flex-row md:items-center md:justify-between">
            <p>© 2026 Aaron Dev — built calm,</p>
            <ul className="flex flex-wrap gap-6">
              {[
                { label: "Instagram", href: "https://www.instagram.com/99.freaky?stkn=MXNnM3N2emV2Y3djZg%3D%3D&utm_source=qr" },
                { label: "LinkedIn", href: "" },
                { label: "X", href: "https://x.com/bigdripo?s=11" },
                { label: "Facebook", href: "https://www.facebook.com/share/1J46HnrynL/?mibextid=wwXIfr" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep transition-colors hover:text-sage"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
        </footer>
      </div>
    </section>
  );
}
