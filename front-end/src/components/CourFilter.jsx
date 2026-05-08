import { useState } from "react"
import Input from "./ui/Input"

export default function CourFilter({setSearch,search,handlePoleChange,selectedPole,poles,selectedFiliere,filieres,selectedYear,setSelectedYear,years,handleFiliereChange}){
    return <>{/* Filters */}
      <section className="mx-auto px-6 py-8 w-full">
  <div className="text-center mb-5">
    <span className="text-[#00768d] text-xs font-semibold uppercase tracking-wide border-b-2 border-[#00768d] pb-0.5">
      Find a Module
    </span>
  </div>

  <div className=" rounded-2xl p-6 shadow-sm">
    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">

      {/* Search */}
      <div className="flex flex-col gap-1.5">
        <label className="ml-0.5 text-xs font-semibold text-gray-700">
          Search module
        </label>
        <div className="relative flex items-center">
          <svg className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Example: JavaScript"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-lg border-[1.5px] border-gray-300 bg-white pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#00768d]"
          />
        </div>
      </div>

      {/* Pôle */}
      <div className="flex flex-col gap-1.5">
        <label className="ml-0.5 text-xs font-semibold text-gray-700">
          Pôle
        </label>
        <div className="relative flex items-center">
          <svg className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          </svg>
          <select
            value={selectedPole}
            onChange={(e) => handlePoleChange(e.target.value)}
            className="h-11 w-full appearance-none rounded-lg border-[1.5px] border-gray-300 bg-white pl-9 pr-8 text-sm text-gray-900 outline-none transition focus:border-[#00768d] "
          >
            {poles.map((pole) => (
              <option key={pole} value={pole}>
                {pole === "All" ? "All Pôles" : pole}
              </option>
            ))}
          </select>
          <svg className="absolute right-3 h-3.5 w-3.5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Filière */}
      <div className="flex flex-col gap-1.5">
        <label className="ml-0.5 text-xs font-semibold text-gray-700">
          Filière
        </label>
        <div className="relative flex items-center">
          <svg className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
          <select
            value={selectedFiliere}
            onChange={(e) => handleFiliereChange(e.target.value)}
            className="h-11 w-full appearance-none rounded-lg border-[1.5px] border-gray-300 bg-white pl-9 pr-8 text-sm text-gray-900 outline-none transition focus:border-[#00768d] "
          >
            {filieres.map((filiere) => (
              <option key={filiere} value={filiere}>
                {filiere === "All" ? "All Filières" : filiere}
              </option>
            ))}
          </select>
          <svg className="absolute right-3 h-3.5 w-3.5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Year */}
      <div className="flex flex-col gap-1.5">
        <label className="ml-0.5 text-xs font-semibold text-gray-700">
          Year
        </label>
        <div className="relative flex items-center">
          <svg className="absolute left-3 h-4 w-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="h-11 w-full appearance-none rounded-lg border-[1.5px] border-gray-300 bg-white pl-9 pr-8 text-sm text-gray-900 outline-none transition focus:border-[#00768d] "
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === "All" ? "All Years" : year}
              </option>
            ))}
          </select>
          <svg className="absolute right-3 h-3.5 w-3.5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

    </div>
  </div>
</section>
        </>
}