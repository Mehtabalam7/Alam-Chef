
"use client";

import { Flame, ChefHat, Globe, LayoutGrid, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERTISE_DATA = [
  {
    title: "Heritage Tandoor",
    subtitle: "Indian Clay Oven Mastery",
    description: "Over two decades of perfecting the ancient art of the Tandoor, from succulent signature Kebabs to authentic heritage breads.",
    icon: Flame,
  },
  {
    title: "Artisanal Curries",
    subtitle: "Signature Gravies",
    description: "Deep knowledge of regional Indian spice architectures and slow-cooking traditions.",
    icon: ChefHat,
  },
  {
    title: "Pan-Asian & Chinese",
    subtitle: "Wok Mastery",
    description: "Proficient in high-heat techniques and diverse Asian flavor profiles.",
    icon: Globe,
  },
  {
    title: "Kitchen Leadership",
    subtitle: "Executive Operations",
    description: "Expert in managing high-volume kitchens and maintaining world-class HACCP standards.",
    icon: Users,
  },
  {
    title: "Menu Architecture",
    subtitle: "Concept Design",
    description: "Designing cost-effective, innovative menus that balance tradition with modern trends.",
    icon: LayoutGrid,
  },
  {
    title: "Staff Mentorship",
    subtitle: "Team Development",
    description: "Dedicated to training and uplifting kitchen teams through hands-on leadership.",
    icon: GraduationCap,
  }
];

export function Specializations() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-16 md:mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-black">Professional Mastery</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline tracking-tighter uppercase leading-none text-foreground">
              CULINARY <span className="text-primary italic">EXPERTISE</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md font-light leading-relaxed lg:hidden">
            A versatile repertoire spanning authentic Indian heritage, multi-cuisine mastery, and strategic kitchen management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div 
                key={index}
                className="group relative p-8 md:p-10 flex flex-col justify-between overflow-hidden rounded-[40px] border border-border bg-secondary/20 transition-all duration-500 hover:border-primary/50 hover:bg-secondary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 min-h-[320px]"
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:scale-110 shadow-inner">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-black">
                        {skill.subtitle}
                      </span>
                      <h3 className="font-headline text-3xl leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 w-12 h-[2px] bg-primary/20 transition-all duration-500 group-hover:w-full group-hover:bg-primary/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
