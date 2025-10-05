"use client";

export function SkeletonCard() {
  return (
    <div className="p-6 bg-card backdrop-blur-md holographic-border animate-pulse">
      <div className="space-y-4">
        <div className="h-12 w-12 bg-primary/10 rounded" />
        <div className="h-6 bg-muted/30 rounded w-3/4" />
        <div className="h-4 bg-muted/20 rounded w-full" />
        <div className="h-4 bg-muted/20 rounded w-5/6" />
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="p-6 bg-card backdrop-blur-md holographic-border animate-pulse">
      <div className="space-y-4">
        <div className="h-8 bg-muted/30 rounded w-1/3" />
        <div className="h-64 bg-muted/20 rounded w-full relative overflow-hidden">
          {/* Pulsing data bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around gap-2 p-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 rounded-t"
                style={{
                  height: `${30 + Math.random() * 70}%`,
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="p-4 bg-card backdrop-blur-md holographic-border animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="space-y-3">
            <div className="h-5 bg-muted/30 rounded w-2/3" />
            <div className="h-4 bg-muted/20 rounded w-full" />
            <div className="h-4 bg-muted/20 rounded w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}