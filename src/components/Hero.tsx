import { MapPin, Globe, BadgeCheck } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.5 });
  const tx = useTransform(sx, v => v * 14);
  const ty = useTransform(sy, v => v * 10);
  const tx2 = useTransform(sx, v => v * -10);
  const ty2 = useTransform(sy, v => v * -8);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 px-6 md:px-10 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative text-center">
        <motion.h1
          className="font-display leading-[0.82] tracking-tight"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            style={{ x: tx, y: ty }}
            variants={{ hidden: { y: "110%", opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.1, ease } } }}
            className="block text-foreground text-[26vw] md:text-[19vw] [transform-style:preserve-3d]"
          >
            <span className="inline-block">XOT</span>
          </motion.span>
          <motion.span
            style={{ x: tx2, y: ty2 }}
            variants={{ hidden: { y: "110%", opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 1.1, ease } } }}
            className="block text-accent text-[26vw] md:text-[19vw] -mt-[3.5vw] drop-shadow-[0_0_60px_rgba(239,30,68,0.35)]"
          >
            <span className="inline-block">STUDIO</span>
          </motion.span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease }}
        className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center font-mono text-[11px] uppercase tracking-[0.2em]"
      >
        <InfoItem icon={<MapPin className="w-5 h-5 text-status-green" />} title="Based in United Kingdom," sub="London" />
        <InfoItem icon={<Globe className="w-5 h-5 text-foreground" />} title="Available all around" sub="Worldwide" />
        <InfoItem icon={<BadgeCheck className="w-5 h-5 text-status-blue" />} title="Creative Agency" sub="+ Design Studio" />
      </motion.div>
    </section>
  );
}

function InfoItem({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {icon}
      <div className="text-foreground">{title}</div>
      <div className="text-muted-foreground">{sub}</div>
    </div>
  );
}
