import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavHeader, type SectionId } from "@/components/NavHeader";
import { FluidCanvas } from "@/components/FluidCanvas";
import { HomeSection } from "@/components/sections/HomeSection";
import { BiographySection } from "@/components/sections/BiographySection";
import { DiscographySection } from "@/components/sections/DiscographySection";
import { NotebookSection } from "@/components/sections/NotebookSection";
import { BookingsSection } from "@/components/sections/BookingsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

const sections: Record<SectionId, React.ComponentType> = {
  home: HomeSection,
  biography: BiographySection,
  discography: DiscographySection,
  notebook: NotebookSection,
  bookings: BookingsSection,
};

function Index() {
  const [active, setActive] = useState<SectionId>("home");
  const Active = sections[active];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip relative">
      <FluidCanvas />
      <NavHeader active={active} onChange={(id) => { setActive(id); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Active />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
