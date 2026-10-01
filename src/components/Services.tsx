
"use client";

import { LayoutGrid, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { cn, getYearsOfExperience } from "@/lib/utils";

const CONSULTANCY_SERVICES = [
  {
    title: "Strategic Menu & Recipe Design",
    description: "Developing profitable, high-concept menus and standardized recipes that perfectly balance traditional Indian heritage (Curries, Kebabs, Tandoor) with modern cost-efficiency and portion control.",
    icon: LayoutGrid,
    details: ["Menu Planning & Dev", "Recipe Standardization", "Portion Control Mastery"]
  },
  {
    title: "Operations & Cost Management",
    description: `Leveraging ${getYearsOfExperience()}+ years of expertise to optimize kitchen operations, implement rigorous inventory management, and manage vendor relations to maximize ROI.`,
    icon: TrendingUp,
    details: ["Inventory Management", "Cost Control Strategies", "Vendor Management"]
  },
  {
    title: "HACCP & Quality Systems",
    description: "Implementing world-class Food Safety and HACCP compliance protocols while maintaining the highest levels of quality assurance and culinary presentation.",
    icon: ShieldCheck,
    details: ["HACCP Compliance", "Quality Assurance", "Visual Presentation Standards"]
  },
  {
    title: "Talent Leadership & Large-Scale Ops",
    description: "Building high-performance teams through expert staff training and supervision, specialized in executing complex banquet and large-scale catering events.",
    icon: Users,
    details: ["Staff Training & Mentorship", "Banquet Operations", "Team Supervision"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/5 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-black">Executive Solutions</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline tracking-tighter uppercase leading-none text-foreground">
              CONSULTANCY & <span className="text-primary italic">SERVICES</span>
            </h2>
          </div>
          <div className="space-y-6 max-w-md lg:hidden">
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Transforming your culinary vision into a profitable and sustainable business model through strategic operations and menu engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {CONSULTANCY_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 md:p-12 rounded-[40px] bg-background border-2 border-primary/20 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-4xl font-headline text-foreground leading-tight tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
