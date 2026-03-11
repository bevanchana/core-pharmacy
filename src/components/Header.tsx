import React from 'react';
import { MapPin, Phone, Activity } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 rotate-3">
              <Activity className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 leading-tight tracking-tight">Core<span className="text-emerald-600">Pharmacy</span></h1>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Live Inventory</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin size={14} className="text-emerald-500" />
                <span className="text-xs font-bold text-slate-900">Main Street, Douala</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Open 24/7 • Fast Delivery</p>
            </div>
            <a 
              href={`https://wa.me/${237600000000}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-emerald-500/20 active:scale-95"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
