"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== displayPath) {
      setIsTransitioning(true);
      
      // Quick fade-out with scanning effect
      const timer = setTimeout(() => {
        setDisplayPath(pathname);
        setIsTransitioning(false);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [pathname, displayPath]);

  return (
    <>
      {/* Portal Transition Overlay */}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-200 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95))",
        }}
      >
        {/* Scanning Line Effect */}
        <div
          className={`absolute inset-0 ${isTransitioning ? "animate-scan" : ""}`}
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(112,182,246,0.3) 50%, transparent 100%)",
            height: "200px",
            transform: "translateY(-100%)",
          }}
        />
        
        {/* Data Stream Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-primary/50 ${isTransitioning ? "animate-pulse" : ""}`}
                style={{
                  height: `${20 + i * 10}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content with fade transition */}
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}