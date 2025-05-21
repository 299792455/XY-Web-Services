import Hero from "../components/Hero";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      <Background />
      <Hero />
    </main>
  );
}