export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2026 Rudra More &mdash; Data &amp; Business Analyst
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/rudramore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rudramore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:rudra@example.com"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
