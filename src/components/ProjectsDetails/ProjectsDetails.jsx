import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ProjectsDetails.module.css";

// Same real screenshots used on the Projects list page
import TaskflowHome from "../../assets/projects/Taskflow/Home.png";
import HomeTask from "../../assets/projects/Taskflow/Home.png";
import HomeDTask from "../../assets/projects/Taskflow/HomeD.png";
import HomeD2Task from "../../assets/projects/Taskflow/HomeD2.png";
import ProfileTask from "../../assets/projects/Taskflow/Profile.png";
import DashTask from "../../assets/projects/Taskflow/Dashboard.png";
import DashDTask from "../../assets/projects/Taskflow/DashboardD.png";
import LoginTask from "../../assets/projects/Taskflow/Login.png";
import ProDetailsTask from "../../assets/projects/Taskflow/ProDetails.png";
import ProTask from "../../assets/projects/Taskflow/Projects.png";
import CelenderTask from "../../assets/projects/Taskflow/Calender.png";
import SignUpTask from "../../assets/projects/Taskflow/SignUp.png";
import SettingsTask from "../../assets/projects/Taskflow/SettingsD.png";
import TasksTask from "../../assets/projects/Taskflow/Tasks.png";


import SmartHome from "../../assets/projects/Smart/Home.png";
import AdminDashSmart from "../../assets/projects/Smart/adminDashboard.png";
import AiMentorSmart from "../../assets/projects/Smart/aiMentor.png";
import CommunitySmart from "../../assets/projects/Smart/community.png";
import GapAnalysisSmart from "../../assets/projects/Smart/Gapanalysis.png";
import LearningPathSmart from "../../assets/projects/Smart/learningPath.png";
import LoginSmart from "../../assets/projects/Smart/login.png";
import RecommendationSmart from "../../assets/projects/Smart/RecommendationCourse.png";
import SignUpSmart from "../../assets/projects/Smart/signUp.png";

import SupplyHome from "../../assets/projects/SupplyMent/Home.png";
import CoachesSupply from "../../assets/projects/SupplyMent/coaches.png";
import DetailsSupply from "../../assets/projects/SupplyMent/details.png";
import EquipmentsSupply from "../../assets/projects/SupplyMent/equipements.png";
import LoginSupply from "../../assets/projects/SupplyMent/login.png";
import SignupSupply from "../../assets/projects/SupplyMent/Signup.png";
import SupplementSupply from "../../assets/projects/SupplyMent/Supplement.png";

import PharmacyHome from "../../assets/projects/Pharmacy/HomePahrm.png";
import ConsultPharm from "../../assets/projects/Pharmacy/consult.png";
import LoginPharm from "../../assets/projects/Pharmacy/Login.png";
import MedicinPharm from "../../assets/projects/Pharmacy/medicin.png";
import PatientsPharm from "../../assets/projects/Pharmacy/Patients.png";
import SignUpPharm from "../../assets/projects/Pharmacy/SignUpPharm.png";

import FirstPo from "../../assets/projects/FirstPortfolio/Home.png";
import AboutFP from "../../assets/projects/FirstPortfolio/About.png";
import CertificateFP from "../../assets/projects/FirstPortfolio/Certificate.png";
import ProjectsFP from "../../assets/projects/FirstPortfolio/Porjects.png";
import ServicesFP from "../../assets/projects/FirstPortfolio/Services.png";

import Falcon from "../../assets/projects/Falcon/Home.png";
import ArticlesFalcon from "../../assets/projects/Falcon/Articls.png";
import ContFalcon from "../../assets/projects/Falcon/Cont.png";
import CountFalcon from "../../assets/projects/Falcon/Count.png";
import DisFalcon from "../../assets/projects/Falcon/Dis.png";
import GamesFalcon from "../../assets/projects/Falcon/Games.png";
import GamessFalcon from "../../assets/projects/Falcon/Gamess.png";
import LearnFalcon from "../../assets/projects/Falcon/Learn.png";
import ServFalcon from "../../assets/projects/Falcon/Serv.png";


