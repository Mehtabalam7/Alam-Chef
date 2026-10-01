
"use client";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-headline text-2xl tracking-tighter flex items-center gap-2">
          <span className="text-foreground uppercase">Alam</span>
          <span className="text-primary italic">Chef</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <p className="text-muted-foreground text-sm md:text-base font-light">
            © {new Date().getFullYear()} MD MUSHTAQUE ALAM. All rights reserved. Professional Portfolio.
          </p>
          <p className="text-muted-foreground text-sm md:text-base tracking-wide font-medium">
            This portfolio was created by{" "}
            <a
              href="https://www.linkedin.com/in/mehtab-alam-234010254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold underline underline-offset-4 decoration-primary/70 hover:text-primary/80 hover:decoration-primary transition-colors"
            >
              Mehtab Alam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
