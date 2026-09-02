import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#services" },
  { label: "Method", href: "#process" },
  { label: "Studio", href: "#studio" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress hairline */}
      <div className="fixed left-0 top-0 z-[72] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-sage to-gold"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed left-1/2 top-4 z-[71] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "glass rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.35)]" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 py-3 md:px-7">
          <a href="#top" className="group flex items-center gap-3" aria-label="Aaron Dev — home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-sage text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 3 20 21h-3.4L12 10.4 7.4 21H4L12 3Z" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Aaron<span className="text-sage"> Dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-sweep font-mono text-[11px] uppercase tracking-[0.22em] text-fog transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="group hidden items-center gap-2.5 rounded-full border border-sage/40 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-sage transition-all duration-300 hover:bg-sage hover:text-ink sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              Start a project
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/15 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={`h-px w-4 bg-cream transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-4 bg-cream transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-cream/8 py-4"
              >
                <span className="font-mono text-xs text-gold">0{i + 1}</span>
                <span className="font-display text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-3 group-hover:text-sage">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
          <a href="mailto:hello@aarondev.studio" className="link-sweep text-sage">
            hello@aarondev.studio
          </a>
          <span>Lagos · worldwide</span>
        </div>
      </div>
    </>
  );
}
