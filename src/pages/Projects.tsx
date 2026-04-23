import { MapPin, Users } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    title: "Community Kitchen (Langar) Reboot",
    location: "Sikh Gurdwara, Paramus NJ",
    helped: "500+ Local Residents",
    blurb: "Our members organized and executed a massive clean-up and restructuring of the local Gurdwara's community kitchen. We implemented new hygiene stations and improved the flow of the Langar line, ensuring safe and efficient food distribution for all visitors, regardless of background.",
    placeholderImageId: 1
  },
  {
    id: 2,
    title: "Park Restoration and Clean-up",
    location: "Thielke Arboretum, Glen Rock NJ",
    helped: "Local Environment & Community",
    blurb: "Dedicating a full weekend, the YKB team removed over 200 pounds of litter and invasive plant species from the local arboretum. We also planted indigenous flora to help restore the natural habitat and make the park a more hospitable environment for local wildlife and families.",
    placeholderImageId: 2
  },
  {
    id: 3,
    title: "Winter Clothing Drive",
    location: "Bergen County Shelters",
    helped: "150+ Homeless Individuals",
    blurb: "As winter approached, our members led a multi-week clothing drive, collecting coats, gloves, and blankets. We sorted, cleaned, and personally distributed these essential items to multiple shelters across Bergen County, embodying the Sikh principle of Vand Chhako (sharing with others).",
    placeholderImageId: 3
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white pt-16 pb-24">
      {/* Header */}
      <div className="mb-20 text-center max-w-3xl mx-auto px-4 mt-8">
        <h2 className="text-[var(--ykb-green)] font-bold uppercase tracking-widest text-sm mb-4">Our Projects</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Seva in Action</h1>
        <p className="text-lg text-slate-600">
          We believe in putting our faith into practice. Explore some of our recent community service initiatives where our members took the lead in making a tangible difference.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {projectsList.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-md group">
                <div className="absolute inset-0 bg-slate-800/5 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                  <svg className="w-16 h-16 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-sm tracking-widest">PROJECT IMAGE {project.id}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg w-fit border border-slate-100">
                  <MapPin className="w-5 h-5 text-[var(--ykb-orange)]" />
                  <span className="font-medium text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg w-fit border border-slate-100">
                  <Users className="w-5 h-5 text-[var(--ykb-blue)]" />
                  <span className="font-medium text-sm">Helped: {project.helped}</span>
                </div>
              </div>

              <div className="w-12 h-1 bg-[var(--ykb-green)] rounded-full my-6" />

              <p className="text-lg text-slate-600 leading-relaxed">
                {project.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
