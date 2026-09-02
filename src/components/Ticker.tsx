export default function Ticker({
  items,
  reverse = false,
  duration = 30,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-2xl font-medium tracking-tight text-cream/80 md:px-9 md:text-4xl">
            {item}
          </span>
          <svg viewBox="0 0 20 20" className="h-4 w-4 text-gold" fill="currentColor" aria-hidden="true">
            <path d="M10 0c.4 4.5 1.6 7.4 3.2 8.6C14.6 9.7 17 10 10 10s-4.6.3-3.2-.8C8.4 8 9.6 4.5 10 0Zm0 20c-.4-4.5-1.6-7.4-3.2-8.6C5.4 10.3 3 10 10 10s4.6-.3 3.2.8C11.6 12 10.4 15.5 10 20ZM0 10c4.5-.4 7.4-1.6 8.6-3.2C9.7 5.4 10 3 10 10s.3 4.6-.8 3.2C8 11.6 4.5 10.4 0 10Zm20 0c-4.5.4-7.4 1.6-8.6 3.2-1.1 1.4-1.4 3.8-1.4-3.2s-.3-4.6.8-3.2C12 8.4 15.5 9.6 20 10Z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`group relative overflow-hidden border-y border-cream/8 py-5 md:py-7 ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div
        className={`marquee-track flex w-max group-hover:[animation-play-state:paused] ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {row(false)}
        {row(true)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
