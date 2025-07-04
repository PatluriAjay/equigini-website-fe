export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const base =
    "px-6 py-1 md:py-2.5 text-sm md:text-xxl h-10 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center";
  const variants = {
    primary:
      "rounded-md bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent",
    primaryoutline:
      "rounded-full bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent",
    secondary:
      "rounded-full bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-transparent",
    outline:
      "rounded-md bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white focus:ring-transparent",
    rounded:
      " rounded-full bg-purple-600 font-light text-white border border-purple-600 hover:bg-white hover:text-purple-600 focus:ring-transparent font-extralight",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
} 