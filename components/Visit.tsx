"use client";

import Reveal from "./Reveal";
import Burst from "./Burst";

export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 px-6 md:px-10 bg-bone relative">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="logo-mark text-ember text-center text-[12vw] md:text-[8rem]">
            COME HUNGRY
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-coal text-ember rounded-3xl p-8 md:p-12 h-full flex flex-col gap-8">
              <div>
                <p className="font-display tracking-widest text-sm text-ember/70">VISIT</p>
                <p className="logo-mark text-3xl md:text-4xl mt-3 leading-tight">
                  114 Atlantic Ave <br /> Toronto, ON M6K 1X9
                </p>
              </div>

              <div>
                <p className="font-display tracking-widest text-sm text-ember/70 mb-3">HOURS</p>
                <ul className="space-y-2 text-lg">
                  <li className="flex justify-between border-b border-ember/20 pb-2">
                    <span>Wed – Sat</span>
                    <span className="opacity-70">12 – 9pm</span>
                  </li>
                  <li className="flex justify-between opacity-40">
                    <span>Sun – Tue</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-ember text-coal rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between gap-10 relative">
              <div className="absolute -top-8 -right-8 animate-wiggle z-10">
                <Burst size={130} bg="bg-coal" color="text-ember">
                  GET<br />SOME
                </Burst>
              </div>

              <div>
                <p className="logo-mark text-5xl md:text-7xl">
                  HUNGRY <br /> RIGHT NOW?
                </p>
                <p className="mt-6 text-lg max-w-md">
                  Order pickup straight from the kitchen. Walk-ins welcome —
                  just be ready to wait at peak hours. It&rsquo;s worth it.
                </p>
              </div>

              <div className="flex">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=114+Atlantic+Ave+Toronto+ON+M6K+1X9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-coal text-ember px-7 py-4 font-display tracking-wider hover:bg-bone hover:text-coal transition-colors"
                >
                  GET DIRECTIONS →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-3xl overflow-hidden border-4 border-coal aspect-[16/8] md:aspect-[16/6] bg-coal">
            <iframe
              title="Mozy's on Google Maps"
              src="https://www.google.com/maps?q=Mozy's,114+Atlantic+Ave,Toronto,ON+M6K+1X9&ll=43.639447,-79.421232&z=18&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-full grayscale-[20%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
