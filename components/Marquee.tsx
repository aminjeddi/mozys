"use client";

const items = [
  "CHARCOAL GRILLED",
  "HALAL",
  "MADE FRESH DAILY",
  "TORONTO",
  "JUICY",
  "CULT SAUCES",
];

function Track({ aria }: { aria?: boolean }) {
  return (
    <div
      aria-hidden={!aria}
      className="marquee-track flex items-center shrink-0"
    >
      {items.map((t, i) => (
        <span
          key={i}
          className="font-display text-2xl md:text-4xl tracking-wide flex items-center shrink-0"
        >
          <span className="px-6 md:px-10">{t}</span>
          <span aria-hidden className="px-6 md:px-10">★</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-ember text-coal py-5 overflow-hidden">
      <div className="marquee flex w-max">
        <Track aria />
        <Track />
      </div>
    </section>
  );
}
