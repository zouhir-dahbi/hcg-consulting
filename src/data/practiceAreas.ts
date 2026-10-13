// Shared metadata for the practice-area pages. Full page copy lives in each
// .astro page; this file drives nav, cards, and cross-links.
export type PracticeArea = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  description: string;
  blurb: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'construction-defect',
    navLabel: 'Construction Defect',
    title: 'Construction Defect Expert',
    metaTitle: 'Construction Defect Expert Witness in Virginia & Washington, D.C.',
    description:
      'Construction defect expert witness for commercial and residential projects in Virginia and the D.C. metro. Defect identification, building-code analysis, cause evaluation, and cost-to-correct estimates.',
    blurb:
      'Identifying defects, tracing cause, and quantifying the cost to correct work that fails to meet the contract, plans, or code.',
  },
  {
    slug: 'cost-and-delay-claims',
    navLabel: 'Cost & Delay',
    title: 'Cost & Delay Claims',
    metaTitle: 'Construction Cost & Delay Claims — Expert Analysis & Estimates',
    description:
      'Expert cost analysis, estimating, and schedule (critical-path) analysis for construction cost overruns, delay claims, and project-performance disputes.',
    blurb:
      'Independent cost analysis, estimates, and critical-path schedule analysis for overrun and delay disputes.',
  },
  {
    slug: 'mediation',
    navLabel: 'Mediation',
    title: 'Construction Mediation',
    metaTitle: 'Construction Mediation — Certified Mediator, Virginia & Washington, D.C.',
    description:
      'Neutrally facilitating resolution of construction disputes as a Supreme Court of Virginia certified mediator, with deep technical grounding in construction management.',
    blurb:
      'A certified mediator bringing construction-management depth to the negotiating table for owners, contractors, and counsel.',
  },
];
