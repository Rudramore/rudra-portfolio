import Link from "next/link";
import { getFeaturedProjects, TAG_STYLES, ACCENT_COLORS } from "@/lib/projects";

const skills = [
  {
    category: "Analytics & Data",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["SQL", "Python", "Tableau", "Power BI", "SAS", "Excel"],
  },
  {
    category: "Business Strategy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" strokeLinecap="round" />
        <line x1="12" y1="16" x2="12" y2="22" strokeLinecap="round" />
      </svg>
    ),
    items: ["Market Analysis", "Business Modeling", "Financial Projections", "SWOT / Porter's 5"],
  },
  {
    category: "Quantitative Methods",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20L8 4M10 20l4-16M16 20l4-16M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Statistical Analysis", "Linear Programming", "Machine Learning", "AI / Neural Networks"],
  },
];

const stats = [
  { label: "M.S. Business Analytics" },
  { label: "B.S. Artificial Intelligence" },
  { label: "6 Case Studies" },
  { label: "SAS Curiosity Cup 2026" },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[88vh] flex items-center relative overflow-hidden bg-[#060D1F]">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[320px] h-[320px] rounded-full bg-cyan-600/8 blur-[90px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
              AI &amp; Business Analytics · Illinois Tech
            </span>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Rudra More.
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              I hold a B.S. in Artificial Intelligence and an M.S. in Business Analytics. I use both to help organizations make better decisions — by finding what the data actually means for the problem in front of them.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              I combine machine learning foundations with strategic business thinking — turning complex datasets into recommendations that executives can actually use.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-900/40"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                Download Resume
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v7M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-2">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-slate-400 text-xs rounded-full font-medium"
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Skills &amp; Tools</h2>
            <p className="text-slate-500">What I use to turn data into decisions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 text-white">
                  <span className="text-cyan-400">{skill.icon}</span>
                  <h3 className="font-semibold text-sm">{skill.category}</h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Projects</h2>
              <p className="text-slate-500">Select case studies showing end-to-end analytical thinking</p>
            </div>
            <Link
              href="/projects"
              className="text-blue-600 font-semibold hover:text-blue-700 text-sm hidden sm:flex items-center gap-1"
            >
              View all
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project) => {
              const tag = TAG_STYLES[project.tagColor];
              return (
                <Link key={project.id} href={`/projects/${project.slug}`} className="group">
                  <div
                    className="h-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer"
                  >
                    <div
                      className="h-1 w-full"
                      style={{ backgroundColor: ACCENT_COLORS[project.tagColor] }}
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`inline-block self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-4 border ${tag.bg} ${tag.text} ${tag.border}`}>
                        {project.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                        {project.impact}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/projects" className="text-blue-600 font-semibold hover:text-blue-700 text-sm">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-[#060D1F] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s work together.</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Whether it&apos;s a data challenge, a strategy question, or a team that needs analytical support — I&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-900/40"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
