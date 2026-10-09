import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';

interface CategoryTilesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryTiles: React.FC<CategoryTilesProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const categoryList = Object.values(CATEGORIES);

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold tracking-wide uppercase mb-3">
            Integrated Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose a product type
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Tap a type to see the full equipment range, specifications, and instant WhatsApp quotations.
          </p>
        </div>

        {/* 4 Category Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryList.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl ${
                  isSelected 
                    ? 'border-blue-600 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
                style={{
                  borderTopWidth: '5px',
                  borderTopColor: cat.color,
                }}
              >
                {/* Top: Icon + Indicator */}
                <div>
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: cat.accentBg }}
                  >
                    {cat.icon}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: cat.color }}>
                    {cat.tagline}
                  </p>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  {/* Application tags */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                      Common Applications:
                    </span>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {cat.popularApplications.slice(0, 3).map((app, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom link button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold" style={{ color: cat.color }}>
                  <span>{isSelected ? 'Currently Viewing' : 'View range'}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
