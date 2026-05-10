import { useEffect, useState } from "react";

export function TopBar() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour12: false }));
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between text-xs font-mono uppercase tracking-widest">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Local/</span>
        <span className="text-foreground">{time}</span>
      </div>
      <div className="hidden md:flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-foreground/60" />
        <span className="w-1 h-1 rounded-full bg-foreground/60" />
        <span className="w-1 h-1 rounded-full bg-foreground/60" />
        <span className="w-1 h-1 rounded-full bg-foreground/60" />
      </div>
      <a
        href="#contact"
        className="rounded-full border border-foreground/40 px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors"
      >
        Contact Now
      </a>
    </header>
  );
}
