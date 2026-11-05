import React, { useState } from 'react';
import { Download, Flame, Fish, Soup, Sparkles, Coffee, ExternalLink, Calendar } from 'lucide-react';
import { MENU_ITEMS, MENU_DOCUMENTS, MenuItem } from '../data/restaurantData';

interface MenusProps {
  onOpenBookingModal: () => void;
}

export const Menus: React.FC<MenusProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Offerings', icon: Sparkles },
    { id: 'robata', label: 'Robata & Yakitori', icon: Flame },
    { id: 'sushi', label: 'Sushi & Raw Bar', icon: Fish },
    { id: 'lunch', label: 'Lunchtime Ramen', icon: Soup },
    { id: 'sushi-club', label: 'Saturday Sushi Club', icon: Sparkles },
    { id: 'drinks', label: 'Botanicals & Teas', icon: Coffee },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#0E0D0C] text-[#F3EFE6] pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                A La Carte, Sushi & Pairings
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F3EFE6] font-normal leading-tight">
              Restaurant <span className="italic font-light text-[#EAE5DA]">Menus</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#F3EFE6]/70 mt-2 font-light max-w-xl">
              100% Halal certified meats · Zero-alcohol kitchen · Cooked over Kishu binchotan white oak charcoal.
            </p>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-bold transition-colors shrink-0 flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <Calendar className="w-3.5 h-3.5 text-[#0E0D0C]" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-2 border-b border-[#C5A880]/20 mb-12 overflow-x-auto pb-px">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3.5 text-xs uppercase tracking-[0.18em] font-medium border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#C5A880] text-[#C5A880] bg-[#161513]'
                    : 'border-transparent text-[#F3EFE6]/55 hover:text-[#F3EFE6] hover:bg-[#161513]/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A880]' : 'opacity-60'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="p-6 bg-[#161513] border border-[#C5A880]/15 hover:border-[#C5A880]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg text-[#F3EFE6] group-hover:text-[#C5A880] transition-colors">
                        {dish.name}
                      </h3>
                      {dish.kanji && (
                        <span className="text-[11px] text-[#C5A880]/60 font-serif">
                          {dish.kanji}
                        </span>
                      )}
                    </div>
                    {dish.tag && (
                      <span className="text-[10px] text-[#C5A880] uppercase tracking-[0.18em] font-medium block mt-0.5">
                        {dish.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-base text-[#C5A880] font-medium whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-xs text-[#F3EFE6]/65 font-light leading-relaxed mb-4">
                  {dish.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 pt-3 border-t border-[#F3EFE6]/5">
                {dish.dietary?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 bg-[#1F1D1A] text-[#C5A880]/80 uppercase tracking-wider border border-[#C5A880]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Original Menu Documents Bar */}
        <div className="pt-10 border-t border-[#C5A880]/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#C5A880] font-serif block">
                Original Chancery Lane Menu Documents
              </span>
              <p className="text-xs text-[#F3EFE6]/50 mt-0.5">
                Download or view complete restaurant menus in high-resolution PDF and JPG
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {MENU_DOCUMENTS.map((doc) => (
              <a
                key={doc.id}
                href={doc.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#161513] border border-[#C5A880]/20 hover:border-[#C5A880] transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C5A880] font-bold block mb-1">
                    {doc.type.toUpperCase()}
                  </span>
                  <h4 className="font-serif text-xs text-[#F3EFE6] group-hover:text-[#C5A880] line-clamp-1 transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-[10px] text-[#F3EFE6]/40 line-clamp-1 mt-0.5">
                    {doc.subtitle}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-[#C5A880]">
                  <span>Open</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
