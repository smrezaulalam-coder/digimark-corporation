import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_INTL } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const quickPrompts = [
    'Need quote for CCTV security surveillance cameras',
    'Inquiring about biometric fingerprint/face attendance machine',
    'Need fire alarm panel & smoke detectors for factory',
    'Looking for TOA PA system amplifier & speakers',
  ];

  const handleSendPrompt = (promptText: string) => {
    const url = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
      `Hello Digimark Corporation, ${promptText}. Please share price list and details.`
    )}`;
    window.open(url, '_blank');
    setOpenPopup(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {openPopup && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom duration-200 text-left">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 relative">
            <button
              onClick={() => setOpenPopup(false)}
              className="absolute top-3 right-3 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close WhatsApp popup"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-base">
                DM
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Digimark Corporation</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Online • Quick response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <p className="text-xs text-slate-600">
              Assalamu Alaikum! How can Digimark Corporation help your facility today?
            </p>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Tap to ask on WhatsApp:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(q)}
                  className="w-full text-left p-2.5 bg-white hover:bg-emerald-50 hover:border-emerald-300 rounded-xl border border-slate-200 text-xs text-slate-700 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{q}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent('Hello Digimark Corporation, I want to inquire about your products.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start Direct Chat ({WHATSAPP_NUMBER})</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setOpenPopup(!openPopup)}
        className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Chat with Digimark on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-extrabold tracking-wide">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
