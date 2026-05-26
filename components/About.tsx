"use client";

import Reveal from "./Reveal";
import Burst from "./Burst";

const stats = [
  { k: "100%", v: "HALAL" },
  { k: "REAL", v: "CHARCOAL FIRE" },
  { k: "5.0★", v: "ON GOOGLE" },
  { k: "MADE", v: "FRESH DAILY" },
];

export default function About() {
  return (
    <section id="about" className="bg-ember text-coal py-20 md:py-28 px-6 md:px-10 relative">
      <div className="absolute top-8 right-6 md:top-12 md:right-16 animate-wiggle hidden sm:block z-10">
        <Burst size={110} bg="bg-coal" color="text-ember">
          HOT &amp;<br />JUICY
        </Burst>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="logo-mark text-coal text-center text-[12vw] md:text-[8rem] leading-[0.95]">
            JUST THE <br /> CHICKEN
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 mx-auto max-w-3xl text-center">
            <p className="text-xl md:text-2xl text-coal/85 leading-snug">
              We&rsquo;re a small charcoal chicken shop in Liberty Village.
              Whole birds, brined &amp; seasoned in-house, grilled over real
              charcoal &lsquo;til the skin crackles. Fresh flatbread, smoky
              labneh, sauces you&rsquo;ll wanna bottle.{" "}
              <span className="font-display">No shortcuts.</span>
            </p>
            <p className="mt-6 text-lg text-coal/75 leading-relaxed">
              Pull up to 114 Atlantic Ave for a quarter plate at lunch, take
              home a full bird for the table — and seriously, don&rsquo;t skip
              the tahini miso cookies.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.08}>
              <div className="bg-coal text-ember rounded-3xl px-6 py-8 text-center h-full">
                <div className="logo-mark text-4xl md:text-5xl">{s.k}</div>
                <div className="font-display tracking-wider mt-2 text-sm md:text-base">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
