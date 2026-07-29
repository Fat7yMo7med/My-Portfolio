import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Listen for modal toggle events
  useEffect(() => {
    const handleModalToggle = (event) => {
      setIsModalOpen(event.detail.isOpen);
    };

    window.addEventListener('modalToggle', handleModalToggle);
    return () => {
      window.removeEventListener('modalToggle', handleModalToggle);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Only set up observer on home page
    if (!isHomePage) {
      setActiveId("");
      return;
    }

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean
    );
    if (sections.length === 0) return undefined;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    
    // If we're on the home page, just scroll to the section
    if (isHomePage) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveId(id);
      }
    } else {
      // If we're on any other page (like ProjectsDetails), navigate to home first
      // Then scroll to the section after navigation
      navigate('/');
      // Store the target ID to scroll to after navigation
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setActiveId(id);
        }
      }, 300); // Small delay to allow navigation to complete
    }
    
    setIsMenuOpen(false);
  };

  // Handle logo click - always go home
  const handleLogoClick = (event) => {
    event.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  // Hide navbar if modal is open
  const navbarHidden = isModalOpen ? styles.navbarHidden : '';

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${navbarHidden}`}>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Main Navbar - Hides when mobile menu is open */}
      <div className={`${styles.inner} ${isMenuOpen ? styles.innerHidden : ""}`}>
        <a
          href="/"
          className={styles.logo}
          onClick={handleLogoClick}
        >
          Fathy Mohamed<span className={styles.logoDot}></span>
        </a>
        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`${styles.link} ${
                activeId === link.id && isHomePage ? styles.linkActive : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Let's talk
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel - Floating Card Design */}
      <div className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ""}`}>
        <div className={styles.mobilePanelContent}>
          <div className={styles.mobileHeader}>
            <a
              href="/"
              className={styles.logo}
              onClick={handleLogoClick}
            >
              Fathy Mohamed<span className={styles.logoDot}></span>
            </a>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className={styles.mobileLinks}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`${styles.mobileLink} ${
                  activeId === link.id && isHomePage ? styles.linkActive : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={styles.mobileCta}
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Let's talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}