export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 text-black">
      
      {/* Background shapes */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Start Your Journey at CMC?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-black max-w-2xl mx-auto leading-8">
          Explore our filières and take the first step toward building your
          professional future with CMC Beni Mellal.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <a
            href="/filieres"
            className="rounded-xl bg-primary-100 px-7 py-3 font-semibold text-secondary-400 transition hover:bg-white hover:text-black hover:scale-97 hover:border-1"
          >
            Explore Filières
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-secondary-500"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}