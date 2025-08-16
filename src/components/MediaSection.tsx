import { Play, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const MediaSection = () => {
  const mediaItems = [
    {
      type: "video",
      title: "BINI Latest Music Video",
      description: "Watch Aiah's latest performance with BINI",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop&crop=center",
      duration: "3:45"
    },
    {
      type: "photoshoot",
      title: "Fashion Editorial",
      description: "Behind the scenes of Aiah's latest fashion shoot",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=450&fit=crop&crop=center",
      likes: "125K"
    },
    {
      type: "performance",
      title: "Live Performance",
      description: "Aiah's stunning live performance in Manila",
      thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=450&fit=crop&crop=center",
      duration: "4:12"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=center"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Media <span className="text-gradient-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Explore Aiah's latest performances, photoshoots, and behind-the-scenes moments
          </p>
        </div>

        {/* Featured Media */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mediaItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-smooth hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="glass" size="lg" className="backdrop-blur-md">
                    {item.type === "video" || item.type === "performance" ? (
                      <Play className="mr-2" />
                    ) : (
                      <ExternalLink className="mr-2" />
                    )}
                    View
                  </Button>
                </div>

                {/* Duration or Likes Badge */}
                {item.duration && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm">
                    {item.duration}
                  </div>
                )}
                {item.likes && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm flex items-center">
                    <Heart className="w-3 h-3 mr-1 fill-current" />
                    {item.likes}
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-8 animate-fade-in">
            Photo <span className="text-gradient-secondary">Gallery</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="aspect-[4/5] group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-glow transition-smooth hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={image} 
                  alt={`Aiah gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="animate-fade-in">
            <ExternalLink className="mr-2" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;