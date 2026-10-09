import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  MapPin, 
  Clock, 
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { 
  WHATSAPP_NUMBER, 
  WHATSAPP_INTL, 
  EMAIL_ADDRESS, 
  FACEBOOK_URL 
} from '../data/products';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Security Surveillance');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Digimark Corporation,\n\n` +
      `👤 Name: ${formName || 'Customer'}\n` +
      `📞 Phone: ${formPhone || 'Not provided'}\n` +
      `🛡️ Solution Required: ${formService}\n` +
      `📝 Inquiry Details: ${formMessage || 'I would like more information and pricing.'}\n\n` +
      `Please contact me back with available options. Thank you!`;

    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const handleSendViaEmail = () => {
    const subject = `Inquiry: ${formService} - ${formName || 'Customer'}`;
    const body = `Name: ${formName}\nPhone: ${formPhone}\nSolution: ${formService}\n\nMessage:\n${formMessage}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Talk to Digimark Corporation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Send your equipment requirement or site drawings and get an official quote today.
          </p>
        </div>

        {/* 3 Prominent Contact Cards as in user's design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_INTL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-emerald-50/50 hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Direct WhatsApp Hotline
              </div>

              <div className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {WHATSAPP_NUMBER}
              </div>

              <p className="text-sm text-slate-600 mt-2">
                Fastest response for instant pricing, model availability, and photo/video samples.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200/60 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>Chat on WhatsApp</span>
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">→</span>
            </div>
          </a>

          {/* Card 2: Email */}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="group relative bg-blue-50/50 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-3xl p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                Official Email Address
              </div>

              <div className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors break-all">
                {EMAIL_ADDRESS}
              </div>

              <p className="text-sm text-slate-600 mt-2">
                Send tender drawings, technical specifications, and official purchase orders.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center justify-between text-xs font-bold text-blue-800">
              <span>Send Email</span>
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">→</span>
            </div>
          </a>

          {/* Card 3: Facebook */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-indigo-50/50 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 rounded-3xl p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-5 shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">
                Official Facebook Page
              </div>

              <div className="text-2xl font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors">
                Digimark Corporation
              </div>

              <p className="text-sm text-slate-600 mt-2">
                Follow our latest project installations, genuine product arrivals, and industry news.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-indigo-200/60 flex items-center justify-between text-xs font-bold text-indigo-800">
              <span>Visit Facebook Page</span>
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center">→</span>
            </div>
          </a>

        </div>

        {/* Interactive Quick Requirement Submission Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-sm">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Quick Requirement Submission
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Fill out this quick form to dispatch your message immediately to our technical sales team.
            </p>
          </div>

          <form onSubmit={handleSendViaWhatsApp} className="space-y-4 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  Your Name / Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Kabir / Corporate Buyer"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 017xxxxxxxx"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                Primary Solution Needed
              </label>
              <select
                value={formService}
                onChange={(e) => setFormService(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
              >
                <option value="Security Surveillance (CCTV / IP / NVR)">Security Surveillance (CCTV / IP / NVR)</option>
                <option value="Time Attendance (Fingerprint / Face / RFID)">Time Attendance (Fingerprint / Face / RFID)</option>
                <option value="Fire Protection (Alarm / Detectors / Extinguishers)">Fire Protection (Alarm / Detectors / Extinguishers)</option>
                <option value="PA System (Amplifier / Speakers / Mics)">PA System (Amplifier / Speakers / Mics)</option>
                <option value="Complete All-in-One Facility Package">Complete All-in-One Facility Package</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                Message / Requirement Details
              </label>
              <textarea
                rows={3}
                placeholder="Describe your site location, number of floors or camera points needed, brand preference, etc..."
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Redirecting your request to WhatsApp ({WHATSAPP_NUMBER}). We will respond promptly!</span>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to WhatsApp ({WHATSAPP_NUMBER})</span>
              </button>

              <button
                type="button"
                onClick={handleSendViaEmail}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold py-3.5 px-6 rounded-xl text-sm border border-slate-300 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Email to smrezaulalam@gmail.com</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
