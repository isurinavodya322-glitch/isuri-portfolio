/**
 * =============================================================================
 * ISURI NAVODYA — PORTFOLIO CONFIGURATION DATA
 * =============================================================================
 * This file centralizes all content, personal details, project metadata,
 * skills, and education records. Update this file to easily change any text,
 * links, or settings across the entire website without touching HTML or CSS.
 * =============================================================================
 */

const PORTFOLIO_DATA = {
  // ---------------------------------------------------------------------------
  // 1. Personal & Meta Information
  // ---------------------------------------------------------------------------
  personal: {
    fullName: "Isuri Navodya",
    shortName: "Isuri",
    title: "HNDIT Student | Aspiring Software Developer",
    subtitle: "HNDIT Student & Aspiring Software Developer",
    education: "Higher National Diploma in Information Technology (HNDIT)",
    nationality: "Sri Lankan",
    
    // IMPORTANT EMAIL CONFIGURATION:
    // The email spelling below was provided as "isurinavodya2002@gmial.com".
    // Please verify whether it should be "@gmail.com" before public distribution!
    email: "isurinavodya2002@gmial.com",
    emailVerified: false, // Set to true once verified
    emailVerificationMessage: "Note: The provided email domain (@gmial.com) is marked for verification. Update this in js/portfolio-data.js once confirmed.",

    // Availability status shown in Hero & Navbar
    status: {
      available: true,
      label: "Open to Internships & Projects",
    },

    // Avatar image path (defaults to a high-fidelity SVG avatar)
    // To use your own photo, place it in images/profile.jpg and set avatar: "images/profile.jpg"
    avatar: "images/avatar-placeholder.svg",

    // Social & Professional Profiles
    // Add your real URLs here when available. Leaving empty shows a placeholder with a helper tooltip.
    socialLinks: {
      github: {
        url: "", // e.g. "https://github.com/yourusername"
        username: "isurinavodya",
        isConfigured: false,
        note: "GitHub profile link can be configured in js/portfolio-data.js"
      },
      linkedin: {
        url: "", // e.g. "https://linkedin.com/in/yourusername"
        username: "isuri-navodya",
        isConfigured: false,
        note: "LinkedIn profile link can be configured in js/portfolio-data.js"
      },
      email: {
        url: "mailto:isurinavodya2002@gmial.com",
        label: "isurinavodya2002@gmial.com"
      }
    }
  },

  // ---------------------------------------------------------------------------
  // 2. Hero Section
  // ---------------------------------------------------------------------------
  hero: {
    badge: "Welcome to my portfolio",
    greeting: "Hi, I'm",
    name: "Isuri Navodya",
    title: "HNDIT Student & Aspiring Software Developer",
    introduction: "I am an HNDIT student passionate about software development, web application development, database management, and UI/UX design. I enjoy learning modern technologies and creating useful, user-friendly digital solutions.",
    buttons: {
      projects: { label: "View My Projects", href: "#projects" },
      about: { label: "About Me", href: "#about" },
      contact: { label: "Contact Me", href: "#contact" }
    },
    // Interactive code terminal snippet featured in hero
    codeSnippet: {
      filename: "developer.js",
      language: "javascript",
      code: `const developer = {
  name: "Isuri Navodya",
  qualification: "HNDIT Student",
  focus: ["Software Development", "Web Apps", "UI/UX"],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["PHP", "Node.js", "REST APIs"],
    database: ["MySQL", "SQL", "Firebase"]
  },
  goal: "Build innovative, practical digital solutions"
};`
    }
  },

  // ---------------------------------------------------------------------------
  // 3. About Me Section
  // ---------------------------------------------------------------------------
  about: {
    badge: "About Me",
    heading: "Crafting Practical Solutions with Code & Creativity",
    description: "Hi, I'm Isuri Navodya, an HNDIT student passionate about software development, web application development, and UI/UX design. I have knowledge of HTML, CSS, JavaScript, React, PHP, Node.js, and database management. I enjoy learning new technologies, solving problems, and creating user-friendly digital experiences. My goal is to become a skilled software developer and build innovative, practical solutions.",
    
    // Key Highlight Cards
    highlights: [
      {
        icon: "code",
        title: "Software Engineering",
        description: "Designing modular, clean, and maintainable software with structured object-oriented principles."
      },
      {
        icon: "layout",
        title: "Web Applications",
        description: "Developing responsive frontend interfaces connected to reliable backend services."
      },
      {
        icon: "database",
        title: "Database Management",
        description: "Structuring relational and cloud databases with a strong focus on data integrity and queries."
      },
      {
        icon: "palette",
        title: "UI/UX Design",
        description: "Translating user requirements into elegant, accessible, and intuitive visual interfaces."
      }
    ],

    // Quick Information Attributes
    attributes: [
      { label: "Full Name", value: "Isuri Navodya" },
      { label: "Study Program", value: "HNDIT" },
      { label: "Nationality", value: "Sri Lankan" },
      { label: "Interests", value: "Full-Stack & UI/UX" }
    ]
  },

  // ---------------------------------------------------------------------------
  // 4. Education Section
  // ---------------------------------------------------------------------------
  education: {
    badge: "Education",
    heading: "Academic Foundation & Studies",
    subheading: "My formal academic background in Information Technology and analytical studies.",
    items: [
      {
        id: "hndit",
        title: "Higher National Diploma in Information Technology (HNDIT)",
        subtitle: "Higher National Diploma",
        institution: "Higher National Diploma in Information Technology",
        period: "Current Study",
        description: "Comprehensive national diploma curriculum emphasizing practical software engineering, modern web applications, database architecture, and computer network foundations.",
        modulesHeading: "Relevant Academic Areas Covered:",
        modules: [
          "Web Application Development",
          "Database Management Systems",
          "Software Engineering",
          "Object-Oriented Programming",
          "Computer Networks",
          "UI/UX Design"
        ]
      },
      {
        id: "al",
        title: "G.C.E. Advanced Level Examination",
        subtitle: "Secondary Education",
        institution: "R/Ananda Maithreya Central College",
        period: "Completed",
        description: "Rigorous secondary education curriculum building core analytical capabilities, disciplined problem-solving, and foundation for advanced technological studies.",
        modulesHeading: "Key Academic Foundations:",
        modules: [
          "Analytical Problem Solving",
          "Logical Reasoning",
          "Information Technology Foundations",
          "Academic Discipline"
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 5. Technical Skills Section
  // ---------------------------------------------------------------------------
  skills: {
    badge: "Skills & Technologies",
    heading: "Technical Stack & Core Competencies",
    subheading: "A verified inventory of technologies, frameworks, databases, and tools I work with.",
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "layout",
        description: "Building responsive, modern, and interactive user interfaces",
        items: [
          { name: "HTML", tag: "Markup" },
          { name: "CSS", tag: "Styling" },
          { name: "JavaScript", tag: "Language" },
          { name: "React", tag: "Library" },
          { name: "Bootstrap", tag: "Framework" }
        ]
      },
      {
        id: "backend",
        name: "Backend Development",
        icon: "server",
        description: "Server-side logic, API endpoints, and application flow",
        items: [
          { name: "PHP", tag: "Server-side" },
          { name: "Node.js", tag: "Runtime" },
          { name: "REST APIs", tag: "Architecture" }
        ]
      },
      {
        id: "database",
        name: "Database Technologies",
        icon: "database",
        description: "Data storage, relational queries, and cloud databases",
        items: [
          { name: "MySQL", tag: "RDBMS" },
          { name: "SQL", tag: "Querying" },
          { name: "Firebase", tag: "Cloud DB" }
        ]
      },
      {
        id: "design",
        name: "Design and Creativity",
        icon: "palette",
        description: "User experience wireframing, prototyping, and visual styling",
        items: [
          { name: "Figma", tag: "UI/UX Design" },
          { name: "UI/UX Design", tag: "Methodology" },
          { name: "Canva", tag: "Visuals" }
        ]
      },
      {
        id: "tools",
        name: "Tools and Platforms",
        icon: "terminal",
        description: "Development environment, source control, and workflows",
        items: [
          { name: "Git", tag: "Version Control" },
          { name: "GitHub", tag: "Code Hosting" },
          { name: "Visual Studio Code", tag: "Editor" }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 6. My Projects Section
  // ---------------------------------------------------------------------------
  projects: {
    badge: "Projects",
    heading: "Featured Projects & Systems",
    subheading: "Practical applications and software projects focused on real-world utility.",
    items: [
      {
        id: "gem-business-management",
        title: "GEM Business Management System",
        description: "A business management system project focused on organizing and managing business-related operations.",
        technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
        category: "Business Software",
        image: "images/gem-project.svg",
        statusBadge: "Active Project",
        isPublished: false,
        isLocal: true,
        localPath: "../gem-business-management/index.html",
        liveUrl: null, // Add URL when hosted online
        sourceCodeUrl: null, // Add GitHub URL when available
        highlights: [
          "Organizing and tracking business inventory and operations",
          "Structured records and responsive user interface",
          "Client-side persistence and financial transaction tracking"
        ]
      },
      {
        id: "pos-system",
        title: "Point of Sale (POS) System",
        description: "A point-of-sale system project designed around sales transactions and retail operations.",
        technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
        category: "Retail Software",
        image: "images/pos-project.svg",
        statusBadge: "Project in Progress",
        isPublished: false,
        isLocal: false,
        liveUrl: null,
        sourceCodeUrl: null,
        highlights: [
          "Designed around sales transactions and cashier workflows",
          "Focus on retail operation management and receipt flow",
          "Structured product catalog and invoice calculations"
        ]
      },
      {
        id: "vehicle-rental",
        title: "Vehicle Rental Application",
        description: "A vehicle rental application project intended to support vehicle rental-related activities.",
        technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
        category: "Web Application",
        image: "images/rental-project.svg",
        statusBadge: "Project in Progress",
        isPublished: false,
        isLocal: false,
        liveUrl: null,
        sourceCodeUrl: null,
        highlights: [
          "Vehicle fleet browsing and availability checks",
          "Rental reservation flow and customer booking management",
          "Intuitive forms and responsive navigation"
        ]
      },
      {
        id: "airline-booking",
        title: "Airline Booking System",
        description: "An airline booking system project focused on flight booking-related functionality.",
        technologies: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
        category: "System Design",
        image: "images/airline-project.svg",
        statusBadge: "Project in Progress",
        isPublished: false,
        isLocal: false,
        liveUrl: null,
        sourceCodeUrl: null,
        highlights: [
          "Flight search and schedule management logic",
          "Passenger booking workflow and seat reservation structure",
          "Form validation and data organization"
        ]
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 7. Contact Section
  // ---------------------------------------------------------------------------
  contact: {
    badge: "Get in Touch",
    heading: "Let's Connect & Collaborate",
    subheading: "Have an internship opportunity, project idea, or question? Feel free to reach out.",
    email: "isurinavodya2002@gmial.com",
    emailNote: "Configurable in js/portfolio-data.js (Verification pending)",
    serviceIntegrationNotice: "Notice: This contact form runs client-side in preview mode. To connect it to your live email inbox, you can link it to Formspree, EmailJS, or your backend API with a single URL in js/portfolio-data.js."
  },

  // ---------------------------------------------------------------------------
  // 8. Footer Section
  // ---------------------------------------------------------------------------
  footer: {
    brand: "Isuri Navodya",
    tagline: "Personal Portfolio",
    bio: "HNDIT student and aspiring software developer passionate about building useful digital experiences.",
    quickLinks: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

// Make accessible to all scripts
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
