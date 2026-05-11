// src/components/PopularFilieres.jsx

const filieres = [
  {
    title: "Développement Digital",
    pole: "Digital & IA",
    description: "Web development, programming, databases and digital tools.",
    icon: "💻",
  },
  {
    title: "Infrastructure Digitale",
    pole: "Digital & IA",
    description: "Networks, systems, cybersecurity and IT infrastructure.",
    icon: "🌐",
  },
  {
    title: "Gestion des Entreprises",
    pole: "Gestion & Commerce",
    description: "Business management, administration and organization.",
    icon: "📊",
  },
  {
    title: "Commerce",
    pole: "Gestion & Commerce",
    description: "Sales, marketing and customer relationship skills.",
    icon: "🛒",
  },
];

export default function PopularFilieres() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-brand font-semibold border-b-2 border-brand pb-1">
              Our Filières
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#2B2B2B] md:text-5xl">
              Explore Training Programs
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600 leading-7">
              Discover some of the main filières available at CMC Beni Mellal
              and choose the path that matches your future goals.
            </p>
          </div>

          <a
            href="/filieres"
            className="w-fit rounded-xl bg-secondary-500 px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-secondary-700)]"
          >
            View All Filières
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filieres.map((filiere) => (
            <article
              key={filiere.title}
              className="group rounded-3xl border border-gray-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {filiere.icon}
              </div>

              <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
                {filiere.pole}
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#2B2B2B]">
                {filiere.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {filiere.description}
              </p>

              <button className="mt-6 font-semibold text-secondary-400 group-hover:underline">
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}