import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#trending", label: "Trending" },
  { href: "#upload", label: "Upload" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-7xl px-4 md:px-6 transition-all"
    >
      <div
        className={`rounded-2xl transition-all ${
          scrolled
            ? "backdrop-blur-xl bg-background/80 border border-primary/30 shadow-[0_8px_30px_-12px_oklch(0.55_0.28_305_/_0.5)]"
            : "bg-background/20 backdrop-blur-md border border-white/5"
        } flex items-center justify-between px-6 py-3.5`}
      >
        <a href="#home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium uppercase tracking-wider text-muted-foreground transition hover:text-foreground
                         after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#upload"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground
                       shadow-[0_0_20px_oklch(0.55_0.28_305_/_0.6)] transition hover:shadow-[0_0_35px_oklch(0.55_0.28_305_/_0.9)] hover:scale-105 md:inline-flex"
          >
            <Upload className="size-4" />
            Upload Game
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-2 rounded-2xl border border-primary/20 bg-background/95 backdrop-blur-xl overflow-hidden md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#upload"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Upload className="size-4" /> Upload Game
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
