import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Marquee } from "@/components/Marquee";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Work />
        <Marquee />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
