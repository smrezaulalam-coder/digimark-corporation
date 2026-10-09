import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  MessageCircle, 
  Info, 
  Plus, 
  Check, 
  ArrowUpDown,
  Sparkles,
  SlidersHorizontal,
  Layers
} from 'lucide-react';
import { Product, CategoryId } from '../types';
import { CATEGORIES, BRANDS, PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onViewProductSpecs: (product: Product) => void;
  onAddToBOQ: (product: Product) => void;
  boqProductIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onViewProductSpecs,
  onAddToBOQ,
  boqProductIds,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All brands');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'az' | 'popular'>('default');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All brands' && p.brand !== selectedBrand) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesModel = p.model.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesModel && !matchesDesc) {
          return false;
        }
      }
      return true;
    });

    if (sortBy === 'az') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'popular') {
      list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return list;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const clearAllFilters = () => {
    onSelectCategory('');
    setSelectedBrand('All brands');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wide uppercase mb-2">
              Equipment Directory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Products & Equipment Catalogue
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl">
              Filter by system category and certified brand. Request official price quotations directly on WhatsApp or build your customized bill of quantities.
            </p>
          </div>

          {(selectedCategory || selectedBrand !== 'All brands' || searchQuery) && (
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3.5 py-2 rounded-xl transition-colors self-start md:self-auto cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Filter by Solution:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectCategory('')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                !selectedCategory
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Solutions ({PRODUCTS.length})
            </button>

            {Object.values(CATEGORIES).map((cat) => {
              const active = selectedCategory === cat.id;
              const count = PRODUCTS.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer border ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`text-xs px-1.5 py-0.2 rounded-full ${active ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Brand Filter Chips */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Filter by Brand:
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {BRANDS.map((brand) => {
              const active = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cameras, NVR, biometric, smoke alarms, TOA amps..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right side: Sort + Results count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="default">Sort: Recommended</option>
                <option value="az">Sort: Name (A to Z)</option>
                <option value="popular">Sort: Most In Demand</option>
              </select>
            </div>

            <div className="text-xs font-bold text-slate-600 bg-white px-3 py-2 rounded-xl border border-slate-200">
              Showing <span className="text-blue-600">{filteredProducts.length}</span> of {PRODUCTS.length}
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search query, or clear brand/category filters to view our full equipment catalog.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const categoryMeta = CATEGORIES[product.category];
              const isAddedToBOQ = boqProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all group"
                >
                  {/* Visual Top Banner with Category Gradient and Icon */}
                  <div
                    className="h-36 relative flex items-center justify-center p-4 transition-colors"
                    style={{
                      background: `linear-gradient(135deg, ${categoryMeta.accentBg} 0%, #ffffff 100%)`,
                      borderBottom: `2px solid ${categoryMeta.badgeBorder}`,
                    }}
                  >
                    {/* Floating product icon */}
                    <div className="text-5xl transform group-hover:scale-110 transition-transform drop-shadow-sm select-none">
                      {product.icon}
                    </div>

                    {/* Stock status indicator */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-700 border border-slate-200 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>In Stock</span>
                    </div>

                    {/* Popular indicator */}
                    {product.popular && (
                      <div className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Kicker: Category & Brand */}
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                        <span style={{ color: categoryMeta.color }}>
                          {categoryMeta.name}
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {product.brand}
                        </span>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Model Number */}
                      <div className="text-xs font-mono text-slate-700 mt-1">
                        Model: <span className="text-slate-800 font-semibold">{product.model}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key highlights bullets */}
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                        {product.features.slice(0, 2).map((feat, fidx) => (
                          <div key={fidx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <span className="text-blue-500 font-bold shrink-0">•</span>
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-2 text-[11px] text-slate-600 font-medium">
                        🛡️ {product.warranty}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                      {/* WhatsApp Direct Quote Button */}
                      <a
                        href={getProductWhatsAppUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm hover:shadow transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Get quote on WhatsApp</span>
                      </a>

                      {/* Secondary buttons: Quick View & Add to BOQ */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onViewProductSpecs(product)}
                          className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5 text-blue-600" />
                          <span>Spec Sheet</span>
                        </button>

                        <button
                          onClick={() => onAddToBOQ(product)}
                          className={`flex items-center justify-center gap-1 font-semibold py-2 px-2.5 rounded-xl text-xs transition-all cursor-pointer ${
                            isAddedToBOQ
                              ? 'bg-blue-50 text-blue-700 border border-blue-300'
                              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {isAddedToBOQ ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-blue-600" />
                              <span>In BOQ</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-slate-500" />
                              <span>Add to BOQ</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
