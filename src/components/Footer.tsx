import React from 'react';
import { Phone, Mail, MapPin, Instagram, ArrowUp, Calendar } from 'lucide-react';
import {
  RESTAURANT_PHONE,
  RESTAURANT_PHONE_INTL,
  RESTAURANT_EMAIL,
  RESTAURANT_ADDRESS,
  GOOGLE_MAPS_URL,
  generateOpenTableUrl,
} from '../utils/booking';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenPolicy: (policy: 'privacy' | 'terms' | 'cookies' | 'accessibility') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Menus', path: '/menus' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Private Hire', path: '/private-hire' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#090807] text-[#F3EFE6] border-t border-[#C5A880]/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C5A880]/15">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('/');
                scrollToTop();
              }}
              className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer"
              aria-label="The Azuki Room, home"
            >
              <span className="font-jp text-[#C5A880] text-2xl select-none leading-none transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                紅豆
              </span>
              <span className="font-serif tracking-[0.2em] uppercase text-base sm:text-lg font-normal text-[#F3EFE6] group-hover:text-[#C5A880] transition-colors whitespace-nowrap">
                THE AZUKI ROOM
              </span>
            </button>

            <p className="text-xs text-[#F3EFE6]/60 leading-relaxed font-light max-w-sm">
              An intimate 30-cover Japanese haven dedicated to binchotan charcoal grilling, precision sushi craft, and unhurried hospitality.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161513] border border-[#C5A880]/20 text-[11px] text-[#F3EFE6]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>100% Halal Meats · Zero-Alcohol Kitchen</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-serif block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#F3EFE6]/75">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => {
                      onNavigate(link.path);
                      scrollToTop();
                    }}
                    className="hover:text-[#C5A880] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-serif block mb-4">
              Location & Enquiries
            </span>
            <div className="space-y-2 text-xs text-[#F3EFE6]/75 font-light">
              <p className="text-[#F3EFE6] font-medium">{RESTAURANT_ADDRESS}</p>
              <p className="text-[#F3EFE6]/50">Off 36 Chancery Lane · Central London</p>

              <div className="pt-2 space-y-1.5">
                <p>
                  <a
                    href={`tel:${RESTAURANT_PHONE_INTL}`}
                    className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{RESTAURANT_PHONE}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${RESTAURANT_EMAIL}`}
                    className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{RESTAURANT_EMAIL}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={RESTAURANT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-2 text-[#F3EFE6]/60"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>@the_azuki_room</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Hours & OpenTable Reservation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-serif block mb-4">
              Service Hours
            </span>
            <div className="space-y-1.5 text-xs text-[#F3EFE6]/70 font-light">
              <p>
                <strong className="text-[#F3EFE6]">Mon – Fri</strong>
                <br />
                12:00 – 15:00
                <br />
                17:00 – 22:30
              </p>
              <p className="pt-1">
                <strong className="text-[#F3EFE6]">Saturday</strong>
                <br />
                12:00 – 22:30
              </p>
              <p className="pt-1 text-[#C5A880]">
                <strong>Sunday</strong>: Closed
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.opentable.co.uk/restaurant/profile/541284"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A880] text-[#0E0D0C] text-[10px] uppercase tracking-[0.16em] font-bold"
              >
                <Calendar className="w-3 h-3 text-[#0E0D0C]" />
                <span>OpenTable</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EFE6]/40">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} The Azuki Room. All rights reserved.</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenPolicy('cookies')}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => onOpenPolicy('accessibility')}
              className="hover:text-[#C5A880] transition-colors cursor-pointer"
            >
              Accessibility
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#C5A880] transition-colors group cursor-pointer"
            aria-label="Return to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#C5A880]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
