import { Instagram, Youtube, Music, MessageCircle, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/aiah_de_leon",
      handle: "@aiah_de_leon"
    },
    {
      name: "TikTok",
      icon: MessageCircle,
      url: "https://tiktok.com/@aiah_cebu",
      handle: "@aiah_cebu"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@aiahofficial",
      handle: "Aiah Official"
    },
    {
      name: "Spotify",
      icon: Music,
      url: "https://open.spotify.com/artist/aiah",
      handle: "Aiah"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Media", href: "#media" },
    { name: "Social", href: "#social" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-heading font-bold mb-4">Aiah</h3>
            <p className="text-primary-glow mb-6 leading-relaxed">
              Filipino P-pop artist, BINI member, singer, rapper, dancer, and model from Cebu, Philippines. 
              Representing Filipino talent on the global stage.
            </p>
            <div className="flex items-center text-primary-glow">
              <Heart className="w-4 h-4 mr-2 fill-current" />
              <span>From Cebu with Love</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-heading font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-glow hover:text-primary-foreground transition-smooth flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Management</h5>
              <a
                href="mailto:biniph.official@gmail.com"
                className="text-primary-glow hover:text-primary-foreground transition-smooth"
              >
                biniph.official@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-heading font-semibold mb-6">Follow Aiah</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-smooth group animate-slide-in-right"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-foreground/20 rounded-lg mr-3 group-hover:scale-110 transition-smooth">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{social.name}</div>
                    <div className="text-sm text-primary-glow">{social.handle}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-glow text-center md:text-left">
              <p>&copy; 2025 Aiah Official. All rights reserved.</p>
              <p className="text-sm mt-1">Made with ❤️ for Filipino P-pop fans worldwide</p>
            </div>
            
            <div className="flex items-center space-x-6 text-primary-glow">
              <a href="#" className="hover:text-primary-foreground transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-smooth text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;