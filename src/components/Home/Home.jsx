import { useEffect, useState } from "react";
import styles from "./Home.module.css";
// Import the avatar image
import avatarImage from "../../assets/MyPhoto.jpg"; // Adjust path based on your folder structure

const scrollToId = (event, id) => {
  event.preventDefault();
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const ROLES = ["React Specialist", "Frontend Developer", "AI Engineer"];
const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPED = 1400;

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentRole.slice(0, prev.length - 1)
              : currentRole.slice(0, prev.length + 1)
          );
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className={styles.hero}>
        <div className={styles.starfield} aria-hidden="true" />
        <div className={styles.constellation} aria-hidden="true" />
        
        <div className={styles.inner}>
          <div className={styles.copy}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              AVAILABLE FOR OPPORTUNITIES
            </span>
            
            <p className={styles.greeting}>Hi, I'm</p>
            <h1 className={styles.name}>Fathy Mohamed</h1>
            <h2 className={styles.role}>
              {text}
              <span className={styles.cursor} />
            </h2>
            
            <p className={styles.description}>
              I build modern web experiences powered by clean code and
              Artificial Intelligence.
            </p>

            <div className={styles.actions}>
              <a
                href="#projects"
                className={styles.primaryBtn}
                onClick={(e) => scrollToId(e, "projects")}
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
              
              <a
                href="https://drive.google.com/uc?export=download&id=189SdGg0r8-M5orc6tIFULBWJ-NPZeT5W"
                className={styles.secondaryBtn}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
              
              <a
                href="#contact"
                className={styles.secondaryBtn}
                onClick={(e) => scrollToId(e, "contact")}
              >
                Contact Me
              </a>
            </div>

            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/fathy-mo7amed"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              
              <a
                href="https://github.com/Fat7yMo7med"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={styles.socialIcon}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fathym6044@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className={styles.socialIcon}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.portraitWrap}>
            <span className={`${styles.floatTag} ${styles.tagReact}`}>React</span>
            <span className={`${styles.floatTag} ${styles.tagAI}`}>AI</span>
            <span className={`${styles.floatTag} ${styles.tagTS}`}>JavaScript</span>
            <span className={`${styles.floatTag} ${styles.tagPy}`}>Python</span>
            
            <div className={styles.portrait}>
              <img
                src={avatarImage}
                alt="Fathy Mohamed"
                className={styles.portraitImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}