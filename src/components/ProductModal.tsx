import React from 'react';
import { X, MessageCircle, ShieldCheck, Check, Phone, Mail } from 'lucide-react';
import { Product } from '../types';
import { CATEGORIES, WHATSAPP_NUMBER, EMAIL_ADDRESS } from '../data/products';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBOQ: (product: Product) => void;
  isInBOQ: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToBOQ,
  isInBOQ,
}) => {
  if (!product) return null;

  const categoryMeta = CATEGORIES[product.category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="p-6 text-white relative"
          style={{
            background: `linear-gradient(135deg, ${categoryMeta.color} 0%, #0f172a 100%)`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-4xl p-2 bg-white/10 rounded-2xl">{product.icon}</span>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                <span>{categoryMeta.name}</span>
                <span>•</span>
                <span className="bg-white/20 px-2 py-0.5 rounded">{product.brand}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold mt-1">
                {product.name}
              </h2>
              <div className="text-xs font-mono text-white/70 mt-0.5">
                Model: <span className="font-semibold text-white">{product.model}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Overview & Application
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Features & Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technical Datasheet Specifications
            </h3>
            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div key={idx} className="grid grid-cols-3 p-3 bg-white even:bg-slate-50/50">
                  <span className="font-semibold text-slate-800">{key}</span>
                  <span className="col-span-2 text-slate-600 font-mono text-[11px] sm:text-xs">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty & Installation Notes */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold text-blue-900 block">
                Official Warranty & Digimark Engineering Guarantee:
              </span>
              <p className="text-blue-800">
                {product.warranty}. Includes free pre-delivery testing, original seal packaging, and optional turnkey installation with Cat6/RG6/Fiber cabling by Digimark Corporation technicians.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onAddToBOQ(product)}
            className={`w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isInBOQ 
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isInBOQ ? '✓ Added in Project BOQ' : '+ Add to Project Quote (BOQ)'}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={getProductWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-xl text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Price Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
