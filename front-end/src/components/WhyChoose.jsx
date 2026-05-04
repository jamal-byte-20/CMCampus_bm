// src/components/WhyChoose.jsx

const features = [
  {
    title: "Professional Training",
    description: "Gain practical skills through real-world training programs.",
    icon: "🎓",
  },
  {
    title: "Experienced Formateurs",
    description: "Learn from qualified and industry-oriented formateurs.",
    icon: "👨‍🏫",
  },
  {
    title: "Modern Learning Environment",
    description: "Study in a dynamic and digital-friendly campus.",
    icon: "💻",
  },
  {
    title: "Career Opportunities",
    description: "Prepare yourself for the job market with confidence.",
    icon: "🚀",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#00A7C7] font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            Why Choose CMC Beni Mellal?
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Discover why CMC Beni Mellal is the right place to build your skills
            and prepare for a successful career.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-gray-200 bg-gray-50 p-7 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A7C7]/10 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#2B2B2B]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-12 rounded-full bg-[#00A7C7] transition group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}