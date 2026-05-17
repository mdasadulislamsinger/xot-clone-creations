import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { name: "Spotify", href: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
  { name: "Anghami", href: "https://play.anghami.com/artist/20692007" },
  { name: "Boomplay", href: "https://www.boomplay.com/artists/88231891" },
  { name: "TikTok", href: "https://www.tiktok.com/@mdasadulislamsinger" },
  { name: "Snapchat", href: "https://www.snapchat.com/@mdasadul_artist" },
  { name: "Linktree", href: "https://linktr.ee/mdasadulismsinger" },
  { name: "Bio.link", href: "https://bio.link/mdasadulislam" },
  { name: "FilmFreeway", href: "https://filmfreeway.com/MdAsadullslamSinger" },
];

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
          Bookings · Collaborations · Press
        </div>
        <h2 className="font-display text-[18vw] md:text-[12vw] leading-[0.85]">
          let's <span className="text-accent">create</span>
        </h2>
        <a
          href="mailto:contact@mdasadulislam.studio"
          className="group inline-flex items-center gap-3 mt-12 rounded-full bg-foreground text-background px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] hover:bg-accent hover:text-accent-foreground transition-all duration-500 ease-premium"
        >
          contact@mdasadulislam.studio
          <span className="transition-transform duration-500 ease-premium group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
      <div className="relative mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <div>© {new Date().getFullYear()} Md Asadul Islam</div>
        <div className="flex gap-5 flex-wrap justify-center">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors duration-300">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
