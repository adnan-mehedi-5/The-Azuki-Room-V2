import React from 'react';
import { ArrowRight, Flame, Users, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { RESTAURANT_ADDRESS, generateOpenTableUrl } from '../utils/booking';

interface AboutProps {
  onNavigate: (path: string) => void;
  onOpenBookingModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="bg-[#0E0D0C] text-[#F3EFE6] pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              Our Heritage & Philosophy
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F3EFE6] font-normal leading-tight mb-6">
            The Hidden World of <br />
            <span className="italic font-light text-[#EAE5DA]">The Azuki Room</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F3EFE6]/75 font-light leading-relaxed">
            Tucked down Rolls Passage off the historic legal corridor of Chancery Lane, The Azuki Room is an intimate 30-cover haven dedicated to the elemental craft of Kishu binchotan fire and understated Japanese hospitality.
          </p>
        </div>

        {/* Narrative & Architectural Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 relative group overflow-hidden border border-[#C5A880]/25 shadow-2xl">
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#161513]">
              <img
                src={`${import.meta.env.BASE_URL}images/interiors/dining-room-shoji-lights.webp`}
                alt="Shoji lantern lighting in The Azuki Room dining room"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1">
                  Chancery Lane Hideaway
                </span>
                <p className="text-xs text-[#F3EFE6]/80 font-light">
                  A sanctuary designed for unhurried, mindful dining
                </p>
              </div>
              <span className="text-xs text-[#C5A880]/70 font-serif">30 Covers</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-xs sm:text-sm text-[#F3EFE6]/75 font-light leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal">
              Discovered, Never Advertised
            </h2>
            <p>
              In Japan, an <strong className="text-[#F3EFE6] font-normal">izakaya</strong> is more than a restaurant — it is an evening refuge. A place where the noise of the city dissolves behind a curtain, replaced by the crackle of glowing embers and the clink of ceramic cups.
            </p>
            <p>
              We established The Azuki Room to bring this unhurried intimacy to central London. Our compact 30-cover dining room ensures that every skewer, every slice of yellowfin tuna, and every bowl of lunchtime ramen receives individual, undivided attention.
            </p>
            <div className="p-4 bg-[#161513] border border-[#C5A880]/20">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A880] font-serif block mb-1">
                Zero-Alcohol & 100% Halal
              </span>
              <p className="text-xs text-[#F3EFE6]/70">
                All poultry, beef, and lamb are certified 100% halal. Every marinade, glaze, and broth is crafted with absolute purity and zero alcohol.
              </p>
            </div>
          </div>
        </div>

        {/* The Three Pillars of Azuki */}
        <div className="mb-24 pt-12 border-t border-[#C5A880]/15">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1 font-medium">
              Culinary Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE6]">
              Fire, Precision & Restraint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#161513] border border-[#C5A880]/20 space-y-3">
              <Flame className="w-5 h-5 text-[#C5A880]" />
              <h3 className="font-serif text-lg text-[#F3EFE6]">Kishu Binchotan Charcoal</h3>
              <p className="text-xs text-[#F3EFE6]/70 leading-relaxed font-light">
                Crafted from Japanese Holm oak using ancient kilning techniques, our binchotan burns cleanly without flame or acrid soot at nearly 1000°C.
              </p>
            </div>

            <div className="p-6 bg-[#161513] border border-[#C5A880]/20 space-y-3">
              <Sparkles className="w-5 h-5 text-[#C5A880]" />
              <h3 className="font-serif text-lg text-[#F3EFE6]">Raw Bar Mastery</h3>
              <p className="text-xs text-[#F3EFE6]/70 leading-relaxed font-light">
                From Scottish salmon and wild tiger prawn to yellowfin tuna and sweet unagi, each cut is prepared with exacting knife angles and seasoned sushi rice.
              </p>
            </div>

            <div className="p-6 bg-[#161513] border border-[#C5A880]/20 space-y-3">
              <Users className="w-5 h-5 text-[#C5A880]" />
              <h3 className="font-serif text-lg text-[#F3EFE6]">The Intimate Counter</h3>
              <p className="text-xs text-[#F3EFE6]/70 leading-relaxed font-light">
                An open counter and warmly lit dining tables foster a calm, conversational atmosphere where diners witness the chef's craft at close quarters.
              </p>
            </div>
          </div>
        </div>

        {/* Dual Photo Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          <div className="relative group overflow-hidden border border-[#C5A880]/20">
            <img
              src={`${import.meta.env.BASE_URL}images/kitchen/chef-grilling-fish-smoke.webp`}
              alt="Live charcoal grilling at The Azuki Room"
              className="w-full h-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif block">
                The Robata Hearth
              </span>
              <p className="text-xs text-[#F3EFE6]/80 font-light">Charcoal cooking over open embers</p>
            </div>
          </div>

          <div className="relative group overflow-hidden border border-[#C5A880]/20">
            <img
              src={`${import.meta.env.BASE_URL}images/kitchen/blowtorch-sushi.webp`}
              alt="Aburi torch technique on nigiri"
              className="w-full h-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif block">
                Aburi Searing
              </span>
              <p className="text-xs text-[#F3EFE6]/80 font-light">Precision torch flame finish</p>
            </div>
          </div>
        </div>

        {/* Next Step Actions */}
        <div className="p-8 bg-[#161513] border border-[#C5A880]/30 text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6]">
            Experience The Azuki Room
          </h2>
          <p className="text-xs sm:text-sm text-[#F3EFE6]/70 max-w-md mx-auto font-light">
            We invite you down Rolls Passage to discover intimate Japanese dining in Chancery Lane.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
            >
              Book a Table
            </button>
            <button
              onClick={() => onNavigate('/menus')}
              className="px-6 py-3 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#C5A880] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Explore Menus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
