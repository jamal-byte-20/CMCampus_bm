export default function Stats() {
  const stats = [
    { number: "10+", label: "Pôles Métiers" },
    { number: "90+", label: "Filières" },
    { number: "2800+", label: "Stagiaires" },
    { number: "40+", label: "Formateurs" },
  ];

  return (
    <section className="bg-primary-400 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          CMC in Numbers
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A modern training center with a strong impact on professional education.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl p-8 backdrop-blur transition hover:bg-white"
            >
              <h3 className="text-4xl font-bold text-secondary-700">
                {item.number}
              </h3>

              <p className="mt-2 text-secondary-300 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}