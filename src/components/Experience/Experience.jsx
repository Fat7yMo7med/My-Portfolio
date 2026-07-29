import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    id: 1,
    company: "Huawei Talent",
    subtitle: "AI Training Program",
    year: "Feb – Mar 2025",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
    items: [
      "Artificial Intelligence Foundations",
      "Machine Learning Basics",
      "Real-world AI Applications",
    ],
  },
  {
    id: 2,
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    subtitle: "React Frontend Development Trainee",
    year: "Jul – Dec 2025",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      "React.js, TypeScript & Modern JavaScript (ES6+)",
      "Redux Toolkit, REST APIs & Git/GitHub Workflow",
      "Responsive, Production-grade UI through Agile Projects",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>JOURNEY</span>
          <h2 className={styles.title}>Experience & Training</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
            >
              <div className={styles.timelineDot} />
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderLeft}>
                    <div className={styles.cardIcon}>{exp.icon}</div>
                    <div>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p className={styles.subtitle}>{exp.subtitle}</p>
                    </div>
                  </div>
                  <span className={styles.year}>{exp.year}</span>
                </div>
                <ul className={styles.items}>
                  {exp.items.map((item, i) => (
                    <li key={i} className={styles.item}>
                      <svg className={styles.sparkle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}