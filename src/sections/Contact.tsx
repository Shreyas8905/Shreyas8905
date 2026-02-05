import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Shreyas8905", label: "GitHub", color: "#6e5494" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shreyas-kulkarni-083a5019b/", label: "LinkedIn", color: "#0077b5" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/shreyas_7905/", label: "Instagram", color: "#e4405f" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;contact&gt;</span>
          <h2 className="section-title">
            <span className="gradient-text">Let's Connect</span>
          </h2>
        </motion.div>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Interested in <span className="highlight">Agentic AI</span>, <span className="highlight">LLM systems</span>, 
          or <span className="highlight">AI backends at scale</span>? Let's build something impactful.
        </motion.p>

        <motion.div
          className="contact-methods"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="contact-card glass">
            <FaEnvelope className="contact-icon" />
            <span className="contact-label">Email</span>
            <a href="mailto:shreyaskulkarni159@gmail.com" className="contact-value">
              shreyaskulkarni159@gmail.com
            </a>
          </div>
          
          <div className="contact-card glass">
            <FaLinkedin className="contact-icon" style={{ color: '#5865f2' }} />
            <span className="contact-label">LinkedIn</span>
            <a><span className="contact-value">shreyas-kulkarni-aiml</span></a>
          </div>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link glass"
              whileHover={{ 
                scale: 1.1,
                boxShadow: `0 0 30px ${social.color}40`
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              style={{ '--social-color': social.color } as React.CSSProperties}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="footer-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>"Research the intelligence. Engineer the system."</p>
        </motion.div>

        <motion.span
          className="section-tag closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &lt;/contact&gt;
        </motion.span>

        <div className="footer">
          <p>© 2026 Shreyas Kulkarni</p>
        </div>
      </div>
    </section>
  );
}
