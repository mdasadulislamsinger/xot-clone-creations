import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TopBar() {
  const [time, setTime] = useState("--:--:--");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    update();
    const i = setInterval(update, 1000);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearInterval(i); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-500 ease-premium ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-foreground tracking-[0.28em]">MD ASADUL ISLAM</span>
      </div>
      <div className="hidden md:flex items-center gap-7 text-muted-foreground">
        <a href="#discography" className="hover:text-foreground transition-colors">Discography</a>
        <a href="#press" className="hover:text-foreground transition-colors">Press</a>
        <span className="text-foreground tabular-nums">{time}</span>
      </div>
      <a
        href="#contact"
        className="group relative rounded-full border border-foreground/40 px-5 py-2.5 overflow-hidden ease-premium transition-colors duration-500 hover:border-foreground"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-background">Contact Now</span>
        <span className="absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-premium group-hover:translate-y-0" />
      </a>
    </motion.header>
  );
}
