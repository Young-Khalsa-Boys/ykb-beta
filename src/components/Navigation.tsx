import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Members', path: '/members' },
  { name: 'Projects', path: '/projects' },
  { name: 'Donate', path: '/donate' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Young Khalsa Boys Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">
              Young Khalsa Boys
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-[var(--ykb-blue)] text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Donate Button */}
          <div className="md:hidden">
            <Link 
              to="/donate"
              className="px-4 py-2 bg-[var(--ykb-orange)] text-white rounded-full text-sm font-medium shadow-sm active:scale-95 transition-transform"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
