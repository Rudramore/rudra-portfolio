import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, TAG_STYLES, ACCENT_COLORS } from "@/lib/projects";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Rudra More`,
    description: project.impact,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const tag = TAG_STYLES[project.tagColor];
  const accent = ACCENT_COLORS[project.tagColor];
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Back nav + accent bar */}
      <div style={{ borderBottomColor: accent }} className="border-b-2 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Projects
          </Link>
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${tag.bg} ${tag.text} ${tag.border}`}>
            {project.category}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">{project.title}</h1>
          <p className="text-xl text-slate-500 leading-relaxed">{project.impact}</p>
        </div>

        <hr className="border-slate-200 mb-10" />

        {/* Business Problem */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">01 /</span>
            <h2 className="text-lg font-bold text-slate-900">Business Problem</h2>
          </div>
          <div className="ml-10 p-5 bg-slate-50 border border-slate-200 rounded-xl border-l-4" style={{ borderLeftColor: accent }}>
            <p className="text-slate-700 leading-relaxed">{project.problem}</p>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">02 /</span>
            <h2 className="text-lg font-bold text-slate-900">Key Insights</h2>
          </div>
          <div className="ml-10 flex flex-col gap-4">
            {project.insights.map((insight, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:shadow-sm transition-all"
              >
                <span className="font-mono flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-slate-700 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">03 /</span>
            <h2 className="text-lg font-bold text-slate-900">Strategic Recommendation</h2>
          </div>
          <div className="ml-10 p-5 bg-[#060D1F] border border-slate-700 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400" />
            <p className="text-slate-200 leading-relaxed font-medium pl-4">{project.recommendation}</p>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">04 /</span>
            <h2 className="text-lg font-bold text-slate-900">Tools &amp; Methods</h2>
          </div>
          <div className="ml-10 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* PDF link */}
        {project.pdfPath && (
          <div className="mb-12 p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-slate-900 text-sm">View Supporting Report</p>
              <p className="text-slate-500 text-sm">Full analysis and supporting documentation</p>
            </div>
            <a
              href={project.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Open PDF
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}

        <hr className="border-slate-200 mb-8" />

        {/* Prev / Next */}
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all max-w-[45%]"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-slate-400 group-hover:text-slate-900 transition-colors">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-xs font-mono text-slate-400 mb-0.5">prev</p>
                <p className="text-sm font-semibold text-slate-900 leading-snug">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center gap-3 p-4 border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all max-w-[45%] ml-auto text-right"
            >
              <div>
                <p className="text-xs font-mono text-slate-400 mb-0.5">next</p>
                <p className="text-sm font-semibold text-slate-900 leading-snug">{next.title}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-slate-400 group-hover:text-slate-900 transition-colors">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
