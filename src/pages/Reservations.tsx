import React from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Flame,
  ArrowRight,
} from 'lucide-react';
import { OpenTableReservationSection } from '../components/OpenTableReservationSection';
import { 
  RESTAURANT_PHONE, 
  RESTAURANT_PHONE_INTL, 
  RESTAURANT_EMAIL, 
  RESTAURANT_ADDRESS, 
  generateOpenTableUrl 
} from '../utils/booking';

interface ReservationsPageProps {
  onOpenBookingModal?: () => void;
  onNavigate: (path: string) => void;
}

export const Reservations: React.FC<ReservationsPageProps> = ({
  onNavigate,
}) => {
  const directOpenTableUrl = generateOpenTableUrl();

  const policies = [
    {
      icon: Clock,
      title: 'Seating & Grace Period',
      description:
        'Standard tables are reserved for 90 minutes (120 minutes for tables of 5+). We hold reservations for up to 15 minutes past the booked time before tables may be reallocated.',
      tag: '90–120 Min Sittings',
    },
    {
      icon: ShieldCheck,
      title: '100% Halal & Zero-Alcohol',
      description:
        'All meat sources are strictly Halal certified. Our kitchen is completely alcohol-free: all tare glazes, dashi, marinades, and sauces are prepared without mirin or sake.',
      tag: 'Culinary Integrity',
    },
    {
      icon: Users,
      title: 'Large Parties & Private Hire',
      description:
        'For parties of 6 or more, or for exclusive buyout of our 30-cover dining room and the subterranean Azuki Lounge (50–60 guests), please contact our events desk directly.',
      tag: 'Groups & Buyouts',
      ctaText: 'Explore Private Hire',
      ctaAction: () => onNavigate('/private-hire'),
    },
    {
      icon: Flame,
      title: 'Robata Counter Walk-Ins',
      description:
        'A select number of counter seats facing the Kishu binchotan charcoal grill are held back for spontaneous walk-ins every lunch and dinner service, subject to availability.',
      tag: 'Walk-Ins Welcome',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0D0C] text-[#F3EFE6] pt-28 sm:pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#C5A880]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A880]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C5A880]/30 bg-[#161513] rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#C5A880]">
              Rolls Passage · Chancery Lane
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EFE6] font-normal leading-[1.12] mb-6">
            Reserve Your Experience
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#F3EFE6]/75 font-light leading-relaxed max-w-2xl mx-auto">
            An intimate haven of only 30 covers dedicated to Kishu binchotan charcoal grilling and handcrafted sushi. Due to our limited capacity, advance reservations are strongly advised.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="https://www.opentable.co.uk/restaurant/profile/541284"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] uppercase tracking-[0.2em] font-semibold transition-all duration-300 border border-[#C5A880] shadow-lg shadow-[#C5A880]/15"
            >
              <span>Book via OpenTable</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${RESTAURANT_PHONE_INTL}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#161513] hover:bg-[#1F1D1A] text-[#F3EFE6] uppercase tracking-[0.2em] font-medium transition-all duration-300 border border-[#C5A880]/30 hover:border-[#C5A880]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Call: {RESTAURANT_PHONE}</span>
            </a>
          </div>
        </div>

        {/* OpenTable Verified Reservation Section */}
        <div className="mb-20 sm:mb-24">
          <OpenTableReservationSection />
        </div>

        {/* Key Policies & Guest Information */}
        <section className="mb-20 sm:mb-24" aria-label="Booking policies and dining guidelines">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-2 font-medium">
              Dining Policies & Details
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <div
                  key={policy.title}
                  className="bg-[#161513] border border-[#C5A880]/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A880]/40 transition-colors duration-300 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full border border-[#C5A880]/30 bg-[#1F1D1A] flex items-center justify-center text-[#C5A880]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-[#C5A880]/20 bg-[#0E0D0C] text-[#C5A880]/90 font-serif">
                        {policy.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-[#F3EFE6] font-normal mb-2.5">
                      {policy.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F3EFE6]/70 leading-relaxed font-light">
                      {policy.description}
                    </p>
                  </div>

                  {policy.ctaText && policy.ctaAction && (
                    <div className="mt-6 pt-4 border-t border-[#C5A880]/15">
                      <button
                        onClick={policy.ctaAction}
                        className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#D8BF9B] font-medium tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        <span>{policy.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Location & Quick Contact Summary */}
        <section className="bg-[#161513] border border-[#C5A880]/25 p-8 sm:p-12 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Col 1: Address & Underground */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-xs uppercase tracking-[0.2em] font-serif font-medium">Location</span>
              </div>
              <p className="text-sm text-[#F3EFE6] font-medium leading-snug">
                {RESTAURANT_ADDRESS}
              </p>
              <p className="text-xs text-[#F3EFE6]/60 leading-relaxed font-light">
                Hidden pedestrian alleyway off 36 Chancery Lane.<br />
                <strong className="text-[#C5A880]/90 font-normal">Chancery Lane Station:</strong> 2 min walk.<br />
                Holborn & Temple stations: 7–10 min walk.
              </p>
            </div>

            {/* Col 2: Service Hours */}
            <div className="space-y-3 border-y lg:border-y-0 lg:border-x border-[#C5A880]/15 py-6 lg:py-0 lg:px-8">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-xs uppercase tracking-[0.2em] font-serif font-medium">Service Hours</span>
              </div>
              <div className="space-y-1.5 text-xs text-[#F3EFE6]/75 font-light">
                <div className="flex justify-between">
                  <span className="text-[#F3EFE6]/90 font-medium">Mon – Fri</span>
                  <span>12:00–15:00 · 17:00–22:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F3EFE6]/90 font-medium">Saturday</span>
                  <span>12:00–22:30 (Sushi Club)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F3EFE6]/90 font-medium">Sunday</span>
                  <span className="text-[#C5A880]">Closed</span>
                </div>
              </div>
            </div>

            {/* Col 3: Direct Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.app.goo.gl/p3UmPCVoQV4oh3VK9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#1F1D1A] hover:bg-[#2A2723] text-[#F3EFE6] text-xs uppercase tracking-[0.18em] font-medium text-center border border-[#C5A880]/30 hover:border-[#C5A880] transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`mailto:${RESTAURANT_EMAIL}?subject=Table%20Reservation%20Enquiry`}
                className="w-full py-3 px-4 bg-transparent hover:bg-[#1F1D1A] text-[#F3EFE6]/80 hover:text-[#F3EFE6] text-xs uppercase tracking-[0.18em] font-light text-center border border-[#F3EFE6]/10 hover:border-[#C5A880]/40 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Email Enquiries</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
