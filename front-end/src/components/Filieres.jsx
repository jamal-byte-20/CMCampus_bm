import { useState } from "react";



const filieres = [
  {
    title: "Développement Digital",
    description: "Learn web development, programming and modern technologies.",
  },
  {
    title: "Infrastructure Digitale",
    description: "Master networks, systems and IT infrastructure.",
  },
  {
    title: "Gestion des Entreprises",
    description: "Develop business and management skills.",
  },
  {
    title: "Commerce",
    description: "Learn sales, marketing and business strategies.",
  },
  {
    title: "Électricité",
    description: "Study electrical systems and industrial technologies.",
  },
  {
    title: "Électronique",
    description: "Understand electronic circuits and devices.",
  },
];


export default function Filieres() {
  return (
    <section className="bg-gray-50 py-24" id="filiers">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#00A7C7] font-semibold">
            Our Programs
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2B2B2B]">
            Explore Our Filières
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Discover the different training programs available at CMC Beni Mellal
            and choose the path that fits your future.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filieres.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white p-7 border border-gray-200 hover:shadow-xl transition hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-2xl bg-[#00A7C7]/10 text-2xl">
                🎯
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2B2B2B]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

              {/* Link */}
              <button className="mt-6 text-[#00A7C7] font-semibold group-hover:underline">
                Learn more →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}