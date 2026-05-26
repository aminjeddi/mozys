"use client";

import Reveal from "./Reveal";

const plates = [
  {
    name: "QUARTER PLATE",
    price: "$18",
    desc: "Quarter (dark) charcoal chicken with your choice of rice or chicken salt fries, smoked labneh, sumac onions, peppers & fresh bread.",
    tag: "Most ordered",
  },
  {
    name: "HALF PLATE",
    price: "$27",
    desc: "Half a charcoal chicken with rice or fries, smoked labneh, sumac onions, peppers & fresh bread. Built for a serious appetite.",
  },
  {
    name: "FULL CHICKEN MEAL",
    price: "$65",
    desc: "Whole chicken, choice of 2 sides, 1 dip, 2 sauces, fresh bread + 2 tahini miso cookies. Feeds 3–4.",
    tag: "Family favourite",
  },
];

const alaCarte = [
  { n: "QUARTER (DARK)", p: "$9.50" },
  { n: "HALF", p: "$20" },
  { n: "FULL", p: "$35" },
];

const sides = [
  { n: "RICE", p: "$8.50", d: "Basmati with lentils & crispy onions." },
  { n: "CHICKEN SALT FRIES", p: "$7", d: "Hand-cut, fried in chicken fat." },
  { n: "SALAD", p: "$14", d: "Kale, chickpeas, fresh herbs, feta." },
  { n: "BREAD", p: "$2.50", d: "Warm flatbread off the grill." },
];

const dips = [
  { n: "SMOKED LABNEH", p: "$13", d: "Brown butter, preserved lemon." },
  { n: "EGGPLANT", p: "$13", d: "Roasted onion, chili crisp." },
];

const sauces = [
  { n: "GARLIC", p: "$4" },
  { n: "CHARRED PEPPER", p: "$4" },
  { n: "CORIANDER LIME", p: "$4" },
];

const drinks = [
  { n: "WATER", p: "$2.50" },
  { n: "SPARKLING WATER", p: "$3" },
  { n: "SODA BOTTLES", p: "$3" },
];

function PriceRow({ n, p, d }: { n: string; p: string; d?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b-2 border-coal/15 py-4">
      <div className="flex-1 min-w-0">
        <div className="logo-mark text-lg md:text-xl text-coal">{n}</div>
        {d && <div className="text-coal/70 text-sm mt-1">{d}</div>}
      </div>
      <div className="logo-mark text-xl md:text-2xl text-coal whitespace-nowrap">{p}</div>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 px-6 md:px-10 bg-bone">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="logo-mark text-ember text-center text-[12vw] md:text-[8rem]">
            THE MENU
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-center max-w-xl mx-auto mt-4 text-coal/70 text-lg">
            Small menu. Big flavours. When it&rsquo;s gone, it&rsquo;s gone.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5">
          {plates.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-coal text-ember p-8 flex flex-col gap-6 hover:bg-ember hover:text-coal transition-colors duration-300 relative overflow-hidden">
                {p.tag && (
                  <span className="absolute top-5 right-5 rotate-6 bg-ember text-coal group-hover:bg-coal group-hover:text-ember font-display tracking-wider text-xs px-3 py-1 rounded-full transition-colors">
                    {p.tag.toUpperCase()}
                  </span>
                )}
                <h3 className="logo-mark text-3xl md:text-4xl pr-20">{p.name}</h3>
                <p className="text-base leading-relaxed opacity-90 flex-1">{p.desc}</p>
                <div className="logo-mark text-5xl md:text-6xl mt-auto">{p.price}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 md:mt-20 bg-ember rounded-[2rem] md:rounded-[3rem] px-6 md:px-12 py-14 md:py-20">
        <Reveal>
          <p className="text-center font-display tracking-widest text-coal/70 text-sm md:text-base">À LA CARTE</p>
          <h3 className="logo-mark text-coal text-center text-[10vw] md:text-7xl mt-2">
            JUST THE CHICKEN
          </h3>
        </Reveal>

        <div className="mt-10 max-w-2xl mx-auto grid sm:grid-cols-3 gap-3">
          {alaCarte.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="bg-coal text-ember rounded-2xl px-5 py-6 text-center">
                <div className="font-display tracking-wider text-sm opacity-80">{c.n}</div>
                <div className="logo-mark text-3xl md:text-4xl mt-2">{c.p}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            <Reveal>
              <h4 className="logo-mark text-coal text-3xl md:text-4xl mb-2">SIDES</h4>
            </Reveal>
            {sides.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <PriceRow {...s} />
              </Reveal>
            ))}

            <Reveal>
              <h4 className="logo-mark text-coal text-3xl md:text-4xl mt-12 mb-2">
                DIPS <span className="font-display text-sm md:text-base tracking-widest text-coal/60">with bread</span>
              </h4>
            </Reveal>
            {dips.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <PriceRow {...s} />
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <h4 className="logo-mark text-coal text-3xl md:text-4xl mb-2">
                SAUCES <span className="font-display text-sm md:text-base tracking-widest text-coal/60">8.5 oz</span>
              </h4>
            </Reveal>
            {sauces.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <PriceRow {...s} />
              </Reveal>
            ))}

            <Reveal>
              <h4 className="logo-mark text-coal text-3xl md:text-4xl mt-12 mb-2">BEVERAGES</h4>
            </Reveal>
            {drinks.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <PriceRow {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
