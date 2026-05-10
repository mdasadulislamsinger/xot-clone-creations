const items = [
  { quote: "At first we weren't sure what we wanted, but they helped shape a clear path. Very happy with the results.", name: "Smith", role: "Head of Design @ Fabrica" },
  { quote: "The design exceeded our expectations in every way.", name: "Dean", role: "Founder @ Omega" },
  { quote: "Our logo has received so many compliments!", name: "Freddie", role: "Founder @ UrbanX" },
  { quote: "Finished before the deadline and we absolutely loved it.", name: "Mandy", role: "Founder @ Plext" },
];

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-border">
      <div className="mb-12">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">— Our Results</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">Hear what our<br />clients say.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <div key={i} className="rounded-3xl border border-border bg-card p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <p className="font-display text-2xl md:text-3xl leading-tight">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display text-xl">
                {t.name[0]}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
