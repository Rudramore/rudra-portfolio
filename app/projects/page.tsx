"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, TAG_STYLES } from "@/lib/projects";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Projects &amp; Case Studies</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Each project follows a structured case study format — business problem, key insights, strategic recommendation, and tools used.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const tag = TAG_STYLES[project.tagColor];
            return (
              <Link key={project.id} href={`/projects/${project.slug}`} className="group">
                <article className="h-full flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                  <span
                    className={`inline-block self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-4 border ${tag.bg} ${tag.text} ${tag.border}`}
                  >
                    {project.category}
                  </span>
                  <h2 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{project.impact}</p>

                  {/* Key insight preview */}
                  <div className="mb-5 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Top insight</p>
                    <p className="text-sm text-slate-700 leading-snug">{project.insights[0]}</p>
                  </div>

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
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
