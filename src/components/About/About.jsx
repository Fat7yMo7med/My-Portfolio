import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>ABOUT ME</span>
          <h2 className={styles.title}>Turning ideas into interfaces</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.descriptionCard}>
            <p className={styles.text}>
              I'm a <strong className={styles.textBold}>senior Computer Science student</strong> at the Faculty of Computer and Information, Tanta University, graduating June 2026, with a strong foundation in{" "}
              <span className={styles.textHighlight}>artificial intelligence, software engineering and web development</span>. I specialize in React and craft interfaces that feel fast, purposeful and delightful.
            </p>
            <p className={styles.text}>
              Through internships at Huawei Talent and the Digital Egypt Pioneers Initiative (DEPI), and hands-on work shipping SmartMentor — an AI career-guidance platform with 3 deployed production APIs — I've built real experience turning ideas into working, production-grade software.
            </p>
            <div className={styles.traits}>
              <span className={styles.traitPill}>Problem Solver</span>
              <span className={styles.traitPill}>Team Player</span>
              <span className={styles.traitPill}>Continuous Learner</span>
              <span className={styles.traitPill}>Clear Communicator</span>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>PROJECTS COMPLETED</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>CERTIFICATES</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>18+</span>
              <span className={styles.statLabel}>TECHNOLOGIES</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>INTERNSHIPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}