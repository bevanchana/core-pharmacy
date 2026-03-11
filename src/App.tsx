import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { MedicationCard } from './components/MedicationCard';
import { SkeletonLoader } from './components/SkeletonLoader';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Admin } from './pages/Admin';
import { MOCK_MEDICATIONS, WHATSAPP_NUMBER, Medication } from './constants';
import { SearchX, Sparkles, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { cn } from './lib/utils';

const CATEGORIES = ["All", "Pain Relief", "Antibiotic", "Antimalarial", "Vitamins", "Allergy", "Respiratory", "Diabetes", "Digestive Health"];

function Storefront({ medications, isLoading }: { medications: Medication[], isLoading: boolean }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const locations = useMemo(() => {
    const locs = Array.from(new Set(medications.map(m => m.location)));
    return ["All", ...locs.sort()];
  }, [medications]);

  const filteredMeds = useMemo(() => {
    return medications.filter(med => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = med.tradeName.toLowerCase().includes(searchLower) ||
                          med.genericName.toLowerCase().includes(searchLower) ||
                          med.category.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesLocation = selectedLocation === 'All' || med.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [medications, searchTerm, selectedCategory, selectedLocation]);

  const handleReserve = (medicationName: string) => {
    const message = encodeURIComponent(`Hello Core Pharmacy, I would like to reserve: ${medicationName}. Is it available?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen mesh-gradient font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      
      <main className="relative">
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100">
                  <Sparkles size={14} />
                  National Pharmacy Network
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
                  Find Medicines <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">In Your Town.</span>
                </h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
                  Search by trade or generic name, check strength and dosage, and find the nearest pharmacy with stock.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200/50">
                      <ShieldCheck className="text-emerald-500" size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Verified Stock</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200/50">
                      <MapPin className="text-blue-500" size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Nationwide Coverage</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/50 shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/pharmacy-inventory/800/600" 
                    alt="Pharmacy Inventory" 
                    className="rounded-[2rem] shadow-2xl object-cover w-full h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-[200px]">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">Network Status</p>
                    <p className="text-sm font-extrabold text-slate-900">Connected to 50+ pharmacies across Cameroon</p>
                  </div>
                </div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-32">
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Select Town</p>
              <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={cn(
                      "px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex items-center gap-2",
                      selectedLocation === loc 
                        ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20" 
                        : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-100"
                    )}
                  >
                    <MapPin size={14} />
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Categories</p>
              <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                      selectedCategory === cat 
                        ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" 
                        : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-100"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              {isLoading ? 'Syncing Inventory...' : `${filteredMeds.length} Products Found`}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SkeletonLoader />
                  </motion.div>
                ))
              ) : filteredMeds.length > 0 ? (
                filteredMeds.map((med) => (
                  <motion.div
                    key={med.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MedicationCard 
                      medication={med} 
                      onReserve={handleReserve} 
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-32 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center mb-6">
                    <SearchX className="text-slate-300" size={48} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3">No results found</h4>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium">
                    We couldn't find any medications matching your criteria in {selectedLocation === 'All' ? 'any town' : selectedLocation}.
                  </p>
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedLocation('All'); }}
                    className="mt-8 px-8 py-4 bg-emerald-50 text-emerald-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-100 transition-all"
                  >
                    Reset All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <FloatingWhatsAppButton phoneNumber={WHATSAPP_NUMBER} />
      
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Activity className="text-white" size={20} />
                </div>
                <span className="text-2xl font-black tracking-tight">Core<span className="text-emerald-500">Pharmacy</span></span>
              </div>
              <p className="text-slate-400 font-medium max-w-sm leading-relaxed">
                Connecting patients to pharmacies across the nation. Find what you need, where you are.
              </p>
            </div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-6">Quick Links</h5>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Browse Catalog</a></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Pharmacy Login</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Register Pharmacy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-6">Legal</h5>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Regulations</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">© {new Date().getFullYear()} Core Pharmacy Network. National Health Initiative.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMedications(MOCK_MEDICATIONS);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleUploadSuccess = (newData: Medication[]) => {
    setMedications(prev => [...newData, ...prev]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Storefront medications={medications} isLoading={isLoading} />} />
        <Route path="/admin" element={<Admin medications={medications} onUploadSuccess={handleUploadSuccess} />} />
      </Routes>
    </Router>
  );
}
