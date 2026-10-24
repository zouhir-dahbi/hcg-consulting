// Single source of truth for site-wide branding and contact details.
export const site = {
  name: 'Hassan Consulting Group',
  legalName: 'Hassan Consulting Group LLC',
  shortName: 'HCG',
  tagline: 'Construction Expert Witness · Disputes & Defects',
  person: {
    name: 'Mohamed E. Hassan, PhD, P.E.',
    title: 'Principal · Construction Expert Witness',
  },
  phoneDisplay: '(703) 898-0204',
  phoneHref: 'tel:+17038980204',
  // TODO: point at the new Cloudflare domain once purchased. info@ will be
  // routed to Dr. Hassan's real inbox via Cloudflare Email Routing.
  email: 'info@hcgconsulting.com',
  emailHref: 'mailto:info@hcgconsulting.com',
  address: {
    line1: '4207 Stepney Drive',
    line2: 'Gainesville, VA 20155',
    locality: 'Gainesville',
    region: 'VA',
    postalCode: '20155',
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=4207+Stepney+Drive,+Gainesville+VA+20155',
  },
  hours: [
    ['Monday – Friday', '8:00 AM – 6:00 PM'],
    ['Saturday & Sunday', 'By appointment'],
  ] as [string, string][],
  serviceRegion: 'Virginia · Maryland · Washington, D.C. · West Virginia · Delaware',
};

export const social: Record<string, string> = {};
