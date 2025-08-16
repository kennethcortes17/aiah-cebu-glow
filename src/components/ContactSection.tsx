import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Briefcase, Users, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Management Email",
      value: "biniph.official@gmail.com",
      link: "mailto:biniph.official@gmail.com"
    },
    {
      icon: MapPin,
      label: "Based in",
      value: "Cebu, Philippines",
      link: null
    },
    {
      icon: Phone,
      label: "Business Inquiries",
      value: "Contact via email",
      link: null
    }
  ];

  const inquiryTypes = [
    { value: "brand-collaboration", label: "Brand Collaboration", icon: Briefcase },
    { value: "event-booking", label: "Event Booking", icon: Users },
    { value: "media-interview", label: "Media Interview", icon: Camera },
    { value: "general", label: "General Inquiry", icon: Mail }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.inquiryType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Ready to collaborate? Whether it's for brand partnerships, event bookings, or media inquiries, 
            we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-center p-4 bg-card rounded-xl shadow-elegant hover:shadow-glow transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mr-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-lg font-medium text-card-foreground hover:text-primary transition-smooth"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-card-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-xl font-heading font-bold mb-4">Professional Opportunities</h4>
              <div className="space-y-3">
                {inquiryTypes.map((type, index) => (
                  <div 
                    key={type.value}
                    className="flex items-center animate-slide-in-left"
                    style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <type.icon className="w-5 h-5 mr-3 text-primary-glow" />
                    <span>{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-heading font-bold text-card-foreground mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company or organization"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Type of Inquiry *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center">
                            <type.icon className="w-4 h-4 mr-2" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;