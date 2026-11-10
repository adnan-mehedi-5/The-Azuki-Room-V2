import React, { useState } from 'react';
import { X, Check, Users, Mail, Phone, Calendar, Download } from 'lucide-react';
import { RESTAURANT_PHONE, RESTAURANT_EMAIL } from '../utils/booking';

interface PrivateEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateEventsModal: React.FC<PrivateEventsModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [guests, setGuests] = useState('20');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Exclusive Buyout (30 Guests)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Private Dining & Venue Hire Enquiry"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D0C0A]/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-[#141310] border border-[#B49A75]/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F3EFE6]/60 hover:text-[#B49A75] transition-colors focus:outline-none"
          aria-label="Close Private Dining enquiry"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#F3EFE6]">
              Private Hire Enquiry Sent
            </h3>
            <p className="text-xs text-[#F3EFE6]/75 max-w-md mx-auto leading-relaxed">
              Thank you, {name}. Our events director will review your enquiry for {guests} guests and provide bespoke tasting menu proposals within 24 hours.
            </p>
            <div className="pt-2 text-xs text-[#F3EFE6]/50">
              Direct enquiries: <span className="text-[#B49A75]">{RESTAURANT_EMAIL}</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#9B352F] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B49A75] font-serif block mb-1">
                The Azuki Lounge · Chancery Lane
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6]">
                Private Dining & Venue Hire
              </h3>
              <p className="text-xs text-[#F3EFE6]/60 mt-1">
                Accommodating up to 30 seated guests for intimate celebrations & corporate dinners.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="evt-name" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Contact Name *
                  </label>
                  <input
                    id="evt-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  />
                </div>

                <div>
                  <label htmlFor="evt-company" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    id="evt-company"
                    type="text"
                    placeholder="Firm / Organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="evt-email" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="evt-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  />
                </div>

                <div>
                  <label htmlFor="evt-phone" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    id="evt-phone"
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="evt-guests" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Approx. Guests
                  </label>
                  <select
                    id="evt-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  >
                    <option value="8-12">8 – 12 Guests</option>
                    <option value="12-20">12 – 20 Guests</option>
                    <option value="20-30">20 – 30 Guests (Full Buyout)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="evt-date" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Target Date
                  </label>
                  <input
                    id="evt-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  />
                </div>

                <div>
                  <label htmlFor="evt-type" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                    Event Type
                  </label>
                  <select
                    id="evt-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2.5"
                  >
                    <option value="Full Buyout">Full Buyout (30 Seats)</option>
                    <option value="Corporate Dinner">Corporate Client Dinner</option>
                    <option value="Private Celebration">Private Celebration</option>
                    <option value="Sushi Club Group">Saturday Sushi Club Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="evt-msg" className="block text-[11px] uppercase tracking-[0.16em] text-[#F3EFE6]/60 mb-1">
                  Event Brief & Requirements
                </label>
                <textarea
                  id="evt-msg"
                  rows={3}
                  placeholder="Tell us about the occasion, dietary requirements, or specific menu preferences..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1A1815] border border-[#F3EFE6]/15 text-[#F3EFE6] text-xs px-3 py-2"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`${import.meta.env.BASE_URL}menus/event-set-menus.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B49A75] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Preview Event Set Menus (PDF)</span>
                </a>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#9B352F] hover:bg-[#852C27] text-[#F3EFE6] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
