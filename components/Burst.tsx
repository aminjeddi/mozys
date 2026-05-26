"use client";

export default function Burst({
  children,
  className = "",
  bg = "bg-ember",
  color = "text-coal",
  size = 140,
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative inline-grid place-items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`absolute inset-0 burst ${bg} animate-spin-slow`} />
      <div
        className={`relative ${color} font-display text-center leading-none px-2`}
        style={{ fontSize: size / 7 }}
      >
        {children}
      </div>
    </div>
  );
}
