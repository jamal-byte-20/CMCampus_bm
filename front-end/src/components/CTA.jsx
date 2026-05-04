export default function CTA() {
  return (
    <section className="bg-[#00A7C7] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Start Your Journey?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-8">
          Discover our training programs and take the first step toward your
          future career at CMC Beni Mellal.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="bg-white text-[#00A7C7] px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Explore Filières
          </button>

          <button className="bg-transparent border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00A7C7] transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}