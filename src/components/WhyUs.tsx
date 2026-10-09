import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Headphones, 
  FileCheck, 
  Award,
  Zap,
  MapPin
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export const WhyUs: React.FC = () => {
  const points = [
    {
      title: '100% Genuine Stock',
      desc: 'All security, attendance, fire alarm and PA hardware are 100% original imports with manufacturer warranty cards & serial verification.',
      icon: Award,
      badge: 'Authorized Imports',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Certified Technical Installation',
      desc: 'Our in-house technicians ensure tidy PVC conduits, fiber termination, structured Cat6 rack cabling, and clean aesthetic finishes.',
      icon: Wrench,
      badge: 'Trained Engineers',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
    {
      title: 'Annual Maintenance Contracts (AMC)',
      desc: 'Tailored preventive maintenance and emergency call-out plans ensure 99.9% uptime for your critical surveillance & fire safety systems.',
      icon: Clock,
      badge: '24/7 SLA Support',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      title: 'Rapid Response & Free Survey',
      desc: 'Get fast price quotations within hours and book a free on-site engineering inspection anywhere across Dhaka and major industrial zones.',
      icon: Zap,
      badge: 'Same-Day Response',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <section id="why-digimark" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow and subtle geometry */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold tracking-wide uppercase mb-3 border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            Reliable Partner
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Choose Digimark Corporation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            One trusted partner for end-to-end design, supply, testing, installation, and after-sales maintenance in Bangladesh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${pt.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${pt.color}`} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-700">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Delivery Milestones */}
        <div className="mt-14 pt-12 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 font-extrabold flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Site Audit & System Design</h4>
              <p className="text-xs text-slate-400 mt-1">We assess blind spots, fire load zones, and acoustic acoustics before proposing models.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 font-extrabold flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Neat Deployment & Cabling</h4>
              <p className="text-xs text-slate-400 mt-1">Conduit trunking, numbered cable tags, surge protection, and rack dressing.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Software Training & AMC</h4>
              <p className="text-xs text-slate-400 mt-1">Hands-on employee attendance configuration, mobile viewing, and routine system health checks.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
