import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ChefProfile } from "@/components/ChefProfile";
import { Journey } from "@/components/Journey";
import { Specializations } from "@/components/Specializations";
import { Services } from "@/components/Services";
import { Creations } from "@/components/Creations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      <Hero />
      <ChefProfile />
      <Journey />
      <Specializations />
      <Creations />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
