
"use client";

import { useState } from "react";
import { generateDishDescription } from "@/ai/flows/dish-description-assistant-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AiAssistant() {
  const [dishName, setDishName] = useState("");
  const [keyIngredients, setKeyIngredients] = useState("");
  const [cookingMethod, setCookingMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateDishDescription({
        dishName,
        keyIngredients,
        cookingMethod,
      });
      setDescription(result.description);
      toast({
        title: "Description Generated",
        description: "Your culinary masterpiece is ready for the menu.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-assistant" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI Powered Tool
              </span>
              <h2 className="text-4xl font-headline">Culinary <span className="italic text-primary">Copywriter</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                As a chef, your focus is on the plate. Let our AI assistant help you translate your culinary vision into evocative, professional menu descriptions.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dish-name">Dish Name</Label>
                  <Input
                    id="dish-name"
                    placeholder="e.g., Saffron Infused Lamb Shanky"
                    value={dishName}
                    onChange={(e) => setDishName(e.target.value)}
                    className="bg-secondary/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ingredients">Key Ingredients</Label>
                  <Input
                    id="ingredients"
                    placeholder="e.g., Australian lamb, Persian saffron, basmati rice"
                    value={keyIngredients}
                    onChange={(e) => setKeyIngredients(e.target.value)}
                    className="bg-secondary/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="method">Cooking Method</Label>
                  <Input
                    id="method"
                    placeholder="e.g., Slow-braised for 12 hours"
                    value={cookingMethod}
                    onChange={(e) => setCookingMethod(e.target.value)}
                    className="bg-secondary/50 border-white/10"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading || !dishName}
                className="w-full bg-accent hover:bg-accent/90 text-white py-6 rounded-none uppercase tracking-widest"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                Generate Description
              </Button>
            </form>
          </div>

          <div className="h-full">
            <Card className="bg-secondary/20 border-white/10 h-full min-h-[400px] flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Generated Menu Text</CardTitle>
                <CardDescription>Your evocative dish description will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center relative">
                {description ? (
                  <div className="space-y-6 animate-in fade-in duration-500">
                    <p className="text-lg font-headline italic text-foreground leading-relaxed border-l-2 border-accent pl-6 py-2">
                      {description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyToClipboard}
                      className="absolute top-4 right-4 text-muted-foreground hover:text-white"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-4 opacity-30 select-none">
                    <Sparkles className="w-12 h-12 mx-auto" />
                    <p>Input dish details to create magic.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
