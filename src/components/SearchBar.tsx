import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="sticky top-[120px] z-40 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
        <div className="relative max-w-2xl mx-auto">
          <label htmlFor="medication-search" className="sr-only">
            Search medications by name
          </label>
          <div className="relative group">
            <Search 
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" 
              aria-hidden="true"
            />
            <input
              id="medication-search"
              type="search"
              role="searchbox"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search medications..."
              className="w-full rounded-2xl border-2 border-gray-200 bg-white py-3.5 pl-12 pr-4 text-base shadow-sm transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 hover:border-gray-300"
              style={{ minHeight: '44px' }}
              aria-label="Search medications"
              aria-describedby="search-instructions"
            />
          </div>
          <span id="search-instructions" className="sr-only">
            Type to filter medications by name. Results will update as you type.
          </span>
        </div>
      </div>
    </div>
  );
}
