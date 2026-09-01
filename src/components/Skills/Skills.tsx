import { skillCategories } from '../../data/skills';
import { formatHeader } from '../../utils/textUtils';
import { getLogoUrl } from '../../utils/logoUtils';
import './Skills.css';
import { useState } from 'react';
import {
  BrandReact,
  BrandTypescript,
  BrandPython,
  BrandTailwind,
  BrandMongodb,
  BrandDocker,
  BrandGit,
  BrandFigma,
  BrandBootstrap,
  BrandSass,
  Database,
  Cloud,
  Code,
  Server,
  Network,
  Container,
  Brain,
  Mail,
  Box,
  Palette,
  Star,
  Lamp,
  Dna,
  Settings,
  Target,
} from 'tabler-icons-react';

const SkillIcon = ({ name, domain }: { name: string; domain?: string }) => {
  const [error, setError] = useState(false);

  if (domain && !error) {
    return (
      <img
        src={getLogoUrl(domain)}
        alt={name}
        className="skill-logo-img"
        onError={() => setError(true)}
      />
    );
  }

  switch (name.toLowerCase()) {
    case 'nodejs':
      return <Server size={20} />;
    case 'c#':
    case 'csharp':
      return <Code size={20} />;
    case '.net':
    case 'dotnet':
      return <Code size={20} />;
    case 'java':
      return <Code size={20} />;
    case 'python':
      return <BrandPython size={20} />;
    case 'microservice':
      return <Network size={20} />;
    case 'react':
      return <BrandReact size={20} />;
    case 'typescript':
      return <BrandTypescript size={20} />;
    case 'next.js':
    case 'nextjs':
      return <Code size={20} />;
    case 'tailwind':
      return <BrandTailwind size={20} />;
    case 'css':
    case 'css3':
      return <Palette size={20} />;
    case 'html':
    case 'html5':
      return <Code size={20} />;
    case 'postgresql':
      return <Database size={20} />;
    case 'mongodb':
      return <BrandMongodb size={20} />;
    case 'mysql':
      return <Database size={20} />;
    case 'neo4j':
      return <Database size={20} />;
    case 'sqlite':
      return <Database size={20} />;
    case 'firebase':
      return <Database size={20} />;
    case 'docker':
      return <BrandDocker size={20} />;
    case 'kubernetes':
      return <Container size={20} />;
    case 'aws':
      return <Cloud size={20} />;
    case 'gcp':
      return <Cloud size={20} />;
    case 'ci/cd':
    case 'cicd':
      return <Box size={20} />;
    case 'azure':
      return <Cloud size={20} />;
    case 'terraform':
      return <Code size={20} />;
    case 'git':
      return <BrandGit size={20} />;
    case 'agents':
      return <Dna size={20} />;
    case 'mcp':
      return <Settings size={20} />;
    case 'skills':
      return <Star size={20} />;
    case 'claude':
      return <Brain size={20} />;
    case 'openai':
      return <Brain size={20} />;
    case 'gemini':
      return <Lamp size={20} />;
    case 'agentmail':
      return <Mail size={20} />;
    case 'prompt engineering':
    case 'promptengineering':
      return <Target size={20} />;
    case 'figma':
      return <BrandFigma size={20} />;
    case 'qt':
      return <Code size={20} />;
    case 'bootstrap':
      return <BrandBootstrap size={20} />;
    case 'material ui':
    case 'materialui':
      return <Palette size={20} />;
    case 'sass':
      return <BrandSass size={20} />;
    case 'c++':
    case 'cplusplus':
      return <Code size={20} />;
    default:
      return <Code size={20} />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-badge">{`<> SKILLS`}</span>
          <h2 className="skills-title">{formatHeader("Skills & Stacks")}</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">
                  {category.icon === 'backend' && '🗄️'}
                  {category.icon === 'frontend' && '💻'}
                  {category.icon === 'database' && '🗃️'}
                  {category.icon === 'cloud' && '☁️'}
                  {category.icon === 'ai' && '🤖'}
                  {category.icon === 'styling' && '🛠️'}
                </span>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {[...category.skills].sort((a, b) => b.level - a.level).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{
                      borderColor: `${skill.color}40`
                    }}
                  >
                    <div
                      className="skill-progress-bar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    />
                    <div className="skill-item-content">
                      <div className="skill-icon-wrapper">
                        <SkillIcon name={skill.icon} domain={skill.logoDomain} />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
