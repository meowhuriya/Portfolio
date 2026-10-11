/**
 * Sayeeda Huriya Fatima - Portfolio & Project Showcase
 * Color Hunt Palette: Blush (#F6E2E9), Cream (#FEFAF3), Sage (#B8CFB3), Moss (#84A282)
 * Complete Editability Controller (Profile, Bio, Education, Skills, Contact, Projects & Ideas)
 */

// ==========================================================================
// Default Datasets
// ==========================================================================
const DEFAULT_PROFILE = {
  name: "Sayeeda Huriya Fatima",
  monogram: "HF",
  avatarUrl: "",
  role: "B.Tech CSE Student (2026–2030)",
  headline: "Aspiring Software Engineer & Full-Stack Developer with live web deployments and an active focus on AI workflows, modern web architectures, and intelligent systems.",
  collegeName: "Shadan Women's College Of Engineering And Technology",
  collegeBatch: "2026 – 2030",
  metaTags: ["Full-Stack Developer", "AI & Node Systems", "Vercel Deployments", "Hyderabad, Telangana"],
  bioParagraphs: [
    "I am an enthusiastic Computer Science Engineering student at Shadan Women's College Of Engineering And Technology (Batch 2026–2030). My drive is centered on turning ambitious software concepts into fast, resilient, and beautifully designed production web applications.",
    "I actively build and ship projects on cloud platforms like Vercel, including Node Binding AI (an AI pipeline interface) and PulseAero (an aerospace telemetry dashboard). I believe in clean code, accessible user interfaces, and continuous experimentation across both established web standards and emerging artificial intelligence paradigms."
  ],
  academicMatrix: {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Shadan Women's College Of Engineering And Technology • Batch 2026 – 2030",
    trackers: [
      "In Progress • Semester 1",
      "Research Trainee Track",
      "First-Principles Study"
    ],
    foundation: [
      "Discrete Mathematics",
      "Linear Algebra & Matrix Decompositions",
      "Low-Level C Systems Architecture"
    ],
    researchSyllabus: [
      {
        vector: "Computational Biology",
        focus: "Cellular state modeling, biological network graphs, telemetry integration."
      },
      {
        vector: "Neural Dynamics",
        focus: "Bio-signal extraction, acoustic event parsing, edge inference constraints."
      }
    ]
  },
  technicalArsenal: {
    systems: [
      "C",
      "Python (NumPy, scientific workflows)",
      "SQL (PostgreSQL relational modeling)"
    ],
    pipelines: [
      "Supabase",
      "SQLite (Local-First Edge Caching)",
      "Delta Sync Protocols",
      "REST APIs"
    ],
    compute: [
      "Computer Vision OCR Parsing",
      "Acoustic Triage Processing",
      "Offline-First Distributed Logic"
    ],
    tooling: [
      "Git/GitHub Actions",
      "Vercel Edge Networks",
      "Linux/UNIX environments"
    ]
  },
  investigationsLog: [
    {
      vector: "Computational Bio",
      topic: "Graph algorithms for metabolic & cellular pathways",
      milestone: "Literature Review"
    },
    {
      vector: "Edge Systems",
      topic: "Asynchronous local-to-cloud delta sync protocols",
      milestone: "Benchmarking In-Engine"
    },
    {
      vector: "Neuro-Informatics",
      topic: "Acoustic biomarker extraction under low-bandwidth constraints",
      milestone: "Prototype Testing"
    }
  ],
  education: {
    degree: "B.Tech Computer Science and Engineering",
    period: "2026 – 2030",
    institution: "Shadan Women's College Of Engineering And Technology",
    description: "Discrete Mathematics, Linear Algebra, Low-Level C Systems Architecture, Computational Biology & Neural Dynamics.",
    highlights: ["In Progress • Semester 1", "Research Trainee Track", "First-Principles Study"]
  },
  skills: {
    frontend: ["C", "Python (NumPy)", "SQL (PostgreSQL)"],
    backend: ["Supabase", "SQLite (Local-First)", "Delta Sync Protocols", "REST APIs"],
    domains: ["Computer Vision OCR", "Acoustic Triage", "Offline-First Distributed Logic", "Linux/UNIX"]
  },
  contact: {
    email: "sa.huriyafatima@gmail.com",
    linkedinUser: "sayeeda-huriya-fatima",
    linkedinUrl: "https://www.linkedin.com/in/sayeeda-huriya-fatima"
  }
};

const DEFAULT_PROJECTS = [
  {
    id: "proj-node-binding-ai",
    title: "Node Binding AI",
    url: "https://node-binding-ai.vercel.app",
    description: "High-performance interactive web application delivering automated node bindings, workflow triggers, and modular AI pipeline integrations. Live production build deployed on Vercel.",
    tags: ["AI / ML", "Node.js", "React", "Vite", "Vercel", "Full-Stack"],
    category: "AI",
    theme: "combo",
    github: "",
    isLive: true,
    created: "2026-01-15"
  },
  {
    id: "proj-pulseaero",
    title: "PulseAero",
    url: "https://pulseaero.vercel.app",
    description: "Aerospace telemetry and flight intelligence monitoring platform featuring real-time pulse analytics, aerodynamic telemetry visualization, and streamlined flight monitoring. Deployed live on Vercel.",
    tags: ["Aerospace", "Vercel", "React", "Telemetry", "Analytics", "Vite"],
    category: "Aerospace",
    theme: "moss",
    github: "",
    isLive: true,
    created: "2026-02-20"
  }
];

const DEFAULT_FUTURE_IDEAS = [
  {
    id: "idea-neurosync-ai",
    title: "NeuroSync Multimodal Copilot",
    summary: "Context-aware autonomous multimodal assistant integrating bidirectional audio streams, visual perception, and code generation graphs with sub-second response times.",
    stage: "Prototyping",
    timeline: "Semester 2 (2026–2027)",
    tags: ["GenAI", "WebSockets", "Python", "Computer Vision", "FastAPI"],
    created: "2026-03-01"
  },
  {
    id: "idea-aerosense-vision",
    title: "AeroSense Autonomous Runway Hazard Detection",
    summary: "Computer-vision edge computing telemetry system designed for drone-assisted aerial surveillance, obstacle detection, and trajectory estimation on active airfields.",
    stage: "Research & Design",
    timeline: "2027 • R&D Exploration",
    tags: ["Computer Vision", "PyTorch", "IoT Telemetry", "Aerospace", "OpenCV"],
    created: "2026-03-10"
  },
  {
    id: "idea-campussphere",
    title: "CampusSphere: Engineering Academic Nexus",
    summary: "Decentralized peer collaboration portal and project incubator for engineering scholars to exchange verified technical documentation, organize peer code reviews, and discover research mentorship.",
    stage: "Architecture",
    timeline: "2027–2028 • Campus Pilot",
    tags: ["Next.js", "Firebase", "PostgreSQL", "Full-Stack", "Auth"],
    created: "2026-03-25"
  }
];

