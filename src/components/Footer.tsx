import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <img src={logo} alt="Big Wing Bangladesh" className="h-8 w-auto" />
        <p className="font-heading text-lg text-foreground tracking-wider">
          BIG<span className="text-primary">WING</span> BANGLADESH
        </p>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Big Wing Bangladesh. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
