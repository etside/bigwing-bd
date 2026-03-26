import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Inquiry", href: "#inquiry" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Big Wing Bangladesh" className="h-10 w-auto" />
          <span className="font-heading text-xl font-bold text-foreground tracking-wider">
            BIG<span className="text-primary">WING</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-heading text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+8801712397013" className="bg-primary text-primary-foreground font-heading text-sm tracking-wider px-5 py-2 rounded-sm hover:brightness-110 transition-all">
            CALL NOW
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block font-heading text-sm tracking-wider text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
