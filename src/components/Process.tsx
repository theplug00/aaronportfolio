import { phases } from "../data";
import { SectionHead } from "../ui";

export default function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <SectionHead
        index="03"
        label="Method"
        title={
          <>
            Four phases.
            <br />
            <span className="text-outline">Zero surprises.</span>
          </>
        }
        right={
          <p className="leading-relaxed text-fog">
            The same choreographed process on every project — because
            predictability is the whole point. Cards stack as you scroll.
          </p>
        }
      />

      <div className="relative">
        {phases.map((ph, i) => (
          <div
            key={ph.n}
            className="sticky mb-8"
            style={{ top: `calc(6rem + ${i * 1.75}rem)` }}
          >
            <div
              className={`grid gap-8 rounded-[22px] border border-cream/12 bg-gradient-to-br from-moss to-pine p-8 shadow-[0_-20px_60px_rgba(0,0,0,0.35)] md:grid-cols-12 md:gap-10 md:p-14 ${
                i % 2 ? "lg:rotate-[0.35deg]" : "lg:-rotate-[0.35deg]"
              }`}
            >
              <div className="md:col-span-3">
                <span className="text-outline-cream font-display text-7xl font-bold leading-none md:text-8xl">
                  {ph.n}
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-3xl font-semibold tracking-tight text-sage md:text-5xl">
                  {ph.title}
                </h3>
                <p className="mt-5 max-w-md leading-relaxed text-fog">{ph.body}</p>
              </div>
              <ul className="space-y-4 self-center md:col-span-4">
                {ph.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-4 border-t border-cream/10 pt-4">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-cream/85">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
