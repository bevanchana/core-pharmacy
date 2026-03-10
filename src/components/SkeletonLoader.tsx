export function SkeletonLoader() {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 animate-pulse"
      role="status"
      aria-label="Loading medication"
    >
      {/* Medication Name Skeleton */}
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>

      {/* Category Skeleton */}
      <div className="h-4 bg-gray-200 rounded mb-3 w-1/2"></div>

      {/* Stock Badge Skeleton */}
      <div className="mb-3">
        <div className="h-6 bg-gray-200 rounded-full w-24 inline-block"></div>
      </div>

      {/* Price Skeleton */}
      <div className="h-7 bg-gray-300 rounded mb-4 w-1/3"></div>

      {/* Reserve Button Skeleton */}
      <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
      
      <span className="sr-only">Loading medication information</span>
    </div>
  );
}
