import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MediaSection from "@/components/MediaSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;