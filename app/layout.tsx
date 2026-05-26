import type { Metadata } from "next";
import { Fredoka, Bowlby_One } from "next/font/google";
import "./globals.css";

const sans = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const display = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozy's — Charcoal Chicken, Toronto",
  description:
    "Charcoal-grilled chicken, fresh flatbread, house sauces. Mozy's is a Liberty Village favourite serving the best chicken in the city.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans bg-bone text-coal">{children}</body>
    </html>
  );
}
