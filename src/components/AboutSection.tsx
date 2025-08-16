import { MapPin, Users, Instagram, Trophy } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Cebu Roots",
      description: "Born and raised in Cebu, Philippines, representing Filipino talent on the global stage"
    },
    {
      icon: Users,
      title: "BINI Member",
      description: "Part of the acclaimed P-pop girl group BINI, bringing Filipino music to international audiences"
    },
    {
      icon: Instagram,
      title: "6M+ Followers",
      description: "Growing social media presence with millions of fans across platforms"
    },
    {
      icon: Trophy,
      title: "Multi-Talented",
      description: "Singer, rapper, dancer, and model showcasing versatility in the entertainment industry"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            About <span className="text-gradient-primary">Aiah</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Mariah Queen Arceta, known professionally as Aiah, is a Filipino singer, rapper, dancer, and model from Cebu, Philippines. 
            As a member of the P-pop sensation BINI, she represents the new generation of Filipino artists making waves on the international stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className="text-center group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-elegant group-hover:shadow-glow transition-smooth">
                <highlight.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-heading font-bold text-card-foreground mb-6">
                The Journey from <span className="text-gradient-primary">Cebu to Stardom</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aiah's journey began in the vibrant city of Cebu, where her passion for music and performance first took root. 
                Her dedication to her craft and natural charisma quickly caught the attention of talent scouts, leading to her selection as a member of BINI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, she continues to inspire millions of fans worldwide while staying true to her Filipino heritage and representing the rich culture of Cebu on the global stage.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-heading font-bold text-gradient-primary mb-2">6M+</div>
                    <div className="text-sm text-muted-foreground">Instagram Followers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-gradient-secondary mb-2">BINI</div>
                    <div className="text-sm text-muted-foreground">P-pop Group Member</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-gradient-primary mb-2">Cebu</div>
                    <div className="text-sm text-muted-foreground">Hometown Pride</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-gradient-secondary mb-2">Multi</div>
                    <div className="text-sm text-muted-foreground">Talented Artist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;