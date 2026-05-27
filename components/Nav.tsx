"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "REVIEWS", href: "#reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bone/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Mozy's">
          <Image
            src="/logo.png"
            alt="Mozy's"
            width={120}
            height={48}
            priority
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 font-display text-ember text-lg tracking-wide">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-coal transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ember text-ember px-5 py-2 font-display tracking-wider hover:bg-ember hover:text-coal transition-colors"
          >
            VISIT US
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-full border-2 border-ember"
        >
          <div className="space-y-1.5">
            <span className={`block h-[2px] w-5 bg-ember transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ember transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-ember transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bone"
          >
            <div className="px-6 py-6 flex flex-col gap-5 font-display text-2xl text-ember">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
              >
                VISIT US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
