export default function Home() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Future at CMC Beni Mellal
          </h1>

          <p className="mt-4 text-gray-600">
            A professional training center offering practical programs to help stagiaires gain real-world skills and prepare for the job market.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-cmc-cyan text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Explore Filières
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="">
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