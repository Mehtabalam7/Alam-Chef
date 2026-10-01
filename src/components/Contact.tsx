
"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Linkedin, ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-10 sm:w-12 bg-primary" />
                <span className="text-primary uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] font-black">Get in Touch</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline tracking-tighter uppercase leading-none text-foreground">
                LET'S START A <span className="text-primary italic">CONVERSATION</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                Whether it's a new restaurant concept, menu consultancy, or a private culinary event, I am ready to bring excellence to your project.
              </p>
            </div>

            <div className="flex gap-4">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary group transition-all text-muted-foreground hover:text-primary-foreground">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Options */}
          <div className="bg-secondary/20 p-4 sm:p-6 md:p-8 lg:p-12 rounded-[28px] sm:rounded-[36px] md:rounded-[40px] border border-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 blur-[80px] -z-10" />

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-primary">Connect With The Chef</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline tracking-tight text-foreground">
                  Choose the fastest way to connect
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Call, message on WhatsApp, or email directly for private dining, catering, consultancy, and event bookings.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+919840964919" className="flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-border bg-background/50 p-3 sm:p-4 hover:border-primary transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Call</p>
                      <p className="text-base sm:text-xl font-headline text-foreground truncate">+91 9840964919</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a href="https://wa.me/919840964919?text=Hello%20Chef%20MD%20Mushtaque%20Alam%2C%20I%20want%20to%20discuss%20a%20booking%20or%20project." target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-border bg-background/50 p-3 sm:p-4 hover:border-primary transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">WhatsApp</p>
                      <p className="text-base sm:text-xl font-headline text-foreground">Chat directly</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>

                <a href="mailto:chefmushtaquealam@gmail.com?subject=Chef%20Booking%20Inquiry" className="flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-border bg-background/50 p-3 sm:p-4 hover:border-primary transition-colors group">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Email</p>
                      <p className="text-sm sm:text-lg font-headline text-foreground truncate">chefmushtaquealam@gmail.com</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>
              </div>

              <div className="pt-1 sm:pt-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 sm:py-6 rounded-2xl uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-black shadow-lg shadow-primary/20 transition-all">
                  <a href="tel:+919840964919" className="flex items-center gap-2 justify-center w-full">
                    Contact Chef <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
