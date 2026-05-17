import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Send } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/mdasadulislamsinger/" },
  { name: "Instagram", href: "https://www.instagram.com/mdasadulislamsinger/" },
  { name: "Threads", href: "https://www.threads.com/@mdasadulislamsinger" },
  { name: "TikTok", href: "https://www.tiktok.com/@mdasadulislamsinger" },
  { name: "Snapchat", href: "https://www.snapchat.com/@mdasadul_artist" },
  { name: "X (Twitter)", href: "https://x.com/AsadulIslamArt" },
  { name: "VK", href: "https://m.vk.com/mdasadulislamsinger" },
  { name: "YouTube", href: "https://www.youtube.com/@mdasadulislamsinger" },
];

const directories = [
  { name: "Linktree Matrix", href: "https://linktr.ee/mdasadulislamsinger" },
  { name: "Bio.link Directory", href: "https://bio.link/mdasadulislamsinger" },
  { name: "Google Share Card", href: "https://www.google.com/search?q=Md+Asadul+Islam&kgmid=/g/11vy_rxlm6" },
];

export function BookingsSection() {
  const [burst, setBurst] = useState<{ x: number; y: number; id: number } | null>(null);
  const [sent, setSent] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = btnRef.current?.getBoundingClientRect();
    if (r) setBurst({ x: r.left + r.width / 2, y: r.top + r.height / 2, id: Date.now() });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative px-6 md:px-10 pt-32 pb-24 noise">
      <div className="absolute top-0 left-1/3 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">05 · Collaboration</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            let's <span className="text-accent">collaborate</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* Form */}
          <form onSubmit={submit} className="panel rounded-3xl p-8 md:p-10 space-y-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Professional Booking</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
            </div>
            <div>
              <Label>Booking Service</Label>
              <select required className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:glow-teal transition">
                <option>Live Vocal Performance</option>
                <option>Custom Songwriting</option>
                <option>Studio Session Work</option>
                <option>Media Interview</option>
              </select>
            </div>
            <div>
              <Label>Project Details</Label>
              <textarea required rows={5} placeholder="Tell me about your project, timeline, and intent..." className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:glow-teal transition resize-none" />
            </div>
            <button
              ref={btnRef}
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] glow-teal hover:scale-105 transition-transform duration-500 ease-premium"
            >
              <Send className="w-4 h-4" /> {sent ? "Sent — I'll be in touch" : "Send Booking Request"}
            </button>
          </form>

          {/* Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-5">Social Network Grid</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank" rel="noreferrer"
                    className="panel rounded-xl p-4 text-center text-xs font-mono uppercase tracking-[0.15em] hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-5">Directories Hub</h3>
              <div className="space-y-3">
                {directories.map((d) => (
                  <a
                    key={d.name}
                    href={d.href}
                    target="_blank" rel="noreferrer"
                    className="group flex items-center justify-between panel rounded-2xl px-5 py-4 hover:border-accent transition-colors"
                  >
                    <span className="font-display text-lg">{d.name}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-10 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Md Asadul Islam · mdasadulislam.studio</div>
          <div>Singer · Musical Artist · Songwriter</div>
        </footer>
      </div>

      {burst && <Burst key={burst.id} x={burst.x} y={burst.y} />}
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input required name={name} type={type} placeholder={placeholder}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:glow-teal transition" />
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <label className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">{children}</label>;
}

function Burst({ x, y }: { x: number; y: number }) {
  const pieces = Array.from({ length: 28 });
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {pieces.map((_, i) => {
        const a = (i / pieces.length) * Math.PI * 2;
        const dist = 80 + Math.random() * 120;
        const dx = Math.cos(a) * dist;
        const dy = Math.sin(a) * dist;
        return (
          <motion.span
            key={i}
            initial={{ x, y, opacity: 1, scale: 1 }}
            animate={{ x: x + dx, y: y + dy, opacity: 0, scale: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#00F0FF" : "#7000FF",
              boxShadow: `0 0 12px ${i % 2 === 0 ? "#00F0FF" : "#7000FF"}`,
              top: 0, left: 0,
            }}
          />
        );
      })}
    </div>
  );
}