const PROJECTS_DB = [
  {
    id: "brewtask",
    title: "BrewTask",
    category: "Task Management / SaaS",
    role: "Full Stack Developer",
    period: "2025",
    client: "Personal Project",
    description: "A premium task management ritual for professionals who value focus over noise",
    overview:
      "BrewTask is a sophisticated task management platform designed to transform to-do lists into a curated experience of intentional productivity. The application provides a comprehensive workspace with dashboards, project tracking, team collaboration, and calendar integration, all wrapped in a calming, coffee-themed interface.",
    problem:
      "Modern task management tools are often cluttered and overwhelming, creating more noise than focus. Professionals need a solution that reduces cognitive load and helps them enter a state of flow, not just another todo list.",
    solution:
      "Designed and built a full-featured task management SaaS platform with a clean, minimalist interface. Implemented comprehensive features including task organization with priority levels, project management with progress tracking, team collaboration tools, calendar integration, and detailed analytics dashboards. The platform follows a 'coffee-powered focus' theme, creating a calming user experience that promotes deep work and intentional productivity.",
    features: [
      "Interactive workspace dashboard with activity tracking",
      "Task management with priority levels (High, Medium, Low)",
      "Project organization with progress tracking",
      "Team collaboration with member profiles",
      "Calendar integration for deadline management",
      "User authentication with login and signup",
      "Real-time task filtering and sorting",
      "Profile management with pro account features",
      "Task statistics and analytics (Total, Done, Active, Urgent)",
      "Responsive design for all devices",
    ],
    highlights: [
      "Premium, coffee-themed UI design",
      "Complete task management ecosystem",
      "Real-time progress tracking and analytics",
      "Professional-grade SaaS architecture",
      "Comprehensive user experience flow",
      "Authentication with remember me functionality",
    ],
    techStack: ["React", "Tailwind CSS", "React Router", "Firebase Auth"],
    demo: "https://brewtask-rho.vercel.app/",
    github: "https://github.com/OurFocusFlow/FocusFlow_Frontend",
    color: "purple",
    mainImage: TaskflowHome,
    images: [
      DashTask,
      CelenderTask,
      ProTask,
      ProfileTask,
      TasksTask,
      SignUpTask,
      LoginTask,
      ProDetailsTask,
    ],
  },
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
    demo: "https://smart-mentor-one.vercel.app",
    github: "https://github.com/Smart-Mentor",
    color: "cyan",
    mainImage: SmartHome,
    images: [
      AdminDashSmart,
      AiMentorSmart,
      CommunitySmart,
      GapAnalysisSmart,
      LearningPathSmart,
      RecommendationSmart,
      SignUpSmart,
      LoginSmart,
    ],
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
    demo: "",
    github: "https://github.com/Fat7yMo7med/Supplement-Store",
    color: "teal",
    mainImage: SupplyHome,
    images: [
      CoachesSupply,
      DetailsSupply,
      EquipmentsSupply,
      SupplementSupply,
      SignupSupply,
      LoginSupply,
    ],
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
    demo: "",
    github: "https://github.com/MohammedAlbasuony/Online-Pharmacy",
    color: "purple",
    mainImage: PharmacyHome,
    images: [
      ConsultPharm,
      MedicinPharm,
      PatientsPharm,
      LoginPharm,
      SignUpPharm,
    ],
  },
  {
    id: "my-portfolio",
    title: "First Portfolio",
    category: "Showcase",
    role: "Designer & Developer",
    period: "2024",
    client: "Personal Project",
    description: "Personal portfolio website showcasing professional projects and skills with modern responsive design",
    overview:
      "An earlier personal portfolio site presenting projects and skills through a clean, modern interface, built with cross-device responsiveness in mind.",
    problem:
      "A scattered collection of project links and a static résumé don't give visitors a real sense of skill or design sensibility — a proper portfolio site was needed to present work coherently.",
    solution:
      "Designed and built a responsive site with HTML, CSS, and Bootstrap, focused on clear information hierarchy and consistent visual design across devices.",
    features: [
      "Clean, modern UI design",
      "Fully responsive layout",
      "Project & skills showcase",
      "Built with HTML, CSS & Bootstrap",
    ],
    highlights: [],
    techStack: ["HTML", "CSS", "Responsive Design", "Bootstrap"],
    demo: "https://fat7ymo7med.github.io/First-Portfolio/",
    github: "https://github.com/Fat7yMo7med/My-Portfolio",
    color: "purple",
    mainImage: FirstPo,
    images: [FirstPo, AboutFP, CertificateFP, ProjectsFP, ServicesFP],
  },
  {
    id: "falcon-website",
    title: "Falcon",
    category: "Gaming",
    role: "Frontend Developer",
    period: "2025",
    client: "Personal Project",
    description: "A visually engaging gaming website designed to showcase games, stories, and interactive content with a modern, responsive interface.",
    overview:
      "Falcon is a gaming showcase website built to present games, stories, and interactive content through a visually engaging, modern interface.",
    problem:
      "Gaming content pages often feel static or generic — a more immersive, visually-driven presentation was needed to properly showcase game stories and content.",
    solution:
      "Built a responsive front-end with HTML, CSS, and JavaScript, focusing on visual storytelling and an interactive, modern layout for browsing games and content.",
    features: [
      "Visual game & story showcase",
      "Interactive content browsing",
      "Modern, responsive interface",
      "Built with HTML, CSS & JavaScript",
    ],
    highlights: [],
    techStack: ["HTML", "CSS", "JavaScript"],
    demo: "https://fat7ymo7med.github.io/Falcon/",
    github: "https://github.com/Fat7yMo7med/Falcon",
    color: "purple",
    mainImage: Falcon,
    images: [
      Falcon,
      GamesFalcon,
      GamessFalcon,
      ArticlesFalcon,
      CountFalcon,
      DisFalcon,
      LearnFalcon,
      ServFalcon,
      ContFalcon,
    ],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DB.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If project not found, redirect to projects page
  if (!project) {
    navigate('/projects');
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => setCurrentImageIndex(index);

  // Check if project has demo link
  const hasDemo = () => {
    return project.demo && project.demo.trim() !== "";
  };

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
              {hasDemo() && (
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
              )}
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

          {/* Main Image - Individual */}
          <div className={styles.heroVisual}>
            <div className={styles.mainImageContainer}>
              <img
                src={project.mainImage}
                alt={`${project.title} main screenshot`}
                className={styles.mainImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  const fallback = document.createElement('div');
                  fallback.className = styles.imageFallback;
                  fallback.innerHTML = '<span style="font-size: 4rem;">📁</span>';
                  parent.appendChild(fallback);
                }}
              />
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

        {/* Image Slider - full width, centered on the page, outside the two-column grid */}
        {project.images && project.images.length > 0 && (
          <div className={styles.sliderSection}>
            <h2 className={styles.sectionTitle}>Project Gallery</h2>
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderContainer}>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className={styles.sliderImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const fallback = document.createElement('div');
                    fallback.className = styles.imageFallback;
                    fallback.innerHTML = '<span style="font-size: 3rem;">📁</span>';
                    parent.appendChild(fallback);
                  }}
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails - Below the main image */}
              {project.images.length > 1 && (
                <div className={styles.thumbnailSlider}>
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`${styles.thumbnailBtn} ${idx === currentImageIndex ? styles.thumbnailActive : ""}`}
                      onClick={() => goToImage(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className={styles.thumbnailImage}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}