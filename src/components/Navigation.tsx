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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl gradient-text" style={{ fontFamily: "var(--font-space)" }}>
              NASA BioSpace
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
                    className={isActive ? "glow" : ""}
                    size="sm"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {link.label}
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