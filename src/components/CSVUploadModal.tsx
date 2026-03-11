import React, { useRef, useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertCircle, X, Download } from 'lucide-react';
import Papa from 'papaparse';
import { Medication, StockStatus } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface CSVUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (data: Medication[]) => void;
}

export const CSVUploadModal: React.FC<CSVUploadModalProps> = ({ isOpen, onClose, onUploadSuccess }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFile = (file: File) => {
    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      setError('Please upload a valid CSV file.');
      return;
    }

    setError(null);
    setIsProcessing(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const parsedData = results.data as any[];
          const validatedData: Medication[] = parsedData.map((row, index) => {
            // Basic validation and mapping
            if (!row.tradeName || !row.genericName || !row.price) {
              throw new Error(`Row ${index + 1} is missing required fields (tradeName, genericName, price).`);
            }

            const quantity = parseInt(row.quantity) || 0;
            let stockStatus: StockStatus = "Out of Stock";
            if (quantity > 20) stockStatus = "In Stock";
            else if (quantity > 0) stockStatus = "Low Stock";

            return {
              id: Date.now() + index,
              tradeName: row.tradeName,
              genericName: row.genericName,
              strength: row.strength || 'N/A',
              dosageForm: row.dosageForm || 'N/A',
              category: row.category || 'General',
              stockStatus: stockStatus,
              quantity: quantity,
              price: row.price,
              pharmacyName: row.pharmacyName || 'Core Pharmacy',
              location: row.location || 'Unknown'
            };
          });

          onUploadSuccess(validatedData);
          onClose();
        } catch (err: any) {
          setError(err.message || 'Failed to parse CSV. Please check the format.');
        } finally {
          setIsProcessing(false);
        }
      },
      error: (err) => {
        setError('Error reading file: ' + err.message);
        setIsProcessing(false);
      }
    });
  };

  const downloadTemplate = () => {
    const csvContent = "tradeName,genericName,strength,dosageForm,category,quantity,price,pharmacyName,location\nPanadol,Paracetamol,500mg,Tablet,Pain Relief,100,500 FCFA,Core Pharmacy Douala,Douala\nAmoxil,Amoxicillin,500mg,Capsule,Antibiotic,50,2000 FCFA,Core Pharmacy Yaoundé,Yaoundé";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'pharmacy_inventory_template.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-[2.5rem] w-full max-w-xl overflow-hidden shadow-2xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Inventory Upload</h3>
              <p className="text-slate-500 font-medium">Update your stock via CSV file</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <X size={24} className="text-slate-400" />
            </button>
          </div>

          <div 
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]); }}
            className={`
              relative border-2 border-dashed rounded-[2rem] p-12 transition-all duration-300 flex flex-col items-center text-center
              ${isDragging ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200 bg-slate-50'}
              ${isProcessing ? 'opacity-50 pointer-events-none' : ''}
            `}
          >
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200/50 mb-6">
              <Upload className={`${isDragging ? 'text-emerald-500' : 'text-slate-400'}`} size={32} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              {isProcessing ? 'Processing File...' : 'Drag & Drop CSV'}
            </h4>
            <p className="text-slate-500 text-sm mb-8 max-w-[240px]">
              Upload your pharmacy inventory list to update the national database.
            </p>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-900/10"
            >
              Select File
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".csv" 
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3"
              >
                <AlertCircle className="text-rose-500 shrink-0" size={20} />
                <p className="text-sm font-bold text-rose-700">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <FileText className="text-slate-400" size={20} />
              <span className="text-xs font-bold text-slate-600 tracking-tight">Need a template?</span>
            </div>
            <button 
              onClick={downloadTemplate}
              className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest hover:text-emerald-700"
            >
              <Download size={14} />
              Download CSV
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
