"use client";

import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "Best chicken in the city. Juicy, tender, smoky, crispy skin. I'm Portuguese and we love our chicken — this is something else.",
    name: "Jamie Bravo",
    meta: "Dine in · Lunch",
  },
  {
    quote:
      "Fine-dining, chef-level food in takeout form. That charred pepper sauce was insanely addictive and seriously delicious.",
    name: "Ok Sun",
    meta: "Local Guide · 316 reviews",
  },
  {
    quote: "10/10 vibes, quality, customer service. Incredible value. No notes.",
    name: "Renee Huebel",
    meta: "Take out · Dinner",
  },
  {
    quote:
      "Drove from the East end and it was well worth it. Slinging out charcoal chickens like a well-oiled machine. Truly chasing excellence.",
    name: "Raiyan Khair",
    meta: "Local Guide · 314 reviews",
  },
  {
    quote:
      "Beautifully charred yet still moist. Labneh thick and creamy. Prices reasonable for the quality and portion size.",
    name: "Angela A.",
    meta: "Local Guide · 416 reviews",
  },
  {
    quote:
      "Brought it home and everyone went quiet. Every sauce, every bite — we kept saying 'mmm!'. I'll be popping by regularly.",
    name: "Olivia Go",
    meta: "Local Guide",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-coal text-ember py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="logo-mark text-ember text-center text-[12vw] md:text-[8rem] leading-[0.95]">
            FROM THE <br /> REGULARS
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FF9E1B">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-display tracking-wider">5.0 ON GOOGLE</span>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full bg-bone text-coal rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#FF9E1B">
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t-2 border-coal/10 pt-4">
                  <div className="font-display tracking-wider">{r.name}</div>
                  <div className="text-coal/60 text-sm">{r.meta}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