// ==========================================================================
// State Management
// ==========================================================================
const STORAGE_KEYS = {
  PROFILE: "shf_portfolio_profile_v3",
  PROJECTS: "shf_portfolio_projects_v3",
  FUTURE_IDEAS: "shf_portfolio_future_ideas_v3",
  EDIT_MODE: "shf_portfolio_edit_mode_v3"
};

let state = {
  profile: {},
  projects: [],
  futureIdeas: [],
  currentTab: "deployed-gallery",
  currentFilter: "all",
  searchQuery: "",
  isEditMode: false
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initState();
  initTabs();
  initSearch();
  initFilters();
  initModals();
  initContactActions();
  renderAll();
});

function initState() {
  // Load Profile from localStorage or fallback
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
    state.profile = savedProfile ? JSON.parse(savedProfile) : JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  } catch (e) {
    state.profile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  }

  // Ensure matrix, arsenal, and investigations are present
  if (!state.profile.academicMatrix) {
    state.profile.academicMatrix = JSON.parse(JSON.stringify(DEFAULT_PROFILE.academicMatrix));
  }
  if (!state.profile.technicalArsenal) {
    state.profile.technicalArsenal = JSON.parse(JSON.stringify(DEFAULT_PROFILE.technicalArsenal));
  }
  if (!state.profile.investigationsLog) {
    state.profile.investigationsLog = JSON.parse(JSON.stringify(DEFAULT_PROFILE.investigationsLog));
  }

  // Load Projects from localStorage or fallback
  try {
    const savedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    state.projects = savedProjects ? JSON.parse(savedProjects) : JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  } catch (e) {
    state.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  }

  // Load Future Ideas from localStorage or fallback
  try {
    const savedIdeas = localStorage.getItem(STORAGE_KEYS.FUTURE_IDEAS);
    state.futureIdeas = savedIdeas ? JSON.parse(savedIdeas) : JSON.parse(JSON.stringify(DEFAULT_FUTURE_IDEAS));
  } catch (e) {
    state.futureIdeas = JSON.parse(JSON.stringify(DEFAULT_FUTURE_IDEAS));
  }

  // Edit Mode state
  state.isEditMode = localStorage.getItem(STORAGE_KEYS.EDIT_MODE) === "true";
  updateEditModeUI();

  // Handle URL hash navigation
  if (window.location.hash) {
    const target = window.location.hash.substring(1);
    if (["future-gallery", "about-tab", "contact-tab", "deployed-gallery"].includes(target)) {
      switchTab(target);
    }
  }
}

function saveProfile() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(state.profile));
  } catch (e) {
    console.error("Failed to save profile to localStorage", e);
  }
}

function saveProjects() {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(state.projects));
  } catch (e) {
    console.error("Failed to save projects to localStorage", e);
  }
}

function saveFutureIdeas() {
  try {
    localStorage.setItem(STORAGE_KEYS.FUTURE_IDEAS, JSON.stringify(state.futureIdeas));
  } catch (e) {
    console.error("Failed to save future ideas to localStorage", e);
  }
}

// ==========================================================================
// Edit Mode Controller
// ==========================================================================
function updateEditModeUI() {
  const toggleBtn = document.getElementById("toggle-edit-mode-btn");
  const editBanner = document.getElementById("edit-mode-notice");
  const editText = document.querySelector(".edit-mode-text");
  const editModeOnlyEls = document.querySelectorAll(".edit-mode-only");

  if (toggleBtn) {
    if (state.isEditMode) {
      toggleBtn.classList.add("active");
      if (editText) editText.textContent = "Edit Mode: ON";
      if (editBanner) editBanner.style.display = "flex";
      editModeOnlyEls.forEach(el => el.style.display = "inline-flex");
    } else {
      toggleBtn.classList.remove("active");
      if (editText) editText.textContent = "Edit Mode: OFF";
      if (editBanner) editBanner.style.display = "none";
      editModeOnlyEls.forEach(el => el.style.display = "none");
    }
  }
}

const toggleEditBtn = document.getElementById("toggle-edit-mode-btn");
if (toggleEditBtn) {
  toggleEditBtn.addEventListener("click", () => {
    state.isEditMode = !state.isEditMode;
    localStorage.setItem(STORAGE_KEYS.EDIT_MODE, state.isEditMode ? "true" : "false");
    updateEditModeUI();
    renderDeployedProjects();
    renderFutureIdeas();
    showToast(state.isEditMode ? "Edit Mode Enabled: You can now edit bio, profile, and cards" : "Edit Mode Disabled");
  });
}

const exitEditBtn = document.getElementById("exit-edit-mode-btn");
if (exitEditBtn) {
  exitEditBtn.addEventListener("click", () => {
    state.isEditMode = false;
    localStorage.setItem(STORAGE_KEYS.EDIT_MODE, "false");
    updateEditModeUI();
    renderDeployedProjects();
    renderFutureIdeas();
    showToast("Exited Edit Mode");
  });
}

