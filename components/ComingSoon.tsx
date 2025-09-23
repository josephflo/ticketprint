export default function ComingSoon() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-8">Coming Soon</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="font-bold mb-2">Función {i + 1}</h3>
            <p className="text-gray-600 text-center">Próximamente disponible.</p>
          </div>
        ))}
      </div>
    </>
  );
}