import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { Game } from "@/data/games";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function GameCard({ game, index = 0 }: { game: Game; index?: number }) {
  const [isHoverSupported, setIsHoverSupported] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverSupported(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsHoverSupported(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Link to="/game/$id" params={{ id: game.id }} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={isHoverSupported ? { y: -8 } : undefined}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 85, damping: 16, delay: (index % 5) * 0.04 }}
        className="group hover-glow relative overflow-hidden rounded-2xl glass flex flex-col h-full"
      >
        <div className="relative aspect-video overflow-hidden shrink-0">
          <img
            src={game.thumbnail}
            alt={game.title}
            loading="lazy"
            width={960}
            height={544}
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-primary/50 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground backdrop-blur">
            {game.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 gap-4">
          <div className="space-y-1">
            <h3 className="font-display text-sm md:text-base font-bold leading-tight line-clamp-2 min-h-[2.5rem]">
              {game.title}
            </h3>
            <p className="text-[10px] md:text-xs text-muted-foreground">by {game.developer}</p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(game.driveLink, "_blank");
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_oklch(0.55_0.28_305_/_0.6)] shrink-0"
          >
            <Download className="size-3.5" /> Download
          </button>
        </div>
      </motion.article>
    </Link>
  );
}
