import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="YKB Logo" className="h-10 opacity-90" />
              <span className="font-bold text-lg text-white">Young Khalsa Boys</span>
            </div>
            <p className="text-sm max-w-xs text-center md:text-left text-slate-400">
              Empowering Sikh boys to grow into the next generation of compassionate leaders through boy-led community service.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li><Link to="/about" className="hover:text-[var(--ykb-orange)] transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--ykb-green)] transition-colors">Our Projects</Link></li>
              <li><Link to="/members" className="hover:text-[var(--ykb-blue)] transition-colors">Members</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-white mb-4">Support Our Seva</h3>
            <a 
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[var(--ykb-orange)] hover:bg-orange-600 text-white font-medium rounded-full transition-colors mb-3"
            >
              Donate Now
            </a>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full text-center">
              501(c)(3) Nonprofit Organization
            </span>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} Young Khalsa Boys. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-500">Glen Rock, New Jersey</p>
        </div>
      </div>
    </footer>
  );
}
