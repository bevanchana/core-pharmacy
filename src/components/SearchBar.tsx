import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-40">
      <div className="bg-white rounded-[2rem] p-3 shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row items-center gap-2">
        <div className="relative flex-grow w-full">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-14 pr-4 py-5 border-none rounded-2xl leading-5 bg-transparent placeholder-slate-400 focus:outline-none focus:ring-0 text-lg font-medium"
            placeholder="What medication are you looking for?"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="h-10 w-px bg-slate-100 hidden md:block mx-2"></div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-50 text-emerald-700 rounded-2xl font-bold hover:bg-emerald-100 transition-colors">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>
    </div>
  );
};
