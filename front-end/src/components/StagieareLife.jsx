export default function StagiaireLife() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <span className="text-[#00A7C7] font-semibold">
            Student Life
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            A Modern Campus Experience for Every Stagiaire
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            At CMC Beni Mellal, stagiaires learn in a dynamic environment that
            combines practical training, teamwork, digital tools and career
            preparation.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
              <h3 className="font-bold text-[#2B2B2B]">Practical Learning</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Learn through projects and real situations.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
              <h3 className="font-bold text-[#2B2B2B]">Teamwork</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Collaborate with other stagiaires.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
              <h3 className="font-bold text-[#2B2B2B]">Digital Tools</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Use modern tools for learning and practice.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
              <h3 className="font-bold text-[#2B2B2B]">Career Focus</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Prepare for professional opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="rounded-3xl bg-[#00A7C7]/10 p-6">
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 rounded-2xl bg-[#00A7C7]/20 flex items-center justify-center text-5xl">
                  🎓
                </div>
                <div className="h-40 rounded-2xl bg-gray-100 flex items-center justify-center text-5xl">
                  💻
                </div>
                <div className="h-40 rounded-2xl bg-gray-100 flex items-center justify-center text-5xl">
                  🤝
                </div>
                <div className="h-40 rounded-2xl bg-[#00A7C7]/20 flex items-center justify-center text-5xl">
                  🚀
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-[#00A7C7] text-white rounded-2xl p-5 shadow-lg hidden md:block">
            <p className="text-sm">Campus Life</p>
            <h3 className="text-xl font-bold">Learn. Practice. Grow.</h3>
          </div>
        </div>

      </div>
    </section>
  );
}