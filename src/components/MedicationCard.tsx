import type { Medication } from '../types';
import { getBadgeStyle } from '../utils';

interface MedicationCardProps {
  medication: Medication;
  onReserve: (name: string) => void;
}

export function MedicationCard({ medication, onReserve }: MedicationCardProps) {
  const isOutOfStock = medication.stock === "Out of Stock";

  const handleReserve = () => {
    if (!isOutOfStock) {
      onReserve(medication.name);
    }
  };

  return (
    <article 
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group relative overflow-hidden"
      aria-label={`${medication.name} medication card`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-300 rounded-2xl pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Medication Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {medication.name}
        </h3>

        {/* Category */}
        <p className="text-sm text-gray-600 mb-4 font-medium">
          <span className="sr-only">Category: </span>
          {medication.category}
        </p>

        {/* Stock Badge */}
        <div className="mb-4">
          <span 
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${getBadgeStyle(medication.stock)}`}
            role="status"
            aria-label={`Stock status: ${medication.stock}`}
          >
            {medication.stock}
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-5">
          <span className="sr-only">Price: </span>
          {medication.price}
        </p>

        {/* Reserve Button */}
        <button
          onClick={handleReserve}
          disabled={isOutOfStock}
          className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-md ${
            isOutOfStock
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/20'
          }`}
          aria-label={isOutOfStock ? `${medication.name} is unavailable` : `Reserve ${medication.name} via WhatsApp`}
        >
          {isOutOfStock ? 'Unavailable' : 'Reserve via WhatsApp'}
        </button>
      </div>
    </article>
  );
}
