export default function Home() {
  return (
    <section className=" min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <span className="badge bg-red-400 text-white px-4 py-2 rounded-full" >OFPPT • CMC Beni Mellal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-5">
            Build Your Future at <span className="text-red-400">CMC</span> Beni Mellal
          </h1>

          <p className="mt-4 text-gray-600">
            A vocational training center under OFPPT offering practical programs to help stagiaires gain real-world skills and prepare for the job market.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-cmc-cyan-dark text-white px-6 py-3 rounded-lg hover:translate-y-[-2px] transition-all">
              Explore Filières
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className=" flex items-center justify-center">
          <img
            src="../static/pictures/cmc-hero.png"
            alt="education"
            className="w-100 object-cover"
          />
        </div>

      </div>
    </section>
  );
}