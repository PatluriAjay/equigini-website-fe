import Image from "next/image";

export default function Card({
  title,
  description,
  imageUrl,
  icon,
  color = "bg-gray-100",
  children,
  className = "",
}) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl ${className}`}>
      {icon && (
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color} mt-5 ml-5 mb-2`}>
          {icon}
        </div>
      )}
      {imageUrl && (
        <Image src={imageUrl} alt={title}  width={100} height={100} className="w-full h-40 object-cover" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="card-heading mb-1 text-lg-override">{title}</h3>
        <p className="card-paragraph mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
} 