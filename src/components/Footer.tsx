const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading text-lg text-foreground tracking-wider mb-2">
        BIG<span className="text-primary">WING</span> BANGLADESH
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Big Wing Bangladesh. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
