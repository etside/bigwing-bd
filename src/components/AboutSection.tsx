import { Shield, Truck, Award, Clock } from "lucide-react";

const stats = [
  { icon: Shield, label: "Quality Assured", desc: "Prime & verified materials" },
  { icon: Truck, label: "Fast Delivery", desc: "Across Dhaka & beyond" },
  { icon: Award, label: "5.0 Rated", desc: "On Google Reviews" },
  { icon: Clock, label: "Open Daily", desc: "Until 8 PM" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">WHO WE ARE</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Bangladesh's Future
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are one of the best construction service providers, construction materials suppliers, and wholesalers in Bangladesh. We sell prime quality, new and old, all kinds of steel products.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As manufacturers of scaffolding products, we provide everything your construction project needs — at the lowest prices in the market.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gradient-card border border-border rounded-sm p-6">
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
