// =========================================
// DATA ARRAYS
// =========================================
const skillsData = [
  {
    icon: "layout",
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Comfortable" },
      { name: "Next.js", level: "Working knowledge" },
      { name: "Tailwind CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS3", level: "Comfortable" },
    ],
  },
  {
    icon: "server",
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Comfortable" },
      { name: "Express.js", level: "Comfortable" },
      { name: "REST APIs", level: "Comfortable" },
    ],
  },
  {
    icon: "database",
    title: "Databases",
    skills: [
      { name: "MongoDB", level: "Comfortable" },
      { name: "Mongoose", level: "Comfortable" },
      { name: "SQL", level: "Working knowledge" },
    ],
  },
  {
    icon: "brain",
    title: "AI / ML",
    skills: [
      { name: "Google Gemini", level: "Working knowledge" },
      { name: "Groq", level: "Working knowledge" },
      { name: "LLM APIs", level: "Working knowledge" },
      { name: "RAG Concepts", level: "Currently learning" },
    ],
  },
  {
    icon: "wrench",
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Postman", level: "Comfortable" },
      { name: "Figma", level: "Working knowledge" },
    ],
  },
];

const projectsData = [
  {
    title: "Smart Quiz",
    type: "AI",
    description:
      "AI-powered quiz platform for Class 9–12 that generates questions based on class, board, subject, chapter and difficulty.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "Tailwind CSS",
      "Gemini API",
    ],
    github: "https://github.com/Dheerendra07",
    demo: "#",
  },
  {
    title: "AI PDF Teacher",
    type: "AI",
    description:
      "AI-powered learning tool that processes educational PDFs and generates summaries, MCQs, HOTS questions and flashcards.",
    tech: [
      "Node.js",
      "Express.js",
      "Multer",
      "PDF processing",
      "Gemini/Groq",
      "JavaScript",
    ],
    github: "https://github.com/Dheerendra07",
    demo: "#",
  },
  {
    title: "AI Learning Scheduler",
    type: "Web",
    description:
      "AI-based learning scheduler that creates structured study routines using topic, available time and learning goals.",
    tech: ["Node.js", "Express.js", "JavaScript", "LLM APIs", "YouTube API"],
    github: "https://github.com/Dheerendra07",
    demo: "#",
  },
  {
    title: "Food Ordering System",
    type: "Web",
    description:
      "A simple food ordering web application with product browsing, cart/order flow and backend data handling.",
    tech: ["JavaScript", "HTML", "CSS", "Backend APIs", "Database"],
    github: "https://github.com/Dheerendra07",
    demo: "#",
  },
];

// =========================================
// PRELOADER
// =========================================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 300);
});

// =========================================
// THEME TOGGLE
// =========================================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check local storage or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  html.setAttribute("data-theme", "light");
} else {
  html.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// =========================================
// NAVBAR SCROLL & MOBILE MENU
// =========================================
const navbar = document.getElementById("navbar");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");
const mobileIcon = document.getElementById("mobileIcon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-active");
  const isOpen = navLinks.classList.contains("mobile-active");
  mobileToggle.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
  lucide.createIcons();
});

// Close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("mobile-active")) {
      navLinks.classList.remove("mobile-active");
      mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
      lucide.createIcons();
    }
  });
});

// =========================================
// TERMINAL TYPING EFFECT
// =========================================
const terminalText = document.getElementById("terminal-text");
const codeToType = `const developer = {
  name: "Dheerendra Singh",
  role: "Full-Stack Developer",
  focus: "AI + Web",
  open_to_work: true
};`;

let typeIndex = 0;

function typeTerminal() {
  if (typeIndex < codeToType.length) {
    const char = codeToType.charAt(typeIndex);

    // Basic syntax highlighting
    let displayChar = char;
    if (char === "{" || char === "}") {
      displayChar = `<span style="color: var(--muted)">${char}</span>`;
    }

    terminalText.innerHTML += displayChar;
    typeIndex++;
    setTimeout(typeTerminal, 40);
  } else {
    terminalText.innerHTML += '<span class="cursor"></span>';
  }
}

// Start typing effect shortly after page load
setTimeout(typeTerminal, 800);

// =========================================
// COPY CODE BUTTON
// =========================================
const copyBtn = document.getElementById("copyBtn");
const aboutCode = document.getElementById("aboutCode");

copyBtn.addEventListener("click", () => {
  const text = aboutCode.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyBtn.innerHTML = `<i data-lucide="check" class="copy-icon"></i>`;
      lucide.createIcons();
      setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy" class="copy-icon"></i>`;
        lucide.createIcons();
      }, 2000);
    })
    .catch((err) => console.error("Failed to copy:", err));
});

// =========================================
// RENDER SKILLS
// =========================================
const skillsContainer = document.getElementById("skillsContainer");

function renderSkills() {
  skillsContainer.innerHTML = skillsData
    .map(
      (cat) => `
    <div class="skill-card reveal">
      <div class="skill-header">
        <div class="skill-icon-box">
          <i data-lucide="${cat.icon}"></i>
        </div>
        <h3 class="skill-title">${cat.title}</h3>
      </div>
      <div class="skill-list">
        ${cat.skills
          .map(
            (s) => `
          <div class="skill-item">
            <span class="skill-name">${s.name}</span>
            <span class="skill-level">${s.level}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
  lucide.createIcons();
  observeReveals(); // Call observer for newly added elements
}

// =========================================
// RENDER PROJECTS
// =========================================
const projectsContainer = document.getElementById("projectsContainer");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(filter = "All") {
  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  if (filtered.length === 0) {
    projectsContainer.innerHTML = `<p class="no-projects">No projects found in this category.</p>`;
    return;
  }

  projectsContainer.innerHTML = filtered
    .map(
      (p) => `
    <div class="project-card reveal">
      <div class="project-visual">
        <i data-lucide="folder-git-2"></i>
        <span class="project-type">${p.type}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
            View Project <i data-lucide="arrow-up-right"></i>
          </a>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            GitHub <i data-lucide="github"></i>
          </a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
  lucide.createIcons();
  observeReveals();
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// =========================================
// CONTACT FORM VALIDATION
// =========================================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formMessage.className = "form-message";

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.classList.add("error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("error");
    return;
  }

  // Frontend validation passed. Notify user about backend requirement.
  formMessage.textContent =
    "Validation passed. Backend integration required to send message.";
  formMessage.classList.add("success");
});

// =========================================
// SCROLL REVEAL ANIMATION
// =========================================
let observer;

function observeReveals() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
  }

  document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
    observer.observe(el);
  });
}

// =========================================
// INITIALIZATION
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderSkills();
  renderProjects();
  observeReveals();
});
