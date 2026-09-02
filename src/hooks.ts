import { useEffect, useRef, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

type InViewOptions = IntersectionObserverInit & { once?: boolean };

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: InViewOptions
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { once = true, ...init } = options ?? {};
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px", ...init }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { ref, inView };
}

const SCRAMBLE_CHARS = "#$%&/<>*+=~";

export function useScramble(text: string, active: boolean, speed = 34): string {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(() =>
    reduced ? text : text.replace(/\S/g, " ")
  );
  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }
    if (!active) return;
    let frame = 0;
    const totalFrames = Math.max(16, text.length * 3);
    const id = window.setInterval(() => {
      frame += 1;
      const settled = Math.floor((frame / totalFrames) * text.length);
      if (frame >= totalFrames) {
        setDisplay(text);
        window.clearInterval(id);
        return;
      }
      let out = "";
      for (let i = 0; i < text.length; i += 1) {
        const c = text[i];
        if (c === " ") {
          out += " ";
        } else if (i < settled) {
          out += c;
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplay(out);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, active, speed, reduced]);
  return display;
}

export function useCountUp(target: number, active: boolean, duration = 1500): number {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? target : 0);
  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration, reduced]);
  return value;
}

export function useClock(timeZone: string): string {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone,
      hour12: false,
    }).format(now);
  } catch {
    return now.toLocaleTimeString();
  }
}
