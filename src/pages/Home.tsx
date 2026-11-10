import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, Flame, Sparkles, ShieldCheck, Download } from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { EnsoFireRing } from '../components/EnsoFireRing';
import { HeroAtmosphere } from '../components/HeroAtmosphere';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenBookingModal }) => {
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

  const robataHighlight = MENU_ITEMS.filter((i) => i.category === 'robata').slice(0, 3);
  const sushiHighlight = MENU_ITEMS.filter((i) => i.category === 'sushi').slice(0, 3);

  return (
    <div className="bg-[#0E0D0C] text-[#F3EFE6]">
      {/* 1. CINEMATIC VIDEO HERO */}
      <section
        id="hero"
        aria-label="Welcome to The Azuki Room"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0D0C]"
      >
        {/* Background Video */}
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
            <source src={`${import.meta.env.BASE_URL}videos/azuki-hero.mp4`} type="video/mp4" media="(min-width: 768px)" />
            <source src={`${import.meta.env.BASE_URL}videos/azuki-hero-mobile.mp4`} type="video/mp4" />
          </video>

          {/* Gradients & Luxury Dark Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/60 to-[#0E0D0C]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0E0D0C]/40 to-[#0E0D0C]/85" />
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
        </div>

        {/* Cinematic Atmospheric Animation Layer (Breathing Glow, Subtle Smoke & Glowing Embers) */}
        <HeroAtmosphere />

        {/* Hero Content with subtle fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-14 sm:py-32 md:py-40 text-center flex flex-col items-center"
        >
          {/* Subtle Kanji Watermark Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
            className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 border border-[#C5A880]/30 bg-[#161513]/85 rounded-full mb-5 sm:mb-8 backdrop-blur-sm shadow-xl max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
            <span className="font-serif text-[10px] sm:text-xs md:text-sm tracking-[0.14em] sm:tracking-[0.25em] uppercase text-[#C5A880] whitespace-nowrap">
              炭火と伝統 · Hidden Izakaya
            </span>
            <span className="text-[#F3EFE6]/30 text-[10px] sm:text-xs">|</span>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#F3EFE6]/70 whitespace-nowrap">
              Chancery Lane
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: luxuryEase }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#F3EFE6] font-normal leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 max-w-4xl drop-shadow-2xl"
          >
            A Hidden World of <br className="hidden sm:inline" />
            <span className="italic font-light text-[#EAE5DA]">Japanese Dining</span>
          </motion.h1>

          {/* Evocative Supporting Copy (<40 words) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: luxuryEase }}
            className="text-xs sm:text-base md:text-lg text-[#F3EFE6]/80 font-light max-w-xl sm:max-w-2xl leading-relaxed mb-6 sm:mb-10 tracking-wide px-2 sm:px-0"
          >
            Experience the soul of Japan through binchotan-grilled yakitori, expertly crafted sushi, and warm hospitality in our intimate Chancery Lane retreat.
          </motion.p>

          {/* Primary & Secondary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: luxuryEase }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          >
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-bold transition-all duration-300 border border-[#C5A880] shadow-2xl shadow-[#C5A880]/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Table
            </button>

            <button
              onClick={() => onNavigate('/menus')}
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 bg-transparent hover:bg-[#F3EFE6]/10 text-[#F3EFE6] text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-medium transition-all duration-300 border border-[#C5A880]/30 hover:border-[#C5A880] cursor-pointer"
            >
              Explore Menus
            </button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: luxuryEase }}
            className="mt-8 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-10 border-t border-[#C5A880]/20 pt-4 sm:pt-6 max-w-2xl w-full text-center"
          >
            <div className="flex flex-col items-center">
              <Flame className="w-4 h-4 text-[#C5A880] mb-1.5 opacity-90" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
                Binchotan Grill
              </span>
              <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">White oak charcoal</span>
            </div>

            <div className="flex flex-col items-center border-x border-[#C5A880]/20 px-2">
              <Sparkles className="w-4 h-4 text-[#C5A880] mb-1.5 opacity-90" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
                30 Covers
              </span>
              <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">Intimate Dining</span>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] mb-1.5 opacity-90" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/90 font-medium">
                100% Halal
              </span>
              <span className="text-[10px] text-[#F3EFE6]/40 hidden sm:inline">Zero-alcohol cooking</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Pause/Play Control */}
        <button
          onClick={toggleVideo}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-8 right-8 z-20 p-2.5 rounded-full border border-[#C5A880]/30 bg-[#0E0D0C]/70 text-[#C5A880] hover:text-[#D8BF9B] hover:border-[#C5A880] transition-colors backdrop-blur-sm hidden sm:flex items-center justify-center cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </section>

      {/* 2. THE AZUKI EXPERIENCE (<40 words) with subtle fade-in-up */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: luxuryEase }}
        className="py-24 md:py-32 bg-[#0E0D0C] border-t border-[#C5A880]/15 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: luxuryEase }}
              className="lg:col-span-7 relative group overflow-hidden border border-[#C5A880]/20 shadow-2xl"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#161513]">
                <img
                  src={`${import.meta.env.BASE_URL}images/interiors/dining-room-shoji-lights.webp`}
                  alt="Intimate dining room with soft shoji lanterns at The Azuki Room"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1">
                    Main Dining Room
                  </span>
                  <p className="text-xs text-[#F3EFE6]/80 font-light">
                    Hand-crafted oak tables bathed in ambient shoji glow
                  </p>
                </div>
                <span className="text-xs font-serif text-[#C5A880]/60 hidden sm:inline">
                  30 Covers
                </span>
              </div>
            </motion.div>

            {/* Editorial Copy (<40 words) (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: luxuryEase }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                  Atmosphere & Craft
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE6] font-normal leading-tight">
                An Intimate Escape <br />
                <span className="italic font-light text-[#EAE5DA]">from the Ordinary</span>
              </h2>

              <p className="text-sm sm:text-base text-[#F3EFE6]/75 font-light leading-relaxed">
                Step off Chancery Lane into warm shadows, glowing shoji lanterns, and the scent of binchotan charcoal. With only thirty seats, every meal is an unhurried encounter with Japanese culinary precision.
              </p>

              <div className="pt-2 flex items-center gap-5">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-[#D8BF9B] font-medium transition-colors cursor-pointer"
                >
                  <span>Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenBookingModal}
                  className="px-5 py-2.5 bg-[#C5A880] text-[#0E0D0C] text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#D8BF9B] transition-colors cursor-pointer"
                >
                  Reserve Table
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. THE CRAFT OF CHARCOAL & PRECISION SUSHI (Subtle Fade-In-Up) */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: luxuryEase }}
        className="py-20 sm:py-28 lg:py-32 bg-[#161513] border-t border-[#C5A880]/15 relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A880]/3 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Centered & Architectural */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#C5A880]" />
              <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                炭火と寿司 · Culinary Philosophy
              </span>
              <span className="w-5 h-[1px] bg-[#C5A880]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F3EFE6] font-normal leading-tight mb-4">
              The Craft of Charcoal <br className="hidden sm:inline" />
              <span className="italic font-light text-[#EAE5DA]">& Precision Sushi</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#F3EFE6]/70 font-light leading-relaxed max-w-xl mx-auto">
              Smokeless Kishu binchotan charcoal searing at 1,000°C alongside knife-edge sashimi craft and warm seasoned sushi rice.
            </p>
          </motion.div>

          {/* Balanced Dual-Pillar Grid: Robata (Fire) & Sushi (Raw) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Pillar 1: Binchotan Robatayaki (Fire) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: luxuryEase }}
              className="bg-[#12110F] border border-[#C5A880]/20 p-5 sm:p-7 flex flex-col justify-between hover:border-[#C5A880]/35 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#C5A880]/15 mb-6 group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/kitchen/chef-grilling-fish-smoke.webp`}
                    alt="Chef grilling whole fish over Kishu binchotan charcoal"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/30 to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#161513]/90 border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif backdrop-blur-sm">
                    1000°C Smokeless Fire
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-serif block mb-0.5">
                      Robata Craft
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE6] font-normal">
                      Binchotan Robatayaki (備長炭)
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F3EFE6]/70 font-light leading-relaxed mb-6">
                  White oak charcoal imported from Kishu burns without flame or smoke, searing skewers in seconds to lock in delicate juices and caramelize aged tare glazes.
                </p>

                {/* Robata Highlights */}
                <div className="space-y-3.5">
                  {/* Dish 1: Negima */}
                  <div className="p-3.5 sm:p-4 bg-[#1A1815] border border-[#C5A880]/15 flex items-center gap-4 hover:border-[#C5A880]/35 transition-colors">
                    <img
                      src={`${import.meta.env.BASE_URL}images/food/chicken-leek-yakitori.webp`}
                      alt="Chicken & Tokyo Leek Negima"
                      className="w-16 h-16 sm:w-18 sm:h-18 object-cover border border-[#C5A880]/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-serif text-sm sm:text-base text-[#F3EFE6] truncate">
                          Chicken & Tokyo Leek Negima
                        </h4>
                        <span className="font-serif text-sm text-[#C5A880] font-medium shrink-0">£8.50</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#F3EFE6]/65 font-light line-clamp-2 leading-relaxed">
                        Corn-fed chicken thigh skewer char-grilled over Kishu binchotan with aged sweet tare glaze.
                      </p>
                    </div>
                  </div>

                  {/* Dish 2: Lamb Cutlets */}
                  <div className="p-3.5 sm:p-4 bg-[#1A1815] border border-[#C5A880]/15 flex items-center gap-4 hover:border-[#C5A880]/35 transition-colors">
                    <img
                      src={`${import.meta.env.BASE_URL}images/food/lamb-chops-close.webp`}
                      alt="Spiced Robata Lamb Cutlets"
                      className="w-16 h-16 sm:w-18 sm:h-18 object-cover border border-[#C5A880]/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-serif text-sm sm:text-base text-[#F3EFE6] truncate">
                          Spiced Robata Lamb Cutlets
                        </h4>
                        <span className="font-serif text-sm text-[#C5A880] font-medium shrink-0">£16.00</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#F3EFE6]/65 font-light line-clamp-2 leading-relaxed">
                        Tender lamb chops grilled over charcoal embers with sansho pepper and house fermented miso glaze.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Precision Edomae Sushi (Raw) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: luxuryEase }}
              className="bg-[#12110F] border border-[#C5A880]/20 p-5 sm:p-7 flex flex-col justify-between hover:border-[#C5A880]/35 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#C5A880]/15 mb-6 group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/kitchen/blowtorch-sushi.webp`}
                    alt="Sushi chef searing nigiri with delicate torch finish"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/30 to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-[#161513]/90 border border-[#C5A880]/30 text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif backdrop-blur-sm">
                    Edomae Precision
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-serif block mb-0.5">
                      Raw Bar & Rolls
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE6] font-normal">
                      Precision Sushi Craft (鮨)
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F3EFE6]/70 font-light leading-relaxed mb-6">
                  Daily cuts of wild tiger prawn, Scottish salmon, and prime wagyu hand-pressed over warm seasoned sushi rice with house alcohol-free nikiri glaze.
                </p>

                {/* Sushi Highlights */}
                <div className="space-y-3.5">
                  {/* Dish 1: Dragon Roll */}
                  <div className="p-3.5 sm:p-4 bg-[#1A1815] border border-[#C5A880]/15 flex items-center gap-4 hover:border-[#C5A880]/35 transition-colors">
                    <img
                      src={`${import.meta.env.BASE_URL}images/food/dragon-roll.webp`}
                      alt="The Azuki Dragon Roll"
                      className="w-16 h-16 sm:w-18 sm:h-18 object-cover border border-[#C5A880]/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-serif text-sm sm:text-base text-[#F3EFE6] truncate">
                          The Azuki Dragon Roll
                        </h4>
                        <span className="font-serif text-sm text-[#C5A880] font-medium shrink-0">£16.50</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#F3EFE6]/65 font-light line-clamp-2 leading-relaxed">
                        Crispy wild tiger prawn tempura, cucumber, wrapped in buttery ripe avocado with kabayaki glaze.
                      </p>
                    </div>
                  </div>

                  {/* Dish 2: Wagyu Tataki */}
                  <div className="p-3.5 sm:p-4 bg-[#1A1815] border border-[#C5A880]/15 flex items-center gap-4 hover:border-[#C5A880]/35 transition-colors">
                    <img
                      src={`${import.meta.env.BASE_URL}images/food/beef-tataki.webp`}
                      alt="Seared Wagyu Tataki"
                      className="w-16 h-16 sm:w-18 sm:h-18 object-cover border border-[#C5A880]/20 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-serif text-sm sm:text-base text-[#F3EFE6] truncate">
                          Seared Wagyu Tataki
                        </h4>
                        <span className="font-serif text-sm text-[#C5A880] font-medium shrink-0">£18.50</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#F3EFE6]/65 font-light line-clamp-2 leading-relaxed">
                        Lightly torched premium beef with ponzu reduction, garlic crisps, and sliced fresh chives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section Footer: Centered Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: luxuryEase }}
            className="mt-14 sm:mt-16 pt-8 border-t border-[#C5A880]/15 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3 text-xs text-[#F3EFE6]/70">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span className="font-serif tracking-wider">100% Halal Meats · Zero-Alcohol Kitchen · 30 Intimate Covers</span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('/menus')}
                className="flex-1 sm:flex-none px-6 py-3 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer text-center"
              >
                Explore Full Menus
              </button>

              <button
                onClick={onOpenBookingModal}
                className="flex-1 sm:flex-none px-6 py-3 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer text-center shadow-lg shadow-[#C5A880]/15"
              >
                Reserve Table
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4. SATURDAY SUSHI CLUB (Subtle Fade-In-Up) */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: luxuryEase }}
        className="py-24 md:py-32 bg-[#0E0D0C] border-t border-[#C5A880]/15 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual (6 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: luxuryEase }}
              className="lg:col-span-6 relative group overflow-hidden border border-[#C5A880]/25 shadow-2xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#161513]">
                <img
                  src={`${import.meta.env.BASE_URL}images/food/dragon-roll.webp`}
                  alt="Saturday Sushi Club Dragon Roll"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-[#C5A880] text-[#0E0D0C] text-[10px] uppercase tracking-[0.22em] font-bold">
                Every Saturday · From 12:00 PM
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-serif text-xl text-[#F3EFE6] block">
                    Unlimited Handcrafted Sushi
                  </span>
                  <span className="text-xs text-[#F3EFE6]/60">90-Minute Sitting</span>
                </div>
                <span className="font-serif text-2xl text-[#C5A880]">£49pp</span>
              </div>
            </motion.div>

            {/* Content & Direct Booking (6 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: luxuryEase }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                  Weekend Exclusive
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE6] font-normal leading-tight">
                Saturday Sushi Club <br />
                <span className="italic font-light text-[#EAE5DA]">Unlimited Feast</span>
              </h2>

              <p className="text-sm sm:text-base text-[#F3EFE6]/75 font-light leading-relaxed">
                90 minutes of freshly prepared maki, premium nigiri, sashimi cuts, and hot izakaya small plates. Available every Saturday from 12:00 PM.
              </p>

              <div className="grid grid-cols-2 gap-4 py-2 text-xs text-[#F3EFE6]/80 font-light border-y border-[#C5A880]/15">
                <div>
                  <strong className="text-[#C5A880] block font-serif text-sm">£49 per guest</strong>
                  <span>Standard unlimited sushi & hot bites</span>
                </div>
                <div>
                  <strong className="text-[#C5A880] block font-serif text-sm">£75 per guest</strong>
                  <span>With 4 curated Japanese tea & mocktail pairings</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
                >
                  Book Saturday Club
                </button>
                <a
                  href={`${import.meta.env.BASE_URL}menus/saturday-sushi-club.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Club Menu (PDF)</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 5. THE AZUKI LOUNGE (Private Hire Teaser) */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: luxuryEase }}
        className="py-24 md:py-32 bg-[#161513] border-t border-[#C5A880]/15 relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: luxuryEase }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-[#C5A880]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                  Downstairs & Exclusive Hire
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE6] font-normal leading-tight">
                The Azuki Lounge <br />
                <span className="italic font-light text-[#EAE5DA]">& Private Events</span>
              </h2>
              <p className="text-sm text-[#F3EFE6]/75 font-light leading-relaxed">
                From full buyouts of our 30-cover dining room to intimate gatherings in the downstairs lounge accommodating up to 50–60 guests with private bar service and bespoke omakase.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('/private-hire')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A880] text-[#0E0D0C] hover:bg-[#D8BF9B] text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
                >
                  <span>Explore Private Hire Options</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E0D0C]" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2, ease: luxuryEase }}
              className="lg:col-span-7 grid grid-cols-2 gap-4"
            >
              <div className="relative group overflow-hidden border border-[#C5A880]/20">
                <img
                  src={`${import.meta.env.BASE_URL}images/interiors/terrace.webp`}
                  alt="The Azuki Room exterior Rolls Passage entrance"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="relative group overflow-hidden border border-[#C5A880]/20 mt-6">
                <img
                  src={`${import.meta.env.BASE_URL}images/kitchen/sushi-chef-portrait.webp`}
                  alt="Master sushi chef at The Azuki Room"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. EDITORIAL RESERVATION CTA */}
      <motion.section
        id="reservations"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: luxuryEase }}
        className="py-28 md:py-36 bg-[#0E0C0B] border-t border-[#C5A57E]/15 relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
      >
        {/* Burning Japanese Ensō Circle & 30 Flying Embers */}
        <EnsoFireRing />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1, ease: luxuryEase }}
          className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto"
        >
          {/* Eyebrow Tag */}
          <span className="text-xs tracking-[0.25em] text-[#C5A57E] font-serif uppercase mb-4 block">
            JOIN US
          </span>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-5xl text-[#F3EEE6] font-normal mb-6 leading-tight">
            Reserve Your Table
          </h2>

          {/* Body Copy */}
          <p className="max-w-xl text-[#A69A91] text-sm md:text-base leading-relaxed mb-8 font-light">
            Whether it is a quick ramen at lunch, sushi at dusk, or an evening of yakitori straight from the binchotan grill, we would love to welcome you.
          </p>

          {/* Button CTA & Direct Navigation to /reservations */}
          <button
            onClick={() => onNavigate('/reservations')}
            className="bg-[#C5A57E] hover:bg-[#D8BF9B] text-[#0E0C0B] font-medium px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-[#FF9B4D]/25 hover:-translate-y-0.5 inline-block cursor-pointer text-xs uppercase tracking-[0.18em]"
          >
            Reserve a Table
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};
