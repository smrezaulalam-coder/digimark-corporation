import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  MessageCircle, 
  Copy, 
  Check, 
  Mail, 
  Plus, 
  Minus, 
  Trash2, 
  Building2, 
  Send,
  Layers,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { PRESET_FACILITIES, WHATSAPP_NUMBER, EMAIL_ADDRESS } from '../data/products';
import { getBOQWhatsAppUrl } from '../utils/whatsapp';

interface ProjectQuoteBuilderProps {
  boqProducts: Product[];
  onRemoveFromBOQ: (productId: string) => void;
  onClearBOQ: () => void;
}

export const ProjectQuoteBuilder: React.FC<ProjectQuoteBuilderProps> = ({
  boqProducts,
  onRemoveFromBOQ,
  onClearBOQ,
}) => {
  const [selectedFacility, setSelectedFacility] = useState(PRESET_FACILITIES[0]);
  const [secCount, setSecCount] = useState<number>(PRESET_FACILITIES[0].defaultSec);
  const [attCount, setAttCount] = useState<number>(PRESET_FACILITIES[0].defaultAtt);
  const [fireCount, setFireCount] = useState<number>(PRESET_FACILITIES[0].defaultFire);
  const [paCount, setPaCount] = useState<number>(PRESET_FACILITIES[0].defaultPa);
  
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleFacilityChange = (facilityId: string) => {
    const fac = PRESET_FACILITIES.find((f) => f.id === facilityId);
    if (fac) {
      setSelectedFacility(fac);
      setSecCount(fac.defaultSec);
      setAttCount(fac.defaultAtt);
      setFireCount(fac.defaultFire);
      setPaCount(fac.defaultPa);
    }
  };

  const handleCopySummary = () => {
    const text = `Digimark Corporation - Project Estimate Request:\n\n` +
      `Facility Type: ${selectedFacility.name}\n` +
      `• CCTV Surveillance Cameras: ${secCount} units\n` +
      `• Time Attendance Terminals: ${attCount} units\n` +
      `• Fire Alarm Detectors / Zones: ${fireCount} units\n` +
      `• PA Sound Speakers: ${paCount} units\n` +
      (boqProducts.length > 0 ? `\nSpecific Chosen Products (${boqProducts.length}):\n` + boqProducts.map(p => `- ${p.brand} ${p.name} (${p.model})`).join('\n') : '') +
      (contactName ? `\nClient Name: ${contactName}` : '') +
      (contactPhone ? `\nPhone: ${contactPhone}` : '') +
      (notes ? `\nSpecial Notes: ${notes}` : '');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppUrl = getBOQWhatsAppUrl({
    facility: selectedFacility.name,
    secCount,
    attCount,
    fireCount,
    paCount,
    contactName,
    contactPhone,
    notes,
  });

  return (
    <section id="boq-estimator" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive BOQ Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Instant Project Proposal & BOQ Estimator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select your building or project type, customize your device counts, and receive a complete turnkey proposal directly via WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preset Selector & Equipment Steppers */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            
            {/* Step 1: Facility Type Preset */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                1. Select Building / Facility Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRESET_FACILITIES.map((fac) => {
                  const active = selectedFacility.id === fac.id;
                  return (
                    <button
                      key={fac.id}
                      onClick={() => handleFacilityChange(fac.id)}
                      className={`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                        active
                          ? 'border-blue-600 bg-blue-50/60 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span className={`text-sm font-bold ${active ? 'text-blue-900' : 'text-slate-800'}`}>
                          {fac.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-100 flex items-start gap-2">
                <span className="font-bold text-slate-700">Recommendation:</span>
                <span>{selectedFacility.recommendation}</span>
              </div>
            </div>

            {/* Step 2: Device Counts Steppers */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                2. Customize Equipment Quantities:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Surveillance Stepper */}
                <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📹</span>
                    <div>
                      <div className="text-xs font-bold text-blue-900">CCTV Cameras</div>
                      <div className="text-[11px] text-slate-500">Dome / Bullet / PTZ</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSecCount(Math.max(0, secCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{secCount}</span>
                    <button
                      onClick={() => setSecCount(secCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Attendance Stepper */}
                <div className="p-4 rounded-2xl border border-teal-200 bg-teal-50/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕘</span>
                    <div>
                      <div className="text-xs font-bold text-teal-900">Attendance Terminals</div>
                      <div className="text-[11px] text-slate-500">Face / Fingerprint / RFID</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAttCount(Math.max(0, attCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{attCount}</span>
                    <button
                      onClick={() => setAttCount(attCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Fire Protection Stepper */}
                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-xs font-bold text-orange-900">Fire Detectors / Sirens</div>
                      <div className="text-[11px] text-slate-500">Optical Smoke / Heat / Strobe</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFireCount(Math.max(0, fireCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{fireCount}</span>
                    <button
                      onClick={() => setFireCount(fireCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* PA Sound Stepper */}
                <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📢</span>
                    <div>
                      <div className="text-xs font-bold text-amber-900">PA System Speakers</div>
                      <div className="text-[11px] text-slate-500">Ceiling / Horn / Column</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPaCount(Math.max(0, paCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-slate-900 text-sm">{paCount}</span>
                    <button
                      onClick={() => setPaCount(paCount + 1)}
                      className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Notes */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                3. Your Organization / Contact Details (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name or Company"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Contact Mobile (e.g. 017xxxxxxxx)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Any special requirements (e.g., Cat6 cable length, fiber optic link, fire authority certificate)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Right Column: Estimated Summary & Actions */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-orange-600" />
                  <h3 className="font-extrabold text-slate-900 text-lg">
                    Project BOQ Breakdown
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
                  Official Digimark Spec
                </span>
              </div>

              {/* Facility name badge */}
              <div className="my-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[11px] font-bold text-slate-400 uppercase">Target Facility:</div>
                <div className="font-extrabold text-slate-800 text-sm">{selectedFacility.name}</div>
              </div>

              {/* Quantities Overview */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-2">
                    <span>📹</span> CCTV Surveillance Units:
                  </span>
                  <span className="font-extrabold text-slate-900 text-sm">{secCount} pcs</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-2">
                    <span>🕘</span> Biometric Attendance Readers:
                  </span>
                  <span className="font-extrabold text-slate-900 text-sm">{attCount} pcs</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-2">
                    <span>🔥</span> Fire Detectors & Sirens:
                  </span>
                  <span className="font-extrabold text-slate-900 text-sm">{fireCount} pcs</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-2">
                    <span>📢</span> PA Commercial Speakers:
                  </span>
                  <span className="font-extrabold text-slate-900 text-sm">{paCount} pcs</span>
                </div>
              </div>

              {/* Explicit items added from the catalog */}
              {boqProducts.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">
                      Catalog Models Selected ({boqProducts.length}):
                    </span>
                    <button
                      onClick={onClearBOQ}
                      className="text-[11px] text-red-600 hover:underline cursor-pointer"
                    >
                      Clear Items
                    </button>
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 text-xs">
                    {boqProducts.map((p) => (
                      <div key={p.id} className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span>{p.icon}</span>
                          <span className="font-semibold text-slate-800 truncate">{p.name}</span>
                        </div>
                        <button
                          onClick={() => onRemoveFromBOQ(p.id)}
                          className="text-slate-400 hover:text-red-600 p-1 cursor-pointer shrink-0"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Engineering Services included */}
              <div className="mt-5 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-900 space-y-1">
                <span className="font-bold block">✓ Included in Digimark Corporation Quotation:</span>
                <p>• Site survey & AutoCAD cable pathway layout plan</p>
                <p>• Genuine original warranty cards with authorized serials</p>
                <p>• Commissioning & client operational training</p>
              </div>
            </div>

            {/* Actions: Send to WhatsApp, Copy, Email */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send BOQ on WhatsApp ({WHATSAPP_NUMBER})</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopySummary}
                  className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy BOQ Text</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Project BOQ Proposal Request - ' + selectedFacility.name)}&body=${encodeURIComponent(
                    `Hello Digimark Corporation,\n\nWe request an official quotation for the following:\nFacility: ${selectedFacility.name}\nCCTV Cameras: ${secCount}\nAttendance Readers: ${attCount}\nFire Alarm Points: ${fireCount}\nPA Speakers: ${paCount}\nContact: ${contactName || 'N/A'}\nPhone: ${contactPhone || 'N/A'}\nNotes: ${notes || 'None'}\n\nThank you!`
                  )}`}
                  className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Email Quote</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
