export const metadata = {
  title: "Contact — Rudra More",
  description: "Get in touch with Rudra More, Data & Business Analyst.",
};

const channels = [
  {
    label: "LinkedIn",
    description: "Best for professional connections and DMs",
    href: "https://www.linkedin.com/in/rudramore/",
    cta: "Connect on LinkedIn",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "bg-blue-50 border-blue-200 text-blue-700",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    label: "Email",
    description: "For project inquiries, job opportunities, or collaborations",
    href: "mailto:rmore1@hawk.illinoistech.edu",
    cta: "Send an Email",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: "bg-slate-50 border-slate-200 text-slate-700",
    btnColor: "bg-slate-900 hover:bg-slate-800 text-white",
  },
  {
    label: "GitHub",
    description: "Browse my code, projects, and version history",
    href: "https://github.com/Rudramore",
    cta: "View GitHub Profile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "bg-slate-50 border-slate-200 text-slate-700",
    btnColor: "bg-slate-800 hover:bg-slate-700 text-white",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Let&apos;s Talk.</h1>
          <p className="text-slate-500 text-lg max-w-xl">
            I&apos;m open to analyst roles, strategy positions, consulting projects, and data-driven collaborations. If you&apos;re building something that needs structured thinking, reach out.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Contact channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {channels.map((ch) => (
            <div
              key={ch.label}
              className={`flex flex-col p-6 rounded-xl border ${ch.color}`}
            >
              <div className="mb-4">{ch.icon}</div>
              <h3 className="font-bold text-lg mb-2">{ch.label}</h3>
              <p className="text-sm leading-relaxed opacity-75 flex-1 mb-5">{ch.description}</p>
              <a
                href={ch.href}
                target={ch.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${ch.btnColor}`}
              >
                {ch.cta}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* What I'm open to */}
        <div className="border border-slate-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What I&apos;m Open To</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Full-time Analyst Roles", desc: "Data Analyst, Business Analyst, Strategy Analyst, Operations Analyst" },
              { title: "Strategy & Consulting", desc: "Analytical support for strategy, planning, or market research engagements" },
              { title: "Freelance Projects", desc: "Data analysis, dashboarding, or business case development" },
              { title: "Collaborations", desc: "Open to working with researchers, founders, or teams with interesting data problems" },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
