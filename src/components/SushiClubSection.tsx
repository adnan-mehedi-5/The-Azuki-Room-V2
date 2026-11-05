import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Check, Download, Users, ArrowRight } from 'lucide-react';
import { calculateSushiClubTotal } from '../utils/booking';

interface SushiClubSectionProps {
  onOpenBooking: () => void;
}

export const SushiClubSection: React.FC<SushiClubSectionProps> = ({ onOpenBooking }) => {
  const [guests, setGuests] = useState(2);
  const [withPairing, setWithPairing] = useState(false);

  const total = calculateSushiClubTotal(guests, withPairing);

  return (
    <section
      id="sushi-club"
      aria-label="Saturday Sushi Club at The Azuki Room"
      className="py-28 md:py-36 bg-[#0D0C0A] relative overflow-hidden border-t border-[#F3EFE6]/5"
    >
      {/* Decorative Warm Ambient Light */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#B49A75]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden border border-[#F3EFE6]/10 shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#161513]">
                <img
                  src="/images/food/dragon-roll.webp"
                  alt="Signature Dragon Roll served during Saturday Sushi Club"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-[#9B352F] text-[#F3EFE6] text-[10px] uppercase tracking-[0.25em] font-medium shadow-lg">
                Exclusive Weekend Experience
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-serif text-lg text-[#F3EFE6] block">
                    Unlimited Handcrafted Sushi
                  </span>
                  <span className="text-xs text-[#F3EFE6]/60 font-light">
                    Dragon rolls, salmon nigiri, karaage, and miso
                  </span>
                </div>
                <span className="font-serif text-xl text-[#B49A75]">90 Mins</span>
              </div>
            </div>

            {/* Overlapping Detail Frame */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 p-4 bg-[#1A1815] border border-[#B49A75]/30 shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A75] block font-serif mb-1">
                From 12:00 PM
              </span>
              <p className="text-xs text-[#F3EFE6] font-medium">Every Saturday</p>
              <p className="text-[11px] text-[#F3EFE6]/50 mt-1">Advance reservation required</p>
            </div>
          </div>

          {/* Right Column: Editorial Details & Interactive Booking (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#B49A75]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B49A75]">
                  Saturday Sushi Club
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE6] font-normal leading-tight">
                London's Coveted <br />
                <span className="italic font-light text-[#EAE5DA]">Weekend Feast</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F3EFE6]/75 font-light leading-relaxed max-w-lg">
              Indulge in 90 minutes of unlimited hand-rolled maki, freshly pressed nigiri, delicate sashimi, and sizzling izakaya small plates — prepared to order in Chancery Lane.
            </p>

            {/* Inclusions checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#F3EFE6]/80 font-light">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B49A75] shrink-0" />
                <span>Unlimited Maki, Nigiri & Rolls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B49A75] shrink-0" />
                <span>Hot Karaage & Gyoza Bites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B49A75] shrink-0" />
                <span>100% Halal Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B49A75] shrink-0" />
                <span>Full 90-Minute Table Sitting</span>
              </div>
            </div>

            {/* Interactive Calculator / Pricing Panel */}
            <div className="p-6 bg-[#141310] border border-[#F3EFE6]/10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F3EFE6]/10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFE6]/50 block">
                    Choose Experience
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => setWithPairing(false)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        !withPairing
                          ? 'bg-[#B49A75] text-[#0D0C0A] border-[#B49A75]'
                          : 'bg-transparent text-[#F3EFE6]/70 border-[#F3EFE6]/20'
                      }`}
                    >
                      Standard (£49pp)
                    </button>
                    <button
                      onClick={() => setWithPairing(true)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                        withPairing
                          ? 'bg-[#B49A75] text-[#0D0C0A] border-[#B49A75]'
                          : 'bg-transparent text-[#F3EFE6]/70 border-[#F3EFE6]/20'
                      }`}
                    >
                      With Pairings (£75pp)
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#F3EFE6]/50 block">
                    Guests
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`w-8 h-8 flex items-center justify-center text-xs font-medium border transition-colors cursor-pointer ${
                          guests === num
                            ? 'bg-[#F3EFE6] text-[#0D0C0A] border-[#F3EFE6]'
                            : 'text-[#F3EFE6]/60 border-[#F3EFE6]/15 hover:border-[#F3EFE6]/40'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total & Action */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3EFE6]/50 block">
                    Estimated Total ({guests} guests)
                  </span>
                  <span className="font-serif text-2xl text-[#F3EFE6] font-medium">
                    £{total} <span className="text-xs text-[#F3EFE6]/40 font-sans">total</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/menus/saturday-sushi-club.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#F3EFE6]/20 hover:border-[#B49A75] text-[#F3EFE6] transition-colors"
                    title="Download Sushi Club Menu PDF"
                  >
                    <Download className="w-4 h-4 text-[#B49A75]" />
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg cursor-pointer"
                  >
                    Reserve Saturday Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
