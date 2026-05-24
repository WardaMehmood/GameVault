import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Link2 } from "lucide-react";
import { CATEGORIES } from "@/data/games";
import { toast } from "sonner";

export function UploadSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="upload" className="relative py-24">
      <div className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(ellipse at center, oklch(0.55 0.28 305 / 0.18), transparent 70%)"
      }} />
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80">
            Submit Your Build
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Upload Your <span className="neon-text">Game</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Share your creation with the community. We only store the Google Drive link — no files are hosted here.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => { 
            e.preventDefault(); 
            setSubmitted(true); 
            toast.success("Game Submitted Successfully!", {
              description: "Thank you for your submission. We'll review it shortly.",
            });
            setTimeout(() => setSubmitted(false), 3000);
          }}
          className="mt-10 glass rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_-20px_oklch(0.55_0.28_305_/_0.6)]"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Game Title" placeholder="Shadow Strike" />
            <Field label="Developer Name" placeholder="Your studio or name" />
            <div className="md:col-span-2">
              <Label>Description</Label>
              <textarea
                rows={4}
                placeholder="What makes your game special?"
                className="mt-2 w-full rounded-xl border border-primary/30 bg-input/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_20px_oklch(0.55_0.28_305_/_0.4)]"
              />
            </div>
            <div>
              <Label>Category</Label>
              <select className="mt-2 w-full rounded-xl border border-primary/30 bg-input/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:shadow-[0_0_20px_oklch(0.55_0.28_305_/_0.4)]">
                {CATEGORIES.map((c) => <option key={c} className="bg-card">{c}</option>)}
              </select>
            </div>
            <Field label="Thumbnail Image URL" placeholder="https://..." icon={<Link2 className="size-4" />} />
            <div className="md:col-span-2">
              <Field label="Google Drive Download Link" placeholder="https://drive.google.com/..." icon={<Link2 className="size-4" />} />
            </div>
          </div>

          <button
            type="submit"
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-8 py-4 text-base font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-[position:100%_0] hover:shadow-[0_0_50px_oklch(0.55_0.28_305_/_0.9)]"
            style={{ boxShadow: "0 0 30px oklch(0.55 0.28 305 / 0.55)" }}
          >
            <Rocket className="size-5 transition group-hover:-translate-y-0.5 group-hover:rotate-12" />
            {submitted ? "Submitted!" : "Launch Submission"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{children}</label>;
}

function Field({ label, placeholder, icon }: { label: string; placeholder: string; icon?: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-primary/30 bg-input/40 px-4 transition focus-within:border-primary focus-within:shadow-[0_0_20px_oklch(0.55_0.28_305_/_0.4)]">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <input type="text" placeholder={placeholder} className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground" />
      </div>
    </div>
  );
}
