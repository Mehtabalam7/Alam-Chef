
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Moon, Sun, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { cn, getYearsOfExperience } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  const chefImg = PlaceHolderImages.find(img => img.id === 'hero-chef');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const yearsOfExperience = getYearsOfExperience();

  // Sync theme with document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 lg:pt-40 pb-12 overflow-hidden px-4">
      {/* Background noise effect */}
      <div className="noise-overlay" />
      
      <div className="container mx-auto max-w-7xl relative flex flex-col items-center justify-center flex-grow">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 w-full px-4 md:px-16 lg:px-20">
          
          {/* Left Text Segment */}
          <div className="order-2 lg:order-1 lg:text-right flex flex-col items-center lg:items-end z-10 w-full lg:w-auto">
            <span className="text-muted-foreground uppercase tracking-[0.3em] text-[12px] md:text-sm font-bold mb-2 lg:mr-2 text-center lg:text-right">
              MD MUSHTAQUE ALAM
            </span>
            <h1 className="text-[14vw] sm:text-[12vw] lg:text-[90px] xl:text-[120px] font-headline leading-[0.9] text-foreground select-none whitespace-nowrap">
              Culinary
            </h1>
          </div>

          {/* Central Vertical Portrait */}
          <div className="order-1 lg:order-2 relative w-[65vw] h-[85vw] sm:w-[280px] sm:h-[400px] md:w-[320px] md:h-[480px] lg:mx-8 rounded-[40px] md:rounded-[60px] lg:rounded-[80px] group transition-all duration-500 hover:scale-[1.02] flex-shrink-0 border-2 border-primary/20 shadow-2xl overflow-hidden bg-secondary">
            <Image
              src={chefImg?.imageUrl || "https://images.unsplash.com/photo-1583394293214-28dea15ee548?q=80&w=1200&auto=format&fit=crop"}
              alt="Chef MD MUSHTAQUE ALAM"
              fill
              className="object-cover transition-all duration-1000 ease-out brightness-100 contrast-105"
              priority
              data-ai-hint="master chef"
            />
          </div>

          {/* Right Text Segment */}
          <div className="order-3 lg:order-3 flex flex-col items-center lg:items-start z-10 w-full lg:w-auto">
            <h1 className="text-[14vw] sm:text-[12vw] lg:text-[90px] xl:text-[120px] font-headline leading-[0.9] text-foreground select-none whitespace-nowrap">
              Maestro
            </h1>
            <div className="mt-4 lg:mt-8 space-y-6 max-w-[280px] md:max-w-[320px] text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground text-[14px] md:text-base font-light leading-relaxed tracking-wide">
                  Master Chef with {yearsOfExperience}+ years of expertise in authentic Indian cuisine, specializing in Tandoor and Kebabs.
                </p>
                <div className="w-8 h-[1px] bg-primary mx-auto lg:mx-0"></div>
              </div>
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-primary/60 hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-[0.2em] text-[10px] font-black px-6 py-3 h-auto shadow-lg shadow-primary/5"
                asChild
              >
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interface Elements */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 mt-12 px-10 md:px-16">
        <div className="flex items-center gap-6 bg-secondary/80 dark:bg-secondary/20 backdrop-blur-md px-6 py-3 rounded-full border border-border">
          <Moon className={cn("w-5 h-5 transition-colors", isDarkMode ? "text-primary" : "text-muted-foreground")} />
          <Switch 
            checked={isDarkMode} 
            onCheckedChange={setIsDarkMode}
            className="data-[state=checked]:bg-primary h-6 w-11"
          />
          <Sun className={cn("w-5 h-5 transition-colors", !isDarkMode ? "text-foreground" : "text-muted-foreground")} />
        </div>
      </div>
    </section>
  );
}
