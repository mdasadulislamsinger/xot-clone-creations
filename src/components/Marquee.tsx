export function Marquee() {
  const items = ["Vocals", "Songwriting", "Lyrics", "Composition", "Studio Recording", "Live Performance", "Nasheed", "Folk"];
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-border py-12 md:py-16 overflow-hidden">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <span key={i} className="font-display text-[3.5rem] md:text-[5rem] leading-none text-foreground/90 flex items-center gap-14 shrink-0">
              {t}
              <span className="text-accent text-[2.5rem] md:text-[3.5rem]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
