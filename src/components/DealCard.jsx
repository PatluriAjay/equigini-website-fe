import Image from "next/image";

export default function DealCard({ title, description, imageUrl, price, discount }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <Image src={imageUrl} alt={title} width={100} height={100} className="w-full h-32 object-cover rounded" />
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold text-green-600">{price}</span>
        {discount && <span className="text-sm text-red-500 line-through">{discount}</span>}
      </div>
    </div>
  );
}