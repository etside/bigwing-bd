import heroImage from "@/assets/hero-construction.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Big Wing Bangladesh construction site"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-body text-primary tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up">
          CONSTRUCTION MATERIALS SUPPLIER & WHOLESALER
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up [animation-delay:200ms] opacity-0">
          <span className="text-foreground">BIG WING</span>
          <br />
          <span className="text-gradient-primary">BANGLADESH</span>
        </h1>
        <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:400ms] opacity-0">
          Premium quality steel products, scaffolding & construction materials at the lowest prices in Bangladesh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:600ms] opacity-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-sm hover:brightness-110 transition-all"
          >
            GET A QUOTE
          </a>
          <a
            href="tel:+8801936448555"
            className="inline-flex items-center justify-center gap-2 border border-foreground/30 text-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-all"
          >
            <Phone className="w-5 h-5" />
            CALL NOW
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
