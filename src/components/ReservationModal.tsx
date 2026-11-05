import React from 'react';
import { X, ExternalLink, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { OpenTableWidget } from './OpenTableWidget';
import { RESTAURANT_PHONE, RESTAURANT_PHONE_INTL, generateOpenTableUrl } from '../utils/booking';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperience?: 'dining' | 'sushi-club' | 'lounge-hire';
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation Desk"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E0D0C]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#161513] border border-[#C5A880]/30 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F3EFE6]/60 hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1">
            The Azuki Room · Chancery Lane
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6]">
            Reserve Your Table
          </h2>
          <p className="text-xs text-[#F3EFE6]/60 mt-1 font-light">
            30 intimate covers · Official OpenTable live reservations
          </p>
        </div>

        {/* Direct OpenTable UK Integration Widget */}
        <OpenTableWidget />

        {/* Quick Assistance */}
        <div className="mt-6 pt-4 border-t border-[#C5A880]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#F3EFE6]/55 font-light">
          <span>Need assistance? Call desk: <a href={`tel:${RESTAURANT_PHONE_INTL}`} className="text-[#C5A880] hover:underline font-medium">{RESTAURANT_PHONE}</a></span>
          <button
            onClick={onClose}
            className="text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/40 hover:text-[#F3EFE6] transition-colors self-end sm:self-auto cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
