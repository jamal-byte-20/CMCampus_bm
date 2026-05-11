import { useState } from "react"

export default function CourFilter({setSearch,search,handlePoleChange,selectedPole,poles,selectedFiliere,filieres,selectedYear,setSelectedYear,years,handleFiliereChange}){
    return <>{/* Filters */}
      <section className="mx-auto px-6">
        <div className="rounded-3xl p-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Search */}
            <div>
              <label className="ml-3 mb-2 block text-sm font-semibold text-gray-700">
                Search module
              </label>
              <input
                type="text"
                placeholder="Example: JavaScript"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-[5px] border border-gray-400 px-4 py-3 outline-none transition focus:border-[#005f72] bg-white "
              />
            </div>

            {/* Pole */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Pôle
              </label>
              <select
                value={selectedPole}
                onChange={(e) => handlePoleChange(e.target.value)}
                className="w-full rounded-[5px] border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#00768d] "
              >
                {poles.map((pole) => (
                  <option key={pole} value={pole}>
                    {pole === "All" ? "All Pôles" : pole}
                  </option>
                ))}
              </select>
            </div>

            {/* Filiere */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Filière
              </label>
              <select
                value={selectedFiliere}
                onChange={(e) => handleFiliereChange(e.target.value)}
                className="w-full rounded-[5px] border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#00768d]"
              >
                {filieres.map((filiere) => (
                  <option key={filiere} value={filiere}>
                    {filiere === "All" ? "All Filières" : filiere}
                  </option>
                ))}
              </select>
            </div>

            {/* years */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full rounded-[5px] border border-gray-400 bg-white px-4 py-3 outline-none transition focus:border-[#00768d]"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "All" ? "All Years" : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        </section>
        </>
}