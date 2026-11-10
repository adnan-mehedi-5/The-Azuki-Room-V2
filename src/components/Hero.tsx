import React, { useRef, useState } from 'react';
import { Play, Pause, ChevronDown, Sparkles, MapPin, ShieldCheck, Flame } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMenus: () => void;
  onDiscoverMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreMenus,
  onDiscoverMore,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome to The Azuki Room"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0C0A]"
    >
      {/* Background Video with Responsive Sources */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={`${import.meta.env.BASE_URL}videos/azuki-hero-poster.jpg`}
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
          aria-hidden="true"
        >
          {/* Desktop & Tablet Source */}
          <source src={`${import.meta.env.BASE_URL}videos/azuki-hero.mp4`} type="video/mp4" media="(min-width: 768px)" />
          {/* Mobile Source */}
          <source src={`${import.meta.env.BASE_URL}videos/azuki-hero-mobile.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Vignettes & Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/60 to-[#0D0C0A]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D0C0A]/40 to-[#0D0C0A]/85" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40 text-center flex flex-col items-center">
        {/* Subtle Japanese Watermark Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#B49A75]/30 bg-[#141310]/80 rounded-full mb-8 backdrop-blur-sm animate-in fade-in duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9B352F]" />
          <span className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-[#B49A75]">
            炭火と伝統 · Hidden Izakaya
          </span>
          <span className="text-[#F3EFE6]/30">|</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFE6]/70">
            Chancery Lane
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F3EFE6] font-normal leading-[1.08] mb-6 max-w-4xl drop-shadow-2xl">
          A Hidden World of <br className="hidden sm:inline" />
          <span className="italic font-light text-[#EAE5DA]">Japanese Dining</span>
        </h1>

        {/* Minimalist Evocative Supporting Copy (Strictly under 40 words) */}
        <p className="text-sm sm:text-base md:text-lg text-[#F3EFE6]/80 font-light max-w-2xl leading-relaxed mb-10 tracking-wide">
          Experience the soul of Japan through binchotan-grilled yakitori, expertly crafted sushi, and warm hospitality in our intimate Chancery Lane retreat.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 border border-[#9B352F] shadow-2xl shadow-[#9B352F]/40 hover:shadow-[#9B352F]/60 hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Table
          </button>

          <button
            onClick={onExploreMenus}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#F3EFE6]/10 text-[#F3EFE6] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 border border-[#F3EFE6]/25 hover:border-[#B49A75] cursor-pointer"
          >
            Explore Menus
          </button>
        </div>

        {/* Trust & Craft Highlights */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-10 border-t border-[#F3EFE6]/10 pt-6 max-w-2xl w-full text-center">
          <div className="flex flex-col items-center">
            <Flame className="w-4 h-4 text-[#B49A75] mb-1.5 opacity-80" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
              Binchotan Grill
            </span>
            <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">White oak charcoal</span>
          </div>

          <div className="flex flex-col items-center border-x border-[#F3EFE6]/10 px-2">
            <Sparkles className="w-4 h-4 text-[#B49A75] mb-1.5 opacity-80" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
              30 Covers
            </span>
            <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">Intimate Dining</span>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck className="w-4 h-4 text-[#B49A75] mb-1.5 opacity-80" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
              100% Halal
            </span>
            <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">Zero-alcohol cooking</span>
          </div>
        </div>
      </div>

      {/* Video Control Toggle */}
      <button
        onClick={toggleVideo}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        className="absolute bottom-8 right-8 z-20 p-2.5 rounded-full border border-[#F3EFE6]/20 bg-[#0D0C0A]/60 text-[#F3EFE6]/70 hover:text-[#B49A75] hover:border-[#B49A75] transition-colors backdrop-blur-sm hidden sm:flex items-center justify-center cursor-pointer"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
      </button>

      {/* Scroll Down Prompt */}
      <button
        onClick={onDiscoverMore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#F3EFE6]/50 hover:text-[#B49A75] transition-colors group cursor-pointer"
        aria-label="Scroll down to learn more about The Azuki Room"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Discover</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#B49A75] to-transparent group-hover:h-10 transition-all duration-300" />
      </button>
    </section>
  );
};
