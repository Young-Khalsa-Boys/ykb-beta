import useEmblaCarousel from 'embla-carousel-react';
import heroBg from '../assets/herosectionbg.jpeg';
import { useEffect } from 'react';
import type { ImageMetadata } from 'astro';

// For the carousel
const carouselPhotos = [
  "/photocarousel/ykb_c0-lunch.jpeg",
  "/photocarousel/ykb_c1-basketball.png",
  "/photocarousel/ykb_c2-pres1.jpeg",
  "/photocarousel/ykb_c3-pres2.jpeg",
  "/photocarousel/ykb_c4-pres3.jpeg"
];

const actionLinks = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Members',
    href: '/members',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Fundraisers',
    href: '/fundraisers',
  },
  {
    title: 'Donate',
    href: 'https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc',
    external: true,
  },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const heroBgUrl = typeof heroBg === 'string' ? heroBg : (heroBg as ImageMetadata).src;

  useEffect(() => {
    if (emblaApi) {
      // Setup auto-play basic logic
      const timer = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [emblaApi]);

  return (
    <div className="w-full bg-[#FAF6EE]">
      <section className="relative min-h-[620px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgUrl})` }}
        >
          <div className="absolute inset-0 bg-[#19221C]/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
          <img
            src="/logo.png"
            alt="Young Khalsa Boys Logo"
            className="w-36 h-36 md:w-44 md:h-44 object-contain mb-8 drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Young Khalsa Boys
          </h1>
          <p className="text-xl md:text-2xl text-amber-50/95 max-w-3xl font-serif leading-relaxed">
            A boy-led group focused on serving humanity through brotherhood, leadership, humility, and sewa.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          We empower Sikh boys to grow into compassionate leaders through community service initiatives,
          mentorship, and lasting bonds rooted in selfless service.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {actionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group block"
            >
              <div className="aspect-[4/5] bg-[#FFFDF9] border border-[#EADFC9] flex items-center justify-center p-8 transition-colors group-hover:bg-[#FAF6EE]">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-24 w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center text-sm font-bold uppercase tracking-widest text-[#2B2317] group-hover:text-[var(--ykb-orange)] transition-colors">
                {link.title}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#19221C] border-t border-[#2d3a30]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[var(--ykb-orange)] text-sm font-sans font-bold uppercase tracking-widest mb-3">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Moments in Action</h2>
          </div>

          <div className="relative overflow-hidden group cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex backface-hidden">
              {carouselPhotos.map((photo, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_70%] lg:flex-[0_0_60%] px-2">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#253229]">
                    <img
                      src={photo}
                      alt={`YKB Gallery ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#19221C] to-transparent pointer-events-none" />
            <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#19221C] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