// ==========================================================================
// Rendering: Profile, Bio, Education, Skills, Contact
// ==========================================================================
function renderProfile() {
  const p = state.profile;
  if (!p) return;

  // Header Brand
  const hMonogram = document.getElementById("header-monogram");
  const hBrandName = document.getElementById("header-brand-name");
  const hBrandSub = document.getElementById("header-brand-subtitle");
  const hEmailLink = document.getElementById("header-email-link");
  if (hMonogram) hMonogram.textContent = p.monogram || "HF";
  if (hBrandName) hBrandName.textContent = p.name;
  if (hBrandSub) hBrandSub.textContent = `B.Tech Computer Science • ${p.collegeBatch}`;
  if (hEmailLink) hEmailLink.href = `mailto:${p.contact.email}`;

  // Avatar Display
  const avatarDisplay = document.getElementById("profile-avatar-display");
  if (avatarDisplay) {
    if (p.avatarUrl) {
      avatarDisplay.innerHTML = `<img src="${escapeHtml(p.avatarUrl)}" alt="${escapeHtml(p.name)}" />`;
    } else {
      avatarDisplay.innerHTML = `<span>${escapeHtml(p.monogram || 'HF')}</span>`;
    }
  }

  // Hero Section Details
  const dName = document.getElementById("display-profile-name");
  const dStatusText = document.getElementById("display-status-text");
  const dHeadline = document.getElementById("display-profile-headline");
  const dCollegeName = document.getElementById("display-college-name");
  const dCollegeBatch = document.getElementById("display-college-batch");
  const dMetaTags = document.getElementById("display-meta-tags");
  const dStatSpan = document.getElementById("stat-academic-span");

  if (dName) dName.textContent = p.name;
  if (dStatusText) dStatusText.textContent = p.role;
  if (dHeadline) dHeadline.textContent = p.headline;
  if (dCollegeName) dCollegeName.textContent = p.collegeName;
  if (dCollegeBatch) dCollegeBatch.textContent = `Batch ${p.collegeBatch}`;
  if (dStatSpan) dStatSpan.textContent = p.collegeBatch;

  if (dMetaTags && p.metaTags) {
    dMetaTags.innerHTML = p.metaTags.map(tag => `<span class="meta-tag">✨ ${escapeHtml(tag)}</span>`).join("");
  }

  // Bio Paragraphs
  const dBioHeading = document.getElementById("display-bio-heading");
  const dBioParagraphs = document.getElementById("display-bio-paragraphs");
  if (dBioHeading) dBioHeading.textContent = `About ${p.name}`;
  if (dBioParagraphs && p.bioParagraphs) {
    dBioParagraphs.innerHTML = p.bioParagraphs.map(para => `<p>${escapeHtml(para)}</p>`).join("");
  }

  // Systems Research & Academic Matrix Section
  renderAcademicMatrix();
  renderTechnicalArsenal();
  renderInvestigationsLog();

  // Contact Section
  const contact = p.contact || {};
  const dContactHeading = document.getElementById("display-contact-heading");
  const dContactAvatar = document.getElementById("contact-avatar-monogram");
  const dContactEmailLink = document.getElementById("display-contact-email-link");
  const dContactLinkedInLink = document.getElementById("display-contact-linkedin-link");
  const dContactLinkedInCaption = document.getElementById("display-contact-linkedin-caption");
  const dCopyEmailText = document.getElementById("display-copy-email-text");
  const heroGmailBtn = document.getElementById("hero-gmail-btn");
  const heroLinkedInBtn = document.getElementById("hero-linkedin-btn");
  const contactComposeBtn = document.getElementById("contact-compose-btn");
  const contactOpenLinkedInBtn = document.getElementById("contact-open-linkedin-btn");

  if (dContactHeading) dContactHeading.textContent = `Connect with ${p.name}`;
  if (dContactAvatar) dContactAvatar.textContent = p.monogram || "HF";
  if (dCopyEmailText) dCopyEmailText.textContent = contact.email;

  if (dContactEmailLink) {
    dContactEmailLink.textContent = contact.email;
    dContactEmailLink.href = `mailto:${contact.email}`;
  }
  if (heroGmailBtn) heroGmailBtn.href = `mailto:${contact.email}`;
  if (contactComposeBtn) contactComposeBtn.href = `mailto:${contact.email}?subject=Hello%20${encodeURIComponent(p.name)}%20-%20Portfolio%20Inquiry`;

  if (dContactLinkedInLink) {
    dContactLinkedInLink.textContent = `linkedin.com/in/${contact.linkedinUser}`;
    dContactLinkedInLink.href = contact.linkedinUrl;
  }
  if (dContactLinkedInCaption) {
    dContactLinkedInCaption.innerHTML = `Username: <strong>@${escapeHtml(contact.linkedinUser)}</strong> • Connect for networking & updates.`;
  }
  if (heroLinkedInBtn) heroLinkedInBtn.href = contact.linkedinUrl;
  if (contactOpenLinkedInBtn) contactOpenLinkedInBtn.href = contact.linkedinUrl;

  // Footer Details
  const fName = document.getElementById("footer-name");
  const fDegree = document.getElementById("footer-degree");
  const fCollege = document.getElementById("footer-college");
  if (fName) fName.textContent = p.name;
  if (fDegree) fDegree.textContent = `B.Tech Computer Science (${p.collegeBatch})`;
  if (fCollege) fCollege.textContent = p.collegeName;
}

// ==========================================================================
// Rendering: Academic Matrix & Research Tracker
// ==========================================================================
function renderAcademicMatrix() {
  const matrix = (state.profile && state.profile.academicMatrix) || DEFAULT_PROFILE.academicMatrix;

  // Trackers row
  const trackersEl = document.getElementById("display-trackers-row");
  if (trackersEl && matrix.trackers) {
    trackersEl.innerHTML = matrix.trackers.map(t => {
      const lower = t.toLowerCase();
      let extraClass = "in-progress";
      if (lower.includes("trainee")) extraClass = "trainee";
      else if (lower.includes("study") || lower.includes("principles")) extraClass = "study";
      return `<span class="tracker-badge ${extraClass}">● ${escapeHtml(t)}</span>`;
    }).join("");
  }

  // Academic Institution block
  const degreeEl = document.getElementById("display-matrix-degree");
  const orgEl = document.getElementById("display-matrix-org");
  if (degreeEl) degreeEl.textContent = matrix.degree || "B.Tech Computer Science and Engineering";
  if (orgEl) orgEl.textContent = matrix.institution || "Shadan Women's College Of Engineering And Technology • Batch 2026 – 2030";

  // Foundation Engineering Pills
  const foundationEl = document.getElementById("display-foundation-tracks");
  if (foundationEl && matrix.foundation) {
    foundationEl.innerHTML = matrix.foundation.map(f => `
      <div class="foundation-pill-item">
        <span class="bullet-glyph">◈</span>
        <span>${escapeHtml(f)}</span>
      </div>
    `).join("");
  }

  // Independent Research Syllabus
  const syllabusEl = document.getElementById("display-research-syllabus");
  if (syllabusEl && matrix.researchSyllabus) {
    syllabusEl.innerHTML = matrix.researchSyllabus.map((item, idx) => `
      <div class="research-syllabus-card ${idx % 2 === 1 ? 'alt-accent' : ''}">
        <div class="syllabus-topic-title">
          <span>${escapeHtml(item.vector)}</span>
          <span style="font-size: 0.72rem; font-weight: 700; color: var(--c-navy); font-family: 'JetBrains Mono', monospace;">TRACK 0${idx + 1}</span>
        </div>
        <div class="syllabus-topic-desc">${escapeHtml(item.focus)}</div>
      </div>
    `).join("");
  }
}

