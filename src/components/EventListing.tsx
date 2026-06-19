import { useEffect, useState } from 'react';

export interface EventItem {
  id: string;
  name: string;
  category: string;
  date: string;
  location: string;
  images: {
    src: string;
    alt: string;
  }[];
  summary: string;
  impact: string;
}

interface EventListingProps {
  eyebrow: string;
  title: string;
  intro: string;
  items: EventItem[];
  emptyMessage?: string;
}

function EventPhotoCarousel({ event }: { event: EventItem }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = event.images[activeIndex] ?? event.images[0];
  const hasMultipleImages = event.images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % event.images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [event.images.length, hasMultipleImages]);

  if (!activeImage) {
    return <div className="aspect-[16/10] bg-[#EADFC9]" aria-label={`Photo area for ${event.name}`} />;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? event.images.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % event.images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden bg-[#FFFDF9]">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
        />

        {hasMultipleImages && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#19221C]/75 px-4 py-3 text-white">
            <button
              type="button"
              onClick={goToPrevious}
              className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#F7B267]"
            >
              Previous
            </button>
            <p className="text-sm font-semibold">
              {activeIndex + 1} / {event.images.length}
            </p>
            <button
              type="button"
              onClick={goToNext}
              className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#F7B267]"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {hasMultipleImages && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {event.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-20 w-28 flex-shrink-0 overflow-hidden border-2 ${
                activeIndex === index ? 'border-[var(--ykb-orange)]' : 'border-transparent'
              }`}
              aria-label={`Show photo ${index + 1} for ${event.name}`}
            >
              <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function EventListing({ eyebrow, title, intro, items, emptyMessage }: EventListingProps) {
  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-16 pb-24">
      <section className="bg-[#FFFDF9] border-y border-[#EADFC9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--ykb-green)] font-sans font-bold uppercase tracking-widest text-sm mb-5">
            {eyebrow}
          </p>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-end">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2B2317] leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif">{intro}</p>
          </div>
        </div>
      </section>

      {items.length === 0 ? (
        <div className="max-w-4xl mx-auto px-4 text-center py-16">
          <div className="bg-[#FFFDF9] border border-[#EADFC9] py-14 px-6 font-serif font-bold text-xl text-[var(--ykb-orange)] tracking-widest">
            {emptyMessage ?? 'COMING SOON!!!'}
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-[#FFFDF9] border border-[#EADFC9] shadow-sm p-5 md:p-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start"
            >
              <EventPhotoCarousel event={item} />

              <div className="lg:pt-4">
                <p className="text-[var(--ykb-orange)] text-sm font-bold uppercase tracking-widest mb-4">{item.category}</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2B2317] leading-tight mb-8">
                  {item.name}
                </h2>

                <dl className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5 border-y border-[#EADFC9] py-6 mb-8">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">When</dt>
                    <dd className="font-semibold text-[#2B2317]">{item.date}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Where</dt>
                    <dd className="font-semibold text-[#2B2317]">{item.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Why</dt>
                    <dd className="font-semibold text-[#2B2317]">{item.impact}</dd>
                  </div>
                </dl>

                <p className="text-lg text-slate-700 leading-relaxed">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
