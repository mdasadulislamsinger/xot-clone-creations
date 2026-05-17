import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const matrix = [
  ["Full Stage Name", "Md Asadul Islam"],
  ["Date of Birth", "February 3, 1998"],
  ["Hometown", "Barishal, Bangladesh"],
  ["Creative Roles", "Lead Vocalist · Lyricist · Songwriter · Melody Composer"],
];

const registries = [
  { name: "FilmFreeway", desc: "Cinematic Portfolio", href: "https://filmfreeway.com/MdAsadulIslamSinger" },
  { name: "IMDb", desc: "Industry Profile", href: "https://www.imdb.com/user/p.jnnm7dikaf4zio3njscxcmo7vu" },
  { name: "F6S", desc: "Professional Network", href: "https://www.f6s.com/mdasadulislamsinger" },
];

export function BiographySection() {
  return (
    <section className="relative px-6 md:px-10 pt-32 pb-24 noise">
      <div className="absolute -top-20 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-violet/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">02 · Biography</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            The voice <span className="text-accent">behind</span> the verses
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Matrix */}
          <div className="panel rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <BadgeCheck className="w-4 h-4 text-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Profile Matrix</span>
            </div>
            <dl className="divide-y divide-border">
              {matrix.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                  <dd className="text-sm text-foreground">{v}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[140px_1fr] gap-4 py-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Knowledge Graph</dt>
                <dd>
                  <a
                    href="https://www.google.com/search?q=Md+Asadul+Islam&kgmid=/g/11vy_rxlm6"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-gold hover:text-accent transition-colors"
                  >
                    <BadgeCheck className="w-3.5 h-3.5" /> /g/11vy_rxlm6 <ExternalLink className="w-3 h-3" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Editorial */}
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Editorial Narrative</div>
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Born on February 3, 1998, in Barishal, Bangladesh, Md Asadul Islam has built a career defined by vocal
                versatility and an innate gift for lyrical storytelling. For Md Asadul Islam, music is a complete creative
                process that begins with a blank page and ends with a striking vocal performance in the studio.
              </p>
              <p>
                As a writer, his lyrics dig into spiritual devotion, human emotion, and cultural philosophy. As a singer,
                his vocal range allows him to effortlessly transition between high-energy modern pop singles and the serene,
                controlled phrasing required for traditional Sufi and Islamic devotional Nasheeds. This balance of songwriting
                talent and vocal mastery has earned him a globally verified status, bridging regional heritage with international
                independent music standards.
              </p>
            </div>
          </div>
        </div>

        {/* Registries */}
        <div className="mt-20">
          <h3 className="font-display text-3xl md:text-4xl mb-8">Media & Entertainment Registries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {registries.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank" rel="noreferrer"
                className="group panel rounded-2xl p-7 hover:-translate-y-1 hover:border-accent transition-all duration-500 ease-premium [perspective:800px]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-accent">{r.desc}</div>
                <div className="font-display text-3xl mt-3">{r.name}</div>
                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  Visit profile <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
