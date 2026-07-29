import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import robotImage from "../../assets/404_Robot.png";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <div className={styles.imageGlow} aria-hidden="true" />
          <img
            src={robotImage}
            alt="A broken 404 robot holding a screwdriver next to a toolbox"
            className={styles.image}
          />
          <div className={styles.errorBadge}>
            <span>404</span>
          </div>
        </div>

        <span className={styles.eyebrow}>Oops! Something went wrong</span>
        <h1 className={styles.title}>Page Not Found</h1>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 11L12 4L21 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 9.5V19C5 19.5523 5.44772 20 6 20H9.5V14.5C9.5 13.9477 9.94772 13.5 10.5 13.5H13.5C14.0523 13.5 14.5 13.9477 14.5 14.5V20H18C18.5523 20 19 19.5523 19 19V9.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          <Link to="/#contact" className={styles.secondaryBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}