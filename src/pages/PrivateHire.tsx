import React, { useState } from 'react';
import { Users, GlassWater, Download, Mail, Phone, Calendar, Check, Clock } from 'lucide-react';
import { RESTAURANT_EMAIL, RESTAURANT_PHONE, RESTAURANT_PHONE_INTL, RESTAURANT_ADDRESS } from '../utils/booking';

export const PrivateHire: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('20-30');
  const [space, setSpace] = useState('Full Venue Buyout (Up to 30 Dining)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0E0D0C] text-[#F3EFE6] pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              Exclusive Venue Hire & The Azuki Lounge
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F3EFE6] font-normal leading-tight mb-6">
            Private Dining & <br />
            <span className="italic font-light text-[#EAE5DA]">Corporate Events</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F3EFE6]/75 font-light leading-relaxed">
            From exclusive dining buyouts with live binchotan robata service to evening cocktail receptions in the lower ground Azuki Lounge.
          </p>
        </div>

        {/* Space Options (Full Venue vs The Lounge) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Space 1: Main Dining Room */}
          <div className="bg-[#161513] border border-[#C5A880]/25 p-8 relative flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="aspect-[16/10] overflow-hidden border border-[#C5A880]/15 mb-4">
                <img
                  src="/images/interiors/dining-room-shoji-lights.webp"
                  alt="Main dining room for private dining hire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif">
                  Ground Level Sanctuary
                </span>
                <span className="text-xs px-2.5 py-0.5 bg-[#C5A880]/15 text-[#C5A880] rounded">
                  Up to 30 Seated
                </span>
              </div>
              <h2 className="font-serif text-2xl text-[#F3EFE6]">
                Full Restaurant Buyout
              </h2>
              <p className="text-xs text-[#F3EFE6]/70 leading-relaxed font-light">
                Complete exclusive access to our 30-cover dining room and robata grill counter. Ideal for private celebrations, firm dinners, and bespoke omakase banquets.
              </p>
              <ul className="text-xs text-[#F3EFE6]/80 space-y-1.5 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>30 seated dining covers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Live binchotan charcoal grill showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Customised tasting menus & tea pairings</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C5A880]/15 flex items-center justify-between">
              <span className="text-xs text-[#F3EFE6]/60">Minimum spends on enquiry</span>
              <a
                href="/menus/event-set-menus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Event Menus (PDF)</span>
              </a>
            </div>
          </div>

          {/* Space 2: The Azuki Lounge */}
          <div className="bg-[#161513] border border-[#C5A880]/25 p-8 relative flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="aspect-[16/10] overflow-hidden border border-[#C5A880]/15 mb-4">
                <img
                  src="/images/interiors/terrace.webp"
                  alt="The Azuki Lounge private hire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-serif">
                  Lower Ground Floor
                </span>
                <span className="text-xs px-2.5 py-0.5 bg-[#C5A880]/15 text-[#C5A880] rounded">
                  50 – 60 Reception
                </span>
              </div>
              <h2 className="font-serif text-2xl text-[#F3EFE6]">
                The Azuki Lounge
              </h2>
              <p className="text-xs text-[#F3EFE6]/70 leading-relaxed font-light">
                Our discreet subterranean lounge and bar space. Features dedicated bar staff, flexible lounge furniture, late licensing, and pass-around robata skewers.
              </p>
              <ul className="text-xs text-[#F3EFE6]/80 space-y-1.5 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>50–60 standing guests reception</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Private bar counter & dedicated mixologist</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Late license capabilities for evening events</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C5A880]/15 flex items-center justify-between">
              <span className="text-xs text-[#F3EFE6]/60">Bespoke catering available</span>
              <a
                href={`mailto:${RESTAURANT_EMAIL}?subject=Azuki%20Lounge%20Private%20Hire%20Enquiry`}
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Event Team</span>
              </a>
            </div>
          </div>
        </div>

        {/* Event Inquiry Form */}
        <div className="bg-[#161513] border border-[#C5A880]/30 p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          <div className="max-w-xl mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-serif block mb-1">
              Direct Event Enquiry
            </span>
            <h2 className="font-serif text-3xl text-[#F3EFE6]">
              Plan Your Gathering
            </h2>
            <p className="text-xs text-[#F3EFE6]/60 mt-1">
              Our events director will contact you within 24 hours with custom menu proposals.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F3EFE6]">
                Enquiry Successfully Received
              </h3>
              <p className="text-xs text-[#F3EFE6]/75 max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Our event coordination team will review your date ({date || 'Upcoming'}) and respond directly via {email}.
              </p>
              <p className="text-xs text-[#C5A880]">
                Urgent enquiries: {RESTAURANT_PHONE}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ph-name" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Contact Name *
                  </label>
                  <input
                    id="ph-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label htmlFor="ph-company" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    id="ph-company"
                    type="text"
                    placeholder="Optional"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ph-email" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="ph-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label htmlFor="ph-phone" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Telephone Number *
                  </label>
                  <input
                    id="ph-phone"
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="ph-date" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Target Date
                  </label>
                  <input
                    id="ph-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label htmlFor="ph-guests" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Estimated Guests
                  </label>
                  <select
                    id="ph-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="10-20">10 – 20 Guests</option>
                    <option value="20-30">20 – 30 Guests (Dining Buyout)</option>
                    <option value="30-50">30 – 50 Guests (Azuki Lounge)</option>
                    <option value="50-60">50 – 60 Guests (Full Venue & Lounge)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ph-space" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                    Space of Interest
                  </label>
                  <select
                    id="ph-space"
                    value={space}
                    onChange={(e) => setSpace(e.target.value)}
                    className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-3 focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Full Buyout">Full Restaurant Buyout (30 Seated)</option>
                    <option value="The Azuki Lounge">The Azuki Lounge (Lower Ground)</option>
                    <option value="Saturday Sushi Club Group">Saturday Sushi Club Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="ph-notes" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/70 mb-1.5">
                  Event Brief & Special Requests
                </label>
                <textarea
                  id="ph-notes"
                  rows={3}
                  placeholder="Occasion, dietary considerations, budget, preferred format..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1F1D1A] border border-[#C5A880]/20 text-[#F3EFE6] text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                <div className="text-xs text-[#F3EFE6]/50">
                  Direct contact: <a href={`mailto:${RESTAURANT_EMAIL}`} className="text-[#C5A880] underline">{RESTAURANT_EMAIL}</a>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
                >
                  Submit Private Hire Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
