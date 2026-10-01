
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn, getYearsOfExperience } from "@/lib/utils";

const SIGNATURE_DISHES = [
  { id: 1, name: "Biryani", category: "Hyderabadi Dum", imgId: "biryani-dish" },
  { id: 2, name: "Mandi", category: "Arabian Mutton", imgId: "mandi-dish" },
  { id: 3, name: "Haleem", category: "Slow-Cooked Heritage", imgId: "haleem-dish" },
  { id: 4, name: "Tandoori Items", category: "Clay Oven Mastery", imgId: "tandoori-chicken" },
  { id: 5, name: "Chinese Noodles", category: "Wok-Fired Specials", imgId: "chinese-noodles" },
  { id: 6, name: "Fried Rice", category: "Asian Excellence", imgId: "fried-rice" },
  { id: 7, name: "Curries", category: "Signature Gravies", imgId: "kitchen-detail" },
  { id: 8, name: "Kunafa", category: "Artisanal Dessert", imgId: "kunafa-dessert" },
  { id: 9, name: "Puddings", category: "Creamy Classics", imgId: "dessert-creation" },
  { id: 10, name: "Gulab Jamun", category: "Sweet Heritage", imgId: "gulab-jamun" }
];

export function Creations() {
  const yearsOfExperience = getYearsOfExperience();

  return (
    <section id="creations" className="py-20 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-black">Signature Repertoire</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline tracking-tighter uppercase leading-none">
              MY SIGNATURE <span className="text-primary italic">DISHES</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md font-light leading-relaxed lg:hidden">
            A visual showcase of the most celebrated signatures from my {yearsOfExperience}+ years of culinary journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {SIGNATURE_DISHES.map((dish, index) => {
            const img = PlaceHolderImages.find(i => i.id === dish.imgId);
            const fallbackUrl = `https://picsum.photos/seed/${dish.imgId}/1000/1200`;
            
            return (
              <div 
                key={dish.id}
                className="group relative flex flex-col overflow-hidden rounded-[30px] bg-secondary/10 border border-border shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={img?.imageUrl || fallbackUrl}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-110"
                    priority={index < 3}
                    data-ai-hint={img?.imageHint || "gourmet dish"}
                  />
                  
                  {/* Robust text-protection gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
                    <div className="space-y-2">
                      <p className="text-[10px] md:text-xs text-primary brightness-150 saturate-150 uppercase tracking-[0.3em] font-black drop-shadow-sm">
                        {dish.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-headline text-white font-bold tracking-tight uppercase drop-shadow-md">
                        {dish.name}
                      </h3>
                      <div className="w-12 h-[2.5px] bg-primary/60 transition-all duration-500 group-hover:w-full" />
                    </div>
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