// ==========================================================================
// Rendering: Technical Arsenal by Layer
// ==========================================================================
function renderTechnicalArsenal() {
  const arsenal = (state.profile && state.profile.technicalArsenal) || DEFAULT_PROFILE.technicalArsenal;
  const container = document.getElementById("display-arsenal-layers");
  if (!container) return;

  const layersConfig = [
    {
      num: "01",
      badge: "Core Foundations",
      title: "Systems & Core Languages",
      items: arsenal.systems || []
    },
    {
      num: "02",
      badge: "Local-First & Sync",
      title: "Data Pipelines & Telemetry",
      items: arsenal.pipelines || []
    },
    {
      num: "03",
      badge: "Intelligent Workflows",
      title: "Frontier & Applied Compute",
      items: arsenal.compute || []
    },
    {
      num: "04",
      badge: "Infra & Edge",
      title: "Tooling & Environments",
      items: arsenal.tooling || []
    }
  ];

  container.innerHTML = layersConfig.map((layer, idx) => `
    <div class="arsenal-layer-card">
      <div class="layer-card-header">
        <span class="layer-index-badge ${idx % 2 === 1 ? 'alt' : ''}">L${layer.num}</span>
        <span class="layer-title-text">${escapeHtml(layer.title)}</span>
      </div>
      <div class="layer-chips-cloud">
        ${layer.items.map(item => `<span class="layer-tech-chip">${escapeHtml(item)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// Rendering: Current Investigations & Reading Log
// ==========================================================================
function renderInvestigationsLog() {
  const log = (state.profile && state.profile.investigationsLog) || DEFAULT_PROFILE.investigationsLog;
  const tbody = document.getElementById("display-investigations-tbody");
  if (!tbody) return;

  tbody.innerHTML = log.map(row => {
    const milestoneState = row.milestone || "";
    let badgeClass = "review";
    const lower = milestoneState.toLowerCase();
    if (lower.includes("benchmarking") || lower.includes("engine") || lower.includes("progress")) {
      badgeClass = "benchmarking";
    } else if (lower.includes("prototype") || lower.includes("testing")) {
      badgeClass = "prototype";
    }

    return `
      <tr>
        <td>
          <span class="vector-badge">
            <span class="vector-glyph">◈</span>
            <span>${escapeHtml(row.vector)}</span>
          </span>
        </td>
        <td>
          <span class="topic-spec-text">${escapeHtml(row.topic)}</span>
        </td>
        <td>
          <span class="milestone-badge ${badgeClass}">${escapeHtml(milestoneState)}</span>
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================================================
// Rendering: Live Deployed Projects
// ==========================================================================
function renderDeployedProjects() {
  const container = document.getElementById("deployed-projects-grid");
  if (!container) return;

  const filtered = state.projects.filter(proj => {
    if (state.currentFilter !== "all") {
      const matchFilter = proj.tags.some(t => t.toLowerCase().includes(state.currentFilter.toLowerCase())) ||
        (proj.category && proj.category.toLowerCase().includes(state.currentFilter.toLowerCase()));
      if (!matchFilter) return false;
    }

    if (state.searchQuery) {
      const query = state.searchQuery;
      const inTitle = proj.title.toLowerCase().includes(query);
      const inDesc = proj.description.toLowerCase().includes(query);
      const inUrl = proj.url.toLowerCase().includes(query);
      const inTags = proj.tags.some(t => t.toLowerCase().includes(query));
      if (!inTitle && !inDesc && !inUrl && !inTags) return false;
    }

    return true;
  });

  const countEl = document.getElementById("deployed-count-stat");
  const badgeEl = document.getElementById("deployed-badge-pill");
  if (countEl) countEl.textContent = state.projects.length;
  if (badgeEl) badgeEl.textContent = state.projects.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="content-card full-width" style="text-align: center; padding: 48px 24px;">
        <div style="font-size: 2.2rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">No matching projects found</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Try adjusting your search query or reset the tag filter.</p>
        <button class="btn btn-primary" onclick="resetProjectFilters()">Show All Projects</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(proj => {
    const themeClass = `theme-${proj.theme || "moss"}`;
    const cleanDomain = extractDomain(proj.url);

    return `
      <article class="project-card" id="card-${proj.id}">
        <div class="card-banner ${themeClass}">
          <div class="banner-graphic">
            <svg viewBox="0 0 100 100" width="160" height="160"><circle cx="50" cy="50" r="40" stroke="white" stroke-width="2" fill="none"/></svg>
          </div>

          <div class="live-status-pill">
            <span class="pulsing-dot"></span>
            <span>LIVE ON VERCEL</span>
          </div>

          <div class="card-edit-controls" style="${state.isEditMode ? 'display: flex;' : 'display: none;'}">
            <button class="card-action-btn edit-btn" onclick="openEditProjectModal('${proj.id}')" title="Edit project" aria-label="Edit project">
              ✏️
            </button>
            <button class="card-action-btn delete-btn" onclick="confirmDeleteProject('${proj.id}')" title="Delete project" aria-label="Delete project">
              🗑️
            </button>
          </div>

          <div class="banner-center-content">
            <div class="banner-app-icon">
              ${getProjectIconSvg(proj.category)}
            </div>
            <div class="banner-title-preview">${escapeHtml(proj.title)}</div>
            <div class="banner-domain-tag">${escapeHtml(cleanDomain)}</div>
          </div>
        </div>

        <div class="card-content">
          <div class="card-title-row">
            <h3 class="card-project-title">${escapeHtml(proj.title)}</h3>
            <span class="card-category-badge">${escapeHtml(proj.category || 'Web App')}</span>
          </div>

          <p class="card-project-desc">${escapeHtml(proj.description)}</p>

          <div class="card-tags-list">
            ${proj.tags.map(tag => `<span class="tech-tag-chip">${escapeHtml(tag)}</span>`).join('')}
          </div>

          <div class="card-footer-actions">
            <a href="${escapeHtml(proj.url)}" target="_blank" rel="noopener noreferrer" class="live-link-btn" title="Open ${escapeHtml(proj.title)} in new tab">
              <span>Open Live Site</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <button class="preview-trigger-btn" onclick="openLivePreviewModal('${escapeHtml(proj.title)}', '${escapeHtml(proj.url)}')">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Quick Preview</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================================================
// Rendering: Future Ideas Gallery
// ==========================================================================
function renderFutureIdeas() {
  const container = document.getElementById("future-ideas-grid");
  if (!container) return;

  const filtered = state.futureIdeas.filter(idea => {
    if (state.searchQuery) {
      const q = state.searchQuery;
      const inTitle = idea.title.toLowerCase().includes(q);
      const inSummary = idea.summary.toLowerCase().includes(q);
      const inTags = idea.tags.some(t => t.toLowerCase().includes(q));
      if (!inTitle && !inSummary && !inTags) return false;
    }
    return true;
  });

  const countEl = document.getElementById("future-count-stat");
  const badgeEl = document.getElementById("future-badge-pill");
  if (countEl) countEl.textContent = state.futureIdeas.length;
  if (badgeEl) badgeEl.textContent = state.futureIdeas.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="content-card full-width" style="text-align: center; padding: 48px 24px;">
        <div style="font-size: 2.2rem; margin-bottom: 12px;">💡</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;">No future ideas found</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">You can propose a new architectural concept or research project!</p>
        <button class="btn btn-primary" onclick="openAddFutureModal()">Propose Future Idea</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(idea => {
    const stageClass = getStageClassName(idea.stage);

    return `
      <article class="future-card" id="idea-${idea.id}">
        <div class="card-edit-controls" style="${state.isEditMode ? 'display: flex;' : 'display: none;'}">
          <button class="card-action-btn edit-btn" onclick="openEditFutureModal('${idea.id}')" title="Edit idea" aria-label="Edit idea">
            ✏️
          </button>
          <button class="card-action-btn delete-btn" onclick="confirmDeleteFuture('${idea.id}')" title="Delete idea" aria-label="Delete idea">
            🗑️
          </button>
        </div>

        <div class="future-top-row">
          <span class="stage-badge ${stageClass}">
            <span>●</span>
            <span>${escapeHtml(idea.stage)}</span>
          </span>
          <span class="future-timeline-chip">${escapeHtml(idea.timeline)}</span>
        </div>

        <h3 class="future-title">${escapeHtml(idea.title)}</h3>
        <p class="future-summary">${escapeHtml(idea.summary)}</p>

        <div class="card-tags-list">
          ${idea.tags.map(tag => `<span class="tech-tag-chip">${escapeHtml(tag)}</span>`).join('')}
        </div>

        <div class="future-card-footer">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-light);">R&D Lab Spec</span>
          <button class="btn-link" onclick="contactAboutIdea('${escapeHtml(idea.title)}')" style="font-size: 0.82rem;">
            Collaborate on this →
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function renderAll() {
  renderProfile();
  renderDeployedProjects();
  renderFutureIdeas();
  updateEditModeUI();
}

// ==========================================================================
// Tabs & Filters
// ==========================================================================
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });
}

window.switchTab = function(tabId) {
  state.currentTab = tabId;

  document.querySelectorAll(".tab-button").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-content").forEach(content => {
    if (content.id === tabId) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  if (history.pushState) {
    history.pushState(null, null, `#${tabId}`);
  }
};

function initSearch() {
  const searchInput = document.getElementById("global-search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = state.searchQuery ? "block" : "none";
      }
      renderDeployedProjects();
      renderFutureIdeas();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearBtn.style.display = "none";
      renderDeployedProjects();
      renderFutureIdeas();
      searchInput.focus();
    });
  }
}

function initFilters() {
  const filterPills = document.querySelectorAll("#deployed-tag-filters .tag-pill");
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentFilter = pill.getAttribute("data-filter");
      renderDeployedProjects();
    });
  });
}

