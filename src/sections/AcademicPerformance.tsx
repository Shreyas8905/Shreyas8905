import { motion } from "framer-motion";
import "./AcademicPerformance.css";

const semesters = [
  { number: 1, sgpa: 9.05 },
  { number: 2, sgpa: 9.1 },
  { number: 3, sgpa: 9.15 },
  { number: 4, sgpa: 9.73 },
  { number: 5, sgpa: 9.85 },
  { number: 6, sgpa: 9.5 },
];

const finalCGPA = 9.39;

export default function AcademicPerformance() {
  return (
    <section id="academic-performance" className="academic-performance">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;academic-performance&gt;</span>
          <h2 className="section-title">
            <span className="gradient-text">Academic Journey</span>
          </h2>
        </motion.div>

        <div className="academic-content">
          <div className="semester-timeline">
            {semesters.map((sem) => (
              <motion.div
                key={sem.number}
                className="semester-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sem.number * 0.1 }}
              >
                <h3>Semester {sem.number}</h3>
                <div className="sgpa-cgpa">
                  <span className="label">SGPA:</span>
                  <span className="value">{sem.sgpa}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="final-cgpa"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>Cumulative CGPA</h2>
            <div className="cgpa-value">{finalCGPA}</div>
            <div className="cgpa-label">Over 6 Semesters</div>
          </motion.div>
        </div>

        <motion.span
          className="section-tag closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &lt;/academic-performance&gt;
        </motion.span>
      </div>
    </section>
  );
}