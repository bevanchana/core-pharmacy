import React from 'react';
import { Medication } from '../constants';
import { cn } from '../lib/utils';
import { Pill, ArrowUpRight, MapPin, Package, Beaker } from 'lucide-react';

interface MedicationCardProps {
  medication: Medication;
  onReserve: (name: string) => void;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({ medication, onReserve }) => {
  const isOutOfStock = medication.stockStatus === "Out of Stock";

  return (
    <div className="group relative bg-white rounded-[2.5rem] p-6 border border-slate-100 transition-all duration-500 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col h-full overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors duration-500"></div>
      
      <div className="relative flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:rotate-6 transition-all duration-500">
          <Pill className="text-slate-400 group-hover:text-white transition-colors duration-500" size={28} />
        </div>
        <div className={cn(
          "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-sm",
          medication.stockStatus === "In Stock" && "bg-emerald-50 text-emerald-600",
          medication.stockStatus === "Low Stock" && "bg-amber-50 text-amber-600",
          medication.stockStatus === "Out of Stock" && "bg-rose-50 text-rose-600"
        )}>
          {medication.stockStatus}
        </div>
      </div>

      <div className="relative flex-grow space-y-4">
        <div>
          <p className="text-[10px] font-black text-emerald-600 mb-1 uppercase tracking-[0.2em] opacity-70">{medication.category}</p>
          <h3 className="text-2xl font-extrabold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
            {medication.tradeName}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-slate-500">
            <Beaker size={12} className="text-slate-400" />
            <p className="text-xs font-bold italic">{medication.genericName}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Strength</p>
            <p className="text-xs font-black text-slate-700">{medication.strength}</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Form</p>
            <p className="text-xs font-black text-slate-700">{medication.dosageForm}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin size={14} className="text-emerald-500" />
            <span className="text-xs font-bold">{medication.pharmacyName}</span>
            <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-md text-slate-500 font-black uppercase">{medication.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Package size={14} className="text-slate-400" />
            <span className="text-xs font-medium">{medication.quantity} units in stock</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6 pt-6 border-t border-slate-50 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Unit Price</p>
          <span className="text-2xl font-black text-slate-900 tracking-tight">{medication.price}</span>
        </div>
        <button
          onClick={() => onReserve(medication.tradeName)}
          disabled={isOutOfStock}
          className={cn(
            "flex items-center gap-2 px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95",
            isOutOfStock 
              ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
              : "bg-slate-900 text-white hover:bg-emerald-600 shadow-xl shadow-slate-900/10 hover:shadow-emerald-500/20"
          )}
        >
          Reserve
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
