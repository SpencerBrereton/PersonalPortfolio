import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Scanual',
    subtitle: 'Zero-Trust Knowledge Retrieval',
    description: 'A knowledge platform that retrieves precise, source-backed answers from documents, enabling teams to access accurate information on demand while surfacing gaps, inconsistencies, and areas where documentation needs improvement.',
    technologies: ['Tailwind', 'React', 'PostgreSQL', 'AI', 'RAG', 'GCP', 'Neo4j', 'Node.js', 'Express.js', 'LLMs', 'OCR', 'Stripe'],
    mediaType: 'video',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    liveUrl: 'https://scanual.ca',
    demoUrl: 'https://app.scanual.ca/a/98450af4-9147-443a-a649-967c5f672162'
  },
  {
    id: 'project-2',
    title: 'Helios',
    subtitle: 'Flight Planning',
    description: 'A mock aviation dashboard integrating dynamic 3D rendering and automated flight analytics to demonstrate proficiency in complex state management and polished, production-ready user experiences.',
    technologies: ['React', 'TypeScript', 'Vite', 'Firebase'],
    mediaType: 'video',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Local placeholder video in public folder
    demoUrl: 'https://helios-3eabc.web.app/',
    repoUrl: 'https://github.com/SpencerBrereton/Helios'
  },
  {
    id: 'project-3',
    title: 'Weave',
    subtitle: 'AI Business Websites in 24 Hours',
    description: 'A product that turns a short intake form into a live small-business site: AI generates the design and copy, then a real developer reviews and deploys it on Vercel. Early-access demos cover photographers, diners, dentists, and more—no DIY builder, no subscription.',
    technologies: ['Astro', 'TypeScript', 'Vercel', 'AI'],
    mediaType: 'image',
    mediaUrl: '/weave-preview.png',
    demoUrl: 'https://www.weave-sites.com/'
  },
];

