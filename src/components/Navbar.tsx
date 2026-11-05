import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { getOpeningStatus, RESTAURANT_PHONE, RESTAURANT_PHONE_INTL, generateOpenTableUrl } from '../utils/booking';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openingStatus, setOpeningStatus] = useState(() => getOpeningStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const interval = setInterval(() => {
      setOpeningStatus(getOpeningStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Navigation links matching exact hierarchy without redundant Home link (logo navigates Home)
  const navLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Menus', path: '/menus' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Private Hire', path: '/private-hire' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      const url = generateOpenTableUrl();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0E0D0C]/95 backdrop-blur-md border-b border-[#C5A880]/20 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-[#0E0D0C]/85 via-[#0E0D0C]/40 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 xl:gap-8">
          {/* Brand Logo: Kanji & Brand Name (Zero Subtext) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="group text-left flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880] cursor-pointer shrink-0"
            aria-label="The Azuki Room, home"
          >
            <span
              className="font-jp text-[#C5A880] text-xl sm:text-2xl select-none leading-none transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              紅豆
            </span>
            <span className="font-serif tracking-[0.16em] sm:tracking-[0.2em] uppercase text-sm sm:text-base md:text-lg font-normal text-[#F3EFE6] group-hover:text-[#C5A880] transition-colors whitespace-nowrap">
              THE AZUKI ROOM
            </span>
          </button>

          {/* Desktop Navigation Links - Perfectly Centered & Never Wrapped */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9 whitespace-nowrap" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium py-1.5 px-0.5 transition-colors relative cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#C5A880]'
                      : 'text-[#F3EFE6]/70 hover:text-[#C5A880]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Suite */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Direct Telephone */}
            <a
              href={`tel:${RESTAURANT_PHONE_INTL}`}
              className="text-[#F3EFE6]/70 hover:text-[#C5A880] p-2 transition-colors"
              aria-label={`Call restaurant at ${RESTAURANT_PHONE}`}
              title={`Call ${RESTAURANT_PHONE}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary Action Button: #C5A880 Warm Champagne Gold */}
            <button
              onClick={handleBookClick}
              className="px-5 py-2.5 rounded-none bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 border border-[#C5A880] shadow-md shadow-[#C5A880]/15 hover:shadow-[#C5A880]/30 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0E0D0C]" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:hidden">
            <button
              onClick={handleBookClick}
              className="px-3.5 py-1.5 bg-[#C5A880] text-[#0E0D0C] text-[11px] uppercase tracking-[0.16em] font-bold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3EFE6] hover:text-[#C5A880] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[#0E0D0C] flex flex-col justify-between p-7 sm:hidden overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A880]/20">
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-2.5 text-left cursor-pointer"
              aria-label="The Azuki Room, home"
            >
              <span className="font-jp text-[#C5A880] text-2xl select-none leading-none" aria-hidden="true">
                紅豆
              </span>
              <span className="font-serif tracking-[0.2em] uppercase text-base font-normal text-[#F3EFE6] whitespace-nowrap">
                THE AZUKI ROOM
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F3EFE6] hover:text-[#C5A880]"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List matching exact site hierarchy */}
          <nav className="my-auto py-8 space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`block text-left w-full font-serif text-2xl tracking-[0.12em] transition-colors py-1 cursor-pointer ${
                  currentPath === link.path
                    ? 'text-[#C5A880]'
                    : 'text-[#F3EFE6] hover:text-[#C5A880]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom Action Area */}
          <div className="pt-6 border-t border-[#C5A880]/20 space-y-4">
            <button
              onClick={handleBookClick}
              className="w-full py-3.5 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#0E0D0C]" />
              <span>Reserve a Table</span>
            </button>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href={`tel:${RESTAURANT_PHONE_INTL}`}
                className="flex items-center justify-center gap-2 py-2.5 border border-[#C5A880]/20 text-[#F3EFE6] hover:border-[#C5A880]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Us</span>
              </a>
              <a
                href="https://maps.app.goo.gl/p3UmPCVoQV4oh3VK9?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 border border-[#C5A880]/20 text-[#F3EFE6] hover:border-[#C5A880]"
              >
                <span>Directions</span>
              </a>
            </div>

            <p className="text-[11px] text-[#F3EFE6]/40 text-center pt-1 font-light">
              Rolls Passage (off 36 Chancery Lane), London EC4A 1HL
            </p>
          </div>
        </div>
      )}
    </>
  );
};
