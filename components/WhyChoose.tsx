export default function WhyChoose() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Tickify?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold mb-2">Ventaja {i + 1}</h3>
            <p className="text-gray-600 text-center">Descripción breve de la ventaja {i + 1}.</p>
          </div>
        ))}
      </div>
    </>
  );
}
