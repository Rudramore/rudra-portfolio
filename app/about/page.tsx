import Link from "next/link";

const tools = [
  { group: "Data & Analytics", items: ["SQL", "Python (Pandas, NumPy, Scikit-learn)", "SAS", "Excel (Advanced, Solver)", "Tableau", "Power BI"] },
  { group: "Business & Strategy", items: ["Business Model Canvas", "Market Sizing (TAM/SAM/SOM)", "Financial Modeling", "SWOT / Porter's 5 Forces", "Decision Analysis"] },
  { group: "Quantitative Methods", items: ["Linear Programming", "Regression Analysis", "Statistical Modeling", "Sensitivity Analysis", "Scenario Planning"] },
  { group: "Technical", items: ["Database Design", "ERD Modeling", "Query Optimization", "Data Visualization", "Machine Learning (Supervised)"] },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Strategy + Data. Both.</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            I bridge the gap between technical data work and the business questions that actually matter.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">My Story</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I&apos;m a data and business analyst with a background in Computer Science and Management. My work sits at the intersection of quantitative rigor and strategic clarity — I don&apos;t just run the numbers, I explain what they mean for the decisions you&apos;re trying to make.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through coursework, competitions, and independent projects, I&apos;ve built experience across the full analytics stack: from designing SQL databases and building predictive models, to structuring go-to-market strategies and presenting findings to non-technical audiences.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I competed in the <strong className="text-slate-900">2026 SAS Curiosity Cup</strong> and have applied analytical frameworks to real-world problems ranging from operations optimization to startup business planning. I believe the most valuable skill in analytics isn&apos;t technical — it&apos;s knowing which question to ask first.
            </p>

            <div className="pt-4">
              <h3 className="font-bold text-slate-900 mb-3">What I&apos;m looking for</h3>
              <p className="text-slate-600 leading-relaxed">
                Roles where I can combine data fluency with business judgment — analyst, strategy, or operations positions where the work is about improving how decisions get made, not just reporting what happened.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                See My Work
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education placeholder */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">B.S. Computer Science</p>
                  <p className="text-slate-500 text-sm">Illinois Institute of Technology · 2021–2025</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">Coursework Highlights</p>
                  <ul className="mt-2 space-y-1">
                    {[
                      "Quantitative Methods (QMM)",
                      "Database Systems (CS 429)",
                      "Machine Learning (CS 522)",
                      "Operations Management (MAX 522)",
                      "Applied Math (Math 486)",
                    ].map((course) => (
                      <li key={course} className="text-slate-500 text-sm flex items-start gap-2">
                        <span className="text-slate-300 mt-0.5">—</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SAS Curiosity Cup badge */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-purple-900 text-sm">SAS Curiosity Cup</p>
                  <p className="text-purple-600 text-xs">2026 Participant</p>
                </div>
              </div>
              <p className="text-purple-700 text-sm">National analytics competition applying statistical modeling to real-world datasets.</p>
            </div>

            {/* Contact quick links */}
            <div className="bg-slate-900 rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-3">Get in Touch</p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/rudramore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <span>↗</span> LinkedIn
                </a>
                <a
                  href="mailto:rmore1@hawk.illinoistech.edu"
                  className="text-slate-300 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <span>↗</span> Email
                </a>
                <a
                  href="https://github.com/Rudramore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <span>↗</span> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Full Skills &amp; Toolset</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((group) => (
              <div key={group.group} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">{group.group}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
