import Hero from "@/components/blocks/Hero";
import Projects from "@/components/blocks/Projects";
import Experience from "@/components/blocks/Experience";
import Contact from "@/components/blocks/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <div className="relative z-10 bg-black mb-[100vh]">
        <Hero />
        <Projects />
        <Experience />
      </div>
      <Contact />
    </main>
  );
}
