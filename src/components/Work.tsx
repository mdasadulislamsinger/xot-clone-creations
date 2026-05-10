import { motion } from "framer-motion";

const works = [
  { title: "Pancake Mix", tag: "Packaging", img: "https://framerusercontent.com/images/f7EvOQOnNM9TrVZhWTWmrVXulc.png" },
  { title: "Venom Poster", tag: "Key Art", img: "https://framerusercontent.com/images/gOVxygxPrEhPqXltctoE2KXOeg.png" },
  { title: "Snake Soda", tag: "Concept", img: "https://framerusercontent.com/images/pFgiENCI3VHQKDfIguzg09rupJA.png" },
  { title: "Brewed for Bliss", tag: "Branding", img: "https://framerusercontent.com/images/BExzy8hH7fYDvuYj4X3j6skrDY.png" },
  { title: "Phase Esports", tag: "Apparel", img: "https://framerusercontent.com/images/P1PuMAVPLN8VmpobdXnLKWrM.jpg" },
  { title: "Axiom Rocket League", tag: "Poster", img: "https://framerusercontent.com/images/735MPW19tIjnwGkHSXyPqRzZwU.png" },
  { title: "Nike Sky", tag: "Product Ad", img: "https://framerusercontent.com/images/Q2SaPX8yVCjLl0RDig6zozoiYSg.png" },
  { title: "Berry Cheesecake", tag: "Food", img: "https://framerusercontent.com/images/ukrsEXPOExG1vZzPyhwoLEZu1U0.png" },
  { title: "Meta Quest 3", tag: "Campaign", img: "https://framerusercontent.com/images/GIsZXRbSkCgq49RpZeeEftVHxA.png" },
  { title: "UGREEN Nexode", tag: "Tech Ad", img: "https://framerusercontent.com/images/RfQIiQX5GasK1xMXYcDhMeO20.png" },
  { title: "Hot Sauce", tag: "Packaging", img: "https://framerusercontent.com/images/1tThqeXPs6UhklhWtNGoBOMebog.png" },
  { title: "Sunset Honey", tag: "Concept", img: "https://framerusercontent.com/images/XHnVK4o0kuEm7QwbN4uBm9O2M.png" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Work() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="flex items-end justify-between mb-14 md:mb-20 gap-6"
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.88]">
          designs that you<br />
          were <span className="text-accent">dreaming</span> about
        </h2>
        <a href="#" className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] border border-border rounded-full px-5 py-3 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 ease-premium shrink-0">
          View Portfolio →
        </a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {works.map((w, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-card border border-border"
          >
            <img
              src={w.img}
              alt={w.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-premium">
              <div className="font-display text-2xl text-white leading-tight">{w.title}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 mt-1">{w.tag}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
