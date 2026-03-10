import { HeartPulse, MapPin } from 'lucide-react';
import { PHARMACY_CONFIG } from '../config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      {/* Branding Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/30">
            <HeartPulse className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {PHARMACY_CONFIG.name}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              <span className="font-medium">Likomba, South-West</span>
            </div>
          </div>
        </div>
        
        {/* Contact Desk Button - Desktop Only */}
        <button
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
          aria-label="Contact desk"
        >
          <HeartPulse className="h-4 w-4" />
          <span>Contact Desk</span>
        </button>
      </div>

      {/* Location Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100/50 px-4 py-2.5 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm text-blue-900">
          <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
          <p className="font-medium">
            {PHARMACY_CONFIG.location}
          </p>
        </div>
      </div>
    </header>
  );
}
