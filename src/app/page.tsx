import Hero from "../components/Hero";
import Background from "@/components/Background";
import Services from "@/components/Services";
import About from '@/components/About';
import ContactForm from "@/components/ContactForm";
import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Background />
      <Hero />
      <Services />
      <About />
      <Portfolio />
     <ContactForm />
    </main>
  );
}