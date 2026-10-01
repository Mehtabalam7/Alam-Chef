
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#profile" },
  { label: "Journey", href: "#journey" },
  { label: "Expertise", href: "#expertise" },
  { label: "Creations", href: "#creations" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    NAV_ITEMS.forEach((item) => {
      const id = item.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop Navigation - Luxury Signature Bar */}
      <nav
        className={cn(
          "hidden md:flex items-center gap-12 px-12 py-5 rounded-full border transition-all duration-700",
          "bg-white/70 dark:bg-black/40 backdrop-blur-3xl shadow-2xl border-black/5 dark:border-white/5",
          isScrolled ? "scale-90 border-primary/20 bg-white/80 dark:bg-black/50" : "scale-100"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-2xl font-headline tracking-tighter text-foreground dark:text-white uppercase leading-none">Alam</span>
          <span className="text-2xl italic text-primary font-headline leading-none">Chef</span>
        </div>

        {/* Separator */}
        <div className="h-6 w-[1px] bg-foreground/10 dark:bg-white/10" />

        {/* Links Section */}
        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 rounded-full",
                  isActive 
                    ? "text-foreground dark:text-white bg-primary/10 dark:bg-primary/40 shadow-inner" 
                    : "text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Signature Pill */}
      <div className={cn(
        "flex md:hidden w-full max-w-[92vw] justify-between items-center px-8 py-3 rounded-full border bg-background/80 dark:bg-black/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl",
        isScrolled ? "scale-95 border-primary/40" : "border-black/5 dark:border-white/10"
      )}>
        <div className="flex items-center gap-2">
          <span className="text-xl font-headline tracking-tighter text-foreground dark:text-white uppercase leading-none">Alam</span>
          <span className="text-xl italic text-primary font-headline leading-none">Chef</span>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-foreground dark:text-white hover:bg-primary/20 rounded-full w-12 h-12">
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-[2px] bg-foreground dark:bg-white" />
                <div className="w-4 h-[2px] bg-primary" />
                <div className="w-6 h-[2px] bg-foreground dark:bg-white" />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-foreground/5 dark:border-white/5 text-foreground dark:text-white pt-16 px-10 pb-10 flex flex-col">
            <SheetHeader className="mb-8 mt-8">
              <SheetTitle className="text-foreground dark:text-white font-headline text-4xl text-left flex items-center gap-3">
                <span className="uppercase tracking-tighter">Alam</span>
                <span className="text-primary italic">Chef</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-headline transition-all duration-500 uppercase tracking-[0.15em] flex items-center gap-4 group",
                    activeSection === item.href 
                      ? "text-primary translate-x-4" 
                      : "text-foreground/60 dark:text-white/60 hover:text-foreground dark:hover:text-white hover:translate-x-4"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
