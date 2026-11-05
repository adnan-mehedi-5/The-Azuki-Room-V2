import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Clock } from 'lucide-react';
import { getOpeningStatus, RESTAURANT_PHONE, RESTAURANT_PHONE_INTL } from '../utils/booking';

interface NavigationProps {
  onOpenBooking: (experience?: 'dining' | 'sushi-club' | 'lounge-hire') => void;
  activeSection?: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenBooking,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openingStatus, setOpeningStatus] = useState(() => getOpeningStatus());

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Update opening status every minute
    const interval = setInterval(() => {
      setOpeningStatus(getOpeningStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Experience', id: 'experience' },
    { label: 'Cuisine', id: 'cuisine' },
    { label: 'Menus', id: 'menus' },
    { label: 'Saturday Sushi Club', id: 'sushi-club' },
    { label: 'Private Dining', id: 'private-dining' },
    { label: 'Visit', id: 'visit' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0D0C0A]/90 backdrop-blur-md border-b border-[#F3EFE6]/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0D0C0A]/80 via-[#0D0C0A]/40 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group text-left flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880] cursor-pointer"
            aria-label="The Azuki Room, home"
          >
            <span className="font-jp text-[#C5A880] text-2xl select-none leading-none" aria-hidden="true">
              紅豆
            </span>
            <span className="font-serif tracking-[0.2em] uppercase text-base sm:text-lg font-normal text-[#F3EFE6] group-hover:text-[#C5A880] transition-colors whitespace-nowrap">
              THE AZUKI ROOM
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium py-1 relative ${
                  activeSection === link.id
                    ? 'text-[#B49A75]'
                    : 'text-[#F3EFE6]/75 hover:text-[#F3EFE6]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B49A75]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Suite */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Live Status indicator */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] text-[#F3EFE6]/60 border border-[#F3EFE6]/10 px-3 py-1 rounded-full bg-[#1A1815]/50">
              <span
                className={`w-2 h-2 rounded-full ${
                  openingStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-500/70'
                }`}
              />
              <span>{openingStatus.statusText}</span>
            </div>

            {/* Direct Phone */}
            <a
              href={`tel:${RESTAURANT_PHONE_INTL}`}
              className="text-[#F3EFE6]/70 hover:text-[#B49A75] p-2 transition-colors"
              aria-label={`Call restaurant at ${RESTAURANT_PHONE}`}
              title={`Call ${RESTAURANT_PHONE}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Table Button */}
            <button
              onClick={() => onOpenBooking('dining')}
              className="relative group px-5 py-2.5 rounded-none overflow-hidden bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border border-[#9B352F] shadow-lg shadow-[#9B352F]/20 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Table</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={() => onOpenBooking('dining')}
              className="px-3 py-1.5 bg-[#9B352F] text-[#F3EFE6] text-[11px] uppercase tracking-[0.16em] font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3EFE6] hover:text-[#B49A75] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[#0D0C0A] flex flex-col justify-between p-8 sm:hidden overflow-y-auto animate-in fade-in duration-300"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#F3EFE6]/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[#B49A75]/40 flex items-center justify-center text-[#B49A75] text-xs">
                小豆
              </div>
              <span className="font-serif tracking-[0.2em] uppercase text-sm text-[#F3EFE6]">
                The Azuki Room
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F3EFE6] hover:text-[#B49A75]"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <nav className="my-auto py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block text-left w-full font-serif text-2xl tracking-[0.12em] text-[#F3EFE6] hover:text-[#B49A75] transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom Info & CTAs */}
          <div className="pt-6 border-t border-[#F3EFE6]/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('dining');
              }}
              className="w-full py-3.5 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#F3EFE6]/70">
              <a
                href={`tel:${RESTAURANT_PHONE_INTL}`}
                className="flex items-center gap-2 p-2 border border-[#F3EFE6]/10 hover:border-[#B49A75] text-[#F3EFE6]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B49A75]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://maps.app.goo.gl/p3UmPCVoQV4oh3VK9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 border border-[#F3EFE6]/10 hover:border-[#B49A75] text-[#F3EFE6]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B49A75]" />
                <span>Directions</span>
              </a>
            </div>

            <p className="text-[11px] text-[#F3EFE6]/40 text-center pt-2">
              Rolls Passage (off 36 Chancery Lane), London EC4A 1HL
            </p>
          </div>
        </div>
      )}
    </>
  );
};
