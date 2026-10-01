
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { getYearsOfExperience } from "@/lib/utils";

const yearsOfExperience = getYearsOfExperience();

export const metadata: Metadata = {
  title: 'MD MUSHTAQUE ALAM | Culinary Maestro',
  description: `Exquisite culinary portfolio of master chef MD MUSHTAQUE ALAM with ${yearsOfExperience}+ years of multi-cuisine expertise.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground transition-colors duration-300">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
