import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">GET IN TOUCH</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-card border border-border rounded-sm p-8 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-foreground mb-2">ADDRESS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              House 115 Road-07,<br />
              Zeenat Center 2,<br />
              Dhaka 1230, Bangladesh
            </p>
          </div>
          <div className="bg-gradient-card border border-border rounded-sm p-8 text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-foreground mb-2">PHONE</h3>
            <a href="tel:+8801936448555" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              +880 1936-448555
            </a>
          </div>
          <div className="bg-gradient-card border border-border rounded-sm p-8 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl text-foreground mb-2">HOURS</h3>
            <p className="text-muted-foreground text-sm">
              Open Daily<br />
              Until 8:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
