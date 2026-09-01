import { useState } from 'react'
import { projects } from './data/projects'
import { ProjectCard } from './components/ProjectCard/ProjectCard'
import { RetroStripe } from './components/RetroStripe'
import { MovingBackgroundStripes } from './components/MovingBackgroundStripes'
import { ContactModal } from './components/ContactModal/ContactModal'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { formatHeader } from './utils/textUtils'
import './App.css'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="app-container">
      <section className="hero-section">
        <RetroStripe direction="right" />
        <MovingBackgroundStripes />
        
        <div className="glass-card hero-card">
          <div className="hero-image-container">
            <img
              src="/profile_photo.png"
              alt="Profile"
              className="profile-photo"
            />
          </div>

          <div className="hero-content">
            <div className="badge">
              Full Stack Developer
            </div>

            <h1>
              {formatHeader("Hi, I'm Spencer")}
            </h1>

            <p className="description">
              I craft modern, responsive web applications with a focus on immersive user experiences and stunning design. Welcome to my personal portfolio.
            </p>

            <div className="button-group">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>🚀</span> View Projects
              </button>
              <button className="btn btn-secondary" onClick={() => setIsContactModalOpen(true)}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="projects-section">
        {projects.map((project, index) => (
          <section key={project.id} className="project-viewport-section">
            <RetroStripe direction={index % 2 === 0 ? 'left' : 'right'} />
            <ProjectCard
              project={project}
              reverse={index % 2 !== 0}
            />
          </section>
        ))}
      </section>

      {/* Skills Section */}
      <section className="project-viewport-section">
        <RetroStripe direction="left" />
        <Skills />
      </section>

      {/* Experience Section */}
      <section className="project-viewport-section">
        <RetroStripe direction="right" />
        <Experience />
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  )
}

export default App
