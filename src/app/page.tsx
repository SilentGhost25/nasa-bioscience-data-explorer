"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Search, BarChart3, Gamepad2, Sparkles, Database } from "lucide-react";
import StarField from "@/components/StarField";
import NasaLiveFeed from "@/components/NasaLiveFeed";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <StarField />
      <Navigation />
      
      <div className="relative z-10 min-h-screen pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-6xl md:text-7xl font-black mb-6 gradient-text glow-text animate-fade-in"
              style={{ fontFamily: "var(--font-space)" }}
            >
              NASA BIOSPACE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
              Explore 608 NASA Bioscience Publications Through AI-Powered Interactive Dashboard
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
              Discover decades of space biology research, identify knowledge gaps, 
              and explore scientific progress through interactive visualizations, 
              games, and real-time NASA data.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up">
              <Link href="/research">
                <Button size="lg" className="glow text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Research
                </Button>
              </Link>
              <Link href="/visualizations">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:border-primary">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  View Data
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space)" }}>
                Research Explorer
              </h3>
              <p className="text-muted-foreground">
                Search and filter through 608 NASA bioscience publications with AI-powered summaries and insights.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <BarChart3 className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space)" }}>
                Data Visualizations
              </h3>
              <p className="text-muted-foreground">
                Interactive charts, knowledge graphs, and trend analysis to identify patterns and knowledge gaps.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-nebula/20 hover:border-nebula/40 transition-all hover:scale-105">
              <Gamepad2 className="h-12 w-12 text-nebula mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space)" }}>
                Interactive Learning
              </h3>
              <p className="text-muted-foreground">
                Gamified learning experiences with quizzes and mini-games about space bioscience research.
              </p>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-primary/30 text-center">
              <Database className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-space)" }}>
                608
              </div>
              <div className="text-sm text-muted-foreground mt-1">Publications</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border-accent/30 text-center">
              <Sparkles className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-space)" }}>
                40+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Years of Research</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-nebula/20 to-nebula/5 backdrop-blur-sm border-nebula/30 text-center">
              <Rocket className="h-8 w-8 text-nebula mx-auto mb-2" />
              <div className="text-4xl font-bold text-nebula" style={{ fontFamily: "var(--font-space)" }}>
                100+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Space Missions</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-space-purple/20 to-space-purple/5 backdrop-blur-sm border-space-purple/30 text-center">
              <BarChart3 className="h-8 w-8" style={{ color: "var(--color-space-purple)" }} />
              <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-space)", color: "var(--color-space-purple)" }}>
                AI
              </div>
              <div className="text-sm text-muted-foreground mt-1">Powered Insights</div>
            </Card>
          </div>

          {/* NASA Live Feed */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text" style={{ fontFamily: "var(--font-space)" }}>
              Live from NASA
            </h2>
            <NasaLiveFeed />
          </div>
        </section>
      </div>
    </>
  );
}