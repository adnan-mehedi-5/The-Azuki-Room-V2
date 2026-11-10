import React, { useMemo } from 'react';

interface SparkData {
  id: number;
  left: number; // percentage (0 - 100)
  bottom: number; // percentage (0 - 100)
  size: number; // 2px - 5px
  color: string;
  glowColor: string;
  duration: number; // 3s - 7s
  delay: number; // 0s - 6s
  drift: number; // -35px to +35px
  riseDistance: number; // 130px - 260px
}

export const EnsoFireRing: React.FC = () => {
  // Pre-generate 30 deterministic floating embers with natural variance
  const sparks = useMemo<SparkData[]>(() => {
    const emberPalette = [
      { color: '#FF9B4D', glow: 'rgba(255, 155, 77, 0.9)' }, // Ember Orange
      { color: '#F28C3D', glow: 'rgba(242, 140, 61, 0.85)' }, // Fire Orange
      { color: '#FFD166', glow: 'rgba(255, 209, 102, 0.9)' }, // Warm Golden Yellow
      { color: '#D9591C', glow: 'rgba(217, 89, 28, 0.85)' }, // Deep Ember Red
      { color: '#FFA860', glow: 'rgba(255, 168, 96, 0.9)' }, // Bright Ember
      { color: '#C5A57E', glow: 'rgba(197, 165, 126, 0.8)' }, // Champagne Gold spark
    ];

    // Seed-like deterministic generation for stable rendering
    const rawConfigs = [
      { l: 22, b: 28, s: 3.5, p: 0, dur: 4.2, del: 0.2, drift: -24, rise: 180 },
      { l: 30, b: 20, s: 2.2, p: 1, dur: 5.6, del: 1.4, drift: 18, rise: 210 },
      { l: 45, b: 15, s: 4.0, p: 2, dur: 3.8, del: 2.7, drift: -12, rise: 230 },
      { l: 58, b: 18, s: 2.8, p: 3, dur: 6.2, del: 0.8, drift: 28, rise: 190 },
      { l: 72, b: 25, s: 3.2, p: 4, dur: 4.8, del: 3.1, drift: 15, rise: 200 },
      { l: 80, b: 35, s: 2.5, p: 0, dur: 5.2, del: 1.9, drift: -18, rise: 170 },
      { l: 18, b: 45, s: 4.5, p: 1, dur: 3.9, del: 0.5, drift: 22, rise: 220 },
      { l: 26, b: 55, s: 2.0, p: 2, dur: 6.5, del: 2.2, drift: -15, rise: 160 },
      { l: 76, b: 50, s: 3.8, p: 3, dur: 4.4, del: 1.1, drift: -25, rise: 240 },
      { l: 82, b: 62, s: 2.4, p: 4, dur: 5.8, del: 3.8, drift: 12, rise: 185 },
      { l: 35, b: 68, s: 4.2, p: 0, dur: 4.0, del: 0.9, drift: -20, rise: 215 },
      { l: 65, b: 72, s: 2.6, p: 1, dur: 6.0, del: 2.5, drift: 16, rise: 175 },
      { l: 24, b: 38, s: 3.0, p: 2, dur: 5.0, del: 4.2, drift: 20, rise: 195 },
      { l: 52, b: 22, s: 4.8, p: 3, dur: 3.5, del: 1.6, drift: -8, rise: 250 },
      { l: 62, b: 30, s: 2.1, p: 4, dur: 6.8, del: 3.3, drift: 24, rise: 165 },
      { l: 40, b: 12, s: 3.6, p: 0, dur: 4.6, del: 0.4, drift: -16, rise: 225 },
      { l: 70, b: 42, s: 2.8, p: 1, dur: 5.4, del: 2.8, drift: -22, rise: 190 },
      { l: 15, b: 32, s: 3.4, p: 2, dur: 4.9, del: 1.2, drift: 14, rise: 205 },
      { l: 85, b: 46, s: 2.3, p: 3, dur: 6.3, del: 4.5, drift: -10, rise: 170 },
      { l: 48, b: 32, s: 4.6, p: 4, dur: 3.7, del: 2.1, drift: 12, rise: 240 },
      { l: 32, b: 42, s: 2.7, p: 0, dur: 5.5, del: 0.7, drift: -26, rise: 185 },
      { l: 66, b: 58, s: 3.9, p: 1, dur: 4.3, del: 3.5, drift: 19, rise: 220 },
      { l: 78, b: 28, s: 2.2, p: 2, dur: 6.1, del: 1.8, drift: -14, rise: 175 },
      { l: 20, b: 62, s: 3.3, p: 3, dur: 5.1, del: 4.0, drift: 25, rise: 195 },
      { l: 56, b: 65, s: 4.4, p: 4, dur: 3.6, del: 1.0, drift: -18, rise: 235 },
      { l: 38, b: 26, s: 2.9, p: 0, dur: 5.9, del: 2.9, drift: 11, rise: 180 },
      { l: 84, b: 38, s: 3.1, p: 1, dur: 4.7, del: 0.6, drift: -20, rise: 210 },
      { l: 44, b: 60, s: 2.4, p: 2, dur: 6.4, del: 3.7, drift: 15, rise: 165 },
      { l: 60, b: 45, s: 4.1, p: 3, dur: 4.1, del: 1.5, drift: -12, rise: 225 },
      { l: 28, b: 18, s: 3.2, p: 5, dur: 5.3, del: 2.4, drift: 21, rise: 200 },
    ];

    return rawConfigs.map((cfg, idx) => {
      const palette = emberPalette[cfg.p % emberPalette.length];
      return {
        id: idx + 1,
        left: cfg.l,
        bottom: cfg.b,
        size: cfg.s,
        color: palette.color,
        glowColor: palette.glow,
        duration: cfg.dur,
        delay: cfg.del,
        drift: cfg.drift,
        riseDistance: cfg.rise,
      };
    });
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes enso-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes enso-breathe {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.96);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.04);
          }
        }

        @keyframes ember-rise {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.5);
          }
          15% {
            opacity: 0.95;
            transform: translate3d(calc(var(--drift) * 0.2), -30px, 0) scale(1);
          }
          55% {
            opacity: 0.8;
            transform: translate3d(calc(var(--drift) * 0.65), calc(-0.55 * var(--rise)), 0) scale(0.9);
          }
          85% {
            opacity: 0.45;
            transform: translate3d(calc(var(--drift) * 0.9), calc(-0.85 * var(--rise)), 0) scale(0.7);
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--drift), calc(-1 * var(--rise)), 0) scale(0.3);
          }
        }

        .enso-fire-ring {
          animation: enso-spin 13s linear infinite;
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px));
        }

        .enso-fire-bloom {
          animation: enso-spin 13s linear infinite;
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 5px), black calc(100% - 2px));
          filter: blur(6px) brightness(1.5);
        }

        .enso-breathe-glow {
          animation: enso-breathe 5s ease-in-out infinite;
        }

        .spark-particle {
          animation-name: ember-rise;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .enso-fire-ring,
          .enso-fire-bloom,
          .enso-breathe-glow,
          .spark-particle {
            animation: none !important;
          }
        }
      `}</style>

      {/* Ensō Core Container scaled responsively: 360px on mobile, 440px on sm, 500px on md/lg */}
      <div className="relative w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* 1. Subtle Inner Breathing Hearth Glow (5s cycle) */}
        <div
          className="enso-breathe-glow absolute inset-4 sm:inset-6 rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 140, 61, 0.12) 0%, rgba(217, 89, 28, 0.05) 45%, transparent 72%)',
          }}
        />

        {/* 2. Thin Subtle Dark-Gold Base Circle (Preserved luxury foundation) */}
        <div
          className="absolute inset-0 rounded-full border border-[#C5A57E]/18 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 20px rgba(197, 165, 126, 0.03)',
          }}
        />

        {/* 3. Soft Orange Bloom Glow around the illuminated fire trail */}
        <div
          className="enso-fire-bloom absolute inset-0 rounded-full pointer-events-none opacity-85"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 190deg,
              rgba(217, 89, 28, 0.25) 240deg,
              rgba(242, 140, 61, 0.65) 290deg,
              rgba(255, 155, 77, 0.95) 340deg,
              #FFD166 358deg,
              transparent 360deg
            )`,
          }}
        />

        {/* 4. Main Conic-Gradient Fire Trail Ring with Circular Mask (13s rotation) */}
        <div
          className="enso-fire-ring absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 180deg,
              rgba(217, 89, 28, 0.2) 230deg,
              rgba(242, 140, 61, 0.6) 280deg,
              rgba(255, 155, 77, 0.95) 335deg,
              #FFE8A3 358deg,
              transparent 360deg
            )`,
            filter: 'drop-shadow(0 0 4px rgba(255, 155, 77, 0.6))',
          }}
        />

        {/* 5. Traveling Fire Head Highlight on Circumference */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            animation: 'enso-spin 13s linear infinite',
          }}
        >
          {/* Intense glowing ember head positioned at the leading edge (top center at 0/360deg) */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: '#FFE8A3',
              boxShadow:
                '0 0 8px 2px #FF9B4D, 0 0 16px 5px #F28C3D, 0 0 28px 8px rgba(217, 89, 28, 0.6)',
            }}
          />
        </div>

        {/* 6. 30 Animated Flying Charcoal Embers / Sparks */}
        <div className="absolute -inset-10 sm:-inset-16 pointer-events-none overflow-visible">
          {sparks.map((spark) => (
            <span
              key={spark.id}
              className="spark-particle absolute rounded-full"
              style={
                {
                  left: `${spark.left}%`,
                  bottom: `${spark.bottom}%`,
                  width: `${spark.size}px`,
                  height: `${spark.size}px`,
                  backgroundColor: spark.color,
                  boxShadow: `0 0 6px 1.5px ${spark.glowColor}, 0 0 12px 3px rgba(242, 140, 61, 0.35)`,
                  animationDuration: `${spark.duration}s`,
                  animationDelay: `${spark.delay}s`,
                  '--drift': `${spark.drift}px`,
                  '--rise': `${spark.riseDistance}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
