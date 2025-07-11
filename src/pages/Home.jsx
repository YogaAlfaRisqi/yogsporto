import AboutSection from "../features/about/AboutSection";
import HeroSection from "../features/hero/HeroSection";
import ServiceSection from "../features/Service/ServiceSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
    </div>
  );
}
