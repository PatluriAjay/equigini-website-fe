"use client";

export default function PageLoader({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primarycolor mx-auto mb-4"></div>
      </div>
    </div>
  );
} 