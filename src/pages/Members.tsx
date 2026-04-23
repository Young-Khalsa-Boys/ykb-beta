const membersList = [
  // { id: 1, name: "Sample Name", role: "Sample Subtext" },
  // { id: 2, name: "Sample Name 2" },
];

export default function Members() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      {/* Header Component */}
      <div className="mb-16 text-center max-w-3xl mx-auto px-4 mt-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Members</h1>
        <p className="text-lg text-slate-600">
          Meet the dedicated young men who make our Seva possible. A brotherhood committed to community service.
        </p>
      </div>

      COMING SOON!!!

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {membersList.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 group-hover:-translate-y-1"
            >
              {/* Headshot wireframe container */}
              <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--ykb-green)]/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                  <svg className="w-16 h-16 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs font-medium uppercase tracking-widest">Headshot</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[var(--ykb-orange)]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
