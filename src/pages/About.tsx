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

        {/* YKB Pillars */}
        <section className="max-w-4xl mx-auto pb-12">
          <div className="text-center mb-12">
            <h2 className="text-[var(--ykb-blue)] text-sm font-bold uppercase tracking-widest mb-2">Our Foundation</h2>
            <h3 className="text-3xl font-bold text-slate-900">Core Pillars</h3>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p className="text-center">
              Sikhism, founded in the 15th century in the Punjab region of India, is a monotheistic religion 
              centered on the belief in one creator. It emphasizes equality, truthful living, and social justice. 
              Our organization is fundamentally guided by the following seven core pillars rooted in the Sikh principles of selfless-service:
            </p>
            <div className="flex flex-col gap-6 mt-12">
              {[
                { letter: 'L', title: 'Loyalty', desc: 'Fostering commitment to faith, brotherhood, values, and community, standing by one another with integrity and trust.', color: 'var(--ykb-blue)' },
                { letter: 'E', title: 'Empathy', desc: 'Cultivating compassion and understanding for others through service to all, recognizing the dignity and humanity in every person.', color: 'var(--ykb-green)' },
                { letter: 'A', title: 'Advocacy', desc: 'Empowering youth to stand up for justice, speak for those without a voice, and represent Sikh values with integrity and courage.', color: 'var(--ykb-orange)' },
                { letter: 'D', title: 'Discipline', desc: 'Instilling self-discipline, responsibility, and commitment in thought and action, guided by the values of Sikhi and personal accountability.', color: 'var(--ykb-blue)' },
                { letter: 'E', title: 'Empowerment', desc: 'Providing mentorship and leadership opportunities that empower young boys to believe in themselves and their ability to create positive change, developing into confident, accountable leaders.', color: 'var(--ykb-green)' },
                { letter: 'R', title: 'Resilience', desc: 'Building mental, emotional, and moral strength to face challenges with courage, perseverance, and humility.', color: 'var(--ykb-orange)' },
                { letter: 'S', title: 'Seva (service)', desc: 'Placing selfless service at the heart of all actions, fostering a lasting dedication to serving humanity beyond self-interest.', color: 'var(--ykb-blue)' },
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-start md:items-center flex-col md:flex-row gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div 
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-inner"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.letter}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-2" style={{ color: pillar.color }}>{pillar.title}</h4>
                    <p className="text-slate-600 leading-relaxed m-0">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
