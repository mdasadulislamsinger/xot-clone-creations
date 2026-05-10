export function Marquee() {
  const items = ["Branding", "Poster Design", "Packaging", "3D Visuals", "Motion", "Web Design", "Illustration", "Ad Creatives"];
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-border py-6 overflow-hidden">
      <div className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
        Trusted by 350+ global companies
      </div>
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap">
          {loop.map((t, i) => (
            <span key={i} className="font-display text-4xl md:text-5xl text-foreground/80 flex items-center gap-16">
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
