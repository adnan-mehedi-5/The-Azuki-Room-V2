import React from 'react';
import { ArrowRight, Mail, Download, Users, GlassWater, Award } from 'lucide-react';

interface LoungeSectionProps {
  onOpenEnquiry: () => void;
}

export const LoungeSection: React.FC<LoungeSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="private-dining"
      aria-label="Private Dining and The Azuki Lounge"
      className="py-28 md:py-36 bg-[#11100E] relative overflow-hidden border-t border-[#F3EFE6]/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Enquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#B49A75]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B49A75]">
                  Exclusive Hire & Events
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE6] font-normal leading-tight">
                Beyond the <br />
                <span className="italic font-light text-[#EAE5DA]">Dining Room</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F3EFE6]/75 font-light leading-relaxed">
              For intimate celebrations, client dinners, and private buyouts. Accommodating up to thirty seated guests with tailored binchotan tasting menus and bespoke service.
            </p>

            {/* Event Specs */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 bg-[#161513] border border-[#F3EFE6]/5">
                <Users className="w-4 h-4 text-[#B49A75] shrink-0" />
                <div>
                  <span className="text-xs font-medium text-[#F3EFE6] block">
                    Full Venue Buyout (Up to 30 Guests)
                  </span>
                  <span className="text-[11px] text-[#F3EFE6]/50">
                    Exclusive hire of the main room and bar counter
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-[#161513] border border-[#F3EFE6]/5">
                <GlassWater className="w-4 h-4 text-[#B49A75] shrink-0" />
                <div>
                  <span className="text-xs font-medium text-[#F3EFE6] block">
                    Custom Tasting & Sharing Menus
                  </span>
                  <span className="text-[11px] text-[#F3EFE6]/50">
                    Charcoal robata courses, sushi platters and pairings
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors text-center cursor-pointer"
              >
                Submit Event Enquiry
              </button>

              <a
                href="/menus/event-set-menus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#F3EFE6]/20 hover:border-[#B49A75] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors bg-[#1A1815]/40"
              >
                <Download className="w-3.5 h-3.5 text-[#B49A75]" />
                <span>Event Menus (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Suite (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="relative group overflow-hidden border border-[#F3EFE6]/10 shadow-2xl">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#161513]">
                <img
                  src="/images/interiors/terrace.webp"
                  alt="Atmospheric entrance and lounge terrace at The Azuki Room"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A75] font-serif block">
                  The Lounge Ambience
                </span>
                <span className="text-xs text-[#F3EFE6]/90 font-light">Rolls Passage Entrance</span>
              </div>
            </div>

            <div className="relative group overflow-hidden border border-[#F3EFE6]/10 shadow-2xl mt-8">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#161513]">
                <img
                  src="/images/kitchen/sushi-chef-portrait.webp"
                  alt="Master sushi chef preparing bespoke event service"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A75] font-serif block">
                  Dedicated Chef
                </span>
                <span className="text-xs text-[#F3EFE6]/90 font-light">Omakase & Grilling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
