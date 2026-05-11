export default function FilieresFilter({poles,setSelectedPole,selectedPole,setSearch,search}){
    return <section className="mx-auto max-w-7xl px-6 mb-7">
        <div className="mt-5 rounded-3xl border border-white/40 bg-white/70 p-6 shadow backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Search */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-gray-700">
                Search Filiere
              </label>
              <div className="relative">
              <input
                type="text"
                placeholder="Ex: Developement Digital"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 pl-11 text-sm outline-none transition focus:border-[#00A7C7] focus:ring-4 focus:ring-[#00A7C7]/10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
              </div>
            </div>

            {/* Pole */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold text-gray-700">
                Pôle
              </label>
              <div className="relative">
              <select
                value={selectedPole}
                onChange={(e)=> setSelectedPole(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#00A7C7] focus:ring-4 focus:ring-[#00A7C7]/10"
              >
                {
                poles.map(f=> <option key={f} value={f}>{f}</option>)
              }
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ⌄
              </span>
              </div>
            </div>
          </div>
        </div>
        </section>
}