window.resetProjectFilters = function() {
  state.currentFilter = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("global-search-input");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll("#deployed-tag-filters .tag-pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-filter") === "all");
  });
  renderDeployedProjects();
};

// ==========================================================================
// Modals Controller: Profile, Education, Skills, Contact, Projects
// ==========================================================================
function initModals() {
  // Modal Backdrops
  const modals = [
    document.getElementById("profile-modal"),
    document.getElementById("curriculum-modal"),
    document.getElementById("arsenal-modal"),
    document.getElementById("investigations-modal"),
    document.getElementById("contact-modal"),
    document.getElementById("project-modal"),
    document.getElementById("future-modal"),
    document.getElementById("preview-modal")
  ];

  modals.forEach(m => {
    if (m) {
      m.addEventListener("click", (e) => {
        if (e.target === m) {
          m.classList.remove("active");
          if (m.id === "preview-modal") {
            const iframe = document.getElementById("preview-iframe");
            if (iframe) iframe.src = "about:blank";
          }
        }
      });
    }
  });

  // Modal Closers
  setupModalCloser("profile-modal", "close-profile-modal-btn", "cancel-profile-modal-btn");
  setupModalCloser("curriculum-modal", "close-curriculum-modal-btn", "cancel-curriculum-modal-btn");
  setupModalCloser("arsenal-modal", "close-arsenal-modal-btn", "cancel-arsenal-modal-btn");
  setupModalCloser("investigations-modal", "close-investigations-modal-btn", "cancel-investigations-modal-btn");
  setupModalCloser("contact-modal", "close-contact-modal-btn", "cancel-contact-modal-btn");
  setupModalCloser("project-modal", "close-project-modal-btn", "cancel-project-modal-btn");
  setupModalCloser("future-modal", "close-future-modal-btn", "cancel-future-modal-btn");
  
  const closePreviewBtn = document.getElementById("close-preview-modal-btn");
  if (closePreviewBtn) {
    closePreviewBtn.addEventListener("click", () => {
      const pm = document.getElementById("preview-modal");
      if (pm) pm.classList.remove("active");
      const iframe = document.getElementById("preview-iframe");
      if (iframe) iframe.src = "about:blank";
    });
  }

  // Form Submissions
  setupForm("profile-form", handleProfileFormSubmit);
  setupForm("curriculum-form", handleCurriculumFormSubmit);
  setupForm("arsenal-form", handleArsenalFormSubmit);
  setupForm("investigations-form", handleInvestigationsFormSubmit);
  setupForm("contact-form", handleContactFormSubmit);
  setupForm("project-form", handleProjectFormSubmit);
  setupForm("future-form", handleFutureFormSubmit);

  // Trigger buttons
  const addProjectBtn = document.getElementById("add-deployed-project-btn");
  if (addProjectBtn) addProjectBtn.addEventListener("click", openAddProjectModal);

  const addFutureBtn = document.getElementById("add-future-idea-btn");
  if (addFutureBtn) addFutureBtn.addEventListener("click", openAddFutureModal);

  const resetProjBtn = document.getElementById("reset-deployed-btn");
  if (resetProjBtn) {
    resetProjBtn.addEventListener("click", () => {
      if (confirm("Restore default deployed projects (Node Binding AI & PulseAero)?")) {
        state.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
        saveProjects();
        renderDeployedProjects();
        showToast("Restored default deployed projects");
      }
    });
  }

  const resetFutureBtn = document.getElementById("reset-future-btn");
  if (resetFutureBtn) {
    resetFutureBtn.addEventListener("click", () => {
      if (confirm("Restore default future ideas?")) {
        state.futureIdeas = JSON.parse(JSON.stringify(DEFAULT_FUTURE_IDEAS));
        saveFutureIdeas();
        renderFutureIdeas();
        showToast("Restored default future ideas");
      }
    });
  }
}

function setupModalCloser(modalId, closeBtnId, cancelBtnId) {
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);
  const cancelBtn = document.getElementById(cancelBtnId);
  const closer = () => { if (modal) modal.classList.remove("active"); };
  if (closeBtn) closeBtn.addEventListener("click", closer);
  if (cancelBtn) cancelBtn.addEventListener("click", closer);
}

function setupForm(formId, handler) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

