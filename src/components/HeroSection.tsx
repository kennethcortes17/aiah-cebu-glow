import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Music, ExternalLink } from "lucide-react";
import heroImage from "@/assets/aiah-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Aiah - Filipino P-pop Artist"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4">
            <span className="block">Aiah</span>
            <span className="text-gradient-secondary block text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
              Singer • Rapper • Dancer • Model
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-4 font-body">
            From Cebu to the World
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            BINI Member • 6M+ Followers • Representing Filipino Talent Globally
          </p>
        </div>

        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="w-full sm:w-auto animate-scale-in"
            asChild
          >
            <a href="https://open.spotify.com/artist/spotify-artist-id" target="_blank" rel="noopener noreferrer">
              <Music className="mr-2" />
              Listen on Spotify
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
          
          <Button 
            variant="gold" 
            size="xl"
            className="w-full sm:w-auto animate-scale-in"
            style={{ animationDelay: '0.1s' }}
            asChild
          >
            <a href="https://youtube.com/@channel" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2" />
              Watch on YouTube
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
          
          <Button 
            variant="glass" 
            size="xl"
            className="w-full sm:w-auto animate-scale-in"
            style={{ animationDelay: '0.2s' }}
            asChild
          >
            <a href="https://instagram.com/aiah_de_leon" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" />
              Follow on Instagram
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
