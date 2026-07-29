import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./ProjectsDetails.module.css";

const PROJECTS_DB = [
  {
    id: "smartmentor",
    title: "SmartMentor",
    category: "AI / Career Guidance",
    role: "AI Engineer & Frontend Developer",
    period: "2025",
    client: "Personal Project",
    description: "AI-Based Career Guidance Platform with roadmap generation, course recommendations, and CV analysis",
    overview:
      "SmartMentor is a comprehensive AI-powered career guidance platform that helps users discover their ideal career paths. The platform features three core AI services: a career roadmap generator, a course recommendation chatbot, and a CV analyzer with job recommendations.",
    problem:
      "Students and career changers often struggle to find clear career pathways and relevant learning resources. Traditional career guidance is expensive, time-consuming, and not personalized to individual skills and interests.",
    solution:
      "Built a hybrid AI system combining rule-based pattern matching, TF-IDF centroid scoring, and softmax normalization to provide accurate career recommendations. Optimized the roadmap model by replacing transformer-based models with rule-based pattern matching, reducing deployment size by over 85% while preserving accuracy.",
    features: [
      "AI Career Roadmap Generator",
      "Course Recommendation Chatbot",
      "CV Analyzer & Job Recommender",
      "3 Production AI REST APIs (FastAPI, Docker)",
      "Full-stack integration with React + ASP.NET Core",
      "Responsive, reusable React components",
    ],
    highlights: [
      "85% reduction in deployment size through model optimization",
      "Hybrid career-detection system with weighted keyword matching",
      "Scalable full-stack application with Axios integration",
      "Deployed on Hugging Face Spaces",
    ],
    techStack: ["React", "FastAPI", "Docker", "TensorFlow", "Python", "Axios"],
    demo: "https://smartmentor.huggingface.co",
    github: "https://github.com/yourusername/smartmentor",
    color: "purple",
  },
  {
    id: "supplement-store",
    title: "Supplement Store",
    category: "E-commerce",
    role: "Frontend Developer",
    period: "2025",
    client: "Personal Project",
    description: "E-commerce platform for gym supplements with product listings and equipment showcases",
    overview:
      "A full-featured e-commerce platform designed specifically for gyms and fitness enthusiasts. The platform showcases supplement products, gym equipment, and provides an intuitive shopping experience.",
    problem:
      "Gym owners and fitness enthusiasts needed a specialized platform to browse and purchase supplements and equipment. Generic e-commerce platforms lacked the specific categorization and filtering needed for fitness products.",
    solution:
      "Built a React.js application with Tailwind CSS for a modern, responsive UI. Implemented gym-specific product filtering, category browsing, and a clean checkout flow.",
    features: [
      "Gym-specific product listings",
      "Equipment showcase",
      "Category-based filtering",
      "Shopping cart functionality",
      "Responsive design",
      "Product detail pages",
    ],
    highlights: [
      "Clean, modern UI with Tailwind CSS",
      "Optimized for mobile and desktop",
      "Fast page loads with React Router",
      "Intuitive navigation",
    ],
    techStack: ["React", "Tailwind CSS", "React Router"],
    demo: "https://supplement-store-demo.com",
    github: "https://github.com/yourusername/supplement-store",
    color: "cyan",
  },
  {
    id: "online-pharmacy",
    title: "Online Pharmacy",
    category: "E-commerce",
    role: "Frontend Developer",
    period: "2024",
    client: "Team Project",
    description: "Team-built pharmacy platform for medicine listings, stock management, and order processing",
    overview:
      "A collaborative team project that built a comprehensive online pharmacy platform. The system allows users to browse medicine listings, check stock availability, and manage customer orders efficiently.",
    problem:
      "Traditional pharmacies lack digital infrastructure for online ordering and inventory management. Customers need a convenient way to check medicine availability and place orders remotely.",
    solution:
      "Developed a React frontend integrated with a .NET Framework backend. Implemented real-time stock management, medicine catalog browsing, and a streamlined order processing system.",
    features: [
      "Medicine catalog with search",
      "Stock availability tracking",
      "Customer order management",
      "User-friendly interface",
      "Team collaboration workflow",
      "Efficient data handling",
    ],
    highlights: [
      "Built as a collaborative team project",
      "Real-time stock updates",
      "Clean separation of concerns",
      "Focus on usability and accessibility",
    ],
    techStack: ["React", ".NET Framework", "Team Collaboration"],
    demo: "https://pharmacy-demo.com",
    github: "https://github.com/yourusername/online-pharmacy",
    color: "teal",
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    category: "Showcase",
    role: "Designer & Developer",
    period: "2024",
    client: "Self",
    description: "Personal portfolio website showcasing professional projects and skills with modern responsive design",
    overview:
      "A personal portfolio website designed to showcase my projects, skills, and professional experience. Built with a clean, modern aesthetic and optimized for all devices.",
    problem:
      "Needed a professional online presence that effectively communicates my skills and projects to potential employers and collaborators.",
    solution:
      "Designed and built a responsive portfolio using React and Tailwind CSS. Features smooth animations, project showcases, and a clean, professional layout.",
    features: [
      "Project portfolio gallery",
      "Skills showcase",
      "Responsive design",
      "Modern UI",
      "Smooth animations",
      "Cross-device compatibility",
    ],
    highlights: [
      "Clean, professional design",
      "Fully responsive on all devices",
      "Showcases key projects effectively",
      "Built with modern best practices",
    ],
    techStack: ["React", "Tailwind CSS", "Responsive Design"],
    demo: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
    color: "purple",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DB.find((p) => p.id === id);

  // If project not found, redirect to projects page
  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <section className={styles.detailsSection}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.container}>
        {/* Back button and Breadcrumb - Top left */}
        <div className={styles.topNav}>
          <button onClick={() => navigate(-1)} className={styles.backBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to all projects
          </button>

          <nav className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link to="/projects" className={styles.breadcrumbLink}>
              Projects
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{project.title}</span>
          </nav>
        </div>

        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={`${styles.categoryBadge} ${styles[`badge-${project.color}`]}`}>
              {project.category.toUpperCase()}
            </span>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectRole}>{project.role}</p>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Period</span>
                <span className={styles.metaValue}>{project.period}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryBtn}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryBtn}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Code
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <div className={styles.visualBody}>
                <span className={styles.visualEmoji}>🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.sectionText}>{project.overview}</p>
            </div>

            <div className={styles.twoCol}>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>The Problem</h2>
                <p className={styles.sectionText}>{project.problem}</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>The Solution</h2>
                <p className={styles.sectionText}>{project.solution}</p>
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureGrid}>
                {project.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tech Stack</h3>
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Highlights</h3>
              <ul className={styles.highlightList}>
                {project.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <span className={styles.highlightBullet}>✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}