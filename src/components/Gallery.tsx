
"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GALLERY_ITEMS = [
  { id: 1, title: "Saffron Braised Lamb", category: "Indian", imgId: "signature-lamb" },
  { id: 2, title: "Artisanal Dim Sum", category: "Chinese", imgId: "chinese-dimsum" },
  { id: 3, title: "Tandoori Prawns", category: "Indian", imgId: "tandoori-chicken" },
  { id: 4, title: "Modern Panacotta", category: "Dessert", imgId: "dessert-creation" },
  { id: 5, title: "Smoked Wagyu Steak", category: "Continental", imgId: "fine-dining-plate" },
  { id: 6, title: "Herbed Sea Bass", category: "Continental", imgId: "kitchen-detail" },
];

export function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = ["All", "Indian", "Chinese", "Continental", "Dessert"];

  return (
    <section id="gallery" className="section-padding bg-secondary/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline">The Portfolio <span className="italic text-primary">Gallery</span></h2>
            <p className="text-muted-foreground">A visual journey through signatures and seasonal creations.</p>
          </div>
          
          <Tabs defaultValue="All" onValueChange={setFilter}>
            <TabsList className="bg-transparent border border-white/5 rounded-none h-auto p-1 overflow-x-auto max-w-full">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none px-6 py-2 uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const img = PlaceHolderImages.find(i => i.id === item.imgId);
            return (
              <div key={item.id} className="group relative aspect-square overflow-hidden bg-muted animate-in fade-in duration-500">
                <Image
                  src={img?.imageUrl || ""}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-accent text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
                  <h3 className="text-2xl font-headline text-white mb-4">{item.title}</h3>
                  <Button variant="outline" className="rounded-none border-white/20 hover:bg-white/10 text-white uppercase text-[10px] tracking-widest">
                    View Dish
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
