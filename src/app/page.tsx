import Hero from "@/components/blocks/Hero";
import Projects from "@/components/blocks/Projects";
import Experience from "@/components/blocks/Experience";
import Contact from "@/components/blocks/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
