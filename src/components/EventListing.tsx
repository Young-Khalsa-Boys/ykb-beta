import { CalendarDays, ChevronDown, HandHeart, MapPin, Users } from 'lucide-react';

export interface EventItem {
  id: string;
  name: string;
  category: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string;
  impact: string;
}

interface EventListingProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: EventItem[];
  emptyMessage?: string;
}

export function EventListing({ eyebrow, title, intro, items, emptyMessage }: EventListingProps) {
  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-20 pb-24">
      <div className="mb-20 text-center max-w-3xl mx-auto px-4 mt-8">
        <h2 className="text-[var(--ykb-green)] font-sans font-bold uppercase tracking-widest text-sm mb-4">
          {eyebrow}
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2B2317] mb-6">{title}</h1>
        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">{intro}</p>
      </div>

      {items.length === 0 ? (
        <div className="max-w-md mx-auto px-4 text-center py-12">
          <div className="bg-[#FFFDF9] border border-[#EADFC9] rounded-lg py-12 px-6 shadow-sm font-serif font-bold text-xl text-[var(--ykb-orange)] tracking-widest">
            {emptyMessage ?? 'COMING SOON!!!'}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`flex flex-col md:flex-row gap-10 items-stretch ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#FFFDF9] border border-[#EADFC9] shadow-sm">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 bg-[#FFFDF9] border border-[#EADFC9] rounded-lg p-6 md:p-8 shadow-sm flex flex-col">
                <span className="w-fit mb-4 px-3 py-1 rounded bg-[var(--ykb-orange)]/10 border border-[var(--ykb-orange)]/20 text-[var(--ykb-orange)] text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#2B2317] mb-5">{item.name}</h3>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CalendarDays className="w-5 h-5 text-[var(--ykb-blue)] flex-shrink-0" />
                    <span className="font-semibold text-sm">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-[var(--ykb-orange)] flex-shrink-0" />
                    <span className="font-semibold text-sm">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="w-5 h-5 text-[var(--ykb-green)] flex-shrink-0" />
                    <span className="font-semibold text-sm">{item.impact}</span>
                  </div>
                </div>

                <div className="w-12 h-1 bg-[var(--ykb-green)] rounded-full mb-6" />

                <p className="text-slate-700 leading-relaxed mb-6">{item.summary}</p>

                <details className="group mt-auto border-t border-[#EADFC9] pt-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[var(--ykb-blue)] font-bold">
                    <span className="inline-flex items-center gap-2">
                      <HandHeart className="w-5 h-5" />
                      View more
                    </span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-slate-700 leading-relaxed">{item.details}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
