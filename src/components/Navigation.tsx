import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Members', path: '/members' },
  { name: 'Projects', path: '/projects' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFDF9] border-b border-[#EADFC9] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Young Khalsa Boys Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
            <span className="font-serif font-bold text-xl text-[#2B2317] tracking-tight hidden sm:block">
              Young Khalsa Boys
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-3 py-1.5 text-sm font-semibold transition-all duration-200 border-b-2
                    ${isActive 
                      ? 'border-[var(--ykb-blue)] text-[var(--ykb-blue)]' 
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-[#EADFC9]'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* External Donate Link */}
            <a
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded bg-[var(--ykb-orange)] hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition-all duration-200 ml-4 flex items-center justify-center border border-transparent"
            >
              Donate
            </a>
          </nav>
          
          {/* Mobile Donate Button */}
          <div className="md:hidden flex items-center">
            <a 
              href="https://givebutter.com/young-khalsa-boys-fundraiser-bq2wmc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[var(--ykb-orange)] hover:bg-orange-600 text-white rounded text-sm font-bold shadow-sm active:scale-98 transition-transform"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
