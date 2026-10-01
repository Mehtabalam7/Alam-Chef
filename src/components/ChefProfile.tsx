
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Instagram, Linkedin, Award, Hotel, Soup } from "lucide-react";
import { getYearsOfExperience } from "@/lib/utils";

export function ChefProfile() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'chef-action');
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section id="profile" className="py-32 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Visual Representation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-[540px] mx-auto overflow-hidden rounded-[40px] md:rounded-[100px] border border-border/50 shadow-2xl group">
              <Image
                src={profileImg?.imageUrl || "https://picsum.photos/seed/chef-about/800/1000"}
                alt="Chef MD MUSHTAQUE ALAM"
                fill
                className="object-cover transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                data-ai-hint="professional chef"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 left-4 md:-left-12 bg-primary text-primary-foreground p-6 md:p-8 rounded-3xl shadow-xl">
              <span className="block text-4xl md:text-5xl font-headline leading-none">{yearsOfExperience}+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-foreground/80">Years of Mastery</span>
            </div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">The Maestro</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-headline tracking-tighter leading-tight text-foreground">
                ABOUT <span className="italic text-primary">ME</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Accomplished culinary professional with over <span className="text-foreground font-medium">{yearsOfExperience} years of experience</span> in Indian cuisine, specializing in authentic curries, kebabs, and tandoor preparations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have built a proven expertise in leading kitchen operations and developing innovative menus across <span className="text-foreground">the UAE and India</span>. My passion lies in mentoring teams and delivering consistent high-quality dining experiences while staying true to heritage flavors and modern standards.
              </p>
            </div>

            {/* Expertise Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Award, label: "Experience", text: `${yearsOfExperience}+ Years of Mastery` },
                { icon: Hotel, label: "Network", text: "20+ Renowned Establishments" },
                { icon: Soup, label: "Repertoire", text: "200+ Signature Dishes" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-secondary/30 rounded-3xl border border-border/50 hover:bg-secondary/50 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-6">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-border flex items-center justify-center rounded-full hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all text-muted-foreground">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
