export default function ValuesCard({
  title,
  description,
}) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg md:text-xl md:text-center font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 md:text-center dark:text-gray-300 mb-4 text-sm md:text-xxl flex-1">{description}</p>
      </div>
    </div>
  );
} 