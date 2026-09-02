import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks";

const WORD = "AARON DEV";
const STATUS = [
  "warming the palette",
  "hydrating components",
  "compressing the calm",
  "zeroing the stress",
];

export default function Preloader({ onGone }: { onGone: () => void }) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const duration = reduced ? 400 : 1750;
    let raf = 0;
    let timeout = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = reduced ? p : 1 - Math.pow(1 - p, 2.4);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timeout = window.setTimeout(() => setLeaving(true), reduced ? 60 : 340);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      document.body.style.overflow = prev;
    };
  }, [reduced]);

  useEffect(() => {
    if (!leaving) return;
    const id = window.setTimeout(onGone, reduced ? 50 : 900);
    return () => window.clearTimeout(id);
  }, [leaving, onGone, reduced]);

  const status = STATUS[Math.min(STATUS.length - 1, Math.floor(progress / 26))];

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-ink transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full" : ""
      }`}
      aria-hidden={leaving}
    >
      {/* progress hairline */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-cream/5">
        <div
          className="h-full bg-sage transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between px-6 pt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-fog md:px-10">
        <span>Aaron Dev — Studio</span>
        <span className="hidden sm:inline">Loading experience</span>
      </div>

      <div className="flex items-center justify-center px-6">
        <h1 className="font-display text-[clamp(2.6rem,10vw,7.5rem)] font-semibold leading-none tracking-tight">
          {WORD.split("").map((ch, i) => {
            const visible = progress >= ((i + 1) / (WORD.length + 1)) * 100;
            return (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  ch === " " ? "w-[0.35em]" : ""
                } ${visible ? "translate-y-0 opacity-100" : "translate-y-[0.5em] opacity-0"}`}
                style={{ transitionDelay: reduced ? "0ms" : `${i * 18}ms` }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            );
          })}
          <span className="ml-2 inline-block h-[0.16em] w-[0.16em] rounded-full bg-gold align-middle" />
        </h1>
      </div>

      <div className="flex items-end justify-between px-6 pb-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage">
          {status}…
        </p>
        <p className="font-display text-[clamp(2rem,6vw,4rem)] font-medium leading-none text-cream/90 tabular-nums">
          {progress}
          <span className="text-sage">%</span>
        </p>
      </div>
    </div>
  );
}
