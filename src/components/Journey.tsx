
"use client";

import { useState } from "react";
import { MapPin, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    role: "Head Chef",
    period: "Jul 2026 – Present",
    company: "Aira Restaurant",
    location: "Ras Al Khaimah, UAE",
    current: true
  },
  {
    role: "Senior Sous Chef",
    period: "Apr 2024 – Jun 2026",
    company: "Baraak Restaurant",
    location: "Dubai, UAE"
  },
  {
    role: "Head Chef",
    period: "Apr 2022 – Apr 2024",
    company: "Al Hafa Restaurant",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Curries & Kabab Sous Chef",
    period: "Sep 2021 – Mar 2022",
    company: "Foodkart Cloud Kitchen",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Curries & Kabab Sous Chef",
    period: "Nov 2013 – Nov 2019",
    company: "Salt & Grill Restaurant",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Chef",
    period: "Nov 2009 – Jun 2012",
    company: "Hotel GRT Grand",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Senior Commis Chef",
    period: "Jul 2004 – Dec 2008",
    company: "The Park Hotel",
    location: "Tamil Nadu, India"
  },
  {
    role: "Senior Indian Tandoor Cook",
    period: "Feb 2001 – Mar 2003",
    company: "Artz Restaurant",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Cook",
    period: "Sep 2000 – Feb 2001",
    company: "Taj Coramandel Hotel",
    location: "Tamil Nadu, India"
  },
  {
    role: "Indian Assistant Cook",
    period: "Dec 1997 – Nov 1998",
    company: "Kwality Restaurant",
    location: "Kolkata, India"
  }
];

export function Journey() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="journey" className="py-32 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="space-y-4 mb-24 text-center">
          <div className="flex items-center gap-4 justify-center">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">The Timeline</span>
            <div className="h-[2px] w-12 bg-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-headline tracking-tighter leading-tight text-foreground uppercase">
            MY CULINARY <span className="italic text-primary">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            A career forged in the heat of India&apos;s most prestigious kitchens, now delivering excellence in the heart of Dubai.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0 relative">
            {EXPERIENCES.map((exp, index) => {
              const isHighlighted = (index === 0 && hoveredIndex === null) || (hoveredIndex === index);

              return (
                <div 
                  key={index} 
                  className={cn(
                    "relative flex flex-col md:flex-row items-center justify-between md:mb-24 transition-all duration-500",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-full md:w-[45%] transition-all duration-1000",
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  )}>
                    <div 
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={cn(
                        "p-8 rounded-[40px] border transition-all duration-500 shadow-sm cursor-default",
                        isHighlighted 
                          ? "border-primary bg-primary/10 shadow-xl shadow-primary/20 scale-[1.02]" 
                          : "border-border bg-secondary/40 scale-100"
                      )}
                    >
                      <div className={cn(
                        "flex flex-wrap items-center gap-3 mb-6",
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      )}>
                        <span className={cn(
                          "text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border transition-colors",
                          isHighlighted ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border shadow-sm"
                        )}>
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 text-xs font-semibold">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <h3 className={cn(
                        "text-2xl md:text-4xl font-headline leading-tight mb-3 transition-colors",
                        isHighlighted ? "text-primary" : "text-foreground"
                      )}>
                        {exp.role}
                      </h3>
                      
                      <div className={cn(
                        "flex items-center gap-3 text-muted-foreground",
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      )}>
                        <Building2 className="w-5 h-5 text-primary" />
                        <span className="font-headline text-xl tracking-tight text-foreground/90 font-medium">{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 hidden md:block">
                    <div className={cn(
                      "w-7 h-7 rounded-full border-4 border-background transition-all duration-500 shadow-xl",
                      isHighlighted 
                        ? "bg-primary scale-125 shadow-primary/40 ring-4 ring-primary/20" 
                        : "bg-border scale-100"
                    )} />
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
