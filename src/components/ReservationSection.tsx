import React from 'react';

interface ReservationSectionProps {
  onNavigate?: (path: string) => void;
  onOpenBookingModal?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('/reservations');
    } else if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      window.location.href = '/reservations';
    }
  };

  return (
    <section
      id="reservations"
      className="py-28 md:py-36 bg-[#0E0D0C] border-t border-[#C5A880]/15 relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
    >
      {/* Subtle Decorative Geometric Background Accent */}
      <div
        className="border border-[#C5A880]/15 rounded-full w-[380px] h-[380px] md:w-[480px] md:h-[480px] absolute -z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        {/* Eyebrow Tag */}
        <span className="text-xs tracking-[0.25em] text-[#C5A880] font-serif uppercase mb-4 block">
          JOIN US
        </span>

        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-5xl text-[#F3EFE6] font-normal mb-6 leading-tight">
          Reserve Your Table
        </h2>

        {/* Body Copy */}
        <p className="max-w-xl text-[#A09D96] text-sm md:text-base leading-relaxed mb-8 font-light">
          Whether it is a quick ramen at lunch, sushi at dusk, or an evening of yakitori straight from the binchotan grill, we would love to welcome you.
        </p>

        {/* Button CTA & Direct Navigation to /reservations */}
        <button
          onClick={handleClick}
          className="bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm inline-block cursor-pointer text-xs uppercase tracking-[0.18em]"
        >
          Reserve a Table
        </button>
      </div>
    </section>
  );
};
