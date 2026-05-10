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
  { title: "Hunset Honey", tag: "Concept", img: "https://framerusercontent.com/images/XHnVK4o0kuEm7QwbN4uBm9O2M.png" },
];

export function Work() {
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
          designs that you<br />
          were <span className="text-accent">dreaming</span> about
        </h2>
        <a href="#" className="hidden md:inline-block font-mono text-xs uppercase tracking-widest border border-border rounded-full px-5 py-2.5 hover:bg-accent hover:text-accent-foreground hover:border-accent transition">
          View Portfolio →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {works.map((w, i) => (
          <a
            key={i}
            href="#"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-card border border-border"
          >
            <img
              src={w.img}
              alt={w.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <div className="font-display text-xl text-white">{w.title}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-white/70">{w.tag}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
