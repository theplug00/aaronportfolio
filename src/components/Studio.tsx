import { clients, tools } from "../data";
import { Fade, Reveal } from "../ui";

const principles = [
  {
    n: "i.",
    title: "Calm over clever",
    body: "If a visitor needs a tutorial, we redesign — we don't write documentation.",
  },
  {
    n: "ii.",
    title: "Ship weekly, not quarterly",
    body: "Progress you can click every Friday beats a big reveal nobody saw coming.",
  },
  {
    n: "iii.",
    title: "Performance is empathy",
    body: "Every 100ms we shave is a small kindness to someone on a slow connection.",
  },
  {
    n: "iv.",
    title: "No dark patterns, ever",
    body: "We don't trick people into clicking. Trust converts better anyway.",
  },
  {
    n: "v.",
    title: "Handover without hostage",
    body: "Clean repos, real documentation, and a team trained to live without us.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="relative border-t border-cream/8 bg-pine/60">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* sticky manifesto */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.3em] text-gold">05</span>
                <span className="h-px w-12 bg-sage/40" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">The studio</span>
              </div>

              <h2 className="font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-semibold leading-[0.98] tracking-tight">
                <Reveal>Stress is a</Reveal>
                <Reveal delay={120}>
                  <span className="text-outline">design flaw.</span>
                </Reveal>
              </h2>

              <Reveal delay={240}>
                <p className="mt-8 max-w-md leading-relaxed text-fog">
                  Aaron Dev is a small, senior frontend studio. No account
                  managers, no telephone games — you talk to the people writing
                  your code, and they answer within a day. We started the
                  studio after watching too many good teams drown in chaotic
                  builds, and decided the antidote was simple:{" "}
                  <span className="text-cream">make calm the deliverable.</span>
                </p>
              </Reveal>

              <Fade delay={200}>
                <div className="mt-12">
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                    Trusted by teams at
                  </p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {clients.map((c) => (
                      <li
                        key={c}
                        className="border-t border-cream/10 pt-3 font-display text-xl font-medium tracking-tight text-fog transition-all duration-300 hover:translate-x-2 hover:text-sage"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fade>
            </div>
          </div>

          {/* right column */}
          <div className="space-y-14 lg:col-span-6">
            <Fade>
              <figure className="group relative overflow-hidden rounded-[22px] border border-cream/10">
                <div className="overflow-hidden">
                  <img
                    src="https://image.qwenlm.ai/generated-images/a5f80ed9-49f7-4f16-bf24-4ea7150dd1b3/_result.png"
                    alt="The Aaron Dev studio — a calm desk setup with code on screen"
                    loading="lazy"
                    className="animate-kenburns aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink backdrop-blur-md">
                  Where the calm is manufactured
                </figcaption>
              </figure>
            </Fade>

            <Fade>
              <ul>
                {principles.map((p) => (
                  <li
                    key={p.title}
                    className="group border-t border-cream/10 py-6 transition-all duration-500 last:border-b hover:bg-cream/[0.025] hover:pl-4"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-sm text-gold">{p.n}</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-sage md:text-3xl">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-md pl-[2.6rem] leading-relaxed text-fog">{p.body}</p>
                  </li>
                ))}
              </ul>
            </Fade>

            <Fade>
              <div>
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                  Daily instruments
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-cream/12 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:text-sage"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
