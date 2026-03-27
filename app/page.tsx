import Link from "next/link";
import { getFeaturedProjects, TAG_STYLES } from "@/lib/projects";

const skills = [
  {
    category: "Analytics & Data",
    icon: "📊",
    items: ["SQL", "Python", "Tableau", "Power BI", "SAS", "Excel"],
  },
  {
    category: "Business Strategy",
    icon: "🎯",
    items: ["Market Analysis", "Business Modeling", "Financial Projections", "SWOT / Porter's 5"],
  },
  {
    category: "Quantitative Methods",
    icon: "🔢",
    items: ["Statistical Analysis", "Linear Programming", "Machine Learning", "Database Design"],
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-[88vh] flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest rounded-full border border-blue-100 mb-6">
              Data &amp; Business Analyst
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-blue-600">Rudra More.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              I&apos;m a strategy-focused analytics professional who helps organizations make better decisions by finding the signal in the noise.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              I combine rigorous data analysis with clear business thinking — turning complex datasets into recommendations that executives can actually use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
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
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Download Resume
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v7M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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
              <div
                key={skill.category}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-slate-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                    >
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
                  <div className="h-full flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                    <span
                      className={`inline-block self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-4 border ${tag.bg} ${tag.text} ${tag.border}`}
                    >
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
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium"
                        >
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
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s work together.</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Whether it&apos;s a data challenge, a strategy question, or a team that needs analytical support — I&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
