import React from 'react';

const WHATSAPP_NUMBER = '+962796660020';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-300 group"
    >
      {/* Modern WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
      >
        <g>
          <circle cx="12" cy="12" r="12" fill="#25D366" />
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.148-.669-1.612-.916-2.21-.242-.58-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.21 5.09 4.377.712.307 1.267.489 1.7.625.714.227 1.364.195 1.877.118.573-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z"
            fill="#fff"
          />
        </g>
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 1.989.582 3.84 1.588 5.393L2 22l4.707-1.561A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.117-.488-4.37-1.324l-.312-.2-2.792.927.927-2.72-.203-.314A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
