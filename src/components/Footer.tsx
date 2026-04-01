const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading font-bold gradient-text">FJ.</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fidelis Joseph. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
