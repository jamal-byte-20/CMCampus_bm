export default function Home() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center pt-24 md:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Future at CMC Beni Mellal
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            A professional training center offering practical programs to help stagiaires gain real-world skills and prepare for the job market.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Explore Filières
            </button>

            <button className="border border-neutral-300 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="../static/pictures/cmc-hero.png"
            alt="education"
            className="w-full max-w-sm sm:max-w-md md:max-w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}