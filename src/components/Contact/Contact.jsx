import styles from "./Contact.module.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "fathym6044@gmail.com",
      href: "mailto:fathym6044@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Fathy,",
      gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=fathym6044@gmail.com&su=Inquiry%20from%20Portfolio&body=Hi%20Fathy,",
      external: true,
      color: "#f59e0b",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: "Phone",
      value: "+20 1558815893",
      href: "tel:+201558815893",
      color: "#34d399",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Location",
      value: "Tanta, Egypt",
      color: "#60a5fa",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/fathy-mo7amed",
      href: "https://www.linkedin.com/in/fathy-mo7amed",
      external: true,
      color: "#0a66c2",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/Fat7yMo7med",
      href: "https://github.com/Fat7yMo7med",
      external: true,
      color: "#6e7681",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+20 1558815893",
      href: "https://wa.me/201558815893?text=Hi%20Fathy%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
      external: true,
      color: "#25D366",
    },
  ];

  // Handle email click - open in Gmail
  const handleEmailClick = (e, item) => {
    e.preventDefault();
    window.open(item.gmail, '_blank');
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = (e, item) => {
    e.preventDefault();
    window.open(item.href, '_blank');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.starfield} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>GET IN TOUCH</span>
          <h2 className={styles.title}>Let's connect</h2>
          <p className={styles.subtitle}>
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactInfo.map((item, index) => (
            <div key={item.label} className={styles.contactCard}>
              <div 
                className={styles.iconWrapper}
                style={{ background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)` }}
              >
                <div className={styles.iconCircle}>
                  {item.icon}
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.contactLabel}>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className={styles.contactValue}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (item.gmail) {
                        handleEmailClick(e, item);
                      } else if (item.label === "WhatsApp") {
                        handleWhatsAppClick(e, item);
                      }
                    }}
                  >
                    {item.value}
                    {item.external && (
                      <svg className={styles.externalIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    )}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{item.value}</span>
                )}
              </div>
              <div 
                className={styles.cardGlow}
                style={{ background: `radial-gradient(circle, ${item.color}22, transparent 70%)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}