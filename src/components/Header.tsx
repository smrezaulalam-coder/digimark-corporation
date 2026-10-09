import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  MessageCircle,
  FileSpreadsheet
} from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS, FACEBOOK_URL } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  onNavigateToCatalog: (category?: string) => void;
  onOpenBOQ: () => void;
  boqItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigateToCatalog, 
  onOpenBOQ,
  boqItemCount 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (targetId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Authorized Supplier & Certified Engineering Solutions
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              Dhaka & Nationwide Bangladesh Installation
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/8801711117967`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp: {WHATSAPP_NUMBER}</span>
            </a>

            <a 
              href={`mailto:${EMAIL_ADDRESS}`} 
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{EMAIL_ADDRESS}</span>
            </a>

            <a 
              href={FACEBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <span className="font-extrabold text-xl tracking-tighter">DM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  Digi<span className="text-orange-600">Mark</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-700">
                  Corporation
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <button 
              onClick={() => handleNav('solutions')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button 
              onClick={() => {
                onNavigateToCatalog();
                handleNav('catalog');
              }} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Product Catalog
            </button>
            <button 
              onClick={() => handleNav('boq-estimator')} 
              className="hover:text-blue-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-4 h-4 text-orange-600" />
              <span>Project BOQ Estimator</span>
            </button>
            <button 
              onClick={() => handleNav('why-digimark')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBOQ}
              className="relative p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              title="View Project Quote Builder"
            >
              <FileSpreadsheet className="w-5 h-5 text-slate-700" />
              {boqItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {boqItemCount}
                </span>
              )}
            </button>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-500 text-white rounded-lg sm:hidden"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-semibold text-slate-800 text-base">
            <button 
              onClick={() => handleNav('solutions')} 
              className="flex items-center justify-between py-2 text-left hover:text-blue-600 border-b border-slate-100"
            >
              <span>Solutions Overview</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => {
                onNavigateToCatalog();
                handleNav('catalog');
              }} 
              className="flex items-center justify-between py-2 text-left hover:text-blue-600 border-b border-slate-100"
            >
              <span>Product Catalog</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNav('boq-estimator')} 
              className="flex items-center justify-between py-2 text-left hover:text-blue-600 border-b border-slate-100"
            >
              <span className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-orange-600" />
                Project BOQ Estimator
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNav('why-digimark')} 
              className="flex items-center justify-between py-2 text-left hover:text-blue-600 border-b border-slate-100"
            >
              <span>Why Digimark Corporation</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className="flex items-center justify-between py-2 text-left hover:text-blue-600 border-b border-slate-100"
            >
              <span>Contact & Support</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/8801711117967`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-xl shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: 01711117967</span>
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-xl"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>smrezaulalam@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
