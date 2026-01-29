import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Car Park Management Service',
            category: 'Scalable SaaS Platform',
            description: 'A robust SaaS for real-time occupancy monitoring and automated billing workflows with dashboards for customers, admins, and employees.',
            image: '/projects/car-park.png',
            tags: ['Python', 'Django', 'PostgreSQL', 'SaaS']
        },
        {
            title: 'University Management System',
            category: 'Educational Infrastructure',
            description: 'A full-fledged university system featuring landing pages, interactive dashboards, student portals, and teacher administrative tools.',
            image: '/projects/university.png',
            tags: ['React', 'Django', 'REST API', 'SQL']
        },
        {
            title: 'Finance and Exchanger',
            category: 'POS & Finance Software',
            description: 'Real-time billing and inventory management software integrated with a live currency exchange tracking system for businesses.',
            image: '/projects/finance.png',
            tags: ['Next.js', 'PostgreSQL', 'Financial Tech']
        },
        {
            title: 'AI ChatBot (Billing System)',
            category: 'AI / ML Solutions',
            description: 'Developed and trained a chatbot using custom datasets to automate customer support through fine-tuned GPT OpenAI API integrations.',
            image: '/projects/ai-chatbot.png',
            tags: ['Langchain', 'OpenAI', 'RAG', 'Python']
        },
        {
            title: 'Custom CMS Platform',
            category: 'Content Management',
            description: 'High-performance CMS built for professional bloggers, featuring deep SEO optimizations and advanced content workflow techniques.',
            image: '/projects/cms.png',
            tags: ['React', 'Node.js', 'SEO', 'CMS']
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Professional <span className="gradient-text">Portfolio</span></h2>
                    <p className="section-subtitle">Showcasing high-impact projects from my professional journey.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="view-project">View Case Study</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
