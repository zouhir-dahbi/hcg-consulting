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
  // Only the public P.O. Box is listed — not a residential address.
  address: {
    line1: 'P.O. Box 385',
    line2: 'Haymarket, Virginia 20168',
  },
  hours: [
    ['Monday – Friday', '8:00 AM – 6:00 PM'],
    ['Saturday & Sunday', 'By appointment'],
  ] as [string, string][],
  serviceRegion: 'Washington D.C. Metro · Virginia · Maryland',
};

export const social: Record<string, string> = {};
