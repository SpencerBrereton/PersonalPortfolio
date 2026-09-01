import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'experience-1',
    title: 'Gauger',
    client: 'JMG Inspections Ltd.',
    problem: 'Dan was manually recording his expenses in 3 different spreadsheets, taking pictures of receipts, and filing them in digital folders with a mobile app from 2009.',
    analysis: 'Explain your analysis and approach to solving the problem...',
    execution: 'Walk through how you executed the solution...',
    screenshots: [
      'https://via.placeholder.com/600x400?text=Screenshot+1',
      'https://via.placeholder.com/600x400?text=Screenshot+2',
      'https://via.placeholder.com/600x400?text=Screenshot+3',
    ],
    technologies: ['React', 'Node.js', 'Supabase'],
  },
  // Add more experiences here
];
