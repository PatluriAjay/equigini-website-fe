export default function SectionLoader({ text = "Loading...", size = "medium" }) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8", 
    large: "h-12 w-12"
  };

  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative mb-4">
        {/* Main spinner */}
        <div className={`${sizeClasses[size]} border-2 border-gray-200 rounded-full animate-spin`}>
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-2 border-transparent border-t-purple-600 rounded-full animate-spin`}></div>
        </div>
        
        {/* Pulse effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} bg-purple-100 rounded-full animate-ping opacity-20`}></div>
      </div>
      
      {text && (
        <div className={`${textSizes[size]} text-gray-600 font-medium`}>
          {text}
        </div>
      )}
    </div>
  );
} 