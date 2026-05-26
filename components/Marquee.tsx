"use client";

const items = [
  "CHARCOAL GRILLED",
  "HALAL",
  "MADE FRESH DAILY",
  "TORONTO",
  "JUICY",
  "CULT SAUCES",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="bg-ember text-coal py-5 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl tracking-wide flex items-center gap-10"
          >
            {t}
            <span className="inline-block">★</span>
          </span>
        ))}
      </div>
    </section>
  );
}
