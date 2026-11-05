import React, { useEffect, useRef } from 'react';

export interface OpenTableReservationProps {
  restaurantId?: string;
  domain?: 'couk' | 'com';
  lang?: string;
  otSource?: string;
  fallbackBookingUrl?: string;
  contactPhone?: string;
  contactEmail?: string;
  className?: string;
}

export function OpenTableReservationSection({
  restaurantId = '541284',
  domain = 'couk',
  lang = 'en-GB',
  otSource = 'Restaurant website',
  fallbackBookingUrl = 'https://www.opentable.co.uk/restaurant/profile/541284',
  contactPhone = '0207 078 0135',
  contactEmail = 'info@theazukiroom.com',
  className = '',
}: OpenTableReservationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const host = domain === 'couk' ? 'co.uk' : domain;
    const script = document.createElement('script');
    script.src = `https://www.opentable.${host}/widget/reservation/loader?rid=${restaurantId}&type=standard&theme=tall&color=7&dark=true&iframe=true&domain=${domain}&lang=${lang}&newtab=false&ot_source=${encodeURIComponent(
      otSource
    )}&cfe=true`;
    script.async = true;
    container.appendChild(script);

    // Fallback if ad-blockers or sandbox CSP block the script
    const fallbackTimer = setTimeout(() => {
      if (container && !container.querySelector('iframe')) {
        container.innerHTML = `
          <div style="max-width: 420px; margin: 0 auto; padding: 1.5rem; background: #161513; border: 1px solid rgba(197, 168, 128, 0.2); border-radius: 0.75rem; text-align: center;">
            <p style="font-size: 1.25rem; font-weight: 500; margin-bottom: 0.5rem; color: #F3EFE6; font-family: serif;">Book via OpenTable</p>
            <p style="font-size: 0.85rem; color: #A09D96; line-height: 1.5; margin-bottom: 1.25rem;">
              Select your preferred date, time, and party size directly on OpenTable.
            </p>
            <a
              href="${fallbackBookingUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-block; padding: 0.75rem 1.75rem; background: #C5A880; color: #0E0D0C; font-size: 0.875rem; font-weight: 600; border-radius: 0.5rem; text-decoration: none; transition: background 0.2s;"
            >
              Book on OpenTable ↗
            </a>
          </div>
        `;
      }
    }, 2500);

    return () => {
      clearTimeout(fallbackTimer);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [restaurantId, domain, lang, otSource, fallbackBookingUrl]);

  return (
    <section className={`py-6 px-4 sm:px-6 w-full ${className}`}>
      <div className="max-w-2xl mx-auto bg-[#141311] rounded-2xl border border-[#C5A880]/20 px-6 py-8 sm:px-10 sm:py-10 shadow-2xl text-center">
        {/* Header */}
        <div className="max-w-xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
            Booking Partner · OpenTable
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE6] font-normal">Reserve in seconds</h2>
          <p className="mt-3 text-[#A09D96] text-sm leading-relaxed">
            Live availability via OpenTable. For parties of 6 or more, please contact our team directly.
          </p>
        </div>

        {/* OpenTable Widget Embed Container */}
        <div className="mt-6 flex items-center justify-center min-h-[360px]">
          <div
            id="opentable-widget"
            ref={containerRef}
            className="w-full flex items-center justify-center"
          />
        </div>

        {/* Contact Links */}
        <div className="mt-6 pt-6 border-t border-[#C5A880]/15 flex flex-wrap justify-center gap-3">
          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center px-5 py-2.5 bg-[#1C1A17] border border-[#C5A880]/25 text-[#F3EFE6] text-xs font-medium rounded-lg hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
            >
              Email {contactEmail}
            </a>
          )}
          {contactPhone && (
            <a
              href={`tel:${contactPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center px-5 py-2.5 bg-[#1C1A17] border border-[#C5A880]/25 text-[#F3EFE6] text-xs font-medium rounded-lg hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
            >
              Call {contactPhone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default OpenTableReservationSection;
