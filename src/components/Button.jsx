export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const base =
    "px-6 py-1 md:py-2.5 text-sm md:text-xl h-12 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center";
  const variants = {
    primary:
      "bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent",
    secondary:
      "bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-transparent",
    outline:
      "bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-transparent",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
} 