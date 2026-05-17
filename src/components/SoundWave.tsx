import { motion } from "framer-motion";

export function SoundWave({ className = "" }: { className?: string }) {
  const paths = [
    "M0,40 Q40,10 80,40 T160,40 T240,40 T320,40 T400,40",
    "M0,40 Q40,68 80,40 T160,40 T240,40 T320,40 T400,40",
    "M0,40 Q40,20 80,40 T160,55 T240,28 T320,48 T400,40",
    "M0,40 Q40,55 80,30 T160,48 T240,32 T320,52 T400,40",
  ];
  return (
    <svg viewBox="0 0 400 80" className={className} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="wave-g" x1="0" x2="1">
          <stop offset="0%" stopColor="#7000FF" />
          <stop offset="50%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#7000FF" />
        </linearGradient>
      </defs>
      <motion.path
        fill="none"
        stroke="url(#wave-g)"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ d: paths }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        fill="none"
        stroke="#00F0FF"
        strokeOpacity="0.35"
        strokeWidth="1"
        animate={{ d: [...paths].reverse() }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
