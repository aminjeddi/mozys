"use client";

import { motion } from "framer-motion";
import Burst from "./Burst";

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 pb-12 md:pb-16 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: -15 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 12 }}
          className="absolute left-2 md:left-10 top-4 md:top-10 z-10 animate-float"
        >
          <Burst size={120}>
            ORDER<br />NOW
          </Burst>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 12 }}
          className="hidden md:block absolute right-0 top-1/2 z-10 animate-float"
        >
          <Burst size={130} bg="bg-coal" color="text-ember">
            ★ 5.0<br />GOOGLE
          </Burst>
        </motion.div>

        <div className="text-center pt-6 md:pt-12">
          <h1 className="logo-mark text-ember">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[14vw] md:text-[9rem] lg:text-[11rem]"
            >
              MOZY&rsquo;S
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[12vw] md:text-[7.5rem] lg:text-[9.5rem] -mt-1 md:-mt-3"
            >
              CHARCOAL
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[12vw] md:text-[7.5rem] lg:text-[9.5rem] -mt-1 md:-mt-3"
            >
              CHICKEN
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 md:mt-8 mx-auto max-w-xl text-lg md:text-xl text-ember leading-snug px-4"
          >
            Toronto&rsquo;s favourite charcoal chicken shop,
            <br className="hidden sm:block" /> serving up{" "}
            <span className="font-display tracking-wide">the juiciest bird in town.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-7 flex flex-wrap gap-3 justify-center"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-ember text-coal px-6 py-3 text-sm md:text-base font-display tracking-wide hover:bg-coal hover:text-ember transition-colors"
            >
              SEE THE MENU
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ember text-ember px-6 py-3 text-sm md:text-base font-display tracking-wide hover:bg-ember hover:text-coal transition-colors"
            >
              FIND US
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
