export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  tagColor: "blue" | "purple" | "green" | "orange" | "teal" | "rose";
  impact: string;
  problem: string;
  insights: string[];
  recommendation: string;
  tools: string[];
  pdfPath?: string;
  featured: boolean;
}

export const ACCENT_COLORS: Record<Project["tagColor"], string> = {
  blue: "#3B82F6",
  purple: "#8B5CF6",
  green: "#10B981",
  orange: "#F97316",
  teal: "#14B8A6",
  rose: "#F43F5E",
};

export const TAG_STYLES: Record<Project["tagColor"], { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  green: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  teal: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  rose: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "foxcore-sql-analysis",
    title: "Foxcore Database & SQL Analysis",
    category: "SQL / Data Engineering",
    tagColor: "blue",
    impact: "Designed a relational database schema and built complex queries to surface operational business insights from raw data",
    problem:
      "An organization's data was scattered across siloed spreadsheets with no unified structure, making it impossible to generate reliable reports or identify cross-functional bottlenecks.",
    insights: [
      "Normalized schema design eliminated data redundancy across 6 core entity tables, reducing duplicate records and improving data integrity",
      "Optimized query logic using indexed joins and subqueries cut ad-hoc reporting time by an estimated 60%, enabling faster decision cycles",
      "Cross-table JOIN analysis surfaced three operational bottlenecks that were completely invisible in the previous spreadsheet-based system",
    ],
    recommendation:
      "Implement an automated reporting pipeline using stored procedures and scheduled jobs to eliminate manual data pulls and reduce analyst overhead by an estimated 4–6 hours per week.",
    tools: ["SQL", "Database Design", "ERD Modeling", "Query Optimization", "Normalization"],
    pdfPath: "/project-files/foxcore-sql.pdf",
    featured: true,
  },
  {
    id: 2,
    slug: "sas-curiosity-cup-2026",
    title: "SAS Curiosity Cup 2026",
    category: "Analytics Competition",
    tagColor: "purple",
    impact: "Applied advanced statistical modeling to a real-world dataset and delivered executive-ready business recommendations in a national competition",
    problem:
      "Given a complex real-world dataset under competition time constraints, the challenge was to extract meaningful patterns, build a valid predictive model, and translate technical findings into recommendations a non-technical executive could act on.",
    insights: [
      "Regression analysis identified 3 statistically significant drivers accounting for 74% of variance in the target business metric",
      "Cross-validation confirmed model robustness with under 8% error variance, reducing the risk of overfitting before any production deployment",
      "A single-page executive brief distilled the full statistical analysis into 3 decision points — demonstrating communication as a core analytical skill",
    ],
    recommendation:
      "Deploy the predictive model as a lightweight decision-support tool that flags at-risk cases proactively, shifting the organization from reactive to proactive strategy.",
    tools: ["SAS", "Regression Analysis", "Statistical Modeling", "Data Visualization", "Predictive Analytics"],
    featured: true,
  },
  {
    id: 3,
    slug: "max-522-strategy-analysis",
    title: "Organizational Strategy & Decision Analysis",
    category: "Business Strategy",
    tagColor: "orange",
    impact: "Analyzed strategic trade-offs across multiple business scenarios and developed a recommendation framework for organizational decision-making",
    problem:
      "Leadership needed a structured analytical framework to evaluate competing strategic options, weigh uncertainty, and select a path that balanced short-term risk against long-term value creation.",
    insights: [
      "Decision tree analysis across 4 scenarios revealed that the highest-upside option carried only 15% more risk than the baseline — a trade-off leadership had not previously quantified",
      "Sensitivity analysis on key assumptions showed the strategy was robust to a ±20% swing in two critical variables, reducing scenario risk",
      "Stakeholder impact mapping identified one overlooked internal segment whose resistance was modeled as a 12% drag on projected outcomes",
    ],
    recommendation:
      "Adopt the hybrid strategy with phased implementation, using the decision framework as a living model to re-evaluate assumptions at each milestone gate.",
    tools: ["Decision Analysis", "Scenario Modeling", "Sensitivity Analysis", "Stakeholder Mapping", "Excel"],
    pdfPath: "/project-files/max-522-final.pdf",
    featured: true,
  },
  {
    id: 4,
    slug: "quantitative-methods-optimization",
    title: "Operations Resource Optimization",
    category: "Quantitative Methods",
    tagColor: "green",
    impact: "Applied linear programming to a complex resource allocation problem, uncovering a 23% cost reduction opportunity",
    problem:
      "An organization needed to maximize operational throughput while minimizing total cost under strict resource and capacity constraints — and existing planning relied on intuition rather than optimization.",
    insights: [
      "Linear programming model identified an optimal allocation strategy yielding a 23% cost reduction compared to the current heuristic baseline",
      "Sensitivity analysis revealed the top 2 binding constraints — enabling targeted capital investment for maximum operational impact",
      "Four-scenario stress test helped leadership validate strategy resilience before committing resources, reducing implementation risk",
    ],
    recommendation:
      "Adopt a constraint-based optimization model for quarterly operational planning to replace intuition-driven allocation, with quarterly re-calibration as inputs change.",
    tools: ["Excel Solver", "Linear Programming", "Sensitivity Analysis", "Scenario Modeling", "Operations Research"],
    featured: false,
  },
  {
    id: 5,
    slug: "cyber-startup-business-plan",
    title: "Cyber Startup Go-to-Market Strategy",
    category: "Business Strategy",
    tagColor: "rose",
    impact: "Developed a full business model, competitive positioning, and 3-year financial projection for an early-stage cybersecurity startup",
    problem:
      "An early-stage cybersecurity company needed a defensible business model, a clear competitive positioning strategy, and a credible financial forecast to attract seed-stage funding.",
    insights: [
      "Market gap analysis revealed that 62% of SMBs lack adequate endpoint protection — a largely unaddressed segment among major incumbents",
      "Competitive matrix across 8 players identified 2 clear differentiators: pricing flexibility and deployment simplicity in under 30 minutes",
      "Three-scenario financial model projected break-even at 18 months under the base case using a freemium-to-paid conversion strategy",
    ],
    recommendation:
      "Enter the market with a freemium SMB product to drive top-of-funnel acquisition, then layer in enterprise features at month 12 to unlock higher-margin expansion revenue.",
    tools: ["Business Model Canvas", "Market Sizing (TAM/SAM/SOM)", "Financial Modeling", "Competitive Analysis", "SWOT"],
    featured: false,
  },
  {
    id: 6,
    slug: "zebra-marketing-analysis",
    title: "Zebra Brand & Market Positioning",
    category: "Marketing Analytics",
    tagColor: "teal",
    impact: "Conducted strategic brand and market analysis to identify positioning gaps and reallocate marketing investment toward higher-ROI segments",
    problem:
      "A brand needed a data-driven audit of its market position, audience segmentation, and channel performance to prioritize where to focus growth resources.",
    insights: [
      "Consumer segmentation revealed 3 distinct audience personas — only 1 was being actively addressed in current messaging, leaving 2 segments underserved",
      "Pricing analysis identified an untapped mid-tier segment with 2x the lifetime value of the current primary audience",
      "Channel attribution audit found 2 acquisition channels consuming 30% of marketing budget while generating under 8% of conversions",
    ],
    recommendation:
      "Realign brand messaging to the mid-tier persona, cut spend on underperforming paid channels by 50%, and redirect budget toward owned media and content that serves the higher-LTV segment.",
    tools: ["Consumer Segmentation", "Competitive Analysis", "Channel Attribution", "Pricing Analysis", "Market Research"],
    pdfPath: "/project-files/zebra-marketing.pdf",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
