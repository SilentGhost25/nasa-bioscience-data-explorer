"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Rocket, Search, BarChart3, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: Rocket },
    { href: "/research", label: "Research Explorer", icon: Search },
    { href: "/visualizations", label: "Data Viz", icon: BarChart3 },
    { href: "/games", label: "Games & Quizzes", icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-primary/20 holographic-border">
      {/* Progress Bar - Data Acquisition Meter */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted/20">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-nebula transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? "0 0 10px var(--color-primary)" : "none",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Rocket className="h-7 w-7 text-primary group-hover:drop-shadow-[0_0_15px_rgba(100,200,255,1)] transition-all" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="font-bold text-xl gradient-text tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
              NASA BIOSPACE
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(112,182,246,0.6)] border-primary/50" 
                        : "holographic-border hover:border-primary/30"
                    } group relative overflow-hidden transition-all duration-300`}
                    size="sm"
                  >
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50" 
                             style={{ backgroundSize: "200% 100%", animation: "holographicShimmer 3s linear infinite" }} />
                        {/* Active indicator underline */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent glow" />
                      </>
                    )}
                    <Icon className={`h-4 w-4 mr-2 relative z-10 ${
                      isActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "group-hover:text-primary"
                    } transition-all duration-300`} />
                    <span className="relative z-10 font-medium">{link.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}