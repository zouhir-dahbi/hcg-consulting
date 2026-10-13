// One template (src/pages/expert-witness/[jurisdiction].astro) renders every
// geo page from this data. Keep qualifications accurate to actual licensure
// and court admissions for the jurisdiction.
export type GeoArea = {
  slug: string;
  name: string;
  short: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  qualifications: string[];
  cities: string[];
};

export const geoAreas: GeoArea[] = [
  {
    slug: 'virginia',
    name: 'Virginia',
    short: 'VA',
    title: 'Construction Expert Witness in Virginia',
    metaTitle: 'Construction Expert Witness in Virginia — Hassan Consulting Group',
    description:
      'Construction expert witness and defect specialist serving Virginia. Ph.D. in construction management, P.E. licensed in Virginia, Class A contractor license, and admitted in the Virginia court systems.',
    lead:
      'Serving owners, general contractors, and counsel across Virginia — from Northern Virginia to the Hampton Roads and Richmond corridors — on defect, cost, and delay matters in both litigation and pre-dispute review.',
    qualifications: [
      'P.E. license — Virginia',
      'Class “A” contractor license — Virginia',
      'Admitted in the Virginia court systems',
      'Supreme Court of Virginia mediator certification',
    ],
    cities: [
      'Northern Virginia',
      'Fairfax',
      'Loudoun',
      'Prince William',
      'Manassas',
      'Haymarket',
      'Fredericksburg',
      'Richmond',
    ],
  },
  {
    slug: 'washington-dc',
    name: 'Washington, D.C.',
    short: 'D.C.',
    title: 'Construction Expert Witness in Washington, D.C.',
    metaTitle: 'Construction Expert Witness in Washington, D.C. — Hassan Consulting Group',
    description:
      'Construction expert witness in Washington, D.C. — P.E., Class A contractor license in the District, and admitted in the D.C. court systems. Defect, cost, delay, and code-compliance opinions for the District and immediate suburbs.',
    lead:
      'For the District and its surrounding communities — Alexandria and Arlington, Virginia, and Mount Vernon, Maryland — I provide defect, code, cost, and delay opinions grounded in hands-on D.C. construction experience.',
    qualifications: [
      'Admitted in the Washington, D.C. court systems',
      'Class “A” contractor license — Washington, D.C.',
      'P.E. licensed in Virginia and Texas',
      'Supreme Court of Virginia mediator certification',
    ],
    cities: [
      'Washington, D.C.',
      'Alexandria, VA',
      'Arlington, VA',
      'Mount Vernon, MD',
    ],
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    short: 'MD',
    title: 'Construction Expert Witness in Maryland',
    metaTitle: 'Construction Expert Witness in Maryland — Hassan Consulting Group',
    description:
      'Construction expert witness and construction-management specialist serving Maryland and the greater Washington, D.C. metropolitan area across commercial and residential projects.',
    lead:
      'Covering Montgomery, Prince George’s, and Howard Counties and the wider Maryland suburbs, I bring four decades of construction-management and engineering experience to Maryland defect and performance disputes.',
    qualifications: [
      'Experience on Maryland and D.C.-metro projects',
      'P.E. licensed in Virginia and Texas',
      'Class “A” contractor license — Virginia & Washington, D.C.',
      'Admitted in the Virginia and D.C. court systems',
    ],
    cities: [
      'Montgomery County',
      'Prince George’s County',
      'Howard County',
      'Bethesda',
      'Rockville',
      'Silver Spring',
    ],
  },
];
