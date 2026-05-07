// src/components/WhyChooseCMC.jsx

const items = [
  {
    title: "Practical Training",
    description:
      "Build real skills through hands-on projects, workshops, and professional training.",
    icon: "🎯",
  },
  {
    title: "Qualified Formateurs",
    description:
      "Learn with experienced formateurs who guide stagiaires step by step.",
    icon: "👨‍🏫",
  },
  {
    title: "Modern Campus",
    description:
      "Study in a modern environment designed for digital and professional learning.",
    icon: "🏫",
  },
  {
    title: "Career Focus",
    description:
      "Prepare for the job market with skills that match real professional needs.",
    icon: "🚀",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden ">
      {/* background shapes */}
      <div className="absolute left-0 top-20 h-48 w-48 rounded-full bg-[#00A7C7]/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-56 w-56 rounded-full bg-[#005F73]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* left content */}
          <div>
            <span className="inline-flex rounded-full bg-red-400 px-4 py-2 text-sm font-bold text-white">
              Why Choose CMC?
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#2B2B2B] md:text-5xl">
              Learn, Practice and Build Your Future Career
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              CMC Beni Mellal offers a professional learning experience where
              stagiaires develop practical skills, work on real projects, and
              prepare for the job market.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A7C7]/10 text-3xl transition group-hover:bg-[var(--color-bg-dark)]">
                    <span className="group-hover:scale-110 transition">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#2B2B2B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right visual */}
          <div className="relative">
            <div className="rounded-[2rem]  p-6">
              <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
                <div className="rounded-3xl bg-[var(--color-bg-dark)] p-8 text-white">
                  <p className="text-sm font-semibold text-red-400">
                    CMC Beni Mellal
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    Professional Training Center
                  </h3>

                  <p className="mt-4 leading-7 text-gray-300">
                    A modern learning space under OFPPT focused on practical
                    skills, innovation, and career success.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-3xl font-bold text-white">10+</p>
                      <p className="mt-1 text-sm text-gray-300">
                        Pôles Métiers
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-3xl font-bold text-white">90+</p>
                      <p className="mt-1 text-sm text-gray-300">Filières</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-5 shadow-xl md:block">
              <p className="text-sm font-semibold text-gray-500">
                Learning Method
              </p>
              <p className="mt-1 text-xl font-bold text-cyan-950">
                Practice First
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}