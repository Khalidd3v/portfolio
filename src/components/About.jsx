import { useState } from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiMongodb, SiRedis,
  SiReact, SiNextdotjs, SiTailwindcss, SiDjango, SiFastapi, SiNodedotjs,
  SiDocker, SiAmazonwebservices, SiNginx, SiGithubactions, SiGit, SiLinux,
  SiHuggingface,
} from 'react-icons/si';
import { HiOutlineChip, HiAcademicCap, HiBriefcase, HiCode, HiDatabase, HiServer } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';
import './About.css';

const SKILLS = [
  {
    category: 'Languages',
    icon: <HiCode />,
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5/CSS3'],
  },
  {
    category: 'Backend',
    icon: <HiServer />,
    items: ['Django', 'Django REST', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSocket'],
  },
  {
    category: 'Frontend',
    icon: <SiReact />,
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Redux', 'React Query'],
  },
  {
    category: 'AI / ML',
    icon: <HiOutlineChip />,
    items: ['LangChain', 'OpenAI API', 'RAG', 'Vector DBs', 'Hugging Face', 'Prompt Engineering', 'LLM Fine-tuning', 'Agentic AI'],
  },
  {
    category: 'DevOps & Cloud',
    icon: <SiDocker />,
    items: ['Docker', 'AWS (EC2, S3, RDS)', 'CI/CD', 'Nginx', 'GitHub Actions', 'Vercel'],
  },
  {
    category: 'Databases',
    icon: <HiDatabase />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB', 'SQLite'],
  },
  {
    category: 'Tools',
    icon: <SiGit />,
    items: ['Git', 'Linux', 'VS Code', 'Postman', 'Jupyter', 'Figma'],
  },
];

const EXPERIENCE = [
  {
    company: 'Qurk',
    url: 'https://qurk.app',
    role: 'Full Stack Software Engineer',
    period: '2025 — Present',
    description: 'Engineering KPIs, AI workflows, AI reporting, and data science solutions at Qurk — a company focused on intelligent business analytics and automation.',
    tags: ['Python', 'AI/ML', 'React', 'Data Science', 'System Design'],
  },
  {
    company: 'Xmind Limited',
    role: 'Backend Team Lead & Full Stack Software Engineer',
    period: '2023 — Aug 2025',
    description: 'Led the backend engineering team for an AI-powered ANPR (Automatic Number Plate Recognition) SaaS platform managing airport carpark operations worldwide. Architected scalable Django systems and RESTful APIs.',
    tags: ['Django', 'AI/ANPR', 'Team Leadership', 'SaaS', 'PostgreSQL'],
  },
  {
    company: 'Argumant',
    url: 'https://argumant.com',
    role: 'Co-Founder & Full Stack Software Engineer',
    period: '2022 — Present',
    description: 'Building and scaling multiple SaaS products including a Multitenant POS system, University Management System, Currency Management System, Blogger SaaS platform, and ZMAHISAB — a cloud-based credit/debit management application with offline-first architecture.',
    tags: ['React', 'Django', 'Node.js', 'SaaS', 'Startup'],
  },
  {
    company: 'ARKPLUS',
    role: 'Junior Python Developer',
    period: '2021 — 2022',
    description: 'Contributed to client projects focusing on database management, API development, and software optimization across multiple domains.',
    tags: ['Python', 'SQL', 'Django', 'REST APIs'],
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Preston University',
    period: '2019 — 2023',
    description: 'Focused on backend systems, data structures, algorithm optimization, and AI-driven automation. Final year project involved machine learning for predictive analytics.',
  },
];

const TABS = [
  { key: 'skills', label: 'Skills', icon: <HiOutlineChip /> },
  { key: 'experience', label: 'Experience', icon: <HiBriefcase /> },
  { key: 'education', label: 'Education', icon: <HiAcademicCap /> },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Professional <span className="gradient-text">Profile</span>
          </h2>
          <p className="section-subtitle">
            Full Stack Engineer bridging architecture, AI, and product — from startup founding to enterprise-scale systems.
          </p>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs-nav">
            {TABS.map(({ key, label, icon }) => (
              <button
                key={key}
                className={`tab-btn mono ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <span className="tab-icon">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          <div className="tab-panel card">
            {activeTab === 'skills' && (
              <div className="skills-container">
                {SKILLS.map(({ category, icon, items }) => (
                  <div key={category} className="skill-category">
                    <h3 className="skill-category-title mono">
                      <span className="skill-category-icon">{icon}</span>
                      {category}
                    </h3>
                    <div className="skill-pills">
                      {items.map(item => (
                        <span key={item} className="skill-pill mono">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="timeline">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot" />
                      {i < EXPERIENCE.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-role">{exp.role}</h3>
                          <h4 className="timeline-company">
                            {exp.url ? (
                              <a href={exp.url} target="_blank" rel="noreferrer" className="company-link">
                                {exp.company}
                              </a>
                            ) : (
                              exp.company
                            )}
                          </h4>
                        </div>
                        <span className="period-badge mono">{exp.period}</span>
                      </div>
                      <p className="timeline-desc">{exp.description}</p>
                      <div className="timeline-tags">
                        {exp.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="education-list">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-icon-wrap">
                      <HiAcademicCap />
                    </div>
                    <div className="edu-info">
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <h4 className="edu-institution">
                        {edu.institution}
                        <span className="period-badge mono">{edu.period}</span>
                      </h4>
                      <p className="edu-desc">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="stats-row">
          {[
            { value: '6+', label: 'Years Exp' },
            { value: '20+', label: 'Projects Built' },
            { value: '3', label: 'SaaS Products' },
            { value: '2', label: 'Startups Founded' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card card">
              <span className="stat-value gradient-text">{value}</span>
              <span className="stat-label mono">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
