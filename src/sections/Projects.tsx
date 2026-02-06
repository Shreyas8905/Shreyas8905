import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaRobot, FaMicrophone, FaHospital } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    icon: <FaBrain />,
    title: "S2TD",
    subtitle: "Self-Correcting Agentic RAG System",
    description: "An adaptive System-2 thinking RAG agent that evaluates retrieved context, rewrites queries when needed, and uses an ensemble of LLMs to reduce hallucinations and improve answer relevance.",
    tags: ["LangGraph", "RAG", "LLMs", "Self-Correction"],
    github: "https://github.com/Shreyas8905/S2TD",
    color: "#00d4ff"
  },
  {
    icon: <FaRobot />,
    title: "AIPES",
    subtitle: "AI Powered Evaluation System",
    description: "A multi-agent, asynchronous AI orchestration system for evaluating pitch decks at scale, combining visual critique and logical analysis using parallel LangGraph agents.",
    tags: ["Multi-Agent", "LangGraph", "Async", "Evaluation"],
    github: "https://github.com/Shreyas8905/aipes",
    color: "#06b6d4"
  },
  {
    icon: <FaMicrophone />,
    title: "InterXAI",
    subtitle: "AI Interview Platform",
    description: "An AI-powered interviewer platform leveraging LLMs and sentiment analysis to dynamically evaluate candidates. Developed the Core AI pipeline and real-time response logic.",
    tags: ["LLMs", "Sentiment Analysis", "Real-time", "AI Pipeline"],
    color: "#10b981"
  },
  {
    icon: <FaHospital />,
    title: "Arogya Kosh",
    subtitle: "Blockchain EHR with AI",
    description: "A blockchain-based Electronic Health Record (EHR) system integrated with AI models for accident detection and prescription processing. Architected the Core AI integration.",
    tags: ["Blockchain", "Healthcare", "AI", "EHR"],
    color: "#00ff88"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;projects&gt;</span>
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px ${project.color}33`
              }}
              style={{ '--accent-color': project.color } as React.CSSProperties}
            >
              <div className="project-header">
                <div className="project-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  <FaExternalLinkAlt />
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag" style={{ borderColor: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.span
          className="section-tag closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &lt;/projects&gt;
        </motion.span>
      </div>
    </section>
  );
}
