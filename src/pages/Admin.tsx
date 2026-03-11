import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { CSVUploadModal } from '../components/CSVUploadModal';
import { Medication } from '../constants';
import { 
  LayoutDashboard, 
  UploadCloud, 
  Settings, 
  LogOut, 
  Database, 
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminProps {
  medications: Medication[];
  onUploadSuccess: (data: Medication[]) => void;
}

export const Admin: React.FC<AdminProps> = ({ medications, onUploadSuccess }) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple demo password
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid administrator password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen mesh-gradient flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 w-full max-w-md"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-slate-900/20">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Admin Portal</h2>
            <p className="text-slate-500 font-medium">Restricted access for pharmacy owners</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Admin Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-bold transition-all"
                placeholder="••••••••"
              />
              {error && <p className="text-rose-500 text-xs font-bold mt-2 ml-1">{error}</p>}
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10"
            >
              Authorize Access
            </button>
          </form>

          <Link to="/" className="flex items-center justify-center gap-2 mt-8 text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={14} />
            Back to Storefront
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-8 flex flex-col hidden lg:flex">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <Database className="text-white" size={20} />
          </div>
          <span className="text-xl font-black tracking-tight">Core<span className="text-emerald-500">Admin</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all">
            <LayoutDashboard size={18} />
            Dashboard
          </button>
          <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl font-bold text-sm transition-all"
          >
            <UploadCloud size={18} />
            Upload Inventory
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl font-bold text-sm transition-all">
            <Settings size={18} />
            Settings
          </button>
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-rose-400 transition-all font-bold text-sm mt-auto"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Inventory Dashboard</h2>
              <p className="text-slate-500 font-medium">Manage your pharmacy network's stock levels</p>
            </div>
            <button 
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
            >
              <UploadCloud size={20} />
              Import CSV
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Products</p>
              <p className="text-4xl font-black text-slate-900">{medications.length}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Low Stock Items</p>
              <p className="text-4xl font-black text-amber-500">{medications.filter(m => m.stockStatus === 'Low Stock').length}</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Out of Stock</p>
              <p className="text-4xl font-black text-rose-500">{medications.filter(m => m.stockStatus === 'Out of Stock').length}</p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-black text-slate-900">Recent Inventory</h3>
              <Link to="/" className="text-emerald-600 font-bold text-xs hover:underline">View Public Storefront</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pharmacy</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stock</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {medications.slice(0, 10).map((med) => (
                    <tr key={med.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5">
                        <p className="font-bold text-slate-900">{med.tradeName}</p>
                        <p className="text-xs text-slate-400 italic">{med.genericName}</p>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-slate-600">{med.pharmacyName}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-black">{med.location}</p>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                          med.stockStatus === 'In Stock' ? 'bg-emerald-50 text-emerald-600' :
                          med.stockStatus === 'Low Stock' ? 'bg-amber-50 text-amber-600' :
                          'bg-rose-50 text-rose-600'
                        }`}>
                          {med.quantity} Units
                        </span>
                      </td>
                      <td className="px-8 py-5 font-black text-slate-900">{med.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <CSVUploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        onUploadSuccess={onUploadSuccess}
      />
    </div>
  );
};
