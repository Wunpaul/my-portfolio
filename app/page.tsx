import Hero from "./components/Hero"
import FeaturedWork from "./components/FeaturedWork"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}