// --------------------------------------------------------------------------
// Profile & Bio Modal Handler
// --------------------------------------------------------------------------
window.openProfileModal = function() {
  const p = state.profile;
  document.getElementById("input-profile-name").value = p.name;
  document.getElementById("input-profile-monogram").value = p.monogram || "HF";
  document.getElementById("input-avatar-url").value = p.avatarUrl || "";
  document.getElementById("input-profile-role").value = p.role;
  document.getElementById("input-profile-headline").value = p.headline;
  document.getElementById("input-college-name").value = p.collegeName;
  document.getElementById("input-college-batch").value = p.collegeBatch;
  document.getElementById("input-meta-tags").value = (p.metaTags || []).join(", ");
  document.getElementById("input-bio-text").value = (p.bioParagraphs || []).join("\n\n");

  const modal = document.getElementById("profile-modal");
  if (modal) modal.classList.add("active");
};

function handleProfileFormSubmit() {
  const p = state.profile;
  p.name = document.getElementById("input-profile-name").value.trim();
  p.monogram = document.getElementById("input-profile-monogram").value.trim() || "HF";
  p.avatarUrl = document.getElementById("input-avatar-url").value.trim();
  p.role = document.getElementById("input-profile-role").value.trim();
  p.headline = document.getElementById("input-profile-headline").value.trim();
  p.collegeName = document.getElementById("input-college-name").value.trim();
  p.collegeBatch = document.getElementById("input-college-batch").value.trim();

  const metaRaw = document.getElementById("input-meta-tags").value.trim();
  p.metaTags = metaRaw.split(",").map(t => t.trim()).filter(Boolean);

  const bioRaw = document.getElementById("input-bio-text").value.trim();
  p.bioParagraphs = bioRaw.split(/\n\s*\n/).map(t => t.trim()).filter(Boolean);

  saveProfile();
  renderProfile();
  document.getElementById("profile-modal").classList.remove("active");
  showToast("Profile & Bio updated successfully!");
}

// --------------------------------------------------------------------------
// Curriculum & Research Matrix Modal Handler
// --------------------------------------------------------------------------
window.openCurriculumModal = function() {
  const matrix = (state.profile && state.profile.academicMatrix) || DEFAULT_PROFILE.academicMatrix;
  const dDegree = document.getElementById("input-matrix-degree");
  const dOrg = document.getElementById("input-matrix-org");
  const dTrackers = document.getElementById("input-matrix-trackers");
  const dFoundation = document.getElementById("input-matrix-foundation");
  const dRes1Title = document.getElementById("input-matrix-res1-title");
  const dRes1Focus = document.getElementById("input-matrix-res1-focus");
  const dRes2Title = document.getElementById("input-matrix-res2-title");
  const dRes2Focus = document.getElementById("input-matrix-res2-focus");

  if (dDegree) dDegree.value = matrix.degree || "";
  if (dOrg) dOrg.value = matrix.institution || "";
  if (dTrackers) dTrackers.value = (matrix.trackers || []).join(", ");
  if (dFoundation) dFoundation.value = (matrix.foundation || []).join(", ");

  const res1 = (matrix.researchSyllabus && matrix.researchSyllabus[0]) || { vector: "Computational Biology", focus: "" };
  const res2 = (matrix.researchSyllabus && matrix.researchSyllabus[1]) || { vector: "Neural Dynamics", focus: "" };

  if (dRes1Title) dRes1Title.value = res1.vector || "";
  if (dRes1Focus) dRes1Focus.value = res1.focus || "";
  if (dRes2Title) dRes2Title.value = res2.vector || "";
  if (dRes2Focus) dRes2Focus.value = res2.focus || "";

  const modal = document.getElementById("curriculum-modal");
  if (modal) modal.classList.add("active");
};
window.openEducationModal = window.openCurriculumModal;

function handleCurriculumFormSubmit() {
  const degree = document.getElementById("input-matrix-degree").value.trim();
  const institution = document.getElementById("input-matrix-org").value.trim();
  const trackersRaw = document.getElementById("input-matrix-trackers").value.trim();
  const foundationRaw = document.getElementById("input-matrix-foundation").value.trim();
  const res1Title = document.getElementById("input-matrix-res1-title").value.trim();
  const res1Focus = document.getElementById("input-matrix-res1-focus").value.trim();
  const res2Title = document.getElementById("input-matrix-res2-title").value.trim();
  const res2Focus = document.getElementById("input-matrix-res2-focus").value.trim();

  state.profile.academicMatrix = {
    degree,
    institution,
    trackers: trackersRaw.split(",").map(t => t.trim()).filter(Boolean),
    foundation: foundationRaw.split(",").map(t => t.trim()).filter(Boolean),
    researchSyllabus: [
      { vector: res1Title, focus: res1Focus },
      { vector: res2Title, focus: res2Focus }
    ]
  };

  saveProfile();
  renderAcademicMatrix();
  const modal = document.getElementById("curriculum-modal");
  if (modal) modal.classList.remove("active");
  showToast("Academic Matrix & Research Tracks updated!");
}

// --------------------------------------------------------------------------
// Technical Arsenal by Layer Modal Handler
// --------------------------------------------------------------------------
window.openArsenalModal = function() {
  const arsenal = (state.profile && state.profile.technicalArsenal) || DEFAULT_PROFILE.technicalArsenal;
  const dSys = document.getElementById("input-arsenal-systems");
  const dPipe = document.getElementById("input-arsenal-pipelines");
  const dComp = document.getElementById("input-arsenal-compute");
  const dTool = document.getElementById("input-arsenal-tooling");

  if (dSys) dSys.value = (arsenal.systems || []).join(", ");
  if (dPipe) dPipe.value = (arsenal.pipelines || []).join(", ");
  if (dComp) dComp.value = (arsenal.compute || []).join(", ");
  if (dTool) dTool.value = (arsenal.tooling || []).join(", ");

  const modal = document.getElementById("arsenal-modal");
  if (modal) modal.classList.add("active");
};
window.openSkillsModal = window.openArsenalModal;

function handleArsenalFormSubmit() {
  const systemsRaw = document.getElementById("input-arsenal-systems").value.trim();
  const pipelinesRaw = document.getElementById("input-arsenal-pipelines").value.trim();
  const computeRaw = document.getElementById("input-arsenal-compute").value.trim();
  const toolingRaw = document.getElementById("input-arsenal-tooling").value.trim();

  state.profile.technicalArsenal = {
    systems: systemsRaw.split(",").map(s => s.trim()).filter(Boolean),
    pipelines: pipelinesRaw.split(",").map(s => s.trim()).filter(Boolean),
    compute: computeRaw.split(",").map(s => s.trim()).filter(Boolean),
    tooling: toolingRaw.split(",").map(s => s.trim()).filter(Boolean)
  };

  saveProfile();
  renderTechnicalArsenal();
  const modal = document.getElementById("arsenal-modal");
  if (modal) modal.classList.remove("active");
  showToast("Technical Arsenal updated!");
}

