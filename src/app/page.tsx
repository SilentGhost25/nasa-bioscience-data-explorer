"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Search, BarChart3, Gamepad2, Sparkles, Database } from "lucide-react";
import StarField from "@/components/StarField";
import NasaLiveFeed from "@/components/NasaLiveFeed";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("power-on");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StarField />
      <Navigation />
      
      {/* Hero Background Image with Parallax */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
          backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6ccab27e-f814-4c07-ba08-c5df566de7b7/generated_images/epic-futuristic-deep-space-scene-with-a--43b1e45c-20251005034719.jpg?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.4,
        }}
      />
      
      {/* Nebula Overlay with Parallax */}
      <div 
        className="fixed inset-0 z-0 parallax-slow"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: "radial-gradient(ellipse at 20% 30%, rgba(100, 200, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(200, 100, 255, 0.2) 0%, transparent 50%)",
        }}
      />
      
      <div className="relative z-10 min-h-screen pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 relative">
          <div 
            ref={heroRef}
            className="max-w-4xl mx-auto text-center relative"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            {/* Holographic Frame Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/50 tech-corner" />
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent/50 tech-corner" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-nebula/50 tech-corner" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/50 tech-corner" />
            </div>

            <h1 
              className="text-6xl md:text-8xl font-black mb-6 gradient-text glow-text relative"
              style={{ 
                fontFamily: "var(--font-space)",
                letterSpacing: "0.1em"
              }}
            >
              NASA BIOSPACE
            </h1>
            
            <div className="h-1 w-48 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent glow" />
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light tracking-wide">
              Explore <span className="text-primary font-bold">608</span> NASA Bioscience Publications
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Through AI-Powered Interactive Dashboard
            </p>
            <p className="text-base text-muted-foreground/80 mb-16 max-w-2xl mx-auto">
              Discover decades of space biology research, identify knowledge gaps, 
              and explore scientific progress through interactive visualizations, 
              games, and real-time NASA data.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-20">
              <Link href="/research">
                <Button size="lg" className="glow text-lg px-8 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ backgroundSize: "200% 100%", animation: "holographicShimmer 2s linear infinite" }} />
                  <Search className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Explore Research</span>
                </Button>
              </Link>
              <Link href="/visualizations">
                <Button size="lg" variant="outline" className="text-lg px-8 holographic-border group">
                  <BarChart3 className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                  View Data
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Cards with Power-On Animation */}
          <div 
            ref={(el) => (sectionsRef.current[0] = el)}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 opacity-0"
          >
            <Card className="p-6 bg-card backdrop-blur-md holographic-border group hover:scale-105 transition-all duration-300 tech-corner">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:blur-2xl transition-all" />
                <Search className="h-12 w-12 text-primary mb-4 relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(100,200,255,0.8)] transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
                RESEARCH EXPLORER
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Search and filter through 608 NASA bioscience publications with AI-powered summaries and insights.
              </p>
            </Card>

            <Card className="p-6 bg-card backdrop-blur-md holographic-border group hover:scale-105 transition-all duration-300 tech-corner">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/5 blur-xl group-hover:blur-2xl transition-all" />
                <BarChart3 className="h-12 w-12 text-accent mb-4 relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(200,100,255,0.8)] transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
                DATA VISUALIZATIONS
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Interactive charts, knowledge graphs, and trend analysis to identify patterns and knowledge gaps.
              </p>
            </Card>

            <Card className="p-6 bg-card backdrop-blur-md holographic-border group hover:scale-105 transition-all duration-300 tech-corner">
              <div className="relative">
                <div className="absolute inset-0 bg-nebula/5 blur-xl group-hover:blur-2xl transition-all" />
                <Gamepad2 className="h-12 w-12 text-nebula mb-4 relative z-10 group-hover:drop-shadow-[0_0_15px_rgba(200,255,100,0.8)] transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
                INTERACTIVE LEARNING
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gamified learning experiences with quizzes and mini-games about space bioscience research.
              </p>
            </Card>
          </div>

          {/* Stats Section with Staggered Power-On */}
          <div 
            ref={(el) => (sectionsRef.current[1] = el)}
            className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20 opacity-0"
          >
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-card to-card backdrop-blur-md holographic-border text-center group hover:scale-105 transition-all tech-corner">
              <Database className="h-10 w-10 text-primary mx-auto mb-3 group-hover:drop-shadow-[0_0_20px_rgba(100,200,255,1)] transition-all" />
              <div className="text-5xl font-black text-primary mb-2" style={{ fontFamily: "var(--font-space)" }}>
                608
              </div>
              <div className="text-sm text-muted-foreground tracking-wider">PUBLICATIONS</div>
              <div className="h-0.5 w-12 mx-auto mt-2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 via-card to-card backdrop-blur-md holographic-border text-center group hover:scale-105 transition-all tech-corner">
              <Sparkles className="h-10 w-10 text-accent mx-auto mb-3 group-hover:drop-shadow-[0_0_20px_rgba(200,100,255,1)] transition-all" />
              <div className="text-5xl font-black text-accent mb-2" style={{ fontFamily: "var(--font-space)" }}>
                40+
              </div>
              <div className="text-sm text-muted-foreground tracking-wider">YEARS OF RESEARCH</div>
              <div className="h-0.5 w-12 mx-auto mt-2 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </Card>

            <Card className="p-6 bg-gradient-to-br from-nebula/10 via-card to-card backdrop-blur-md holographic-border text-center group hover:scale-105 transition-all tech-corner">
              <Rocket className="h-10 w-10 text-nebula mx-auto mb-3 group-hover:drop-shadow-[0_0_20px_rgba(200,255,100,1)] transition-all" />
              <div className="text-5xl font-black text-nebula mb-2" style={{ fontFamily: "var(--font-space)" }}>
                100+
              </div>
              <div className="text-sm text-muted-foreground tracking-wider">SPACE MISSIONS</div>
              <div className="h-0.5 w-12 mx-auto mt-2 bg-gradient-to-r from-transparent via-nebula to-transparent" />
            </Card>

            <Card className="p-6 bg-gradient-to-br from-space-purple/10 via-card to-card backdrop-blur-md holographic-border text-center group hover:scale-105 transition-all tech-corner">
              <BarChart3 className="h-10 w-10 mx-auto mb-3 group-hover:drop-shadow-[0_0_20px_rgba(150,100,200,1)] transition-all" style={{ color: "var(--color-space-purple)" }} />
              <div className="text-5xl font-black mb-2" style={{ fontFamily: "var(--font-space)", color: "var(--color-space-purple)" }}>
                AI
              </div>
              <div className="text-sm text-muted-foreground tracking-wider">POWERED INSIGHTS</div>
              <div className="h-0.5 w-12 mx-auto mt-2 bg-gradient-to-r from-transparent to-transparent" style={{ background: "linear-gradient(to right, transparent, var(--color-space-purple), transparent)" }} />
            </Card>
          </div>

          {/* NASA Live Feed */}
          <div 
            ref={(el) => (sectionsRef.current[2] = el)}
            className="max-w-4xl mx-auto opacity-0"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 gradient-text tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
                LIVE FROM NASA
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent glow" />
            </div>
            <NasaLiveFeed />
          </div>
        </section>
      </div>
    </>
  );
}