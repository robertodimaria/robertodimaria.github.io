// Portfolio main JavaScript

const RESPONSIVE_WIDTH = 1024;

let headerWhiteBg = false;
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;
const collapseBtn = document.getElementById("collapse-btn");
const collapseHeaderItems = document.getElementById("collapsed-header-items");

function onHeaderClickOutside(e) {
    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader();
    }
}

function toggleHeader() {
    if (isHeaderCollapsed) {
        collapseHeaderItems.classList.add("max-lg:!tw-opacity-100", "tw-min-h-[90vh]");
        collapseHeaderItems.style.height = "90vh";
        collapseBtn.classList.remove("bi-list");
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed");
        isHeaderCollapsed = false;
        document.body.classList.add("modal-open");
        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1);
    } else {
        collapseHeaderItems.classList.remove("max-lg:!tw-opacity-100", "tw-min-h-[90vh]");
        collapseHeaderItems.style.height = "0vh";
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed");
        collapseBtn.classList.add("bi-list");
        document.body.classList.remove("modal-open");
        isHeaderCollapsed = true;
        window.removeEventListener("click", onHeaderClickOutside);
    }
}

function responsive() {
    if (!isHeaderCollapsed) {
        toggleHeader();
    }
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.height = "";
    } else {
        isHeaderCollapsed = true;
    }
}
responsive();
window.addEventListener("resize", responsive);

/** Dark and light theme */
if (localStorage.getItem('color-mode') === 'dark' || (!('color-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('tw-dark');
    updateToggleModeBtn();
} else {
    document.documentElement.classList.remove('tw-dark');
    updateToggleModeBtn();
}

function toggleMode() {
    document.documentElement.classList.toggle("tw-dark");
    updateToggleModeBtn();
}

function updateToggleModeBtn() {
    const toggleIcon = document.querySelector("#toggle-mode-icon");
    if (document.documentElement.classList.contains("tw-dark")) {
        toggleIcon.classList.remove("bi-sun");
        toggleIcon.classList.add("bi-moon");
        localStorage.setItem("color-mode", "dark");
    } else {
        toggleIcon.classList.add("bi-sun");
        toggleIcon.classList.remove("bi-moon");
        localStorage.setItem("color-mode", "light");
    }
}

// Load projects from projectsData.js
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !projectsData) return;

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full';
        
        projectCard.innerHTML = `
            <a href="project-detail.html?id=${project.id}" 
               class="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex 
                      tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                      hover:tw-scale-[1.02]">
                <div class="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px] tw-rounded-xl">
                    <img src="${project.thumbnail}" 
                         class="tw-w-full tw-h-full tw-object-cover" 
                         alt="${project.title}">
                </div>
                <h2 class="tw-text-3xl max-md:tw-text-2xl tw-font-medium">${project.title}</h2>
                <p class="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    ${project.shortDescription}
                </p>
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i class="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                </div>
            </a>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Load projects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProjects);
} else {
    loadProjects();
}

/**
 * Animations with GSAP
 */
gsap.registerPlugin(ScrollTrigger);

gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
});

// Reveal section animations
const sections = gsap.utils.toArray("section");

sections.forEach((sec) => {
    const revealUptimeline = gsap.timeline({
        paused: true, 
        scrollTrigger: {
            trigger: sec,
            start: "10% 80%",
            end: "20% 90%",
        }
    });

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    });
});
