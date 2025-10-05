"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            
            // Update URL without page jump
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    // Restore scroll position on back/forward
    const handlePopState = () => {
      const scrollPos = sessionStorage.getItem(`scroll-${window.location.pathname}`);
      if (scrollPos) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(scrollPos),
            behavior: "instant" as ScrollBehavior,
          });
        }, 100);
      }
    };

    // Save scroll position before navigation
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        `scroll-${window.location.pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);
}