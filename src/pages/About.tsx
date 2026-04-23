export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header */}
      <div className="bg-[var(--ykb-blue)] text-white py-24 mb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Organization</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover who we are, where we come from, and the core tenets that drive our mission forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Mission Statement */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--ykb-orange)]/10 rounded-bl-full pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[var(--ykb-orange)] font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed">
              Young Khalsa Boys empowers Sikh boys to grow into the next generation of compassionate leaders through boy-led community service initiatives and mentorship.
            </p>
          </div>
        </section>

        {/* Two Column Layout for Origin & Seva */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Origin */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-[var(--ykb-blue)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--ykb-blue)]">
              <svg className="w-6 h-6" fill="fill-current" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Who We Are</h3>
            <p className="text-slate-600 leading-loose">
              We are a registered 501(c)(3) nonprofit organization, led by Sikh boys with a powerful vision: to take an active role in serving our local communities while building lifelong bonds of brotherhood.
            </p>
          </section>

          {/* Definition of Sewa */}
          <section className="bg-[var(--ykb-green)] text-white p-8 rounded-3xl shadow-lg shadow-[var(--ykb-green)]/20">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="black" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">The Meaning of Seva</h3>
            <p className="text-green-50 leading-loose">
              <strong>Seva</strong> (also spelled Sewa) is a Sanskrit word meaning "selfless service." 
              In Sikhism, it is an essential principle and a moral duty. It implies performing an act 
              of service without any thought for reward or personal gain. Through Seva, we learn humility,
              empathy, and the value of contributing to the greater good of humanity.
            </p>
          </section>
        </div>

        {/* Sikhism Principles */}
        <section className="max-w-4xl mx-auto pb-12">
          <div className="text-center mb-12">
            <h2 className="text-[var(--ykb-blue)] text-sm font-bold uppercase tracking-widest mb-2">Our Foundation</h2>
            <h3 className="text-3xl font-bold text-slate-900">Principles of Sikhism</h3>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Sikhism, founded in the 15th century in the Punjab region of India, is a monotheistic religion 
              centered on the belief in one creator. It emphasizes equality, truthful living, and social justice.
              Our organization is fundamentally guided by three core pillars of Sikhism:
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h4 className="font-bold text-xl text-slate-800 mb-2">Naam Japo</h4>
                <p className="text-sm">Remembering the Creator at all times and meditating on God's name.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h4 className="font-bold text-xl text-slate-800 mb-2">Kirat Karo</h4>
                <p className="text-sm">Earning a living honestly through hard work, without exploiting or harming others.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h4 className="font-bold text-xl text-slate-800 mb-2">Vand Chhako</h4>
                <p className="text-sm">Sharing the fruits of one's labor with others, especially those in need, which directly inspires our commitment to Seva.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
