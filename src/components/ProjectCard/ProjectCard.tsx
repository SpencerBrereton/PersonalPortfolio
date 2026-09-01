import type { Project } from '../../types';
import './ProjectCard.css';
import { useRef, useEffect, useState } from 'react';
import { formatHeader } from '../../utils/textUtils';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean; // For alternating layouts
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const localVideoPath = `/${project.id}.mp4`;
  const [videoSrc, setVideoSrc] = useState(localVideoPath);
  const [lastProjectId, setLastProjectId] = useState(project.id);

  // If project changes, reset source
  if (project.id !== lastProjectId) {
    setVideoSrc(localVideoPath);
    setLastProjectId(project.id);
  }

  const handleVideoError = () => {
    if (videoSrc !== project.mediaUrl) {
      console.log(`Local video not found for ${project.id}, falling back to ${project.mediaUrl}`);
      setVideoSrc(project.mediaUrl);
    }
  };

  // Subtle intersection observer to auto-play video when in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (videoRef.current && project.mediaType === 'video') {
            videoRef.current.play().catch(e => console.error("Playback failed", e));
          }
        } else {
          if (videoRef.current && project.mediaType === 'video') {
            videoRef.current.pause();
          }
        }
      });
    }, { threshold: 0.2 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, [project.mediaType]);

  return (
    <article
      ref={cardRef}
      className={`project-card ${reverse ? 'reverse-layout' : ''}`}
    >
      <div className="project-media">
        <div className="media-glass-wrapper">
          {project.mediaType === 'video' ? (
            <video
              ref={videoRef}
              src={videoSrc}
              className="media-content"
              loop
              muted
              playsInline
              controls={false}
              onError={handleVideoError}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23111'/%3E%3C/svg%3E"
            />
          ) : (
            <img
              src={project.mediaUrl}
              alt={`${project.title} preview`}
              className="media-content"
              loading="lazy"
            />
          )}
          <div className="media-overlay"></div>
        </div>
      </div>

      <div className="project-info">
        <h2 className="project-title">{formatHeader(project.title)}</h2>
        <h3 className="project-subtitle">{project.subtitle}</h3>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="tech-badge"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="project-description">{project.description}</p>

        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-live-demo compact">
              <span>↗</span> Live Demo
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary compact">
              Marketing
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary compact">
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
