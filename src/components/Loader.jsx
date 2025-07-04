export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primarycolor mx-auto mb-4"></div>
        <div className="text-lg text-gray-600">{text}</div>
      </div>
    </div>
  );
} 