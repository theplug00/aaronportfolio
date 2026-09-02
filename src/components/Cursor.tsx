import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks";

export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const en = fine && !reduced;
    setEnabled(en);
    document.documentElement.classList.toggle("has-cursor", en);
    if (!en) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHot(!!t?.closest("a, button, [role=button], input, textarea, select, [data-hover]"));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [reduced]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-5 -mt-5 h-10 w-10"
      >
        <div
          className={`h-full w-full rounded-full border transition-all duration-300 ease-out ${
            hot ? "scale-150 border-sage bg-sage/10" : "scale-100 border-cream/25 bg-transparent"
          }`}
        />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[91] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-sage"
      />
    </>
  );
}
