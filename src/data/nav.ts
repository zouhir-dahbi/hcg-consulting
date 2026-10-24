import { geoAreas } from './geoAreas';

export type NavLink = { label: string; href: string; description?: string; newTab?: boolean };
export type NavGroup = { label: string; children: NavLink[] };

export const navGroups: NavGroup[] = [
  {
    label: 'Construction Expert Witness',
    children: [
      { label: 'Overview', href: '/expert-witness', description: 'Expert opinions, reports, and testimony' },
      ...geoAreas.map((g) => ({ label: g.name, href: `/expert-witness/${g.slug}` })),
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Construction Defect', href: '/construction-defect', description: 'Defect, code, and performance analysis' },
      { label: 'Cost & Delay Claims', href: '/cost-and-delay-claims', description: 'Cost estimates and schedule analysis' },
      { label: 'Mediation', href: '/mediation', description: 'Certified construction mediator' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'About Dr. Hassan', href: '/about' },
      { label: 'Curriculum Vitae', href: '/cv/dr-mohamed-hassan-cv.pdf', newTab: true },
      { label: 'Insights', href: '/blog' },
    ],
  },
];
