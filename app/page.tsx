import Section from "@/components/Section";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="about" title="About">
        <About />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="education" title="Education & Certifications">
        <Education />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </>
  );
}
