import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const products = [
  "Steel Pipes",
  "I-Beams & H-Beams",
  "H-Beams",
  "Sheet Piles",
  "SS Square Tubes",
  "Scaffolding",
  "Other",
];

const InquirySection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Inquiry*\nName: ${form.name}\nPhone: ${form.phone}\nProduct: ${form.product}\nQuantity: ${form.quantity}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/8801873722228?text=${text}`, "_blank");
    toast({
      title: "Inquiry Sent!",
      description: "Redirecting to WhatsApp...",
    });
    setForm({ name: "", phone: "", product: "", quantity: "", message: "" });
  };

  return (
    <section id="inquiry" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-[0.3em] text-sm mb-3">
            REQUEST A QUOTE
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Product Inquiry
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-sm p-8 md:p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-heading text-sm tracking-wider text-foreground">
                YOUR NAME *
              </label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <label className="font-heading text-sm tracking-wider text-foreground">
                PHONE NUMBER *
              </label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+880 1XXX-XXXXXX"
                required
                maxLength={20}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-heading text-sm tracking-wider text-foreground">
                PRODUCT *
              </label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-heading text-sm tracking-wider text-foreground">
                QUANTITY
              </label>
              <Input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 pcs / 10 tons"
                maxLength={50}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-heading text-sm tracking-wider text-foreground">
              MESSAGE
            </label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any additional details about your requirements..."
              rows={4}
              maxLength={1000}
            />
          </div>
          <Button type="submit" size="lg" className="w-full font-heading tracking-wider text-lg">
            <Send className="w-5 h-5 mr-2" />
            SEND INQUIRY VIA WHATSAPP
          </Button>
        </form>
      </div>
    </section>
  );
};

export default InquirySection;
