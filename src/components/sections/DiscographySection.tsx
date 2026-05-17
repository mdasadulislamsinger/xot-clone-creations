import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { VinylDeck, type Track } from "@/components/VinylDeck";
import { ExternalLink, ArrowUpDown } from "lucide-react";

const tracks: Track[] = [
  { title: "Khamoshi", date: "Dec 25, 2025", genre: "Pop / Bilingual Fusion", credits: "Written & performed by Md Asadul Islam.", link: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
  { title: "12 Rabi-Ul-Awal", date: "May 10, 2024", genre: "Devotional Nasheed", credits: "Vocals: Md Asadul Islam · Music & Lyrics: Mojibul Alom · Label: © Quirento Music Group.", link: "https://play.anghami.com/artist/20692007" },
  { title: "Allah Mohan", date: "Mid 2024", genre: "Spiritual / Islamic", credits: "Lyrical arrangement & lead vocals.", link: "https://www.jiosaavn.com/artist/md-asadul-islam-songs/Wf4MRADfHJ0" },
  { title: "Chand Tumi Ki", date: "Mid 2024", genre: "Semi-Classical Pop", credits: "Vocal composition & lyric formatting.", link: "https://music.apple.com/us/artist/md-asadul-islam/1740297709" },
  { title: "Nure Ujala", date: "Early 2024", genre: "Devotional Naat", credits: "Lead performance & traditional adaptation.", link: "https://link.deezer.com/s/33hVdgc97QFg6Ht2O2Vf1" },
  { title: "Miche Ei Jibon", date: "Early 2024", genre: "Philosophical Folk", credits: "Written-word formatting & vocal delivery.", link: "https://linktr.ee/mdasadulislamsinger" },
  { title: "Quraner Pakhi", date: "Early 2024", genre: "Islamic Melody", credits: "Studio vocal performance & arrangements.", link: "https://www.boomplay.com/artists/88231891" },
  { title: "Jago Musolman", date: "Early 2024", genre: "Awakening Anthem", credits: "Choral songwriting and lead vocals.", link: "https://open.spotify.com/artist/7bS221wQXecRdOTgpAgxXG" },
];

const archive = ["Sobe Barat", "Koto Somai", "Oi Khutihin Neel Akash", "Tumi Rahman", "Namaz", "Elo Rohmater Mash"];
const ease = [0.22, 1, 0.36, 1] as const;

type SortKey = "title" | "date" | "genre";

export function DiscographySection() {
  const [sort, setSort] = useState<SortKey>("date");
  const [filter, setFilter] = useState("");

  const sorted = useMemo(() => {
    const f = tracks.filter(t =>
      !filter || t.title.toLowerCase().includes(filter.toLowerCase()) || t.genre.toLowerCase().includes(filter.toLowerCase())
    );
    return [...f].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [sort, filter]);

  return (
    <section className="relative px-6 md:px-10 pt-32 pb-24 noise">
      <div className="absolute top-40 left-0 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">03 · Discography</div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            master production <span className="text-accent">archive</span>
          </h2>
        </motion.div>

        <div className="mt-14">
          <VinylDeck tracks={tracks} />
        </div>

        {/* Catalog */}
        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <h3 className="font-display text-3xl md:text-4xl">Master Production Catalog</h3>
            <div className="flex items-center gap-2">
              <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter releases..."
                className="bg-card border border-border rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:glow-teal transition"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="bg-card border border-border rounded-full px-3 py-2 text-xs font-mono uppercase tracking-[0.15em] focus:outline-none focus:border-accent transition"
              >
                <option value="date">Sort: Date</option>
                <option value="title">Sort: Title</option>
                <option value="genre">Sort: Genre</option>
              </select>
            </div>
          </div>

          <div className="panel rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-[60px_2fr_1.2fr_1.5fr_2fr_120px] gap-4 px-6 py-4 border-b border-border font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <div>#</div>
              <div className="flex items-center gap-1">Title <ArrowUpDown className="w-3 h-3" /></div>
              <div>Date</div>
              <div>Genre</div>
              <div>Credits</div>
              <div className="text-right">Stream</div>
            </div>
            {sorted.map((t, i) => (
              <div key={t.title} className="grid grid-cols-[1fr_auto] md:grid-cols-[60px_2fr_1.2fr_1.5fr_2fr_120px] gap-4 px-6 py-5 border-b border-border/60 last:border-0 hover:bg-accent/5 transition-colors items-center">
                <div className="font-mono text-[10px] text-muted-foreground hidden md:block">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-lg md:text-xl">{t.title}</div>
                <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.date}</div>
                <div className="hidden md:block text-xs text-foreground/80">{t.genre}</div>
                <div className="hidden md:block text-xs text-muted-foreground line-clamp-2">{t.credits}</div>
                <a
                  href={t.link} target="_blank" rel="noreferrer"
                  className="justify-self-end inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors"
                >
                  Stream <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Archive */}
        <div className="mt-20">
          <h3 className="font-display text-3xl md:text-4xl mb-2">Repertoire Performance Archive</h3>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Additional titles routed via linktree
          </p>
          <div className="flex flex-wrap gap-3">
            {archive.map((title) => (
              <a
                key={title}
                href="https://linktr.ee/mdasadulislamsinger"
                target="_blank" rel="noreferrer"
                className="panel rounded-full px-5 py-3 text-sm hover:border-accent hover:text-accent transition-colors duration-300"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
