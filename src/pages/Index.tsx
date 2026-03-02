import { useState } from "react";
import { MapPin, Droplets, Zap, Car, Phone, MessageCircle } from "lucide-react";
import heroImage1200 from "@/assets/hero-santa-teresa-1200.jpg";
import heroImage768 from "@/assets/hero-santa-teresa-768.jpg";

const WHATSAPP_NUMBER = "972543344501";
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
          src={heroImage1200}
          srcSet={`${heroImage768} 768w, ${heroImage1200} 1200w`}
          sizes="100vw"
          alt="Aerial view of Santa Teresa, Costa Rica — lush jungle meets turquoise ocean"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={1200}
          height={896}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 pt-32 text-white">
          <p className="text-base sm:text-lg uppercase tracking-[0.22em] mb-3 opacity-90">Santa Teresa, Costa Rica</p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-5">
            Your Land in Paradise<br />
            <span className="text-accent">Starting at $140K</span>
          </h1>
          <p className="text-xl sm:text-2xl opacity-95 max-w-2xl mb-9 leading-relaxed">
            Ready-to-build lots with water, electricity, and road access, only 5 minutes from the heart of Santa Teresa.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white text-xl px-9 py-7 gap-3 rounded-full shadow-xl font-semibold">
              <MessageCircle className="w-7 h-7" />
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-14">More Than Great Location</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <article key={f.title} className="p-7 text-center border border-border bg-card hover:shadow-lg transition-shadow rounded-xl">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 ring-1 ring-primary/15 flex items-center justify-center">
                  <f.icon className="w-8 h-8 text-primary" strokeWidth={2.3} />
                </div>
                <h3 className="text-[1.8rem] sm:text-3xl font-semibold text-foreground mb-2 leading-tight">{f.title}</h3>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Interested? Let's Talk.</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-9 leading-relaxed">Leave your info and we'll reach out, or message us directly on WhatsApp.</p>

          {submitted ? (
            <div className="bg-white/10 rounded-xl p-8">
              <p className="text-2xl font-semibold">Thank you, {name}! 🎉</p>
              <p className="mt-2 text-lg opacity-85">We'll be in touch very soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-14 text-lg rounded-md px-3"
              />
              <input
                placeholder="Phone Number (with country code)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                className="w-full bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 h-14 text-lg rounded-md px-3"
              />
              <button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-xl font-semibold rounded-full inline-flex items-center justify-center">
                <Phone className="w-6 h-6 mr-2" />
                Request a Call Back
              </button>
            </form>
          )}

          <div className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4 text-lg opacity-90 hover:opacity-100 transition-opacity">
              <MessageCircle className="w-6 h-6" />
              Or message us on WhatsApp now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-base text-muted-foreground">
        <p>© 2026 Santa Teresa Lots · Costa Rica</p>
      </footer>
    </div>
  );
};

export default Index;
