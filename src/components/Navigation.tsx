"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, Search, BarChart3, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Rocket },
    { href: "/research", label: "Research Explorer", icon: Search },
    { href: "/visualizations", label: "Data Viz", icon: BarChart3 },
    { href: "/games", label: "Games & Quizzes", icon: Gamepad2 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-primary/20 holographic-border">
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
                    className={`${isActive ? "glow" : "holographic-border"} group relative overflow-hidden`}
                    size="sm"
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50" 
                           style={{ backgroundSize: "200% 100%", animation: "holographicShimmer 3s linear infinite" }} />
                    )}
                    <Icon className={`h-4 w-4 mr-2 relative z-10 ${isActive ? "" : "group-hover:text-primary"} transition-colors`} />
                    <span className="relative z-10">{link.label}</span>
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