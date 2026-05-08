import { Link } from "react-router-dom"

export default function FilieresGrid({filieres}){
    return <section className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center mb-10 gap-y-10">
  {filieres.map((filiere) => (
    <article className="w-[350px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-x  hover:border-gray-700">
      
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={filiere.image}
          alt="course"
          className="h-[170px] w-full object-cover"
        />
      </div>

      {/* pole */}
      <div className="mt-4 flex items-center justify-center gap-2">
        
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {filiere.pole}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4  text-[22px] font-bold leading-snug text-[#2B2B2B]">
        {filiere.title}
      </h3>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">

        <span className="text-sm text-gray-600">
          {filiere.description}
        </span>
      </div>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between">
        
        <Link to={`/filieres/${filiere.slug || filiere.id}`}>
        <button className="rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004755]">
          Learn More
        </button>
        </Link>

      </div>
    </article>
  ))}
</section>
}