import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menus } from './pages/Menus';
import { PrivateHire } from './pages/PrivateHire';
import { Reservations } from './pages/Reservations';
import { Contact } from './pages/Contact';
import { ReservationModal } from './components/ReservationModal';
import { PolicyModal } from './components/PolicyModal';

const VALID_ROUTES = ['/', '/about', '/menus', '/reservations', '/private-hire', '/contact'];

export default function App() {
  // Client-side router path state synced with window.location
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return VALID_ROUTES.includes(path) ? path : '/';
    }
    return '/';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookies' | 'accessibility' | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(VALID_ROUTES.includes(path) ? path : '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic navigation
  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBookingModal = () => {
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0D0C] text-[#F3EFE6] selection:bg-[#C5A880] selection:text-[#0E0D0C] flex flex-col justify-between">
      {/* Revised Luxury Navbar matching exact live Azuki Room layout */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBookingModal={openBookingModal}
      />

      {/* Main Page View Orchestrator */}
      <main className="flex-1">
        {currentPath === '/' && (
          <Home
            onNavigate={navigate}
            onOpenBookingModal={openBookingModal}
          />
        )}

        {currentPath === '/about' && (
          <About
            onNavigate={navigate}
            onOpenBookingModal={openBookingModal}
          />
        )}

        {currentPath === '/menus' && (
          <Menus
            onOpenBookingModal={openBookingModal}
          />
        )}

        {currentPath === '/reservations' && (
          <Reservations
            onNavigate={navigate}
            onOpenBookingModal={openBookingModal}
          />
        )}

        {currentPath === '/private-hire' && (
          <PrivateHire />
        )}

        {currentPath === '/contact' && (
          <Contact
            onOpenBookingModal={openBookingModal}
          />
        )}
      </main>

      {/* Restrained Luxury Footer */}
      <Footer
        onNavigate={navigate}
        onOpenPolicy={(policy) => setActivePolicy(policy)}
      />

      {/* Official OpenTable Direct Reservation Modal */}
      <ReservationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Policy Details Modal */}
      <PolicyModal
        policy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
