import React, { useState } from 'react';
import {
    SiPython, SiDjango, SiReact, SiBootstrap,
    SiJavascript, SiPostgresql, SiOpenai, SiLangchain,
    SiFastapi, SiAmazonwebservices, SiTailwindcss, SiDocker
} from 'react-icons/si';
import { HiOutlineDatabase, HiOutlineChip, HiAcademicCap, HiBriefcase, HiLightningBolt } from 'react-icons/hi';
import './About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const techStack = [
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' },
        { name: 'DRF', icon: <SiFastapi />, color: '#009688' },
        { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'AI / ML', icon: <HiOutlineChip />, color: '#BB86FC' },
        { name: 'Langchain', icon: <SiLangchain />, color: '#00A67E' },
        { name: 'OpenAI', icon: <SiOpenai />, color: '#412991' },
        { name: 'AWS', icon: <SiAmazonwebservices />, color: '#FF9900' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'REST APIs', icon: <HiOutlineDatabase />, color: '#FF6F61' },
    ];

    const experience = [
        {
            company: 'Qurk (qurk.app)',
            role: 'Backend Engineer',
            period: '2025 - Present',
            description: 'Engineering high-performance backend systems and scaling platform architecture for the Qurk ecosystem.',
            skills: ['Python', 'System Design', 'Scale']
        },
        {
            company: 'Xmind Limited',
            role: 'Lead Backend Developer',
            period: '2023 - 2025',
            description: 'Led the backend engineering team in architecting scalable Python/Django systems and RESTful APIs. Drove technical decisions for high-traffic SaaS platforms.',
            skills: ['Django', 'System Design', 'Leadership']
        },
        {
            company: 'LazyAlgo (Startup)',
            role: 'Co-Founder',
            period: '2022 - Present',
            description: 'Spearheading the development of intelligent automation tools. Managing product strategy and core backend development using AI/ML integrations.',
            skills: ['AI/ML', 'Strategy', 'Fullstack']
        },
        {
            company: 'ARKPLUS',
            role: 'Junior Python Developer',
            period: '2021 - 2022',
            description: 'Contributed to various client projects, focusing on database management, API development, and software optimization.',
            skills: ['Python', 'SQL', 'APIs']
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Preston University',
            period: '2019 - 2023',
            description: 'Focused on backend systems, data structures, and algorithm optimization. Final year project involved AI-driven automation.'
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">Professional <span className="gradient-text">Profile</span></h2>
                    <p className="about-subtitle">Bridging the gap between complex backend architecture and intelligent AI solutions.</p>
                </div>

                <div className="about-tabs-container">
                    <div className="tabs-header glass">
                        <button
                            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                            onClick={() => setActiveTab('skills')}
                        >
                            <HiLightningBolt /> <span>Skills</span>
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experience')}
                        >
                            <HiBriefcase /> <span>Experience</span>
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            <HiAcademicCap /> <span>Education</span>
                        </button>
                    </div>

                    <div className="tab-content glass">
                        {activeTab === 'skills' && (
                            <div className="skills-grid tab-pane active">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="tech-pill glass">
                                        <span className="pill-icon" style={{ color: tech.color }}>{tech.icon}</span>
                                        <span className="pill-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className="experience-timeline tab-pane active">
                                {experience.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-header">
                                            <h3>{item.role}</h3>
                                            <span className="period-badge">{item.period}</span>
                                        </div>
                                        <h4 className="company-name">{item.company}</h4>
                                        <p className="experience-desc">{item.description}</p>
                                        <div className="timeline-tags">
                                            {item.skills.map(skill => (
                                                <span key={skill} className="tag">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className="education-list tab-pane active">
                                {education.map((item, index) => (
                                    <div key={index} className="edu-item">
                                        <div className="edu-icon"><HiAcademicCap /></div>
                                        <div className="edu-details">
                                            <h3>{item.degree}</h3>
                                            <h4>{item.institution}</h4>
                                            <span className="period-badge">{item.period}</span>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="about-stats">
                    <div className="about-stat glass">
                        <span className="stat-value">4+</span>
                        <span className="stat-name">Years Exp</span>
                    </div>
                    <div className="about-stat glass">
                        <span className="stat-value">15+</span>
                        <span className="stat-name">Projects</span>
                    </div>
                    <div className="about-stat glass">
                        <span className="stat-value">100%</span>
                        <span className="stat-name">Precision</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
