import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { Experience } from "@/components/Experience";
import { Signatures } from "@/components/Signatures";
import { SignBand } from "@/components/SignBand";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Experience />
        <Signatures />
        <SignBand />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
