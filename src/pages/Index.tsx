import { useState } from "react";
import { MapPin, Droplets, Zap, Car, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-santa-teresa.png";

const WHATSAPP_NUMBER = "50612345678"; // Replace with actual number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in the lots in Santa Teresa.")}`;

const features = [
  { icon: Car, title: "Easy Road Access", desc: "Paved roads leading directly to your lot" },
  { icon: Droplets, title: "Water Available", desc: "Municipal water connection ready" },
  { icon: Zap, title: "Electricity Available", desc: "Power grid access on-site" },
  { icon: MapPin, title: "5 Min from Center", desc: "Walk to shops, restaurants & beach" },
];

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      // Open WhatsApp with lead info as fallback
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm ${name}. Please call me at ${phone} — I'm interested in the Santa Teresa lots.`)}`,
        "_blank"
      );
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end">
        <img
          src={heroImage}
          alt="Aerial view of Santa Teresa, Costa Rica — lush jungle meets turquoise ocean"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 pt-32 text-white">
          <p className="text-sm uppercase tracking-[0.25em] mb-3 opacity-80">Santa Teresa, Costa Rica</p>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4">
            Your Land in Paradise<br />
            <span className="text-accent">Starting at $140K</span>
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-xl mb-8">
            Ready-to-build lots with water, electricity, and road access — just 5 minutes from the heart of Santa Teresa.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white text-lg px-8 py-6 gap-3 rounded-full shadow-xl">
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why These Lots?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="p-6 text-center border-border bg-card hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Interested? Let's Talk.</h2>
          <p className="opacity-80 mb-8">Leave your info and we'll reach out, or message us directly on WhatsApp.</p>

          {submitted ? (
            <div className="bg-white/10 rounded-xl p-8">
              <p className="text-xl font-semibold">Thank you, {name}! 🎉</p>
              <p className="mt-2 opacity-80">We'll be in touch very soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              />
              <Input
                placeholder="Phone Number (with country code)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12"
              />
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg font-semibold rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Request a Call Back
              </Button>
            </form>
          )}

          <div className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4 opacity-80 hover:opacity-100 transition-opacity">
              <MessageCircle className="w-5 h-5" />
              Or message us on WhatsApp now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
        <p>© 2025 Santa Teresa Lots · Costa Rica</p>
      </footer>
    </div>
  );
};

export default Index;
