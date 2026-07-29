import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

// How long the loader stays fully visible before it starts fading out,
// and how long after that before it's removed from the DOM entirely.
const HOLD_MS = 1400;
const FADE_MS = 500;

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.loader} ${fading ? styles.fadeOut : ""}`}
      aria-hidden="true"
    >
      <svg className={styles.spinner} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#loaderGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="180 264"
        />
      </svg>

      <span className={styles.name}>Fathy Mohamed</span>
    </div>
  );
}