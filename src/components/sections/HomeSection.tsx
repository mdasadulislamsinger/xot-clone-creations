import { motion } from "framer-motion";
import { SoundWave } from "@/components/SoundWave";
import { BadgeCheck, MapPin, Globe, ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const quickConnect = [
  { label: "Subscribe on YouTube", href: "https://www.youtube.com/@mdasadulislamsinger", dot: "bg-red-500" },
  { label: "Stream on Spotify", href: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG", dot: "bg-emerald-500" },
  { label: "Listen on Apple Music", href: "https://music.apple.com/us/artist/md-asadul-islam/1740297709", dot: "bg-zinc-300" },
];

const streamingHub = [
  { name: "Tidal", href: "https://tidal.com/artist/47481766/" },
  { name: "Deezer", href: "https://link.deezer.com/s/33hVdgc97QFg6Ht2O2Vf1" },
  { name: "JioSaavn", href: "https://www.jiosaavn.com/artist/md-asadul-islam-songs/Wf4MRADfHJ0" },
  { name: "Anghami", href: "https://play.anghami.com/artist/20692007" },
  { name: "Boomplay", href: "https://www.boomplay.com/artists/88231891" },
  { name: "Amazon Music", href: "https://music.amazon.com/artists" },
];

export function HomeSection() {
  return (
    <section className="relative px-6 md:px-10 pt-32 pb-24 noise">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] max-w-[1200px] max-h-[700px] rounded-full bg-violet/20 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
          <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" /> mdasadulislam.studio
          </div>
          <h1 className="font-display text-[12vw] md:text-[7.5vw] leading-[0.9] tracking-tight">
            MD ASADUL <span className="text-accent text-glow-teal">ISLAM</span>
          </h1>
          <div className="mt-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Singer · Musical Artist · Songwriter
          </div>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
            Writing the lyrics that speak to the heart; singing the melodies that elevate the soul.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {quickConnect.map((q) => (
              <a
                key={q.label}
                href={q.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full panel px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] hover:scale-105 hover:border-accent hover:text-accent transition-all duration-500 ease-premium"
              >
                <span className={`w-2 h-2 rounded-full ${q.dot}`} />
                {q.label}
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          <InfoTile icon={<MapPin className="w-4 h-4 text-emerald-400" />} title="Barishal, Bangladesh" sub="Based in" />
          <InfoTile icon={<Globe className="w-4 h-4 text-accent" />} title="Available Worldwide" sub="Bookings" />
          <InfoTile icon={<BadgeCheck className="w-4 h-4 text-gold" />} title="Verified Artist" sub="Knowledge Graph" />
        </div>

        {/* Studio Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mt-20 glass rounded-3xl p-8 md:p-12 max-w-4xl"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Studio Introduction</div>
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            Welcome to the official creative universe of Md Asadul Islam at <span className="text-accent">mdasadulislam.studio</span>.
            As a globally verified Singer, Musical Artist, and Songwriter, my work bridges the gap between raw vocal emotion
            and deep, poetic lyricism. From modern commercial arrangements to soulful traditional and devotional melodies,
            every project is built from scratch with pure artistic intent. Explore the studio, read the writing notebook,
            and stream the official releases worldwide.
          </p>
        </motion.div>

        {/* Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease }}
          className="mt-20 panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-[460px] h-[460px] rounded-full bg-accent/15 blur-[120px]" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet">Featured Spotlight</div>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">Khamoshi</h2>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-3">
                Releasing Dec 25, 2025 · Contemporary Pop / Hindi-Bengali Fusion
              </div>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-xl">
                <em className="text-foreground">Khamoshi</em> (The Silence) highlights Md Asadul Islam's dual identity as a
                lyricist and vocal performer. The track bridges a profound bilingual poetic narrative with a sweeping,
                modern pop vocal arrangement that captures the raw emotion of unspoken words.
              </p>
              <a
                href="https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] glow-teal hover:scale-105 transition-transform duration-500 ease-premium"
              >
                Stream the Single Now <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-border bg-background/40 p-6 flex flex-col justify-between overflow-hidden relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Live Waveform</div>
                <SoundWave className="w-full h-32" />
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>00:00</span><span>03:42</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Streaming Hub */}
        <div className="mt-24">
          <div className="flex items-end justify-between mb-8">
            <h3 className="font-display text-3xl md:text-4xl">Global Streaming Hub</h3>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">06 Platforms</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {streamingHub.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group panel rounded-2xl p-5 aspect-square flex flex-col justify-between hover:border-accent hover:bg-accent/5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:glow-teal"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-accent">stream</span>
                <span className="font-display text-xl">{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="panel rounded-2xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-muted-foreground text-[10px]">{sub}</div>
        <div className="text-foreground text-xs">{title}</div>
      </div>
    </div>
  );
}
