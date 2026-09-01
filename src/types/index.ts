export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  mediaType: 'video' | 'image';
  mediaUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  client?: string;
  problem: string;
  analysis: string;
  execution: string;
  screenshots: string[]; // Array of image URLs
  technologies?: string[];
}

