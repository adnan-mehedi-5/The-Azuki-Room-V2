import React from 'react';
import { X, Shield, FileText, Cookie, Eye } from 'lucide-react';
import { RESTAURANT_EMAIL, RESTAURANT_PHONE, RESTAURANT_ADDRESS } from '../utils/booking';

interface PolicyModalProps {
  policy: 'privacy' | 'terms' | 'cookies' | 'accessibility' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      text: [
        'The Azuki Room ("we", "our") is dedicated to protecting your personal information. When you book a table or enquire about private dining, we collect your name, contact phone number, and email solely to manage your dining reservations and communicate service details.',
        'We do not sell, rent, or trade your personal data. Reservation data processed via OpenTable is managed according to their strict privacy standards. You may request data deletion or amendments by contacting our team at ' + RESTAURANT_EMAIL + '.',
        'Your payment data for deposits or private hire events is encrypted and handled exclusively by compliant third-party payment providers.'
      ]
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      text: [
        'Reservations & Grace Period: We hold reserved tables for up to 15 minutes past your scheduled reservation time. If you are delayed, please contact the restaurant directly at ' + RESTAURANT_PHONE + '.',
        'Saturday Sushi Club: The 90-minute unlimited sushi dining experience begins at your confirmed reservation time. Seating is strictly allocated for 90 minutes to respect subsequent guests.',
        'Dietary Requirements: We are a 100% halal-certified kitchen with zero alcohol cooking. If you or your guests have severe food allergies, please notify our team when booking.',
        'Cancellations: For parties of 5 or more, cancellations must be communicated at least 24 hours prior to service.'
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      text: [
        'Our website utilizes essential functional cookies necessary for user navigation, session handling, and our OpenTable reservation integration.',
        'We do not use invasive third-party tracking or advertising cookies. Any performance analytics collected are strictly anonymised to monitor website stability and loading speeds.'
      ]
    },
    accessibility: {
      title: 'Accessibility Statement',
      icon: Eye,
      text: [
        'The Azuki Room is committed to digital and physical accessibility. Our website adheres to WCAG 2.1 AA standards, supporting keyboard navigation, screen readers, and high visual contrast.',
        'Physical Venue Access: Located at ' + RESTAURANT_ADDRESS + '. If you have mobility requirements or need assistance with entrance access, please telephone us at ' + RESTAURANT_PHONE + ' prior to your visit so our team can welcome you comfortably.'
      ]
    }
  };

  const item = contentMap[policy];
  const Icon = item.icon;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E0D0C]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#161513] border border-[#C5A880]/30 shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#F3EFE6]/60 hover:text-[#C5A880] transition-colors focus:outline-none cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-[#1F1D1A] border border-[#C5A880]/30 text-[#C5A880]">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#F3EFE6]">{item.title}</h3>
            <span className="text-[11px] text-[#C5A880]/70 font-serif">The Azuki Room · Chancery Lane</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#F3EFE6]/80 leading-relaxed font-light">
          {item.text.map((paragraph, idx) => (
            <p key={idx} className="border-b border-[#F3EFE6]/5 pb-3 last:border-b-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#C5A880]/15 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#C5A880] hover:bg-[#D8BF9B] text-[#0E0D0C] text-xs uppercase tracking-[0.2em] font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
