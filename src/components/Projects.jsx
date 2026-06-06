import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { PROJECTS } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const featured = PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            AI-powered systems, SaaS platforms, and full-stack applications built for scale.
          </p>
        </div>

        <div className="projects-grid">
          {featured.map((project) => (
            <article key={project.id} className="project-card card">
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onLoad={(e) => e.target.classList.add('loaded')}
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="mono gradient-text">{project.category}</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <span className="project-category mono">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link mono"
                  >
                    <SiGithub /> View Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn btn-outline btn-lg">
            View All Projects <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
