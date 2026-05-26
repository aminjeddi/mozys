"use client";

export default function Footer() {
  return (
    <footer className="bg-ember text-coal px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="logo-mark text-center text-[24vw] md:text-[20rem] leading-[0.85] text-coal">
          MOZY&rsquo;S
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 border-t-2 border-coal/15 pt-8 font-display tracking-wider">
          <div>
            <p className="text-xs opacity-60 mb-2">VISIT</p>
            <p>114 ATLANTIC AVE</p>
            <p>TORONTO, ON M6K 1X9</p>
          </div>
          <div>
            <p className="text-xs opacity-60 mb-2">FOLLOW</p>
            <a href="https://www.instagram.com/mozyscharcoal/" target="_blank" rel="noreferrer" className="block hover:underline">@MOZYSCHARCOAL</a>
            <a href="https://www.google.com/maps/place/Mozy's/@43.639447,-79.421232,17z/data=!4m8!3m7!1s0x882b350afd125a57:0xd70806ede883b48d!8m2!3d43.639447!4d-79.421232!9m1!1b1!16s%2Fg%2F11mt1h61nq" target="_blank" rel="noreferrer" className="block hover:underline">GOOGLE REVIEWS</a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} MOZY&rsquo;S — CHARCOAL CHICKEN, TORONTO.</p>
          <p>MADE WITH CHARCOAL AND ♥</p>
        </div>
      </div>
    </footer>
  );
}
