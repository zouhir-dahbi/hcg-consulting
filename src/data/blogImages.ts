import type { ImageMetadata } from 'astro';
import chooseExpertImg from '../images/AdobeStock_53074457.jpeg';
import reportImg from '../images/AdobeStock_2120287720.jpeg';
import documentDefectImg from '../images/AdobeStock_617823005.jpeg';
import costDelayImg from '../images/AdobeStock_143257037.jpeg';
import contractImg from '../images/AdobeStock_2184057876.jpeg';
import codeImg from '../images/AdobeStock_2198612119.jpeg';

// Maps a blog post's id (its filename in src/content/blog/, minus .md) to its
// hero image and alt text. Kept separate from content.config.ts because a
// collection schema can't return imported ImageMetadata for images that live
// outside the collection's own folder. (Alt text is generic — verify against
// the actual photo and tighten if needed.)
export const blogImages: Record<string, { src: ImageMetadata; alt: string }> = {
  'how-to-choose-a-construction-expert-witness': {
    src: chooseExpertImg,
    alt: 'A construction professional reviewing project documents and plans',
  },
  'what-an-expert-witness-report-should-include': {
    src: reportImg,
    alt: 'An expert report and case documents being reviewed',
  },
  'documenting-a-construction-defect': {
    src: documentDefectImg,
    alt: 'Close-up of construction work being inspected for a defect',
  },
  'cost-and-delay-claims-time-impact-analysis': {
    src: costDelayImg,
    alt: 'Project schedules and cost records under analysis',
  },
  'construction-contract-red-flags': {
    src: contractImg,
    alt: 'A construction contract being reviewed and marked up',
  },
  'building-code-compliance-where-construction-falls-short': {
    src: codeImg,
    alt: 'Building construction and code-compliance inspection',
  },
};
