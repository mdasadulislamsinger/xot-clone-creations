import { useRef, useState } from "react";

export function FlipCard({ front, back, label }: { front: string; back: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -10, y: px * 12 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="[perspective:1200px] cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={ref}
        className="relative h-[340px] w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${(flipped ? 180 : 0) + tilt.y}deg)`,
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] panel rounded-2xl p-7 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/15 blur-3xl" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{label}</div>
          <div className="font-display text-3xl leading-tight">{front}</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tap to flip →</div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] panel rounded-2xl p-7 overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-violet/20 blur-3xl" />
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet">Inside notes</div>
          <p className="text-sm text-foreground/85 leading-relaxed mt-4">{back}</p>
        </div>
      </div>
    </div>
  );
}
