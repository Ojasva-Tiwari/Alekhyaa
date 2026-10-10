import { Navbar } from "@/components/navigation/Navbar";
import { HeroWheelSection } from "@/components/hero/HeroWheelSection";
import { ProductStoryShowcase } from "@/components/stories/ProductStoryShowcase";
import { CustomTieSection } from "@/components/custom/CustomTieSection";
import { AboutBrandSection } from "@/components/about/AboutBrandSection";
import { InstagramSection } from "@/components/instagram/InstagramSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-white selection:bg-white/20 selection:text-white relative">
      <Navbar />
      <HeroWheelSection />
      <ProductStoryShowcase />
      <CustomTieSection />
      <AboutBrandSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
