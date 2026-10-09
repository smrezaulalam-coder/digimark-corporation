import { WHATSAPP_INTL, WHATSAPP_NUMBER } from '../data/products';
import { Product } from '../types';

export function getProductWhatsAppUrl(product: Product): string {
  const text = `Hello Digimark Corporation, I am interested in this product and would like an official quotation:\n\n` +
    `• Product: ${product.name}\n` +
    `• Brand: ${product.brand}\n` +
    `• Model: ${product.model}\n` +
    `• Category: ${product.category.toUpperCase()}\n\n` +
    `Please provide pricing, stock availability, and installation support in Bangladesh. Thank you!`;
  
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`;
}

export function getBOQWhatsAppUrl(params: {
  facility: string;
  secCount: number;
  attCount: number;
  fireCount: number;
  paCount: number;
  notes?: string;
  contactName?: string;
  contactPhone?: string;
}): string {
  const text = `Hello Digimark Corporation,\nI would like a customized Project Proposal & Quotation for:\n\n` +
    `🏢 Project / Facility: ${params.facility}\n` +
    `📹 Security CCTV Cameras: ${params.secCount} units\n` +
    `🕘 Time Attendance Terminals: ${params.attCount} units\n` +
    `🔥 Fire Alarm Detectors / Zones: ${params.fireCount} units\n` +
    `📢 Public Address (PA) Speakers: ${params.paCount} units\n` +
    (params.contactName ? `👤 Contact Person: ${params.contactName}\n` : '') +
    (params.contactPhone ? `📞 Phone: ${params.contactPhone}\n` : '') +
    (params.notes ? `📝 Note: ${params.notes}\n` : '') +
    `\nPlease send us an itemized estimate with cabling & installation. Thank you!`;

  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`;
}

export function getGeneralWhatsAppUrl(message?: string): string {
  const text = message || `Hello Digimark Corporation, I would like to inquire about your Security, Attendance, Fire Protection and PA Systems.`;
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`;
}
