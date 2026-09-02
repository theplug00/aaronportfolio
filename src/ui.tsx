import {
  useRef,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { useInView, useReducedMotion } from "./hooks";

const delayStyle = (delay: number): CSSProperties =>
  ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

/** Line-mask reveal — the site's signature text entrance. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className={`reveal-mask ${className}`}>
      <span
        className={`reveal-line ${inView ? "is-in" : ""}`}
        style={delayStyle(delay)}
      >
        {children}
      </span>
    </span>
  );
}

/** Soft fade-up entrance for blocks and list items. */
export function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`fade-item ${inView ? "is-in" : ""} ${className}`}
      style={delayStyle(delay)}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  index,
  label,
  title,
  right,
}: {
  index: string;
  label: string;
  title: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-gold">
          {index}
        </span>
        <span className="h-px w-12 bg-sage/40" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          {label}
        </span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <h2 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
          {title}
        </h2>
        {right ? <div className="max-w-sm">{right}</div> : null}
      </div>
    </div>
  );
}

/** Magnetic hover — element gently leans toward the cursor. */
export function Magnetic({
  children,
  strength = 0.22,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
