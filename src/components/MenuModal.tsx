import React, { useState } from 'react';
import { X, Download, Flame, Fish, Soup, Sparkles, Coffee, ExternalLink, Calendar } from 'lucide-react';
import { MENU_ITEMS, MENU_DOCUMENTS, MenuItem } from '../data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  initialCategory?: string;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  initialCategory = 'robata',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Complete Menu', icon: Sparkles },
    { id: 'robata', label: 'Binchotan Robata & Yakitori', icon: Flame },
    { id: 'sushi', label: 'Sushi & Raw Bar', icon: Fish },
    { id: 'lunch', label: 'Weekday Lunch & Ramen', icon: Soup },
    { id: 'sushi-club', label: 'Saturday Sushi Club', icon: Sparkles },
    { id: 'drinks', label: 'Botanicals & Teas', icon: Coffee },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Restaurant Menus Explorer"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D0C0A]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#141310] border border-[#B49A75]/30 shadow-2xl p-6 sm:p-10 max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#F3EFE6]/60 hover:text-[#B49A75] transition-colors focus:outline-none"
          aria-label="Close Menus"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="pb-6 border-b border-[#F3EFE6]/10 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A75] font-serif block mb-1">
                The Azuki Room · Chancery Lane
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE6]">
                Menus & Culinary Offerings
              </h2>
              <p className="text-xs text-[#F3EFE6]/60 mt-1">
                100% Halal certified meats · Zero alcohol kitchen · Cooked over Kishu binchotan
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2.5 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium rounded-none whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#B49A75] text-[#0D0C0A] font-bold'
                      : 'bg-[#1C1A17] text-[#F3EFE6]/60 hover:text-[#F3EFE6]'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Dish List */}
        <div className="overflow-y-auto py-6 pr-2 space-y-4 my-2 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="p-4 bg-[#181614] border border-[#F3EFE6]/5 hover:border-[#B49A75]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base text-[#F3EFE6]">{dish.name}</h3>
                        {dish.kanji && (
                          <span className="text-[11px] text-[#B49A75]/60 font-serif">
                            {dish.kanji}
                          </span>
                        )}
                      </div>
                      {dish.tag && (
                        <span className="text-[10px] text-[#9B352F] uppercase tracking-[0.16em] font-semibold block mt-0.5">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-sm text-[#B49A75] font-medium whitespace-nowrap">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#F3EFE6]/70 font-light leading-relaxed mb-3">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#F3EFE6]/5">
                  {dish.dietary?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 bg-[#25221E] text-[#F3EFE6]/60 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Original PDF/JPG Links */}
        <div className="pt-4 border-t border-[#F3EFE6]/10 shrink-0">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3EFE6]/50 block mb-2 font-serif">
            Official Menu PDF Downloads:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {MENU_DOCUMENTS.map((doc) => (
              <a
                key={doc.id}
                href={doc.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#B49A75] hover:text-[#F3EFE6] transition-colors py-1 px-2.5 bg-[#1C1A17] border border-[#F3EFE6]/10 hover:border-[#B49A75]"
              >
                <Download className="w-3 h-3" />
                <span>{doc.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
