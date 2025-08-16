import { Instagram, Youtube, Music, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@aiah_de_leon",
      followers: "6.2M",
      description: "Daily updates, behind-the-scenes, and fashion moments",
      icon: Instagram,
      color: "from-pink-500 to-rose-500",
      link: "https://instagram.com/aiah_de_leon"
    },
    {
      name: "TikTok",
      handle: "@aiah_cebu",
      followers: "3.8M",
      description: "Dance challenges, trending content, and fun moments",
      icon: MessageCircle,
      color: "from-black to-gray-800",
      link: "https://tiktok.com/@aiah_cebu"
    },
    {
      name: "YouTube",
      handle: "Aiah Official",
      followers: "2.1M",
      description: "Music videos, vlogs, and exclusive performances",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      link: "https://youtube.com/@aiahofficial"
    },
    {
      name: "Spotify",
      handle: "Aiah",
      followers: "1.5M",
      description: "Latest tracks, playlists, and BINI collaborations",
      icon: Music,
      color: "from-green-400 to-green-600",
      link: "https://open.spotify.com/artist/aiah"
    }
  ];

  const recentPosts = [
    {
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop&crop=center",
      caption: "Behind the scenes of our latest music video shoot ✨",
      likes: "127K",
      timeAgo: "2 hours ago"
    },
    {
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&crop=center",
      caption: "Cebu sunsets hit different 🌅 #CebuPride",
      likes: "89K",
      timeAgo: "1 day ago"
    },
    {
      platform: "Instagram",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
      caption: "BINI rehearsals are always so much fun! 💃",
      likes: "156K",
      timeAgo: "3 days ago"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Social <span className="text-gradient-primary">Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Stay connected with Aiah across all platforms for the latest updates, exclusive content, and behind-the-scenes moments
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={platform.name}
              className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-smooth hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl mb-4 group-hover:scale-110 transition-smooth`}>
                <platform.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-1">
                {platform.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{platform.handle}</p>
              <p className="text-2xl font-bold text-gradient-primary mb-3">{platform.followers}</p>
              <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
                asChild
              >
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  Follow
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-8 animate-fade-in">
            Recent <span className="text-gradient-secondary">Posts</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={`Recent post ${index + 1}`}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                    {post.platform}
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-card-foreground mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <span className="text-red-500 mr-1">❤️</span>
                      {post.likes}
                    </span>
                    <span>{post.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-3xl p-8 shadow-elegant">
          <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
            Never Miss an Update
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow Aiah on all platforms to stay up-to-date with her latest projects, performances, and personal moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Instagram className="mr-2" />
              Follow on Instagram
            </Button>
            <Button variant="gold" size="lg">
              <Youtube className="mr-2" />
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;