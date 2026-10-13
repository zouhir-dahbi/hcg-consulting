// Central image registry. Every page pulls from here so swapping a photo is a
// one-line change (re-point a slot to a different file in src/images/).
//
// NOTE: The provided stock files could not be visually verified during build,
// so slots are assigned by spread. Review the site locally and re-point any
// slot whose photo doesn't fit — e.g. swap `defect` to a different file below.
import hero from '../images/AdobeStock_841628933.jpeg';
import homeBand from '../images/AdobeStock_53074457.jpeg';
import about from '../images/AdobeStock_1139008987.jpeg';
import aboutSecondary from '../images/AdobeStock_2120287720.jpeg';
import expertWitness from '../images/AdobeStock_57580451.jpeg';
import expertSecondary from '../images/AdobeStock_956537697.jpeg';
import defect from '../images/AdobeStock_617823005.jpeg';
import costDelay from '../images/AdobeStock_143257037.jpeg';
import mediation from '../images/AdobeStock_185907523.jpeg';
import geoVirginia from '../images/AdobeStock_2184057876.jpeg';
import geoDc from '../images/AdobeStock_2198612119.jpeg';
import geoMaryland from '../images/AdobeStock_956537515.jpeg';

export const siteImages = {
  hero,
  homeBand,
  about,
  aboutSecondary,
  expertWitness,
  expertSecondary,
  defect,
  costDelay,
  mediation,
  geo: {
    virginia: geoVirginia,
    'washington-dc': geoDc,
    maryland: geoMaryland,
  },
};
