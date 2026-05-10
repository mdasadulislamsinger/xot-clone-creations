import { motion } from "framer-motion";

const logos = [
  "https://framerusercontent.com/images/x3pXfSkB7ZjbEFuxlIBhSAT5xfc.png",
  "https://framerusercontent.com/images/LhI8RsJTBUz4Eotd0wFdk2gPy14.png?scale-down-to=4096",
  "https://framerusercontent.com/images/eKazNmnAiSqZ70gWqY9eetJ6OU.png?scale-down-to=1024",
  "https://framerusercontent.com/images/2VQRik3pYcdGKOUJyV45geR8SNU.png",
  "https://framerusercontent.com/images/VxAWwQ3N7oqVapyRWOGfRcs1p18.png?scale-down-to=512",
];

export function ClientsMarquee() {
  const loop = [...logos, ...logos, ...logos];
  return (
    <section className="relative border-y border-border py-14 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground mb-10"
      >
        Trusted by 350+ global companies
      </motion.div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track items-center">
          {loop.map((src, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-12 md:h-14 px-6">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="max-h-full w-auto opacity-55 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 invert brightness-200 contrast-200"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
