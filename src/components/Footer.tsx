import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 md:px-10 py-24 md:py-32 border-t border-border overflow-hidden noise">
      <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease }}
        className="relative max-w-6xl mx-auto text-center"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Let's build something iconic
        </div>
        <h2 className="font-display text-[20vw] md:text-[14vw] leading-[0.85]">
          start a <span className="text-accent">project</span>
        </h2>
        <a
          href="mailto:hello@xotstudio.com"
          className="group inline-flex items-center gap-3 mt-12 rounded-full bg-foreground text-background px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 ease-premium"
        >
          hello@xotstudio.com
          <span className="transition-transform duration-500 ease-premium group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
      <div className="relative mt-24 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <div>© {new Date().getFullYear()} XOT Studio</div>
        <div className="flex gap-6">
          {["Instagram","Behance","Dribbble","X"].map(n => (
            <a key={n} href="#" className="hover:text-foreground transition-colors duration-300">{n}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
