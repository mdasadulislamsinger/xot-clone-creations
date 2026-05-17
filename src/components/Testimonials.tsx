import { motion } from "framer-motion";

const items = [
  {
    quote: "A voice that carries the soul of Bengali poetry into a contemporary, global sound.",
    name: "Quirento Music Group",
    role: "Label · 12 Rabi-Ul-Awal",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    quote: "Devotional songwriting that bridges tradition and modern fusion with rare honesty.",
    name: "Independent Press",
    role: "Featured Artist Review",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    quote: "Khamoshi is a bilingual statement — bold, intimate, and quietly cinematic.",
    name: "Listener Spotlight",
    role: "Spotify Editorial Notes",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
  },
  {
    quote: "Writing the lyrics that speak to the heart; singing the melodies that elevate the soul.",
    name: "Md Asadul Islam",
    role: "Artist Statement",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section id="press" className="px-6 md:px-10 py-28 md:py-40 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-16 md:mb-20 max-w-5xl"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-5">— Press & Notes</div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.88]">
          words around<br />the music.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md text-sm md:text-base">
          Press notes, label highlights and listener reactions from across the catalogue.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {items.map((t, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease }}
            className="group relative rounded-3xl overflow-hidden border border-border bg-card aspect-[4/5] md:aspect-[5/6]"
          >
            <img
              src={t.img}
              alt={t.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
            <div className="absolute inset-0 p-7 md:p-10 flex flex-col justify-between">
              <p className="font-display text-2xl md:text-4xl lg:text-[2.7rem] leading-[1.05] text-white max-w-[22ch]">
                "{t.quote}"
              </p>
              <div>
                <div className="font-display text-2xl md:text-3xl text-white">{t.name}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/65 mt-1.5">{t.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
