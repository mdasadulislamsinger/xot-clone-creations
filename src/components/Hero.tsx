import { MapPin, Globe, BadgeCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-10 noise">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative text-center">
        <h1 className="font-display leading-[0.85] tracking-tight">
          <span className="block text-foreground text-[22vw] md:text-[18vw]">XOT</span>
          <span className="block text-accent text-[22vw] md:text-[18vw] -mt-[3vw]">STUDIO</span>
        </h1>
      </div>

      <div className="relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center font-mono text-xs uppercase tracking-widest">
        <InfoItem icon={<MapPin className="w-5 h-5 text-status-green" />} title="Based in United Kingdom," sub="London" />
        <InfoItem icon={<Globe className="w-5 h-5 text-foreground" />} title="Available all around" sub="Worldwide" />
        <InfoItem icon={<BadgeCheck className="w-5 h-5 text-status-blue" />} title="Creative Agency" sub="+ Design Studio" />
      </div>
    </section>
  );
}

function InfoItem({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <div className="text-foreground">{title}</div>
      <div className="text-muted-foreground">{sub}</div>
    </div>
  );
}
