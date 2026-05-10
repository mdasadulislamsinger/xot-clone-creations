export function Footer() {
  return (
    <footer id="contact" className="relative px-6 md:px-10 py-16 border-t border-border noise">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Let's build something iconic
        </div>
        <h2 className="font-display text-[18vw] md:text-[14vw] leading-[0.85]">
          start a <span className="text-accent">project</span>
        </h2>
        <a
          href="mailto:hello@xotstudio.com"
          className="inline-block mt-10 rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition"
        >
          hello@xotstudio.com →
        </a>
      </div>
      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <div>© {new Date().getFullYear()} XOT Studio</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Instagram</a>
          <a href="#" className="hover:text-foreground">Behance</a>
          <a href="#" className="hover:text-foreground">Dribbble</a>
          <a href="#" className="hover:text-foreground">X</a>
        </div>
      </div>
    </footer>
  );
}
