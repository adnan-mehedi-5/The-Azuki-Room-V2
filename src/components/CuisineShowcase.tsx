import React, { useState } from 'react';
import { ArrowRight, Flame, Fish, Soup, Sparkles, Download, ExternalLink } from 'lucide-react';
import { MENU_ITEMS, MENU_DOCUMENTS, MenuItem } from '../data/restaurantData';

interface CuisineShowcaseProps {
  onOpenMenus: (category?: string) => void;
  onOpenBooking: () => void;
}

export const CuisineShowcase: React.FC<CuisineShowcaseProps> = ({
  onOpenMenus,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'robata' | 'sushi' | 'lunch'>('robata');

  const tabs = [
    { id: 'robata', label: 'Binchotan & Robata', icon: Flame, kanji: '炭火' },
    { id: 'sushi', label: 'Sushi & Raw Bar', icon: Fish, kanji: '寿司' },
    { id: 'lunch', label: 'Lunchtime Ramen', icon: Soup, kanji: '拉麺' },
  ] as const;

  const currentItems = MENU_ITEMS.filter((item) => item.category === activeTab).slice(0, 4);

  return (
    <section
      id="cuisine"
      aria-label="Japanese Cuisine and Craftsmanship"
      className="py-28 md:py-36 bg-[#11100E] border-t border-[#F3EFE6]/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#9B352F]" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B49A75]">
                Culinary Craftsmanship
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3EFE6] font-normal leading-tight">
              The Art of <br />
              <span className="italic font-light text-[#EAE5DA]">Japanese Dining</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => onOpenMenus(activeTab)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#B49A75]/40 hover:border-[#B49A75] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors bg-[#1A1815]/60 cursor-pointer"
            >
              <span>Explore All Menus</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B49A75]" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#F3EFE6]/10 mb-12 overflow-x-auto pb-px">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-4 text-xs uppercase tracking-[0.2em] font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#9B352F] text-[#F3EFE6] bg-[#1A1815]/80'
                    : 'border-transparent text-[#F3EFE6]/50 hover:text-[#F3EFE6] hover:bg-[#1A1815]/30'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#9B352F]' : 'opacity-60'}`} />
                <span>{tab.label}</span>
                <span className="text-[10px] text-[#B49A75]/70 font-serif ml-1">{tab.kanji}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Editorial Content Panel */}
        {activeTab === 'robata' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Oversized Photographic Hero (7 cols) */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-[#F3EFE6]/10 bg-[#161513] min-h-[420px] lg:min-h-[500px]">
              <img
                src="/images/kitchen/chef-grilling-fish-smoke.webp"
                alt="Chef grilling fresh fish over smoking binchotan charcoal"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9B352F]/90 text-[#F3EFE6] text-[10px] uppercase tracking-[0.2em] font-medium mb-3">
                  <Flame className="w-3 h-3" />
                  Kishu Binchotan
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal mb-2">
                  White Oak Smoke & 1000°C Fire
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EFE6]/80 font-light max-w-lg leading-relaxed">
                  Imported binchotan burns cleanly without flame, searing skewers instantly to preserve natural moisture and umami depth.
                </p>
              </div>
            </div>

            {/* Curated Dish Grid (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {currentItems.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-4 bg-[#161513] border border-[#F3EFE6]/5 hover:border-[#B49A75]/30 transition-colors group"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base text-[#F3EFE6] group-hover:text-[#B49A75] transition-colors">
                          {dish.name}
                        </h4>
                        {dish.kanji && (
                          <span className="text-[11px] text-[#F3EFE6]/30 font-serif">{dish.kanji}</span>
                        )}
                      </div>
                      <span className="font-serif text-sm text-[#B49A75] font-medium">{dish.price}</span>
                    </div>
                    <p className="text-xs text-[#F3EFE6]/65 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Supporting skewer banner */}
              <div className="p-4 bg-[#1E1B17] border border-[#B49A75]/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B49A75] block font-serif">
                    100% Halal Verified
                  </span>
                  <p className="text-xs text-[#F3EFE6]/70 font-light">
                    All meats, marinades and glazes are prepared with zero alcohol.
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#9B352F] text-[#F3EFE6] text-xs uppercase tracking-[0.16em] font-medium shrink-0 cursor-pointer"
                >
                  Book Grill
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sushi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Curated Dish Grid (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 order-2 lg:order-1">
              <div className="space-y-3">
                {currentItems.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-4 bg-[#161513] border border-[#F3EFE6]/5 hover:border-[#B49A75]/30 transition-colors group"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base text-[#F3EFE6] group-hover:text-[#B49A75] transition-colors">
                          {dish.name}
                        </h4>
                        {dish.kanji && (
                          <span className="text-[11px] text-[#F3EFE6]/30 font-serif">{dish.kanji}</span>
                        )}
                      </div>
                      <span className="font-serif text-sm text-[#B49A75] font-medium">{dish.price}</span>
                    </div>
                    <p className="text-xs text-[#F3EFE6]/65 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#1E1B17] border border-[#B49A75]/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B49A75] block font-serif">
                    Raw Bar Craft
                  </span>
                  <p className="text-xs text-[#F3EFE6]/70 font-light">
                    Sashimi grade Scottish salmon, yellowfin tuna & wild tiger prawn.
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#9B352F] text-[#F3EFE6] text-xs uppercase tracking-[0.16em] font-medium shrink-0 cursor-pointer"
                >
                  Book Bar
                </button>
              </div>
            </div>

            {/* Oversized Sushi Photography Hero (7 cols) */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-[#F3EFE6]/10 bg-[#161513] min-h-[420px] lg:min-h-[500px] order-1 lg:order-2">
              <img
                src="/images/kitchen/blowtorch-sushi.webp"
                alt="Sushi chef searing nigiri with delicate blowtorch technique"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B49A75]/90 text-[#0D0C0A] text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                  <Sparkles className="w-3 h-3" />
                  Flame Seared Aburi
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal mb-2">
                  Precision Knife Work & Seasoned Rice
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EFE6]/80 font-light max-w-lg leading-relaxed">
                  Hand-molded nigiri, crispy prawn dragon rolls, and comforting kamameshi claypots crafted in full view of the dining room.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lunch' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Lunch Hero */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-[#F3EFE6]/10 bg-[#161513] min-h-[420px]">
              <img
                src="/images/food/sharing-table-overhead.webp"
                alt="Midday lunch and ramen spread at The Azuki Room"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9B352F]/90 text-[#F3EFE6] text-[10px] uppercase tracking-[0.2em] font-medium mb-3">
                  Weekday Lunch 12:00 – 15:00
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal mb-2">
                  Midday Halal Ramen & Izakaya Bowls
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EFE6]/80 font-light max-w-lg leading-relaxed">
                  Designed for Chancery Lane professionals seeking rich 12-hour simmered chicken paitan, fiery tantanmen, and quick bento sets.
                </p>
              </div>
            </div>

            {/* Lunch Dishes List */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {currentItems.map((dish) => (
                  <div
                    key={dish.id}
                    className="p-4 bg-[#161513] border border-[#F3EFE6]/5 hover:border-[#B49A75]/30 transition-colors group"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-base text-[#F3EFE6] group-hover:text-[#B49A75] transition-colors">
                          {dish.name}
                        </h4>
                        {dish.kanji && (
                          <span className="text-[11px] text-[#F3EFE6]/30 font-serif">{dish.kanji}</span>
                        )}
                      </div>
                      <span className="font-serif text-sm text-[#B49A75] font-medium">{dish.price}</span>
                    </div>
                    <p className="text-xs text-[#F3EFE6]/65 font-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#1E1B17] border border-[#B49A75]/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B49A75] block font-serif">
                    Walk-Ins Welcome
                  </span>
                  <p className="text-xs text-[#F3EFE6]/70 font-light">
                    Counter stools available for swift solo lunch dining.
                  </p>
                </div>
                <a
                  href="/menus/lunch-menu.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#B49A75] text-[#F3EFE6] text-xs uppercase tracking-[0.16em] font-medium shrink-0 flex items-center gap-1.5 hover:bg-[#B49A75]/10"
                >
                  <ExternalLink className="w-3 h-3 text-[#B49A75]" />
                  <span>Menu</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Menu Documents Quick Access Bar */}
        <div className="mt-14 pt-8 border-t border-[#F3EFE6]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#F3EFE6]/60 font-serif">
              Original Restaurant Menu Downloads (PDF / JPG)
            </span>
            <span className="text-xs text-[#B49A75]">
              Verified accurate Chancery Lane documents
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {MENU_DOCUMENTS.map((doc) => (
              <a
                key={doc.id}
                href={doc.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#161513] border border-[#F3EFE6]/10 hover:border-[#B49A75] transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#9B352F] font-bold block mb-1">
                    {doc.type.toUpperCase()}
                  </span>
                  <h4 className="font-serif text-xs text-[#F3EFE6] group-hover:text-[#B49A75] line-clamp-1 transition-colors">
                    {doc.title}
                  </h4>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-[#F3EFE6]/40 group-hover:text-[#F3EFE6]/80">
                  <span>View</span>
                  <ExternalLink className="w-3 h-3 text-[#B49A75]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
