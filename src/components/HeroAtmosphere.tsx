import React, { useMemo } from 'react';

interface HeroSpark {
  id: number;
  left: number; // percentage (0 - 100)
  bottom: number; // percentage (0 - 100)
  size: number; // 2px - 5px
  color: string;
  glowColor: string;
  duration: number; // 3.8s - 8.8s
  delay: number; // 0s - 7s
  drift: number; // -45px to +45px
  riseDistance: number; // 100px - 180px
  breakpoint: 'all' | 'tablet' | 'desktop'; // 11 on mobile, 16 on tablet, 20 on desktop
}

export const HeroAtmosphere: React.FC = () => {
  // 20 deterministic glowing charcoal embers with natural timing and drift
  const sparks = useMemo<HeroSpark[]>(() => {
    return [
      // Mobile & all devices (11 sparks)
      { id: 1, left: 8, bottom: 12, size: 3.2, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 5.4, delay: 0.3, drift: 24, riseDistance: 145, breakpoint: 'all' },
      { id: 2, left: 16, bottom: 22, size: 2.3, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.85)', duration: 7.2, delay: 1.8, drift: -18, riseDistance: 160, breakpoint: 'all' },
      { id: 3, left: 24, bottom: 8, size: 4.2, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.9)', duration: 4.8, delay: 3.2, drift: 32, riseDistance: 175, breakpoint: 'all' },
      { id: 4, left: 74, bottom: 14, size: 3.6, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 6.1, delay: 0.9, drift: -28, riseDistance: 150, breakpoint: 'all' },
      { id: 5, left: 84, bottom: 26, size: 2.5, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.85)', duration: 7.9, delay: 2.4, drift: 20, riseDistance: 140, breakpoint: 'all' },
      { id: 6, left: 92, bottom: 10, size: 4.6, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.95)', duration: 4.2, delay: 4.1, drift: -35, riseDistance: 180, breakpoint: 'all' },
      { id: 7, left: 12, bottom: 34, size: 2.1, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.85)', duration: 8.4, delay: 1.2, drift: -15, riseDistance: 130, breakpoint: 'all' },
      { id: 8, left: 88, bottom: 38, size: 3.8, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.9)', duration: 5.8, delay: 3.7, drift: 26, riseDistance: 165, breakpoint: 'all' },
      { id: 9, left: 32, bottom: 6, size: 2.8, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.85)', duration: 6.6, delay: 5.0, drift: 18, riseDistance: 135, breakpoint: 'all' },
      { id: 10, left: 66, bottom: 9, size: 3.4, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 5.1, delay: 2.1, drift: -22, riseDistance: 155, breakpoint: 'all' },
      { id: 11, left: 20, bottom: 42, size: 4.0, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.95)', duration: 4.5, delay: 0.6, drift: 30, riseDistance: 170, breakpoint: 'all' },

      // Additional for Tablet & Desktop (5 sparks -> 16 total)
      { id: 12, left: 6, bottom: 28, size: 2.4, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.85)', duration: 7.6, delay: 2.8, drift: -30, riseDistance: 145, breakpoint: 'tablet' },
      { id: 13, left: 78, bottom: 32, size: 4.4, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 4.9, delay: 4.6, drift: 34, riseDistance: 160, breakpoint: 'tablet' },
      { id: 14, left: 28, bottom: 18, size: 3.0, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.85)', duration: 6.4, delay: 1.5, drift: -25, riseDistance: 150, breakpoint: 'tablet' },
      { id: 15, left: 82, bottom: 18, size: 2.6, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.85)', duration: 8.1, delay: 3.4, drift: 22, riseDistance: 140, breakpoint: 'tablet' },
      { id: 16, left: 94, bottom: 45, size: 3.5, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 5.6, delay: 5.7, drift: -40, riseDistance: 175, breakpoint: 'tablet' },

      // Additional for Desktop (4 sparks -> 20 total)
      { id: 17, left: 14, bottom: 16, size: 4.8, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.95)', duration: 3.9, delay: 0.8, drift: 38, riseDistance: 180, breakpoint: 'desktop' },
      { id: 18, left: 70, bottom: 24, size: 2.2, color: '#f28c3d', glowColor: 'rgba(242, 140, 61, 0.85)', duration: 8.6, delay: 4.0, drift: -18, riseDistance: 135, breakpoint: 'desktop' },
      { id: 19, left: 86, bottom: 8, size: 3.7, color: '#ff914d', glowColor: 'rgba(255, 145, 77, 0.9)', duration: 5.2, delay: 2.6, drift: 28, riseDistance: 165, breakpoint: 'desktop' },
      { id: 20, left: 4, bottom: 40, size: 2.9, color: '#f8c17b', glowColor: 'rgba(248, 193, 123, 0.85)', duration: 6.9, delay: 6.2, drift: -32, riseDistance: 150, breakpoint: 'desktop' },
    ];
  }, []);

  return (
    <div
      className="absolute inset-0 z-[2] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes hero-charcoal-breathe {
          0%, 100% {
            opacity: 0.45;
            transform: scale(0.96) translateY(0);
          }
          50% {
            opacity: 0.92;
            transform: scale(1.05) translateY(-8px);
          }
        }

        @keyframes hero-smoke-rise-left {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0) scale(0.85);
          }
          25% {
            opacity: 0.55;
          }
          65% {
            opacity: 0.45;
            transform: translate3d(28px, -110px, 0) scale(1.25);
          }
          100% {
            opacity: 0;
            transform: translate3d(48px, -200px, 0) scale(1.6);
          }
        }

        @keyframes hero-smoke-rise-right {
          0% {
            opacity: 0;
            transform: translate3d(0, 15px, 0) scale(0.9);
          }
          30% {
            opacity: 0.5;
          }
          70% {
            opacity: 0.35;
            transform: translate3d(-32px, -120px, 0) scale(1.3);
          }
          100% {
            opacity: 0;
            transform: translate3d(-52px, -220px, 0) scale(1.7);
          }
        }

        @keyframes hero-spark-float {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.6);
          }
          18% {
            opacity: 0.95;
            transform: translate3d(calc(var(--drift) * 0.22), -28px, 0) scale(1);
          }
          60% {
            opacity: 0.8;
            transform: translate3d(calc(var(--drift) * 0.7), calc(-0.6 * var(--rise)), 0) scale(0.85);
          }
          85% {
            opacity: 0.4;
            transform: translate3d(calc(var(--drift) * 0.92), calc(-0.88 * var(--rise)), 0) scale(0.65);
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--drift), calc(-1 * var(--rise)), 0) scale(0.25);
          }
        }

        .hero-breathe-glow {
          animation: hero-charcoal-breathe 7s ease-in-out infinite;
          will-change: transform, opacity;
        }

        .hero-smoke-plume-left {
          animation: hero-smoke-rise-left 10.5s ease-out infinite;
          will-change: transform, opacity;
        }

        .hero-smoke-plume-right {
          animation: hero-smoke-rise-right 12s ease-out infinite;
          animation-delay: 4.8s;
          will-change: transform, opacity;
        }

        .hero-spark-node {
          animation-name: hero-spark-float;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-breathe-glow,
          .hero-smoke-plume-left,
          .hero-smoke-plume-right,
          .hero-spark-node {
            animation: none !important;
          }
        }
      `}</style>

      {/* ============================================================ */}
      {/* 1. BREATHING AMBER GLOW (Warm Charcoal Hearth Light)         */}
      {/* ============================================================ */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div
          className="hero-breathe-glow w-[600px] sm:w-[850px] md:w-[1100px] h-[260px] sm:h-[340px] md:h-[420px] rounded-[100%] pointer-events-none -mb-20 sm:-mb-24 opacity-60 sm:opacity-85 md:opacity-100"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(238, 106, 32, 0.18) 0%, rgba(176, 73, 17, 0.07) 42%, rgba(238, 106, 32, 0.02) 68%, transparent 80%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 2. SUBTLE JAPANESE CHARCOAL SMOKE (2 Ultra-Soft Plumes)      */}
      {/* ============================================================ */}
      {/* Left Plume: Starts lower-left, drifts gently toward center */}
      <div
        className="hero-smoke-plume-left absolute left-[4%] sm:left-[8%] bottom-[-5%] w-[260px] sm:w-[380px] h-[280px] sm:h-[400px] rounded-full pointer-events-none opacity-50 sm:opacity-65"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(165, 155, 145, 0.055) 0%, rgba(210, 145, 95, 0.03) 38%, transparent 70%)',
          filter: 'blur(52px)',
        }}
      />

      {/* Right Plume: Starts lower-right, drifts subtly inward (hidden on tiny mobile, visible sm+) */}
      <div
        className="hero-smoke-plume-right hidden sm:block absolute right-[6%] md:right-[10%] bottom-[-8%] w-[280px] md:w-[420px] h-[300px] md:h-[440px] rounded-full pointer-events-none opacity-45 sm:opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(160, 150, 140, 0.05) 0%, rgba(200, 135, 85, 0.025) 42%, transparent 72%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ============================================================ */}
      {/* 3. FLOATING GLOWING CHARCOAL EMBERS (20 Responsive Sparks)   */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none">
        {sparks.map((spark) => {
          // Responsive display classes: 11 on mobile, 16 on tablet, 20 on desktop
          const visibilityClass =
            spark.breakpoint === 'desktop'
              ? 'hidden md:block'
              : spark.breakpoint === 'tablet'
              ? 'hidden sm:block'
              : 'block';

          return (
            <span
              key={spark.id}
              className={`hero-spark-node absolute rounded-full ${visibilityClass}`}
              style={
                {
                  left: `${spark.left}%`,
                  bottom: `${spark.bottom}%`,
                  width: `${spark.size}px`,
                  height: `${spark.size}px`,
                  backgroundColor: spark.color,
                  boxShadow: `0 0 5px 1.5px ${spark.glowColor}, 0 0 10px 2.5px rgba(242, 140, 61, 0.35)`,
                  animationDuration: `${spark.duration}s`,
                  animationDelay: `${spark.delay}s`,
                  '--drift': `${spark.drift}px`,
                  '--rise': `${spark.riseDistance}px`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
};
