export default function ValuesCard({
  title,
  description,
}) {
  return (
    <div className={`bg-white   rounded-2xl shadow-lg ring-0 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="section-container-heading md:text-center">{title}</h3>
        <p className="md:text-center flex-1 section-container-paragraph">{description}</p>
      </div>
    </div>
  );
} 