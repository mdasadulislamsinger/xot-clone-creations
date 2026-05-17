import { motion } from "framer-motion";

export type SectionId = "home" | "biography" | "discography" | "notebook" | "bookings";

const links: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "biography", label: "Biography" },
  { id: "discography", label: "Discography" },
  { id: "notebook", label: "Notebook" },
  { id: "bookings", label: "Bookings" },
];

export function NavHeader({ active, onChange }: { active: SectionId; onChange: (id: SectionId) => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex items-center justify-between">
        <button
          onClick={() => onChange("home")}
          className="group font-display text-[12px] md:text-sm uppercase tracking-[0.18em] text-foreground hover:text-accent transition-colors duration-500"
          style={{ letterSpacing: "0.15em" }}
        >
          MD ASADUL ISLAM
        </button>
        <nav className="hidden md:flex items-center gap-1 panel rounded-full px-2 py-1.5 backdrop-blur">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => onChange(l.id)}
                className="relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent/10 border border-accent/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${isActive ? "text-accent" : ""}`}>{l.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="md:hidden">
          <select
            value={active}
            onChange={(e) => onChange(e.target.value as SectionId)}
            className="panel rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] font-mono bg-card text-foreground"
          >
            {links.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
        </div>
      </div>
    </header>
  );
}
