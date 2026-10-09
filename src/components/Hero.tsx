import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Wrench,
  Clock,
  Layers
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenBOQ: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory, onOpenBOQ }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Decorative technical grid background & glowing orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12] pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-900 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>Digimark Corporation • Engineering Excellence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Protect, track and{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-600 bg-clip-text text-transparent">
                announce
              </span>{' '}
              with total confidence.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Digimark Corporation supplies, installs, and maintains premium{' '}
              <strong className="text-slate-900 font-semibold">Security Surveillance</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Time Attendance</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Fire Protection</strong>, and{' '}
              <strong className="text-slate-900 font-semibold">Commercial PA Sound Systems</strong>{' '}
              for offices, factories, garment mills, educational campuses, and retail chains.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-orange-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`https://wa.me/8801711117967`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>

              <button
                onClick={onOpenBOQ}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3.5 rounded-xl text-base border-2 border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-sm"
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Project Quote Builder</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Certified Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Free Site Survey in BD</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Core Interactive Visual Cards Stack */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Background card accent glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-orange-500/20 to-teal-500/20 rounded-3xl blur-xl" />

              <div className="relative bg-white/80 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-2xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    Core Product Divisions
                  </span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    Click to filter catalogue
                  </span>
                </div>

                {/* 2x2 Interactive Staggered Grid matching original user reference */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                  {/* Card 1: Surveillance */}
                  <button
                    onClick={() => onSelectCategory('sec')}
                    className="text-left group bg-gradient-to-br from-blue-700 to-blue-900 text-white p-5 rounded-2xl shadow-lg shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-40"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl">📹</span>
                      <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                        CCTV / IP
                      </span>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg leading-snug group-hover:underline">
                        Security & Surveillance
                      </h2>
                      <p className="text-blue-100 text-xs mt-1">4K NVR, IP & PTZ Cameras</p>
                    </div>
                  </button>

                  {/* Card 2: Attendance (Staggered offset) */}
                  <button
                    onClick={() => onSelectCategory('att')}
                    className="text-left group bg-gradient-to-br from-teal-700 to-emerald-900 text-white p-5 rounded-2xl shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-40 sm:translate-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl">🕘</span>
                      <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                        Biometrics
                      </span>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg leading-snug group-hover:underline">
                        Time Attendance
                      </h2>
                      <p className="text-emerald-100 text-xs mt-1">Face, Fingerprint & RFID</p>
                    </div>
                  </button>

                  {/* Card 3: Fire Protection */}
                  <button
                    onClick={() => onSelectCategory('fire')}
                    className="text-left group bg-gradient-to-br from-orange-600 to-red-700 text-white p-5 rounded-2xl shadow-lg shadow-orange-900/20 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-40"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl">🔥</span>
                      <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                        EN54 / UL
                      </span>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg leading-snug group-hover:underline">
                        Fire Protection
                      </h2>
                      <p className="text-orange-100 text-xs mt-1">Panels, Smokes & Sirens</p>
                    </div>
                  </button>

                  {/* Card 4: PA System (Staggered offset) */}
                  <button
                    onClick={() => onSelectCategory('pa')}
                    className="text-left group bg-gradient-to-br from-amber-500 to-amber-700 text-slate-900 p-5 rounded-2xl shadow-lg shadow-amber-900/15 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-40 sm:translate-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-3xl">📢</span>
                      <span className="text-[10px] font-bold bg-slate-900/20 text-slate-900 px-2 py-0.5 rounded-full">
                        Audio / Paging
                      </span>
                    </div>
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg leading-snug text-slate-900 group-hover:underline">
                        PA Systems
                      </h2>
                      <p className="text-slate-800 text-xs font-medium mt-1">Mixer Amps, Horns & Mics</p>
                    </div>
                  </button>
                </div>

                {/* Bottom assurance kicker */}
                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-600">
                    Trusted partner for Hikvision, Dahua, ZKTeco, Hochiki, TOA, Apollo & Shure.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
