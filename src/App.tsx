import { useState, useEffect } from 'react';
import { Search, MapPin, Phone, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import './App.css'

const mockDatabase = [
  { id: 1, name: "Paracetamol 500mg", category: "Pain Relief", stock: "In Stock", price: "500 FCFA" },
  { id: 2, name: "Artemether-Lumefantrine", category: "Antimalarial", stock: "Low Stock", price: "1,500 FCFA" },
  { id: 3, name: "Amoxicillin 250mg", category: "Antibiotic", stock: "In Stock", price: "1,200 FCFA" },
  { id: 4, name: "Vitamin C Supplements", category: "Wellness & Vitamins", stock: "Out of Stock", price: "1,000 FCFA" },
  { id: 5, name: "Ibuprofen 400mg", category: "Pain Relief", stock: "In Stock", price: "800 FCFA" },
  { id: 6, name: "Cough Syrup (Adult)", category: "Cold & Flu", stock: "Low Stock", price: "2,000 FCFA" },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [medications, setMedications] = useState<typeof mockDatabase>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeds = setTimeout(() => {
      setMedications(mockDatabase);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(fetchMeds);
  }, []);

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Color psychology palette for stock badges
  const getBadgeStyle = (stockStatus: string) => {
    switch (stockStatus) {
      case 'In Stock': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Low Stock': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Out of Stock': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleWhatsAppReserve = (medName: string) => {
    const phone = "237XXXXXXXXX"; // Replace with actual number
    const message = encodeURIComponent(`Hello Core Pharmacy, I would like to check the availability of ${medName}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Utility Bar - Clean White/Neutral */}
      <div className="bg-white border-b border-slate-200 text-slate-500 text-xs md:text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-blue-600" /> Likomba, South-West | Near PCC & Redeemed House
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-blue-600" /> Open Mon-Sat: 8AM - 8PM
            </span>
          </div>
          <div className="flex items-center">
            <ShieldCheck className="h-4 w-4 mr-1 text-emerald-600" /> Licensed & Verified Pharmacy
          </div>
        </div>
      </div>

      {/* Main Navigation - Professional Blue */}
      <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <span className="text-blue-700 font-bold text-xl leading-none block">CORE</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Core Pharmacy</h1>
              <p className="text-blue-200 text-xs md:hidden mt-1">📍 Likomba | Near PCC</p>
            </div>
          </div>

          <button className="hidden md:flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg transition-colors border border-blue-600">
            <Phone className="h-4 w-4" />
            <span className="font-semibold text-sm">Call Desk: +237 6XX XXX XXX</span>
          </button>
        </div>
      </header>

      {/* Hero / Search Section - Evokes cleanliness and calm */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 border-b border-slate-200 py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Find Your Medication Fast</h2>
          <p className="text-slate-600 mb-8 md:text-lg">Search our live inventory and reserve instantly via WhatsApp.</p>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-blue-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-lg shadow-sm"
              placeholder="Search for Paracetamol, Amoxicillin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Inventory Display */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-xl font-bold text-slate-800">Current Inventory</h3>
          <span className="text-sm font-medium text-slate-500">{filteredMeds.length} items found</span>
        </div>

        {/* Grid Layout - 3 columns on desktop, 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-pulse flex flex-col h-full">
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/4 mb-6"></div>
                <div className="mt-auto h-12 bg-slate-100 rounded-lg w-full"></div>
              </div>
            ))
          ) : filteredMeds.length > 0 ? (
            filteredMeds.map((med) => (
              <div key={med.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getBadgeStyle(med.stock)}`}>
                    {med.stock}
                  </span>
                  <span className="text-lg font-bold text-blue-900">{med.price}</span>
                </div>

                <h4 className="text-xl font-bold text-slate-800 leading-tight mb-1">{med.name}</h4>
                <p className="text-sm font-medium text-slate-500 mb-6">{med.category}</p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleWhatsAppReserve(med.name)}
                    disabled={med.stock === 'Out of Stock'}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      med.stock === 'Out of Stock'
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm hover:shadow active:scale-[0.98]'
                    }`}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{med.stock === 'Out of Stock' ? 'Currently Unavailable' : 'Reserve via WhatsApp'}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-xl border border-slate-200">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">No matching medications</h3>
              <p className="text-slate-500">We couldn't find anything matching "{searchTerm}".</p>
            </div>
          )}
        </div>
      </main>

      {/* Floating WhatsApp Button - Mobile Only */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        onClick={() => window.open('https://wa.me/237XXXXXXXXX', '_blank')}
        aria-label="Contact pharmacy on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
