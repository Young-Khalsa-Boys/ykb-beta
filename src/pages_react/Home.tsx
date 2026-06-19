import { CalendarDays, ChevronRight, HandHeart, Heart, Map, Users } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgUrl})` }}
        >
          {/* Solid Dark Warm Overlay */}
          <div className="absolute inset-0 bg-[#19221C]/65 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <img
            src="/logo.png"
            alt="Young Khalsa Boys Logo"
            className="w-40 h-40 md:w-52 md:h-52 object-contain mb-8 drop-shadow-xl"
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-md mb-4">
            Young Khalsa Boys
          </h1>
          <p className="text-xl md:text-2xl text-amber-50/90 max-w-2xl font-serif italic drop-shadow-sm">
            Growing into compassionate leaders through selfless service and brotherhood.
          </p>
        </div>
      </section>

      {/* Rigid Action Buttons */}
      <section className="relative z-20 -mt-8 md:-mt-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 shadow-md rounded-lg bg-[#FFFDF9] p-4 md:p-3 border border-[#EADFC9]">
          
          {/* About Us Card */}
          <div className="col-span-1 rounded-md bg-[#FFFDF9] border border-[#EADFC9] hover:border-slate-400 overflow-hidden transition-all group">
            <a href="/about" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-blue)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-blue)]/5 rounded border border-[var(--ykb-blue)]/10 text-[var(--ykb-blue)] group-hover:bg-[var(--ykb-blue)] group-hover:text-white transition-colors">
                  <Map className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-lg text-[#2B2317]">About Us</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Members Card */}
          <div className="col-span-1 rounded-md bg-[#FFFDF9] border border-[#EADFC9] hover:border-slate-400 overflow-hidden transition-all group">
            <a href="/members" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-green)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-green)]/5 rounded border border-[var(--ykb-green)]/10 text-[var(--ykb-green)] group-hover:bg-[var(--ykb-green)] group-hover:text-white transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-lg text-[#2B2317]">Members</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Projects Card */}
          <div className="col-span-1 rounded-md bg-[#FFFDF9] border border-[#EADFC9] hover:border-slate-400 overflow-hidden transition-all group">
            <a href="/projects" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-orange)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-orange)]/5 rounded border border-[var(--ykb-orange)]/10 text-[var(--ykb-orange)] group-hover:bg-[var(--ykb-orange)] group-hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-lg text-[#2B2317]">Projects</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Fundraisers Card */}
          <div className="col-span-1 rounded-md bg-[#FFFDF9] border border-[#EADFC9] hover:border-slate-400 overflow-hidden transition-all group">
            <a href="/fundraisers" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-blue)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-blue)]/5 rounded border border-[var(--ykb-blue)]/10 text-[var(--ykb-blue)] group-hover:bg-[var(--ykb-blue)] group-hover:text-white transition-colors">
                  <HandHeart className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-lg text-[#2B2317]">Fundraisers</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Events Card */}
          <div className="col-span-1 rounded-md bg-[#FFFDF9] border border-[#EADFC9] hover:border-slate-400 overflow-hidden transition-all group">
            <a href="/events" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-green)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-green)]/5 rounded border border-[var(--ykb-green)]/10 text-[var(--ykb-green)] group-hover:bg-[var(--ykb-green)] group-hover:text-white transition-colors">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-lg text-[#2B2317]">Events</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Donate Card */}
          <div className="col-span-1 rounded-md bg-[var(--ykb-orange)] hover:bg-orange-600 overflow-hidden shadow-sm transition-all group">
            <a
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 h-full text-white text-center"
            >
              <span className="font-serif font-bold text-xl uppercase tracking-wider">Donate</span>
            </a>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[var(--ykb-blue)] text-sm font-sans font-bold uppercase tracking-widest mb-4">Our Mission</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2B2317] mb-8 leading-tight">
          Empowering Sikh boys through boy-led community service initiatives and mentorship.
        </h3>
        <p className="text-lg text-slate-700 leading-relaxed font-medium">
          Rooted in the Sikh principles of selfless service, we cultivate leadership, loyalty,
          integrity, empathy, courage, advocacy, humility, seva (service) and an unwavering
          commitment to community, while fostering lasting bonds of brotherhood and expanding
          personal networks to strengthen the Sikh community.
        </p>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="py-16 bg-[#19221C] border-t border-[#2d3a30]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[var(--ykb-orange)] text-sm font-sans font-bold uppercase tracking-widest mb-2">Moments in Action</h2>
            <h3 className="text-3xl font-serif font-bold text-white">Our Seva Journey</h3>
          </div>

          <div className="relative overflow-hidden group rounded-lg cursor-grab active:cursor-grabbing shadow-lg" ref={emblaRef}>
            <div className="flex backface-hidden">
              {carouselPhotos.map((photo, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_70%] lg:flex-[0_0_60%] px-2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[#253229]">
                    <img
                      src={photo}
                      alt={`YKB Gallery ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Absolute gradients for smooth edges on desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#19221C] to-transparent pointer-events-none" />
            <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#19221C] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
