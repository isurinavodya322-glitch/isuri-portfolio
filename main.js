/**
 * =============================================================================
 * ISURI NAVODYA — PORTFOLIO MAIN APPLICATION LOGIC
 * =============================================================================
 * Handles rendering, navigation, interactive filters, form validation,
 * clipboard copy, animations, and dynamic state management.
 * =============================================================================
 */

(function () {
  'use strict';

  // Ensure PORTFOLIO_DATA is loaded
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not found. Please ensure js/portfolio-data.js is loaded first.');
    return;
  }

  // --- SVG Icon Library (Offline-proof, crisp Lucide-style icons) ---
  const ICONS = {
    code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    layout: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
    terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    externalLink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
    alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    school: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
  };

  // Helper to fetch SVG safely
  function getIcon(name) {
    return ICONS[name] || ICONS.code;
  }

  // --- Initial DOM Injection & Setup ---
  document.addEventListener('DOMContentLoaded', () => {
    initVerificationBanner();
    renderHeroContent();
    renderAboutContent();
    renderEducationContent();
    renderSkillsContent();
    renderProjectsContent();
    renderContactContent();
    renderFooterContent();
    initNavbarScroll();
    initMobileNav();
    initContactForm();
    initBackToTop();
  });

  // 1. Email Verification Warning Banner
  function initVerificationBanner() {
    const banner = document.getElementById('verification-banner');
    if (!banner) return;

    if (data.personal.emailVerified) {
      banner.style.display = 'none';
      return;
    }

    banner.innerHTML = `
      ${ICONS.alertTriangle}
      <span><strong>Notice for Isuri:</strong> The email spelling (<span style="text-decoration: underline;">${data.personal.email}</span>) is pending your verification. Once confirmed, update <code>emailVerified: true</code> in <code>js/portfolio-data.js</code>.</span>
      <button class="banner-close-btn" aria-label="Close Notice" title="Dismiss Notice">✕</button>
    `;

    const closeBtn = banner.querySelector('.banner-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        banner.style.display = 'none';
      });
    }
  }

  // 2. Hero Section Binding
  function renderHeroContent() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroIntro = document.getElementById('hero-intro');
    const heroAvatar = document.getElementById('hero-avatar-img');
    const heroStatus = document.getElementById('hero-status-pill');

    if (heroTitle) {
      heroTitle.innerHTML = `
        <span class="hero-greeting">${data.hero.greeting}</span>
        <span class="gradient-text">${data.hero.name}</span>
      `;
    }

    if (heroSubtitle) {
      heroSubtitle.textContent = data.hero.title;
    }

    if (heroIntro) {
      heroIntro.textContent = data.hero.introduction;
    }

    if (heroAvatar) {
      heroAvatar.src = data.personal.avatar;
      heroAvatar.alt = `${data.personal.fullName} Avatar`;
    }

    if (heroStatus && data.personal.status) {
      heroStatus.innerHTML = `
        <span class="status-indicator-dot"></span>
        <span>${data.personal.status.label}</span>
      `;
    }

    // Social Strip Buttons
    const socialStrip = document.getElementById('hero-social-icons');
    if (socialStrip) {
      const links = data.personal.socialLinks;
      socialStrip.innerHTML = `
        <span class="social-strip-label">Connect:</span>
        <a href="${links.github.url || 'javascript:void(0)'}" class="social-icon-btn tooltip" aria-label="GitHub Profile" ${links.github.url ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="alert(\'' + links.github.note + '\')"'}>
          ${ICONS.github}
          <span class="tooltip-text">${links.github.isConfigured ? 'Visit GitHub' : 'Configure GitHub in data'}</span>
        </a>
        <a href="${links.linkedin.url || 'javascript:void(0)'}" class="social-icon-btn tooltip" aria-label="LinkedIn Profile" ${links.linkedin.url ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="alert(\'' + links.linkedin.note + '\')"'}>
          ${ICONS.linkedin}
          <span class="tooltip-text">${links.linkedin.isConfigured ? 'Visit LinkedIn' : 'Configure LinkedIn in data'}</span>
        </a>
        <a href="mailto:${data.personal.email}" class="social-icon-btn tooltip" aria-label="Send Email">
          ${ICONS.mail}
          <span class="tooltip-text">Send Email</span>
        </a>
      `;
    }
  }

  // 3. About Me Section Binding
  function renderAboutContent() {
    const descEl = document.getElementById('about-description-text');
    if (descEl) {
      descEl.textContent = data.about.description;
    }

    // Avatar in about card
    const aboutAvatar = document.getElementById('about-avatar-img');
    if (aboutAvatar) {
      aboutAvatar.src = data.personal.avatar;
      aboutAvatar.alt = data.personal.fullName;
    }

    // Attribute grid
    const attrGrid = document.getElementById('about-attributes-grid');
    if (attrGrid && data.about.attributes) {
      attrGrid.innerHTML = data.about.attributes.map(item => `
        <div class="about-attribute-item">
          <div class="about-attribute-label">${item.label}</div>
          <div class="about-attribute-value">
            ${item.label === 'Nationality' ? `<span class="about-flag-badge">🇱🇰 ${item.value}</span>` : item.value}
          </div>
        </div>
      `).join('');
    }

    // Highlight cards
    const highlightsGrid = document.getElementById('about-highlights-grid');
    if (highlightsGrid && data.about.highlights) {
      highlightsGrid.innerHTML = data.about.highlights.map(h => `
        <div class="highlight-card">
          <div class="highlight-icon-box">
            ${getIcon(h.icon)}
          </div>
          <h4>${h.title}</h4>
          <p>${h.description}</p>
        </div>
      `).join('');
    }
  }

  // 4. Education Section Binding
  function renderEducationContent() {
    const timelineContainer = document.getElementById('education-timeline');
    if (!timelineContainer || !data.education.items) return;

    timelineContainer.innerHTML = data.education.items.map(item => `
      <div class="timeline-item">
        <div class="timeline-marker">
          ${ICONS.school}
        </div>
        <div class="education-card">
          <div class="edu-header">
            <div class="edu-title-group">
              <h3>${item.title}</h3>
              <div class="edu-institution">
                ${ICONS.sparkles}
                <span>${item.institution}</span>
              </div>
            </div>
            <span class="edu-status-pill">${item.period}</span>
          </div>
          <p class="edu-description">${item.description}</p>
          <div class="edu-modules-wrap">
            <div class="edu-modules-title">
              ${ICONS.code}
              <span>${item.modulesHeading}</span>
            </div>
            <div class="edu-tags-list">
              ${item.modules.map(mod => `<span class="edu-tag-chip">${mod}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. Technical Skills Section Binding & Interactive Filter
  function renderSkillsContent() {
    const filterNav = document.getElementById('skills-filter-nav');
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid || !data.skills.categories) return;

    // Filter Buttons
    if (filterNav) {
      filterNav.innerHTML = `
        <button class="skill-filter-btn active" data-filter="all">All Categories</button>
        ${data.skills.categories.map(cat => `
          <button class="skill-filter-btn" data-filter="${cat.id}">${cat.name}</button>
        `).join('')}
      `;

      filterNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.skill-filter-btn');
        if (!btn) return;

        filterNav.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        filterSkillCards(filter);
      });
    }

    // Render Skill Category Cards
    skillsGrid.innerHTML = data.skills.categories.map(cat => `
      <div class="skill-category-card" data-category="${cat.id}">
        <div class="skill-card-top">
          <div class="skill-cat-icon">
            ${getIcon(cat.icon)}
          </div>
          <div>
            <h3>${cat.name}</h3>
            <p class="skill-cat-desc">${cat.description}</p>
          </div>
        </div>
        <div class="skill-items-list">
          ${cat.items.map(skill => `
            <div class="skill-badge">
              <span>${skill.name}</span>
              <span class="skill-tag-pill">${skill.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function filterSkillCards(filterId) {
    const cards = document.querySelectorAll('.skill-category-card');
    cards.forEach(card => {
      if (filterId === 'all' || card.getAttribute('data-category') === filterId) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // 6. My Projects Section Binding
  function renderProjectsContent() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !data.projects.items) return;

    projectsGrid.innerHTML = data.projects.items.map(project => {
      // Determine Action Buttons according to real vs placeholder requirements
      let actionButtonsHtml = '';

      if (project.liveUrl || project.sourceCodeUrl) {
        // If real URLs exist
        if (project.liveUrl) {
          actionButtonsHtml += `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              View Project ${ICONS.externalLink}
            </a>
          `;
        }
        if (project.sourceCodeUrl) {
          actionButtonsHtml += `
            <a href="${project.sourceCodeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
              Source Code ${ICONS.github}
            </a>
          `;
        }
      } else if (project.isLocal && project.localPath) {
        // Local project found in workspace
        actionButtonsHtml += `
          <a href="${project.localPath}" class="btn btn-sm btn-secondary" title="Open local project file">
            Explore Local Project ${ICONS.arrowRight}
          </a>
          <span class="placeholder-badge">
            ${ICONS.sparkles} Workspace Project
          </span>
        `;
      } else {
        // Unreleased / In progress project: Show clean non-clickable "Coming Soon" indicator
        actionButtonsHtml += `
          <span class="placeholder-badge">
            ${ICONS.clock} Development in progress
          </span>
          <span class="btn btn-sm btn-outline" style="cursor: default; opacity: 0.7;">
            Source Coming Soon
          </span>
        `;
      }

      return `
        <div class="project-card">
          <div class="project-media-wrapper">
            <img src="${project.image}" alt="${project.title} Preview" class="project-thumb-img" loading="lazy" />
            <div class="project-status-overlay ${project.isLocal ? 'active-status' : ''}">
              ${project.statusBadge}
            </div>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <span class="project-category-label">${project.category}</span>
              <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech-area">
              <div class="project-tech-heading">
                <span class="tech-heading-icon" aria-hidden="true">${ICONS.code}</span>
                <span>Technologies Used</span>
              </div>
              <div class="project-tech-tags" aria-label="Technologies used in this project">
                ${(project.technologies || []).map(tech => `
                  <span class="tech-tag-chip">
                    <span class="tech-badge-dot" aria-hidden="true"></span>
                    <span>${tech}</span>
                  </span>
                `).join('')}
              </div>
            </div>
            <div class="project-actions">
              ${actionButtonsHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 7. Contact Section Binding
  function renderContactContent() {
    const emailValueEl = document.getElementById('contact-email-value');
    const mailtoBtn = document.getElementById('contact-mailto-btn');
    const emailNotice = document.getElementById('email-verification-notice');

    if (emailValueEl) {
      emailValueEl.textContent = data.personal.email;
    }

    if (mailtoBtn) {
      mailtoBtn.href = `mailto:${data.personal.email}`;
    }

    if (emailNotice && !data.personal.emailVerified) {
      emailNotice.style.display = 'flex';
      emailNotice.innerHTML = `
        ${ICONS.alertTriangle}
        <span><strong>Configuration Note:</strong> The email address <code>${data.personal.email}</code> is marked for verification. To update this address, modify <code>js/portfolio-data.js</code>.</span>
      `;
    }

    // Set up Copy Email button
    const copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(data.personal.email).then(() => {
          showToast('Email address copied to clipboard!');
        }).catch(() => {
          // Fallback if clipboard API is restricted
          showToast('Address: ' + data.personal.email);
        });
      });
    }
  }

  // 8. Footer Section Binding
  function renderFooterContent() {
    const copyYear = document.getElementById('copyright-year');
    if (copyYear) {
      copyYear.textContent = new Date().getFullYear();
    }

    const footerName = document.getElementById('footer-full-name');
    if (footerName) {
      footerName.textContent = data.personal.fullName;
    }

    const footerLinksContainer = document.getElementById('footer-quick-links');
    if (footerLinksContainer && data.footer.quickLinks) {
      footerLinksContainer.innerHTML = data.footer.quickLinks.map(link => `
        <li><a href="${link.href}">${link.label}</a></li>
      `).join('');
    }
  }

  // 9. Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `${ICONS.check} <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 10. Navbar Scroll & Active Section Highlighting
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scroll Spy Active Link Detection
      let currentSectionId = '';
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    }, { passive: true });
  }

  // 11. Mobile Navigation Drawer Handling
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const drawer = document.getElementById('mobile-drawer');
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    function toggleDrawer(open) {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = '✕';
        document.body.style.overflow = 'hidden'; // Lock background scroll
      } else {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
        document.body.style.overflow = '';
      }
    }

    toggleBtn.addEventListener('click', () => toggleDrawer());

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // 12. Contact Form Validation & Demonstration Feedback
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('form-status-alert');
    if (!form || !alertBox) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Clear existing error states
      const groups = form.querySelectorAll('.form-group');
      groups.forEach(g => g.classList.remove('has-error'));
      alertBox.className = 'form-status-alert';
      alertBox.style.display = 'none';

      // Values
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Email with standard regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      // Validate Message (min 10 characters)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      }

      if (!isValid) {
        alertBox.className = 'form-status-alert error';
        alertBox.innerHTML = `${ICONS.alertTriangle} Please fill in all required fields with valid information.`;
        alertBox.style.display = 'flex';
        return;
      }

      // Since there is no configured backend, accurately communicate this to the user
      alertBox.className = 'form-status-alert success';
      alertBox.innerHTML = `
        ${ICONS.check}
        <div>
          <strong>Message Validated!</strong><br />
          Notice: This portfolio is in client-side preview mode. Because a live email submission service (such as Formspree, EmailJS, or backend server) is not connected yet, the message was not dispatched. You can click <strong>"Open Default Email App"</strong> on the left to write directly to Isuri!
        </div>
      `;
      alertBox.style.display = 'flex';

      // Clear the form fields after successful validation
      form.reset();
    });
  }

  // 13. Back to Top Smooth Scroll
  function initBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

})();
