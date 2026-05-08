import { ArrowRight, BookOpen, Clock3, Layers } from "lucide-react";
import { Link } from "react-router-dom";

export default function SingleCour({ img, title, description, filiere, pole, year, duration, link, slug, index }) {
  return (
    <article
      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl animate-fadeInUp opacity-0"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary-500/10 to-vibrant-500/15">
            <BookOpen className="h-16 w-16 text-primary-600 opacity-80" />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
            <Layers className="h-3.5 w-3.5 text-vibrant-200" />
            {year}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary-700">
            {pole}
          </span>
          <span className="rounded-full bg-vibrant-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-vibrant-700">
            {filiere}
          </span>
          {slug ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600">
              {slug}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl font-semibold text-neutral-900 leading-tight line-clamp-2">{title}</h3>

        <p className="text-sm leading-6 text-neutral-600 line-clamp-3">{description}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 text-sm text-neutral-500">
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-primary-500" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-2 text-neutral-700">
            <BookOpen className="h-4 w-4 text-vibrant-500" />
            Module
          </span>
        </div>

        <Link
          to={link || `#`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary-800"
        >
          View course
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