// --------------------------------------------------------------------------
// Current Investigations & Reading Log Modal Handler
// --------------------------------------------------------------------------
window.openInvestigationsModal = function() {
  const log = (state.profile && state.profile.investigationsLog) || DEFAULT_PROFILE.investigationsLog;
  const r1 = log[0] || { vector: "", topic: "", milestone: "" };
  const r2 = log[1] || { vector: "", topic: "", milestone: "" };
  const r3 = log[2] || { vector: "", topic: "", milestone: "" };

  const v1 = document.getElementById("input-inv1-vector");
  const t1 = document.getElementById("input-inv1-topic");
  const m1 = document.getElementById("input-inv1-milestone");
  const v2 = document.getElementById("input-inv2-vector");
  const t2 = document.getElementById("input-inv2-topic");
  const m2 = document.getElementById("input-inv2-milestone");
  const v3 = document.getElementById("input-inv3-vector");
  const t3 = document.getElementById("input-inv3-topic");
  const m3 = document.getElementById("input-inv3-milestone");

  if (v1) v1.value = r1.vector || "";
  if (t1) t1.value = r1.topic || "";
  if (m1) m1.value = r1.milestone || "";

  if (v2) v2.value = r2.vector || "";
  if (t2) t2.value = r2.topic || "";
  if (m2) m2.value = r2.milestone || "";

  if (v3) v3.value = r3.vector || "";
  if (t3) t3.value = r3.topic || "";
  if (m3) m3.value = r3.milestone || "";

  const modal = document.getElementById("investigations-modal");
  if (modal) modal.classList.add("active");
};

function handleInvestigationsFormSubmit() {
  state.profile.investigationsLog = [
    {
      vector: document.getElementById("input-inv1-vector").value.trim(),
      topic: document.getElementById("input-inv1-topic").value.trim(),
      milestone: document.getElementById("input-inv1-milestone").value.trim()
    },
    {
      vector: document.getElementById("input-inv2-vector").value.trim(),
      topic: document.getElementById("input-inv2-topic").value.trim(),
      milestone: document.getElementById("input-inv2-milestone").value.trim()
    },
    {
      vector: document.getElementById("input-inv3-vector").value.trim(),
      topic: document.getElementById("input-inv3-topic").value.trim(),
      milestone: document.getElementById("input-inv3-milestone").value.trim()
    }
  ];

  saveProfile();
  renderInvestigationsLog();
  const modal = document.getElementById("investigations-modal");
  if (modal) modal.classList.remove("active");
  showToast("Investigations & Reading Log updated!");
}

// --------------------------------------------------------------------------
// Contact Modal Handler
// --------------------------------------------------------------------------
window.openContactModal = function() {
  const c = state.profile.contact || {};
  document.getElementById("input-contact-email").value = c.email || "";
  document.getElementById("input-contact-linkedin-user").value = c.linkedinUser || "";
  document.getElementById("input-contact-linkedin-url").value = c.linkedinUrl || "";

  const modal = document.getElementById("contact-modal");
  if (modal) modal.classList.add("active");
};

function handleContactFormSubmit() {
  state.profile.contact = {
    email: document.getElementById("input-contact-email").value.trim(),
    linkedinUser: document.getElementById("input-contact-linkedin-user").value.trim(),
    linkedinUrl: document.getElementById("input-contact-linkedin-url").value.trim()
  };

  saveProfile();
  renderProfile();
  document.getElementById("contact-modal").classList.remove("active");
  showToast("Contact information updated!");
}

// --------------------------------------------------------------------------
// Project CRUD Modal Handlers
// --------------------------------------------------------------------------
function openAddProjectModal() {
  const form = document.getElementById("project-form");
  if (form) form.reset();

  document.getElementById("project-id").value = "";
  document.getElementById("project-modal-title").textContent = "Add Live Deployed Project";
  document.getElementById("save-project-btn").textContent = "Add Project";

  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.add("active");
}

window.openEditProjectModal = function(projectId) {
  const proj = state.projects.find(p => p.id === projectId);
  if (!proj) return;

  document.getElementById("project-id").value = proj.id;
  document.getElementById("project-title").value = proj.title;
  document.getElementById("project-url").value = proj.url;
  document.getElementById("project-desc").value = proj.description;
  document.getElementById("project-tags").value = proj.tags.join(", ");
  document.getElementById("project-category").value = proj.category || "AI";
  document.getElementById("project-theme").value = proj.theme || "moss";
  document.getElementById("project-github").value = proj.github || "";

  document.getElementById("project-modal-title").textContent = "Edit Project: " + proj.title;
  document.getElementById("save-project-btn").textContent = "Save Changes";

  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.add("active");
};

function handleProjectFormSubmit() {
  const id = document.getElementById("project-id").value;
  const title = document.getElementById("project-title").value.trim();
  const url = document.getElementById("project-url").value.trim();
  const desc = document.getElementById("project-desc").value.trim();
  const tagsRaw = document.getElementById("project-tags").value.trim();
  const category = document.getElementById("project-category").value;
  const theme = document.getElementById("project-theme").value;
  const github = document.getElementById("project-github").value.trim();

  const tags = tagsRaw.split(",").map(t => t.trim()).filter(Boolean);

  if (id) {
    const index = state.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      state.projects[index] = {
        ...state.projects[index],
        title,
        url,
        description: desc,
        tags,
        category,
        theme,
        github
      };
      showToast(`Updated "${title}"`);
    }
  } else {
    const newProject = {
      id: "proj-" + Date.now(),
      title,
      url,
      description: desc,
      tags,
      category,
      theme,
      github,
      isLive: true,
      created: new Date().toISOString()
    };
    state.projects.unshift(newProject);
    showToast(`Added "${title}" to gallery!`);
  }

  saveProjects();
  renderDeployedProjects();
  document.getElementById("project-modal").classList.remove("active");
}

window.confirmDeleteProject = function(projectId) {
  const proj = state.projects.find(p => p.id === projectId);
  if (!proj) return;

  if (confirm(`Are you sure you want to delete "${proj.title}" from your gallery?`)) {
    state.projects = state.projects.filter(p => p.id !== projectId);
    saveProjects();
    renderDeployedProjects();
    showToast(`Deleted "${proj.title}"`);
  }
};

// --------------------------------------------------------------------------
// Future Ideas CRUD Modal Handlers
// --------------------------------------------------------------------------
window.openAddFutureModal = function() {
  const form = document.getElementById("future-form");
  if (form) form.reset();

  document.getElementById("future-id").value = "";
  document.getElementById("future-modal-title").textContent = "Propose Future Idea";
  document.getElementById("save-future-btn").textContent = "Save Idea";

  const modal = document.getElementById("future-modal");
  if (modal) modal.classList.add("active");
};

