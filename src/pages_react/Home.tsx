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
    title: 'About Us',
    text: 'Learn the mission and values behind Young Khalsa Boys.',
    href: '/about',
    cta: 'Meet YKB',
  },
  {
    title: 'Members',
    text: 'See the brotherhood helping lead service in our community.',
    href: '/members',
    cta: 'Meet the group',
  },
  {
    title: 'Projects',
    text: 'Follow the seva work our members are building together.',
    href: '/projects',
    cta: 'View projects',
  },
  {
    title: 'Fundraisers',
    text: 'Support the efforts that help make our service possible.',
    href: '/fundraisers',
    cta: 'See fundraisers',
  },
  {
    title: 'Events',
    text: 'Find upcoming service days, community events, and recaps.',
    href: '/events',
    cta: 'View events',
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

      {/* Ways to Get Involved */}
      <section className="relative z-20 -mt-8 md:-mt-12 max-w-6xl mx-auto px-4">
        <div className="bg-[#FFFDF9] border border-[#EADFC9] shadow-md">
          <div className="px-6 py-6 md:px-8 border-b border-[#EADFC9]">
            <p className="text-[var(--ykb-orange)] text-sm font-bold uppercase tracking-widest mb-2">
              Make a Difference
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2B2317]">
              Small acts of seva add up.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-[#EADFC9]">
            {actionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-44 p-6 border-b sm:border-r border-[#EADFC9] last:border-b-0 hover:bg-[#FAF6EE] transition-colors"
              >
                <h3 className="text-2xl font-serif font-bold text-[#2B2317] mb-3">{link.title}</h3>
                <p className="text-slate-700 leading-relaxed mb-5">{link.text}</p>
                <span className="text-sm font-bold uppercase tracking-widest text-[var(--ykb-blue)]">{link.cta}</span>
              </a>
            ))}
          </div>

          <div className="bg-[var(--ykb-orange)] hover:bg-orange-600 transition-colors">
            <a
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-20 items-center justify-center px-6 py-5 text-white text-center"
            >
              <span className="font-serif font-bold text-xl uppercase tracking-wider leading-tight">Donate to Support the Work</span>
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
