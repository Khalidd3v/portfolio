import { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="projects-page">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subtitle">
            AI/ML systems, SaaS platforms, and full-stack applications — built, deployed, and scaled.
          </p>
        </div>

        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn mono ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid-full">
          {filtered.map((project) => (
            <article key={project.id} className="project-card-full card">
              <div className="project-image-full">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="mono gradient-text">{project.category}</span>
                  </div>
                )}
              </div>
              <div className="project-body">
                <span className="project-category mono">{project.category}</span>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      <SiGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <HiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results mono">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
