export function Marquee() {
  const items = ["Branding", "Poster Design", "Packaging", "3D Visuals", "Motion", "Web Design", "Illustration", "Ad Creatives"];
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-border py-10 overflow-hidden">
      <div className="text-center text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
        Trusted by 350+ global companies
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <span key={i} className="font-display text-5xl md:text-6xl text-foreground/85 flex items-center gap-16 shrink-0">
              {t}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
