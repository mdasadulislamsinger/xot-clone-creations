import { motion } from "framer-motion";

const items = [
  { quote: "At first we weren't sure what we wanted, but they helped shape a clear path. Very happy with the results.", name: "Smith", role: "Head of Design @ Fabrica" },
  { quote: "The design exceeded our expectations in every way.", name: "Dean", role: "Founder @ Omega" },
  { quote: "Our logo has received so many compliments!", name: "Freddie", role: "Founder @ UrbanX" },
  { quote: "Finished before the deadline and we absolutely loved it.", name: "Mandy", role: "Founder @ Plext" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-14"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">— Our Results</div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.88]">
          Hear what our<br />clients say.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 flex flex-col justify-between min-h-[280px] hover:border-accent/40 transition-colors duration-500"
          >
            <p className="font-display text-2xl md:text-3xl leading-[1.15]">"{t.quote}"</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent font-display text-xl">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
