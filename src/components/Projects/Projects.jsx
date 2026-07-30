import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

// Import images from src/assets
import TaskflowHome from "../../assets/projects/Taskflow/Home.png";
import SmartHome from "../../assets/projects/Smart/Home.png";
import SupplyHome from "../../assets/projects/SupplyMent/Home.png";
import PharmacyHome from "../../assets/projects/Pharmacy/HomePahrm.png";
import FirstPo from "../../assets/projects/FirstPortfolio/Home.png";
import Falcon from "../../assets/projects/Falcon/Home.png";

const PROJECTS = [
  {
    id: "brewtask",
    title: "BrewTask",
    category: "Task Management",
    role: "Full Stack Developer",
    period: "2025",
    description: "A premium task management ritual for professionals who value focus over noise",
    image: TaskflowHome,
    tags: ["React", "Tailwind CSS", "React Router", "Firebase"],
    demo: "https://brewtask-rho.vercel.app/",
    github: "https://github.com/Fat7yMo7med/BrewTask",
    featured: true,
    color: "purple",
  },
  {
    id: "smartmentor",
    title: "SmartMentor",
    category: "AI / Career Guidance",
    role: "AI Engineer & Frontend Developer",
    period: "2025",
    description: "AI-Based Career Guidance Platform with roadmap generation, course recommendations, and CV analysis",
    image: SmartHome,
    tags: ["React", "FastAPI", "Docker", "TensorFlow", "Python"],
    demo: "https://smart-mentor-one.vercel.app",
    github: "https://github.com/Smart-Mentor",
    featured: true,
    color: "purple",
  },
  {
    id: "supplement-store",
    title: "Supplement Store",
    category: "E-commerce",
    role: "Frontend Developer",
    period: "2025",
    description: "E-commerce platform for gym supplements with product listings and equipment showcases",
    image: SupplyHome,
    tags: ["React", "Tailwind CSS", "React Router"],
    demo: "",
    github: "https://github.com/Fat7yMo7med/Supplement-Store",
    featured: false,
    color: "cyan",
  },
  {
    id: "online-pharmacy",
    title: "Online Pharmacy",
    category: "E-commerce",
    role: "Frontend Developer",
    period: "2024",
    description: "Team-built pharmacy platform for medicine listings, stock management, and order processing",
    image: PharmacyHome,
    tags: ["React", ".NET Framework", "Team Project"],
    demo: "",
    github: "https://github.com/MohammedAlbasuony/Online-Pharmacy",
    featured: false,
    color: "teal",
  },
  {
    id: "my-portfolio",
    title: "First Portfolio",
    category: "Showcase",
    role: "Designer & Developer",
    period: "2024",
    description: "Personal portfolio website showcasing professional projects and skills with modern responsive design",
    // TODO: add the screenshot to src/assets/projects/ and import it like the
    // other projects above — no image file was available, so this falls
    // back to the placeholder icon for now instead of crashing the page.
    image: FirstPo,
    tags: ["HTML", "CSS", "Responsive Design", "Bootstrap"],
    demo: "https://fat7ymo7med.github.io/First-Portfolio/",
    github: "https://github.com/Fat7yMo7med/My-Portfolio",
    featured: false,
    color: "purple",
  },
  {
    id: "falcon-website",
    title: "Falcon",
    category: "Gaming",
    role: "Frontend Developer",
    period: "2025",
    description: "A visually engaging gaming website designed to showcase games, stories, and interactive content with a modern, responsive interface.",
    image: Falcon,
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://fat7ymo7med.github.io/Falcon/",
    github: "https://github.com/Fat7yMo7med/Falcon",
    featured: false,
    color: "purple"
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Get featured projects (initially shown - only 2)
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  // Get non-featured projects (hidden initially)
  const hiddenProjects = PROJECTS.filter((p) => !p.featured);
  
  // Determine which projects to display
  const displayed = showAll ? PROJECTS : featuredProjects;
  
  // Calculate how many projects are hidden
  const hiddenCount = hiddenProjects.length;

  // Check if a project has a demo link
  const hasDemo = (project) => {
    return project.demo && project.demo.trim() !== "";
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>PROJECTS</span>
          <h2 className={styles.title}>Things I've built</h2>
          <p className={styles.subtitle}>
            A collection of projects showcasing my skills and problem-solving approach
          </p>
        </div>

        <div className={styles.grid}>
          {displayed.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <div className={styles.imageWrap}>
                  <div className={styles.imagePlaceholder}>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={styles.projectImage}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const parent = e.target.parentElement;
                          const emoji = document.createElement('span');
                          emoji.className = styles.imageEmoji;
                          emoji.textContent = '📁';
                          parent.appendChild(emoji);
                        }}
                      />
                    ) : (
                      <span className={styles.imageEmoji}>📁</span>
                    )}
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewDetails}>
                        View Details
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className={styles.categoryBadge}>
                    {project.category}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectRole}>{project.role}</p>
                    </div>
                    <div className={styles.actions}>
                      {/* Only show Live Demo button if demo link exists */}
                      {hasDemo(project) && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`${styles.actionIcon} ${styles.actionPrimary}`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Live Demo"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.actionIcon}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className={styles.showMore}>
            <button
              className={styles.showMoreBtn}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll 
                ? "Show Less" 
                : `View All ${PROJECTS.length} Projects (${hiddenCount} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}