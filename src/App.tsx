import { useState, useEffect } from 'react';
import { Search, MapPin, Phone, MessageCircle, ShieldCheck, Clock, Activity } from 'lucide-react';
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

  const getBadgeStyle = (stockStatus: string) => {
    switch (stockStatus) {
      case 'In Stock': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Low Stock': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Out of Stock': return 'bg-rose-100 text-rose-800 border-rose-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const handleWhatsAppReserve = (medName: string) => {
    const phone = "237XXXXXXXXX";
    const message = encodeURIComponent(`Hello Core Pharmacy, I would like to check the availability of ${medName}.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-slate-100 text-slate-500 text-xs md:text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-blue-500" /> Likomba, South-West | Near PCC & Redeemed House
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-blue-500" /> Open Mon-Sat: 8AM - 8PM
            </span>
          </div>
          <div className="flex items-center font-medium">
            <ShieldCheck className="h-4 w-4 mr-1 text-emerald-500" /> Licensed & Verified Pharmacy
          </div>
        </div>
      </div>

      {/* Main Navigation with soft shadow */}
      <header className="bg-white sticky top-0 z-50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl shadow-md">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Core Pharmacy</h1>
              <p className="text-slate-500 text-xs md:hidden mt-0.5">📍 Likomba | Near PCC</p>
            </div>
          </div>

          <button className="hidden md:flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-5 py-2.5 rounded-xl transition-all font-bold border border-blue-100">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Call Desk: +237 6XX XXX XXX</span>
          </button>
        </div>
      </header>

      {/* Dynamic Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 pt-16 pb-28 px-4 overflow-hidden">
        {/* Abstract Background Element for depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-emerald-400 blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            Fast, Reliable Health Care
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
            Find Your Medication <span className="text-emerald-400">Instantly.</span>
          </h2>
          <p className="text-blue-100 mb-8 md:text-lg max-w-xl mx-auto font-medium">
            Search our live inventory in Likomba and reserve exactly what you need via WhatsApp before you arrive.
          </p>
        </div>
      </section>

      {/* Overlapping Search Bar - Pulls the layout together */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center">
          <div className="pl-4">
            <Search className="h-6 w-6 text-blue-500" />
          </div>
          <input
            type="text"
            className="w-full pl-4 pr-4 py-4 md:py-5 rounded-xl text-lg md:text-xl text-slate-800 bg-transparent placeholder-slate-400 focus:outline-none"
            placeholder="Search for Paracetamol, Amoxicillin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="pr-2 hidden md:block">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Inventory Display */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
          <h3 className="text-2xl font-extrabold text-slate-800">Current Inventory</h3>
          <span className="text-sm font-bold text-slate-400 bg-slate-100 py-1 px-3 rounded-lg">
            {filteredMeds.length} items found
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm animate-pulse flex flex-col h-full">
                <div className="h-5 bg-slate-200 rounded w-1/3 mb-4"></div>
                <div className="h-7 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-1/4 mb-8"></div>
                <div className="mt-auto h-12 bg-slate-100 rounded-xl w-full"></div>
              </div>
            ))
          ) : filteredMeds.length > 0 ? (
            filteredMeds.map((med) => (
              <div
                key={med.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full relative overflow-hidden"
              >
                {/* Subtle top border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent group-hover:via-blue-400 transition-colors duration-300"></div>

                <div className="flex justify-between items-start mb-5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getBadgeStyle(med.stock)}`}>
                    {med.stock}
                  </span>
                  <span className="text-xl font-black text-slate-800">{med.price}</span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                  {med.name}
                </h4>
                <p className="text-sm font-semibold text-slate-400 mb-8">{med.category}</p>

                <div className="mt-auto">
                  <button
                    onClick={() => handleWhatsAppReserve(med.name)}
                    disabled={med.stock === 'Out of Stock'}
                    className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl font-bold transition-all duration-200 ${
                      med.stock === 'Out of Stock'
                        ? 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md hover:shadow-lg active:scale-[0.98]'
                    }`}
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{med.stock === 'Out of Stock' ? 'Currently Unavailable' : 'Reserve via WhatsApp'}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Search className="h-10 w-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No matching medications</h3>
              <p className="text-slate-500 text-lg">We couldn't find anything matching "{searchTerm}".</p>
            </div>
          )}
        </div>
      </main>

      {/* Floating WhatsApp Button - Mobile Only */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        onClick={() => window.open('https://wa.me/237XXXXXXXXX', '_blank')}
        aria-label="Contact pharmacy on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
