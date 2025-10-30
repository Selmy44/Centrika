import LanguageSwitcher from "@/components/LanguageSwitcher";

export type FooterDict = {
  copySuffix: string;
  languageLabel: string;
  bankingTitle: string; banking: string[];
  servicesTitle: string; services: string[];
  companyTitle: string; company: string[];
  legalTitle: string; legal: string[];
  insightsTitle?: string; insights?: string[];
};

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="mt-20 border-t border-gray-200">
      {/* Top brand + columns on white */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="space-y-4">
            <img src="/brand/centrika-logo.png" alt="Centrika" className="h-14 w-14 rounded-md object-contain" />
            <div className="text-sm text-muted max-w-xs">
              Delivering Tomorrow's solutions
              <br />
              Today.
            </div>
          </div>

          <div>
            <div className="font-semibold text-foreground mb-3">{dict.bankingTitle}</div>
            <ul className="space-y-2 text-sm text-muted">
              {dict.banking.map((label) => (
                <li key={label}><a className="hover:text-foreground" href="#">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-foreground mb-3">{dict.servicesTitle}</div>
            <ul className="space-y-2 text-sm text-muted">
              {dict.services.map((label) => (
                <li key={label}><a className="hover:text-foreground" href="#">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-foreground mb-3">{dict.companyTitle}</div>
            <ul className="space-y-2 text-sm text-muted">
              {dict.company.map((label) => (
                <li key={label}><a className="hover:text-foreground" href="#">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-foreground mb-3">{dict.insightsTitle ?? "Insights"}</div>
            <ul className="space-y-2 text-sm text-muted">
              {(dict.insights ?? ["In the news", "Announcements"]).map((label) => (
                <li key={label}><a className="hover:text-foreground" href="#">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Blue gradient band with social + contact */}
      <div className="bg-linear-to-r from-[#4b77f5] to-[#355fe6] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a aria-label="Twitter" href="#" className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3.15 4.6a4.27 4.27 0 0 0 1.33 5.7 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.6 8.6 0 0 1 2 19.54 12.13 12.13 0 0 0 8.56 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.34 8.34 0 0 0 22.46 6z"/></svg>
                </a>
                <a aria-label="LinkedIn" href="#" className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.6 8.5 15.5 7.4 18 7.4c5 0 6 3.3 6 7.6V24h-5v-7.3c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24H8V8z"/></svg>
                </a>
                <a aria-label="Facebook" href="#" className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 grid place-items-center transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.46 1.47-3.83 3.73-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12z"/></svg>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"/></svg>
              <div className="text-sm">
                Rwanda {'>'}  Kigali {'>'} CHIC Building {'>'} 2nd Floor {'>'} Room F42A
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4z" opacity=".1"/><path d="M4 8l8 5 8-5"/></svg>
                <a href="mailto:info@centrika.rw" className="hover:underline">info@centrika.rw</a>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2h4l2 5-3 1a11 11 0 0 0 6 6l1-3 5 2v4a2 2 0 0 1-2 2h-1c-8.8 0-16-7.2-16-16V4a2 2 0 0 1 2-2z"/></svg>
                <span>Toll Number</span>
                <strong className="ml-1">2838</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="bg-linear-to-r from-[#355fe6] to-[#2a4dbf] text-white/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>Copyright © {new Date().getFullYear()} Centrika Ltd. All rights reserved · <a className="underline-offset-2 hover:underline" href="#">Privacy Policy</a> · <a className="underline-offset-2 hover:underline" href="#">Cookie Policy</a> · <a className="underline-offset-2 hover:underline" href="#">Information Security Policy</a></div>
            <div className="flex items-center gap-3">
              <span className="text-white/80">{dict.languageLabel}</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
