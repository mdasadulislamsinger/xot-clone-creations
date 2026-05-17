import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ExternalLink } from "lucide-react";

export type Track = {
  title: string;
  date: string;
  genre: string;
  credits: string;
  link: string;
};

type RPM = 33 | 45 | 78;

export function VinylDeck({ tracks }: { tracks: Track[] }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rpm, setRpm] = useState<RPM>(33);
  const current = tracks[idx];

  const spinClass = !playing ? "" : rpm === 33 ? "spin-33" : rpm === 45 ? "spin-45" : "spin-78";

  return (
    <div className="panel rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-[420px] h-[420px] rounded-full bg-violet/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-10 w-[320px] h-[320px] rounded-full bg-accent/15 blur-[100px] pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        {/* Turntable */}
        <div className="relative aspect-square max-w-[460px] mx-auto w-full">
          <div className="absolute inset-0 rounded-full bg-[#0d0d12] border border-border shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]" />
          <div className={`absolute inset-6 rounded-full vinyl-grooves ${spinClass}`}>
            <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-accent via-violet to-accent flex items-center justify-center text-[9px] uppercase tracking-[0.25em] font-mono text-background text-center px-2 leading-tight">
              {current.title}
            </div>
            <div className="absolute inset-[47%] rounded-full bg-background border border-border" />
          </div>
          {/* Needle arm */}
          <motion.div
            initial={false}
            animate={{ rotate: playing ? -22 : -55 }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            style={{ transformOrigin: "85% 15%" }}
            className="absolute top-0 right-0 w-[55%] h-[55%] pointer-events-none"
          >
            <div className="absolute top-[8%] right-[8%] w-5 h-5 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 border border-zinc-700 shadow-lg" />
            <div className="absolute top-[12%] right-[14%] h-[3px] w-[78%] bg-gradient-to-l from-zinc-400 to-zinc-700 origin-right rotate-[28deg] rounded-full" />
            <div className="absolute top-[44%] right-[60%] w-3 h-6 bg-gradient-to-b from-zinc-300 to-zinc-600 rounded-sm" />
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Now spinning</div>
            <div className="font-display text-4xl md:text-5xl mt-2">{current.title}</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
              {current.genre} · {current.date}
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-md">{current.credits}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 ease-premium glow-teal"
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {playing ? "Pause" : "Play"}
            </button>
            <a
              href={current.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-mono uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Stream <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="ml-auto flex items-center gap-1 panel rounded-full p-1">
              {[33, 45, 78].map((r) => (
                <button
                  key={r}
                  onClick={() => setRpm(r as RPM)}
                  className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full transition-colors ${rpm === r ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {r} RPM
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-4 max-h-64 overflow-y-auto pr-1">
            {tracks.map((t, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); setPlaying(true); }}
                className={`w-full text-left grid grid-cols-[28px_1fr_auto] gap-3 items-center py-2.5 border-b border-border/60 group transition-colors ${i === idx ? "text-accent" : "text-foreground hover:text-accent"}`}
              >
                <span className="font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-base truncate">{t.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.genre.split(" / ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
