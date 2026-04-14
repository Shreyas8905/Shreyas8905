import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import "./Hero.css";

const roles = [
  "Obssessed with Deep Learning",
  "Building Agentic AI Systems",
  "Engineering Full-Code LLM Workflows",
  "From Research to Production AI",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="greeting-text">Hi, I'm</span>
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="name-glitch" data-text="Shreyas Kulkarni">
            Shreyas Kulkarni
          </span>
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          AI Researcher | Deep Learning Engineer | Agentic AI Engineer | Backend
          Developer | Part-Time Mathematician
        </motion.h2>
        <motion.div
          className="hero-typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="typewriter-prefix">&gt;</span>
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor">|</span>
        </motion.div>

        <motion.div
          className="hero-links"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/Shreyas8905"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shreyas-kulkarni-083a5019b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity },
          }}
        >
          <HiArrowDown />
        </motion.a>
      </div>
    </section>
  );
}
