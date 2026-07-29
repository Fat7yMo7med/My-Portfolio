import { useState, useEffect } from "react";
import styles from "./Certifications.module.css";

const CERTIFICATES = [
  {
    id: 1,
    title: "Artificial Intelligence",
    issuer: "Huawei Talent",
    year: "March 2025",
    type: "certificate",
    link: "https://drive.google.com/file/d/15g2mVKAo5pN5fwmeF9g5Fw3oSTHSX5-M/view?usp=sharing",
    embedLink: "https://drive.google.com/file/d/15g2mVKAo5pN5fwmeF9g5Fw3oSTHSX5-M/preview",
    description: "Completed training in foundational AI concepts, machine learning basics, and real-world AI applications.",
  },
  {
    id: 2,
    title: "React Frontend Web Development",
    issuer: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
    year: "June 2025",
    type: "certificate",
    link: "https://drive.google.com/file/d/1w0LW1kSlci1vOXDatLCRLJMTmP0Jy42p/view?usp=sharing",
    embedLink: "https://drive.google.com/file/d/1w0LW1kSlci1vOXDatLCRLJMTmP0Jy42p/preview",
    description: "Intensive program covering React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit, REST APIs, Git/GitHub, responsive design, and Agile software development.",
  },
];

const EDUCATION = {
  title: "Faculty of Computer and Information · Tanta University",
  degree: "B.Sc. in Computer Science — foundations in algorithms, systems, AI and software engineering.",
  gpa: "GPA 3.5 · Very Good",
  period: "September 2022 - June 2026",
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    // Dispatch custom event to hide navbar
    window.dispatchEvent(new CustomEvent('modalToggle', { detail: { isOpen: true } }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    // Dispatch custom event to show navbar
    window.dispatchEvent(new CustomEvent('modalToggle', { detail: { isOpen: false } }));
    setTimeout(() => setSelectedCert(null), 300);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <>
      <section id="certificates" className={styles.certificatesSection}>
        <div className={styles.starfield} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.tag}>RECOGNITION</span>
            <h2 className={styles.title}>Certificates & Education</h2>
          </div>

          <div className={styles.grid}>
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className={styles.cardWrapper}
                onClick={() => openModal(cert)}
              >
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{cert.title}</h3>
                      <span className={styles.verifyBadge}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        View
                      </span>
                    </div>
                    <p className={styles.cardIssuer}>{cert.issuer}</p>
                    <p className={styles.cardDescription}>{cert.description}</p>
                    <span className={styles.cardYear}>{cert.year}</span>
                  </div>
                  <div className={styles.cardOverlay}>
                    <span className={styles.viewLabel}>Click to view certificate</span>
                  </div>
                </div>
              </div>
            ))}

            <div className={`${styles.card} ${styles.educationCard}`}>
              <div className={`${styles.cardIcon} ${styles.educationIcon}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className={styles.educationContent}>
                <h3 className={styles.educationTitle}>{EDUCATION.title}</h3>
                <p className={styles.educationDegree}>{EDUCATION.degree}</p>
                <span className={styles.educationPeriod}>{EDUCATION.period}</span>
              </div>
              <span className={styles.gpa}>{EDUCATION.gpa}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Full Screen Popup */}
      {isModalOpen && selectedCert && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalPopup} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className={styles.modalCloseBtn} onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Certificate Header */}
            <div className={styles.modalCertHeader}>
              <div className={styles.modalCertInfo}>
                <h3 className={styles.modalCertTitle}>{selectedCert.title}</h3>
                <span className={styles.modalCertIssuer}>{selectedCert.issuer}</span>
              </div>
              <span className={styles.modalCertYear}>{selectedCert.year}</span>
            </div>

            {/* Certificate Viewer - Full */}
            <div className={styles.modalViewer}>
              <iframe
                src={selectedCert.embedLink}
                title={selectedCert.title}
                className={styles.modalIframe}
                allowFullScreen
              />
            </div>

            {/* Footer with drive link */}
            <div className={styles.modalFooter}>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className={styles.modalDriveLink}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open in Google Drive
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}