window.openEditFutureModal = function(ideaId) {
  const idea = state.futureIdeas.find(i => i.id === ideaId);
  if (!idea) return;

  document.getElementById("future-id").value = idea.id;
  document.getElementById("future-title").value = idea.title;
  document.getElementById("future-summary").value = idea.summary;
  document.getElementById("future-stage").value = idea.stage;
  document.getElementById("future-timeline").value = idea.timeline;
  document.getElementById("future-tags").value = idea.tags.join(", ");

  document.getElementById("future-modal-title").textContent = "Edit Idea: " + idea.title;
  document.getElementById("save-future-btn").textContent = "Save Changes";

  const modal = document.getElementById("future-modal");
  if (modal) modal.classList.add("active");
};

function handleFutureFormSubmit() {
  const id = document.getElementById("future-id").value;
  const title = document.getElementById("future-title").value.trim();
  const summary = document.getElementById("future-summary").value.trim();
  const stage = document.getElementById("future-stage").value;
  const timeline = document.getElementById("future-timeline").value.trim();
  const tagsRaw = document.getElementById("future-tags").value.trim();

  const tags = tagsRaw.split(",").map(t => t.trim()).filter(Boolean);

  if (id) {
    const index = state.futureIdeas.findIndex(i => i.id === id);
    if (index !== -1) {
      state.futureIdeas[index] = {
        ...state.futureIdeas[index],
        title,
        summary,
        stage,
        timeline,
        tags
      };
      showToast(`Updated "${title}"`);
    }
  } else {
    const newIdea = {
      id: "idea-" + Date.now(),
      title,
      summary,
      stage,
      timeline,
      tags,
      created: new Date().toISOString()
    };
    state.futureIdeas.unshift(newIdea);
    showToast(`Added "${title}" to Future Ideas!`);
  }

  saveFutureIdeas();
  renderFutureIdeas();
  document.getElementById("future-modal").classList.remove("active");
}

window.confirmDeleteFuture = function(ideaId) {
  const idea = state.futureIdeas.find(i => i.id === ideaId);
  if (!idea) return;

  if (confirm(`Are you sure you want to remove "${idea.title}"?`)) {
    state.futureIdeas = state.futureIdeas.filter(i => i.id !== ideaId);
    saveFutureIdeas();
    renderFutureIdeas();
    showToast(`Removed "${idea.title}"`);
  }
};

window.contactAboutIdea = function(title) {
  switchTab("contact-tab");
  const subjInput = document.getElementById("sender-subject");
  const bodyInput = document.getElementById("sender-body");
  if (subjInput) subjInput.value = `Collaboration Inquiry: ${title}`;
  if (bodyInput) bodyInput.value = `Hi ${state.profile.name},\n\nI was looking through your Future Ideas gallery and would love to collaborate on "${title}". Let's discuss!`;
  const contactCard = document.getElementById("contact-section");
  if (contactCard) contactCard.scrollIntoView({ behavior: "smooth" });
};

// ==========================================================================
// Live Preview Modal
// ==========================================================================
window.openLivePreviewModal = function(title, url) {
  const modal = document.getElementById("preview-modal");
  const titleEl = document.getElementById("preview-modal-title");
  const linkEl = document.getElementById("preview-external-link");
  const newTabBtn = document.getElementById("preview-new-tab-btn");
  const iframe = document.getElementById("preview-iframe");
  const loading = document.getElementById("preview-loading");

  if (!modal || !iframe) return;

  titleEl.textContent = title;
  linkEl.textContent = url;
  linkEl.href = url;
  newTabBtn.href = url;

  if (loading) loading.classList.remove("hidden");
  iframe.src = url;

  iframe.onload = () => {
    if (loading) loading.classList.add("hidden");
  };

  setTimeout(() => {
    if (loading) loading.classList.add("hidden");
  }, 2500);

  modal.classList.add("active");
};

// ==========================================================================
// Contact Actions & Clipboard
// ==========================================================================
function initContactActions() {
  const copyButtons = [
    document.getElementById("copy-email-quick-btn"),
    document.getElementById("copy-email-btn")
  ];

  copyButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        const email = state.profile.contact.email;
        copyToClipboard(email, "Email address copied to clipboard!");
      });
    }
  });

  const msgForm = document.getElementById("quick-message-form");
  if (msgForm) {
    msgForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("sender-name").value.trim();
      const senderEmail = document.getElementById("sender-email").value.trim();
      const subject = document.getElementById("sender-subject").value.trim();
      const message = document.getElementById("sender-body").value.trim();
      const targetEmail = state.profile.contact.email;

      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `From: ${name} (${senderEmail})\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;
      showToast("Opening email client to send message...");
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast(successMsg);
  } catch (err) {
    showToast("Please copy manually: " + text);
  }
  document.body.removeChild(textarea);
}

// ==========================================================================
// Backup & Restore Engine (Export/Import Portfolio JSON)
// ==========================================================================
window.exportPortfolioJson = function() {
  const data = {
    version: "3.0",
    exportedAt: new Date().toISOString(),
    profile: state.profile,
    projects: state.projects,
    futureIdeas: state.futureIdeas
  };

  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `sayeeda-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Portfolio backup JSON downloaded!");
};

window.triggerImportJson = function() {
  const fileInput = document.getElementById("import-json-input");
  if (fileInput) fileInput.click();
};

window.handleImportJson = function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.profile) state.profile = parsed.profile;
      if (parsed.projects) state.projects = parsed.projects;
      if (parsed.futureIdeas) state.futureIdeas = parsed.futureIdeas;

      saveProfile();
      saveProjects();
      saveFutureIdeas();
      renderAll();
      showToast("Portfolio restored from JSON backup successfully!");
    } catch (err) {
      alert("Invalid JSON backup file. Please upload a valid portfolio export.");
    }
  };
  reader.readAsText(file);
};

window.resetAllDefaults = function() {
  if (confirm("Reset ALL data (Profile, Bio, Skills, Education, Projects, and Ideas) to default starting state?")) {
    state.profile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    state.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
    state.futureIdeas = JSON.parse(JSON.stringify(DEFAULT_FUTURE_IDEAS));
    saveProfile();
    saveProjects();
    saveFutureIdeas();
    renderAll();
    showToast("Restored all default data!");
  }
};

// ==========================================================================
// Toast Notifications
// ==========================================================================
function showToast(message, duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span style="font-size: 1.1rem;">🌱</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.25s, transform 0.25s";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(40px)";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, duration);
}

// ==========================================================================
// Utilities
// ==========================================================================
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractDomain(url) {
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch (e) {
    return url;
  }
}

function getStageClassName(stage) {
  const s = (stage || "").toLowerCase();
  if (s.includes("ideation")) return "ideation";
  if (s.includes("prototyping")) return "prototyping";
  if (s.includes("research")) return "research";
  if (s.includes("architecture")) return "architecture";
  return "prototyping";
}

function getProjectIconSvg(category) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("aero")) {
    return `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
}
