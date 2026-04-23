import { Link } from 'react-router-dom';
import { Heart, ExternalLink } from 'lucide-react';

export default function Donate() {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center py-24 px-4 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[var(--ykb-orange)]/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--ykb-blue)]/5 blur-3xl" />
      </div>

      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative z-10 text-center">
        <div className="w-20 h-20 bg-[var(--ykb-orange)]/10 text-[var(--ykb-orange)] rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3">
          <Heart className="w-10 h-10 fill-current" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support Our Mission</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Your generous donation directly supports our boy-led community service initiatives. 
          Help us continue to instill the values of Seva and make a positive impact in our community.
        </p>

        <a 
          href="https://butterapp.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full bg-[var(--ykb-orange)] hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 block mb-6"
        >
          <span>Donate via Butter Support</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-500">
          <strong className="text-slate-700 block mb-1">Tax-Deductible</strong>
          Young Khalsa Boys is a registered 501(c)(3) nonprofit organization. Your donations are fully tax-deductible to the extent allowed by law.
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center text-sm">
          <Link to="/" className="text-[var(--ykb-blue)] hover:underline font-medium">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
