import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
   
       <main className="bg-black text-white min-h-screen">
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Projects />
      <Testimonials/>
      <Contact />
      <Footer/>
    </main>
   
  );
}
