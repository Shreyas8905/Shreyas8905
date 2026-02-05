import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiTypescript, SiPytorch, 
  SiDjango, SiFastapi, SiFlask, SiNodedotjs, SiReact, SiVite,
  SiPostgresql, SiMongodb, SiMysql, SiDocker, SiLinux, SiGit
} from 'react-icons/si';
import './TechStack.css';

const techCategories = [
  {
    title: "Languages & Frameworks",
    items: [
      { icon: <SiPython />, name: "Python", color: "#3776ab" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
      { icon: <SiPytorch />, name: "PyTorch", color: "#ee4c2c" },
      { icon: <SiDjango />, name: "Django", color: "#092e20" },
      { icon: <SiFastapi />, name: "FastAPI", color: "#009688" },
      { icon: <SiFlask />, name: "Flask", color: "#ffffff" },
      { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
      { icon: <SiReact />, name: "React", color: "#61dafb" },
      { icon: <SiVite />, name: "Vite", color: "#646cff" },
    ]
  },
  {
    title: "Infrastructure & Databases",
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169e1" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
      { icon: <SiDocker />, name: "Docker", color: "#2496ed" },
      { icon: <SiLinux />, name: "Linux", color: "#fcc624" },
      { icon: <SiGit />, name: "Git", color: "#f05032" },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech" className="tech-stack">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;tech-stack&gt;</span>
          <h2 className="section-title">
            <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        {techCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="tech-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="tech-grid">
              {category.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="tech-item glass"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px ${tech.color}40`
                  }}
                  style={{ '--tech-color': tech.color } as React.CSSProperties}
                >
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.span
          className="section-tag closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &lt;/tech-stack&gt;
        </motion.span>
      </div>
    </section>
  );
}
