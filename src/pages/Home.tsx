import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Users, Map } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroBg from '../assets/herosectionbg.png';
import { useEffect } from 'react';

// For the carousel
const carouselPhotos = [
  // "https://images.unsplash.com/photo-1593113511342-f87fdbbe7e8e?auto=format&fit=crop&q=80&w=1200",
  // "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=1200",
  // "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1200",
  // "https://images.unsplash.com/photo-1529156069898-49953eb1f55f?auto=format&fit=crop&q=80&w=1200"
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Gloss/Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <img
            src="/logo.png"
            alt="Young Khalsa Boys Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mb-8 drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
            Young Khalsa Boys
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl font-medium drop-shadow-md">
            Growing into compassionate leaders through selfless service and brotherhood.
          </p>
        </div>
      </section>

      {/* Rigid Action Buttons */}
      <section className="relative z-20 -mt-8 md:-mt-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl rounded-2xl bg-white/50 backdrop-blur-xl p-4 md:p-2 border border-white/40">
          <div className="col-span-1 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <Link to="/about" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-blue)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-blue)]/10 rounded-lg group-hover:bg-[var(--ykb-blue)] group-hover:text-white transition-colors text-[var(--ykb-blue)]">
                  <Map className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">About Us</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="col-span-1 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <Link to="/members" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-green)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-green)]/10 rounded-lg group-hover:bg-[var(--ykb-green)] group-hover:text-white transition-colors text-[var(--ykb-green)]">
                  <Users className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Members</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="col-span-1 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <Link to="/projects" className="flex items-center justify-between p-6 h-full text-slate-800 hover:text-[var(--ykb-orange)] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[var(--ykb-orange)]/10 rounded-lg group-hover:bg-[var(--ykb-orange)] group-hover:text-white transition-colors text-[var(--ykb-orange)]">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Projects</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="col-span-1 rounded-xl bg-[var(--ykb-orange)] overflow-hidden shadow-sm shadow-orange-500/20 hover:shadow-lg transition-all hover:-translate-y-1 group">
            <a
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 h-full text-white"
            >
              <span className="font-bold text-xl uppercase tracking-wider">Donate</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[var(--ykb-blue)] text-sm font-bold uppercase tracking-widest mb-4">Our Mission</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
          Empowering Sikh boys through boy-led community service initiatives and mentorship.
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          Rooted in the Sikh principles of selfless service, we cultivate leadership, loyalty,
          integrity, empathy, courage, advocacy, humility, seva (service) and an unwavering
          commitment to community, while fostering lasting bonds of brotherhood and expanding
          personal networks to strengthen the Sikh community.
        </p>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[var(--ykb-orange)] text-sm font-bold uppercase tracking-widest mb-2">Moments in Action</h2>
            <h3 className="text-3xl font-bold text-white">Our Seva Journey</h3>
          </div>

          <div className="relative overflow-hidden group rounded-2xl cursor-grab active:cursor-grabbing shadow-2xl" ref={emblaRef}>
            <div className="flex backface-hidden">
              {carouselPhotos.map((photo, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_70%] lg:flex-[0_0_60%] px-2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-800">
                    <img
                      src={photo}
                      alt={`YKB Gallery ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Absolute gradients for smooth edges on desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
            <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
