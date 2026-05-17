import { motion } from "framer-motion";
import { FlipCard } from "@/components/FlipCard";
import { ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    label: "Lyric Architecture",
    front: "Khamoshi Lyric Architecture",
    back: "An overview of how the song's structure layers bilingual metric shifts, contrasting verse cadences, and atmospheric production notes that frame the silence-as-emotion concept across each section.",
  },
  {
    label: "Devotional Adapting",
    front: "12 Rabi-Ul-Awal Devotional Adapting",
    back: "Behind-the-scenes notes on adapting traditional spiritual melodies into a contemporary Nasheed arrangement — phrasing decisions, breath placement, and how the choir layers were sculpted around the lead vocal.",
  },
  {
    label: "Vocal Melodies",
    front: "Chand Tumi Ki Vocal Melodies",
    back: "Writing breakdowns covering pitch tracking, structural time-signature notes, and the conscious shift from semi-classical ornamentation into a pop-led melodic resolution.",
  },
];

const blogs = [
  { name: "Medium Publications", href: "https://medium.com/@mdasadulislamsinger" },
  { name: "Hashnode Writing Hub", href: "https://hashnode.com/@mdasadulislamsinger" },
  { name: "GitHub Repository Space", href: "https://github.com/mdasadulislamsinger" },
];

export function NotebookSection() {
  return (
    <section className="relative px-6 md:px-10 pt-32 pb-24 noise">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[70vw] h-[60vw] max-w-[1000px] max-h-[700px] rounded-full bg-violet/15 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">04 · Notebook</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            inside the <span className="text-accent">songwriter's</span> notebook
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed">
            A look into Md Asadul Islam's writing process — how rhyme structures are developed, how performance guides
            are charted, and how each track moves from blank page to studio-ready performance.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => <FlipCard key={c.front} {...c} />)}
        </div>

        <div className="mt-24">
          <h3 className="font-display text-3xl md:text-4xl mb-8">Writing & Production Blogs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs.map((b) => (
              <a
                key={b.name}
                href={b.href}
                target="_blank" rel="noreferrer"
                className="group panel rounded-2xl p-7 hover:-translate-y-1 hover:border-accent transition-all duration-500 ease-premium"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-accent">Read</div>
                <div className="font-display text-2xl mt-3">{b.name}</div>
                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                  Open <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
