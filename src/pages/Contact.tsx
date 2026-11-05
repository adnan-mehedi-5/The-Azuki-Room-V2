import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation as NavIcon, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { OpenTableWidget } from '../components/OpenTableWidget';
import {
  RESTAURANT_ADDRESS,
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_INTL,
  RESTAURANT_EMAIL,
  GOOGLE_MAPS_URL,
  getOpeningStatus,
  generateOpenTableUrl
} from '../utils/booking';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ContactProps {
  onOpenBookingModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBookingModal }) => {
  const openingStatus = getOpeningStatus();

  return (
    <div className="bg-[#0E0D0C] text-[#F3EFE6] pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              Visit & Find Us
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F3EFE6] font-normal leading-tight mb-6">
            Location, Hours <br />
            <span className="italic font-light text-[#EAE5DA]">& Contact</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F3EFE6]/75 font-light leading-relaxed">
            Hidden down Rolls Passage, off 36 Chancery Lane. An intimate izakaya escape in central London.
          </p>
        </div>

        {/* Contact & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Card 1: Address & Travel (6 cols) */}
          <div className="lg:col-span-6 bg-[#161513] border border-[#C5A880]/25 p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/15">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C5A880]" />
                <h2 className="font-serif text-xl sm:text-2xl text-[#F3EFE6]">The Restaurant</h2>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif">
                Rolls Passage
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F3EFE6]/80 font-light">
              <div>
                <strong className="text-[#F3EFE6] block text-base font-serif mb-1">
                  The Azuki Room
                </strong>
                <p>{RESTAURANT_ADDRESS}</p>
                <p className="text-[#F3EFE6]/50 mt-1">
                  Rolls Passage is a quiet pedestrian alleyway accessible directly from 36 Chancery Lane.
                </p>
              </div>

              <div className="pt-2">
                <strong className="text-[#C5A880] block text-xs uppercase tracking-[0.16em] mb-1">
                  Public Transport & Tube
                </strong>
                <p>
                  <strong className="text-[#F3EFE6]">Chancery Lane Station</strong> (Central Line) — 2 minutes walk.
                </p>
                <p className="text-[#F3EFE6]/60">
                  Holborn Station (Piccadilly & Central) and Temple Station (District & Circle) are also within a comfortable 7–10 minute walk.
                </p>
              </div>
            </div>

            {/* Direct Map & Phone Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-[#C5A880]/15">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.18em] font-bold transition-colors"
              >
                <NavIcon className="w-4 h-4 text-[#0E0D0C]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_PHONE_INTL}`}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#C5A880]/30 hover:border-[#C5A880] text-[#C5A880] text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>{RESTAURANT_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours & Live Status (6 cols) */}
          <div className="lg:col-span-6 bg-[#161513] border border-[#C5A880]/25 p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/15">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#C5A880]" />
                <h2 className="font-serif text-xl sm:text-2xl text-[#F3EFE6]">Service Hours</h2>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 bg-[#C5A880]/20 text-[#C5A880] rounded">
                {openingStatus.statusText}
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              {RESTAURANT_INFO.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between py-2 border-b border-[#F3EFE6]/5 last:border-b-0"
                >
                  <span className="font-medium text-[#F3EFE6]">{item.day}</span>
                  {item.closed ? (
                    <span className="text-[#C5A880] font-medium">Closed</span>
                  ) : item.continuous ? (
                    <span className="text-[#F3EFE6]/75">{item.continuous}</span>
                  ) : (
                    <span className="text-[#F3EFE6]/75">
                      {item.lunch} · {item.dinner}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#C5A880]/15 flex items-center justify-between">
              <div className="text-xs text-[#F3EFE6]/60">
                Email: <a href={`mailto:${RESTAURANT_EMAIL}`} className="text-[#C5A880] hover:underline">{RESTAURANT_EMAIL}</a>
              </div>
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-2.5 bg-[#C5A880] text-[#0E0D0C] text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#D8BF9B] transition-colors cursor-pointer"
              >
                Book Table
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Responsive OpenTable UK Booking Widget on Contact Page */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1">
              Table Reservation
            </span>
            <h2 className="font-serif text-3xl text-[#F3EFE6]">
              Reserve via OpenTable UK
            </h2>
            <p className="text-xs text-[#F3EFE6]/60 mt-1">
              Live reservations confirmed in real time.
            </p>
          </div>

          <OpenTableWidget />
        </div>
      </div>
    </div>
  );
};
