import React from 'react';
import { ArrowRight, Flame, Users, Clock } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
  onExploreStory: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenBooking,
  onExploreStory,
}) => {
  return (
    <section
      id="experience"
      aria-label="The Azuki Room Dining Experience"
      className="relative py-28 md:py-36 bg-[#0D0C0A] overflow-hidden border-t border-[#F3EFE6]/5"
    >
      {/* Subtle Ambient Grain & Light Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#9B352F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B49A75]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Pre-heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#B49A75]" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B49A75]">
                Atmosphere & Craft
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3EFE6] font-normal leading-tight">
              An Intimate Escape <br />
              <span className="italic font-light text-[#EAE5DA]">from the Ordinary</span>
            </h2>
          </div>

          <div className="max-w-md">
            {/* Supporting Copy under 45 words as requested */}
            <p className="text-sm sm:text-base text-[#F3EFE6]/75 font-light leading-relaxed">
              Step off Chancery Lane into warm shadows, glowing shoji lanterns, and the scent of binchotan charcoal. With only thirty seats, every meal is an unhurried encounter with Japanese culinary precision.
            </p>
          </div>
        </div>

        {/* Editorial Composition: Asymmetric Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Interior Photo (7 cols) */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-[#F3EFE6]/10 shadow-2xl">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#1A1815]">
              <img
                src={`${import.meta.env.BASE_URL}images/interiors/dining-room-shoji-lights.webp`}
                alt="Intimate dining room with warm shoji lights at The Azuki Room"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B49A75] font-serif block mb-1">
                  Main Dining Sanctuary
                </span>
                <p className="text-xs text-[#F3EFE6]/80 font-light">
                  Hand-crafted oak tables bathed in ambient shoji glow
                </p>
              </div>
              <span className="text-xs font-serif text-[#F3EFE6]/40 hidden sm:inline">
                01 / 30 Covers
              </span>
            </div>
          </div>

          {/* Secondary Editorial Column with Secondary Photo & Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Supporting Sconce & Detail Photo */}
            <div className="relative group overflow-hidden border border-[#F3EFE6]/10 hidden sm:block">
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#1A1815]">
                <img
                  src={`${import.meta.env.BASE_URL}images/interiors/dining-room-sconce.webp`}
                  alt="Atmospheric warm sconce lighting detail"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Three Experience Pillars */}
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#141310] border border-[#F3EFE6]/5 flex items-start gap-4">
                <div className="p-2 bg-[#9B352F]/10 border border-[#9B352F]/30 text-[#9B352F] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm tracking-wider uppercase text-[#F3EFE6] font-medium mb-1">
                    Binchotan Grilling
                  </h3>
                  <p className="text-xs text-[#F3EFE6]/65 leading-relaxed font-light">
                    Searing temperatures lock in succulent juices with delicate smokiness and zero acrid soot.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#141310] border border-[#F3EFE6]/5 flex items-start gap-4">
                <div className="p-2 bg-[#B49A75]/10 border border-[#B49A75]/30 text-[#B49A75] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm tracking-wider uppercase text-[#F3EFE6] font-medium mb-1">
                    The Counter & Tables
                  </h3>
                  <p className="text-xs text-[#F3EFE6]/65 leading-relaxed font-light">
                    An open kitchen counter for solo diners and private tables for unhurried dinners.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border border-[#9B352F] cursor-pointer"
              >
                Reserve Your Evening
              </button>
              <button
                onClick={onExploreStory}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A75] hover:text-[#F3EFE6] transition-colors py-3 cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
