import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function Donate() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // You will replace this URL with your actual Butter campaign URL
  const butterCampaignUrl = "https://butterapp.com/donate"; 

  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col items-center py-16 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--ykb-orange)]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--ykb-blue)]/5 blur-3xl" />
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[var(--ykb-orange)]/10 text-[var(--ykb-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support Our Seva</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your generous donation directly funds our community service projects. Complete your tax-deductible donation securely right here on our site.
          </p>
        </div>

        {/* Embedded On-site Donation Frame */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative min-h-[600px] flex items-center justify-center">
          
          {/* Loading Indicator */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-0 text-slate-400">
              <svg className="animate-spin h-8 w-8 mb-4 text-[var(--ykb-orange)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-medium">Loading secure checkout...</span>
            </div>
          )}

          {/* Iframe */}
          <iframe 
            src={butterCampaignUrl}
            title="Secure Butter Donation"
            width="100%"
            height="650px"
            style={{ border: 'none' }}
            className={`relative z-10 w-full transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        <div className="mt-8 text-center bg-slate-100/50 rounded-xl p-4 max-w-2xl mx-auto border border-slate-200">
          <p className="text-sm text-slate-500">
            <strong className="text-slate-700 font-medium">Tax Status:</strong> Young Khalsa Boys is a registered 501(c)(3) nonprofit organization. Your contribution is fully tax-deductible to the extent allowed by law. Payments are securely processed by Butter.
          </p>
        </div>
      </div>
    </div>
  );
}
