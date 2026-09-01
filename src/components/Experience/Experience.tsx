import { experiences } from '../../data/experiences';
import { formatHeader } from '../../utils/textUtils';
import { useState } from 'react';
import './Experience.css';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';

interface ScreenshotCarouselProps {
  screenshots: string[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  if (screenshots.length === 0) return null;

  return (
    <div className="screenshot-carousel">
      <div className="carousel-container">
        <img
          src={screenshots[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="carousel-image"
          loading="lazy"
        />
        {screenshots.length > 1 && (
          <div className="carousel-indicators">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {screenshots.length > 1 && (
        <div className="carousel-controls">
          <button
            className="carousel-button prev"
            onClick={handlePrevious}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="carousel-counter">
            {currentIndex + 1} / {screenshots.length}
          </span>
          <button
            className="carousel-button next"
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export const Experience: React.FC = () => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-badge">{`💼 EXPERIENCE`}</span>
          <h2 className="experience-title">{formatHeader("Client Work")}</h2>
        </div>

        <div className="experiences-grid">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-card">
              <div className="experience-content">
                <div className="experience-header-content">
                  <h3 className="experience-project-title">{formatHeader(exp.title)}</h3>
                  {exp.client && (
                    <p className="experience-client">for {exp.client}</p>
                  )}
                </div>

                <div className="experience-narrative">
                  <div className="narrative-section">
                    <h4 className="narrative-label">Problem</h4>
                    <p className="narrative-text">{exp.problem}</p>
                  </div>

                  <div className="narrative-section">
                    <h4 className="narrative-label">Analysis</h4>
                    <p className="narrative-text">{exp.analysis}</p>
                  </div>

                  <div className="narrative-section">
                    <h4 className="narrative-label">Execution</h4>
                    <p className="narrative-text">{exp.execution}</p>
                  </div>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="experience-tech">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="experience-media">
                <ScreenshotCarousel screenshots={exp.screenshots} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
