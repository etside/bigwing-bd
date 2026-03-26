import steelImg from "@/assets/steel-products.jpg";
import scaffoldingImg from "@/assets/scaffolding.jpg";
import materialsImg from "@/assets/construction-materials.jpg";

const products = [
  {
    title: "Steel Products",
    desc: "Premium quality steel rods, pipes, angles, and sheets — new and recycled options available.",
    image: steelImg,
  },
  {
    title: "Scaffolding",
    desc: "Manufactured in-house scaffolding systems for safe and efficient construction work.",
    image: scaffoldingImg,
  },
  {
    title: "Construction Materials",
    desc: "Complete range of building supplies including cement, aggregates, and hardware.",
    image: materialsImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">WHAT WE OFFER</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our Products
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
