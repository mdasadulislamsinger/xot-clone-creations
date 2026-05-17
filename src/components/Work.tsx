import { motion } from "framer-motion";

const works = [
  { title: "Khamoshi", tag: "Pop / Bilingual Fusion · Dec 2025", href: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
  { title: "12 Rabi-Ul-Awal", tag: "Devotional Nasheed · May 2024", href: "https://play.anghami.com/artist/20692007" },
  { title: "Allah Mohan", tag: "Spiritual / Islamic · 2024", href: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
  { title: "Chand Tumi Ki", tag: "Philosophical Folk", href: "https://linktr.ee/mdasadulismsinger" },
  { title: "Quraner Pakhi", tag: "Islamic Melody · 2024", href: "https://www.boomplay.com/artists/88231891" },
  { title: "Jago Musolman", tag: "Awakening Anthem · 2024", href: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
];

const gradients = [
  "from-rose-500/30 via-accent/20 to-orange-500/30",
  "from-emerald-500/30 via-teal-400/20 to-cyan-500/30",
  "from-amber-400/30 via-orange-500/20 to-rose-500/30",
  "from-violet-500/30 via-fuchsia-500/20 to-pink-500/30",
  "from-sky-500/30 via-indigo-500/20 to-violet-500/30",
  "from-yellow-400/30 via-amber-500/20 to-red-500/30",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Work() {
  return (
    <section id="discography" className="px-6 md:px-10 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="flex items-end justify-between mb-14 md:mb-20 gap-6"
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.88]">
          songs that speak<br />
          to the <span className="text-accent">heart</span>
        </h2>
        <a href="https://linktr.ee/mdasadulismsinger" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-border rounded-full px-5 py-3 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 ease-premium shrink-0">
          All Releases →
        </a>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {works.map((w, i) => (
          <motion.a
            key={i}
            href={w.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-card border border-border"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500" />
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">0{i + 1}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">Single</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-3xl md:text-4xl text-white leading-tight transition-transform duration-500 ease-premium group-hover:-translate-y-1">{w.title}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 mt-2">{w.tag}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
