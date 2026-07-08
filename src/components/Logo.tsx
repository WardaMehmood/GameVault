import logoImg from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/** Display the provided logo if available; fallback to the SVG when not */}
      <div className="relative">
        <img
          src={logoImg}
          alt="Game Vault"
          className="w-12 h-12 rounded-lg object-contain drop-shadow-[0_0_12px_oklch(0.55_0.28_305_/_0.75)] transition-transform duration-300 hover:scale-105"
        />
      </div>
      <span
        className="font-display text-xl font-black tracking-widest neon-text"
        style={{ fontFamily: "var(--font-display)" }}
      >
        GAME VAULT
      </span>
    </div>
  );
}
