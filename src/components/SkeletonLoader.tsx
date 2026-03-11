import React from 'react';

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm animate-pulse flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
        <div className="w-20 h-5 bg-gray-200 rounded-full"></div>
      </div>
      <div className="flex-grow">
        <div className="w-24 h-3 bg-gray-100 rounded mb-2"></div>
        <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
        <div className="w-2/3 h-6 bg-gray-200 rounded"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-24 h-10 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};
