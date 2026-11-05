import React, { useEffect, useRef } from 'react';

export const OpenTableEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject official OpenTable widget script
    const script = document.createElement('script');
    script.src = '//www.opentable.co.uk/widget/reservation/loader';
    script.async = true;
    script.type = 'text/javascript';

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Official OpenTable Widget Container */}
      <div 
        ref={containerRef} 
        className="w-full flex justify-center py-4 text-white min-h-[340px]"
      >
        <div 
          className="ot-widget" 
          data-rid="347265" 
          data-domain="co.uk" 
          data-type="standard" 
          data-theme="wide" 
          data-lang="en-GB"
          data-primary-color="C5A880"
          data-button-color="C5A880"
        />
      </div>

      {/* Direct Fallback Button */}
      <a
        href="https://www.opentable.co.uk/restaurant/profile/541284"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-lg border border-[#C5A880]/40 text-[#C5A880] hover:bg-[#C5A880] hover:text-[#0E0D0C] transition-all text-sm font-medium tracking-wide"
      >
        Open in OpenTable ↗
      </a>
    </div>
  );
};
