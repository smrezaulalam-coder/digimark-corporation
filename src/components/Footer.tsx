import React from 'react';
import { ShieldCheck, Phone, Mail, ExternalLink, Heart } from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  EMAIL_ADDRESS, 
  FACEBOOK_URL,
  BRANDS 
} from '../data/products';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Brand Partners Ticker Strip */}
      <div className="border-b border-slate-800/80 py-4 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <span className="font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            Authorized Solutions Provider:
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-semibold text-slate-400">
            {BRANDS.filter(b => b !== 'All brands').map((brand) => (
              <span key={brand} className="hover:text-white transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-white font-extrabold text-lg">
                DM
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Digi<span className="text-orange-500">Mark</span> Corporation
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
                  Security, Attendance, Fire & Sound
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Digimark Corporation is an established technical solutions provider in Bangladesh specializing in the supply, engineering design, installation, and annual maintenance of modern electronic security and building safety equipment.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>📍 Operations: Dhaka, Chittagong & Countrywide Bangladesh</div>
              <div>🕒 Support Hours: Saturday – Thursday (9:00 AM – 8:00 PM)</div>
            </div>
          </div>

          {/* Col 3: Core Solutions */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('sec')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Security & Surveillance (CCTV)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('att')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Time Attendance & Biometrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fire')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fire Protection & Alarms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('pa')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Public Address (PA) Systems
                </button>
              </li>
              <li>
                <a href="#boq-estimator" className="hover:text-white transition-colors">
                  Custom BOQ Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Equipment */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Popular Equipment
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white transition-colors">4MP/4K IP Dome & Bullet</li>
              <li className="hover:text-white transition-colors">Starlight PTZ Speed Domes</li>
              <li className="hover:text-white transition-colors">ZKTeco Face & Palm Reader</li>
              <li className="hover:text-white transition-colors">Hochiki Smoke & Heat Panels</li>
              <li className="hover:text-white transition-colors">TOA Mixer Amplifiers & Horns</li>
              <li className="hover:text-white transition-colors">Shure UHF Wireless Mics</li>
            </ul>
          </div>

          {/* Col 5: Direct Contacts */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Official Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/8801711117967`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{EMAIL_ADDRESS}</span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Facebook Profile</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} <strong className="text-white font-semibold">Digimark Corporation</strong>. All rights reserved. Original genuine equipment warranty guaranteed.
          </div>
          <div className="flex items-center gap-4">
            <span>Security</span>
            <span>•</span>
            <span>Attendance</span>
            <span>•</span>
            <span>Fire Safety</span>
            <span>•</span>
            <span>PA Audio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
