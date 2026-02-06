import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaCode, FaRobot } from 'react-icons/fa';
import './About.css';

const interests = [
  { icon: <FaBrain />, title: "Core LLMs", desc: "Deep understanding of transformer architectures" },
  { icon: <FaCode />, title: "Deep Learning", desc: "Neural network research & implementation" },
  { icon: <FaRobot />, title: "Agentic AI", desc: "Multi-agent orchestration systems" },
  { icon: <FaGraduationCap />, title: "Mathematics", desc: "The foundations behind intelligence" },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;about&gt;</span>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm an <span className="highlight">aspiring AI researcher and systems builder</span> with 
              strong experience in agentic AI workflows, LLM orchestration, and backend engineering 
              for ML/DL systems.
            </p>
            <p>
              Currently pursuing <span className="highlight">AI & ML</span> at Dayanand Sagar College 
              of Engineering (Batch of 2027), I focus on building <span className="highlight">full-code 
              AI workflows</span> — avoiding low-code abstractions for maximum control and understanding.
            </p>
            <p>
              My expertise spans from <span className="highlight">core LLM reasoning systems</span> to 
              production-grade backend development with Django, Flask, and FastAPI.
            </p>
            
            <div className="about-quote">
              <span className="quote-mark">"</span>
              Research the intelligence. Engineer the system.
              <span className="quote-mark">"</span>
            </div>
          </motion.div>

          <motion.div
            className="interests-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                className="interest-card glass"
                whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="interest-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.span
          className="section-tag closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &lt;/about&gt;
        </motion.span>
      </div>
    </section>
  );
}
