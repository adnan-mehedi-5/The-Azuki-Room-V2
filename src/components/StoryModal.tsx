import React from 'react';
import { X, Flame, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Our Story & Philosophy"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D0C0A]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-[#141310] border border-[#B49A75]/30 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#F3EFE6]/60 hover:text-[#B49A75] transition-colors focus:outline-none"
          aria-label="Close Our Story"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9B352F] font-serif block mb-1">
              Tradition & Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE6]">
              The Story of The Azuki Room
            </h2>
            <p className="text-xs text-[#B49A75] uppercase tracking-[0.2em] mt-1 font-serif">
              炭火と静寂 · Chancery Lane, London
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#F3EFE6]/10">
            <img
              src={`${import.meta.env.BASE_URL}images/kitchen/chef-grilling-fish-smoke.webp`}
              alt="Binchotan charcoal grilling craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#F3EFE6]/80 leading-relaxed space-y-4 font-light">
            <p>
              Tucked away down Rolls Passage, just moments from the historic law courts of Chancery Lane, The Azuki Room was born out of a desire for intimacy and authentic Japanese fire cooking in the heart of London.
            </p>
            <p>
              At the core of our kitchen burns authentic <strong className="text-[#F3EFE6] font-normal">Kishu Binchotan</strong> — a prized white oak charcoal crafted using centuries-old Japanese carbonisation methods. Burning at intense heat with virtually no smoke or odour, it sears skewered meats, wild seafood, and seasonal vegetables to lock in pure, unadulterated flavours.
            </p>
            <p>
              With thirty covers thoughtfully arrayed around our open robata grill and sushi counter, our space was conceived as a sanctuary — a place to linger over hand-pressed nigiri, comforting claypots, and distilled Japanese botanicals.
            </p>
            <p className="border-l-2 border-[#9B352F] pl-4 italic text-[#EAE5DA]">
              "We believe true luxury is found not in excess, but in the precision of the cut, the heat of the ember, and the warmth of genuine hospitality."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F3EFE6]/10 text-xs">
            <div className="p-3 bg-[#1A1815] border border-[#F3EFE6]/5">
              <span className="font-serif text-sm text-[#B49A75] block mb-1">Intimate Scale</span>
              <p className="text-[11px] text-[#F3EFE6]/60">30 covers ensuring attentive, unhurried service</p>
            </div>
            <div className="p-3 bg-[#1A1815] border border-[#F3EFE6]/5">
              <span className="font-serif text-sm text-[#B49A75] block mb-1">100% Halal</span>
              <p className="text-[11px] text-[#F3EFE6]/60">Every dish and sauce prepared without alcohol</p>
            </div>
            <div className="p-3 bg-[#1A1815] border border-[#F3EFE6]/5">
              <span className="font-serif text-sm text-[#B49A75] block mb-1">Binchotan Fire</span>
              <p className="text-[11px] text-[#F3EFE6]/60">Searing heat for optimal caramelization and tenderness</p>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.16em] text-[#F3EFE6]/60 hover:text-[#F3EFE6]"
            >
              Return to Website
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-3 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
