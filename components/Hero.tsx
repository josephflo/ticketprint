export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4 text-left w-full max-w-[1092px]">
        Bienvenido a Ticketer
      </h1>
      <div className="w-full max-w-[1092px] bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-8 md:p-12 shadow-lg border-2 border-pink-500"
        style={{ boxShadow: "0 0 24px 4px #ec4899" }}>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-left leading-tight">
          <span className="text-pink-500">Your Ultimate Movie Experience </span>
          <span className="text-cyan-400">Awaits in the Digital Cosmos</span>
        </h2>
        <p className="text-lg text-white mb-8">
          Book tickets, discover new films, connect with fellow movie lovers, and earn cosmic rewards with every visit to the digital realm.
        </p>
        <div className="flex gap-4">
          <button className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-pink-600 transition-all ring-2 ring-pink-400">
            Book Tickets Now
          </button>
          <button className="bg-transparent text-cyan-400 font-semibold px-6 py-2 rounded-full border border-cyan-400 hover:bg-cyan-900 transition-all">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}