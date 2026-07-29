import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: "smartmentor",
    title: "SmartMentor",
    category: "AI / Career Guidance",
    role: "AI Engineer & Frontend Developer",
    period: "2025",
    description: "AI-Based Career Guidance Platform with roadmap generation, course recommendations, and CV analysis",
    image: "/assets/projects/smartmentor.jpg",
    tags: ["React", "FastAPI", "Docker", "TensorFlow", "Python"],
    demo: "https://smartmentor.huggingface.co",
    github: "https://github.com/yourusername/smartmentor",
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
    image: "/assets/projects/supplement-store.jpg",
    tags: ["React", "Tailwind CSS", "React Router"],
    demo: "https://supplement-store-demo.com",
    github: "https://github.com/yourusername/supplement-store",
    featured: true,
    color: "cyan",
  },
  {
    id: "online-pharmacy",
    title: "Online Pharmacy",
    category: "E-commerce",
    role: "Frontend Developer",
    period: "2024",
    description: "Team-built pharmacy platform for medicine listings, stock management, and order processing",
    image: "/assets/projects/pharmacy.jpg",
    tags: ["React", ".NET Framework", "Team Project"],
    demo: "https://pharmacy-demo.com",
    github: "https://github.com/yourusername/online-pharmacy",
    featured: false,
    color: "teal",
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    category: "Showcase",
    role: "Designer & Developer",
    period: "2024",
    description: "Personal portfolio website showcasing professional projects and skills with modern responsive design",
    image: "/assets/projects/portfolio.jpg",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demo: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
    featured: false,
    color: "purple",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Get featured projects (initially shown)
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  // Get non-featured projects (hidden initially)
  const hiddenProjects = PROJECTS.filter((p) => !p.featured);
  
  // Determine which projects to display
  const displayed = showAll ? PROJECTS : featuredProjects;
  
  // Calculate how many projects are hidden
  const hiddenCount = hiddenProjects.length;

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
                    <span className={styles.imageEmoji}>📁</span>
                  </div>
                  <div className={styles.categoryBadge}>
                    {project.category}
                  </div>
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
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectRole}>{project.role}</p>
                    </div>
                    <div className={styles.actions}>
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