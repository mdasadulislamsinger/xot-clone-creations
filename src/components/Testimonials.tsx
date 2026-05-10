import { motion } from "framer-motion";

const items = [
  {
    quote: "At first we weren't sure what we actually wanted but they helped us to make a clear goal path and we are very happy with the results!",
    name: "Smith",
    role: "Head of Design @ Fabrica",
    img: "https://framerusercontent.com/images/IQKddGGUVKfESbTRhHhxUrBqwQ.jpg?width=4928&height=3264",
  },
  {
    quote: "The design exceeded our expectations in every way.",
    name: "Dean",
    role: "Founder @ Omega",
    img: "https://framerusercontent.com/images/1ApcT7kVDOZTELD8XFISmocdiA.jpg?width=3648&height=5472",
  },
  {
    quote: "Our logo has received so many compliments!",
    name: "Freddie",
    role: "Founder @ UrbanX",
    img: "https://framerusercontent.com/images/l19P4B4gW2LfHYRZg2KxmTSyj8.jpg?scale-down-to=512",
  },
  {
    quote: "They finished the project before the deadline, and we absolutely loved it!",
    name: "Mandy",
    role: "Founder @ Plext",
    img: "https://framerusercontent.com/images/a6V9t9YFzI29cz5gMQRbfWgjVS4.jpg?width=3840&height=5760",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mb-16 md:mb-20 max-w-5xl"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-5">— Our Results</div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.88]">
          Hear what our<br />clients say.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md text-sm md:text-base">
          Hear what our clients have to say about our team and our services.
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
