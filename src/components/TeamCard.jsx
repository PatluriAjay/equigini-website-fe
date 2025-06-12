import Image from "next/image";

export default function TeamCard({ title, description, imageUrl, price, discount }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <Image src={imageUrl} alt={title} width={100} height={50} className="w-full object-cover rounded" style={{height: '40vh'}} />
      <h3 className="card-heading mt-3 mb-2 text-lg-override">{title}</h3>
      <p className="card-paragraph">{description}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold text-green-600">{price}</span>
        {discount && <span className="text-sm text-red-500 line-through">{discount}</span>}
      </div>
    </div>
  );
}