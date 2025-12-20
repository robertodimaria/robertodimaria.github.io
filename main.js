// Portfolio main JavaScript
// Theme and navigation utilities are loaded from utils.js

// Load projects from projectsData.js
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !projectsData) return;

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'reveal-up tw-w-[240px] tw-h-[340px] tw-flex max-md:tw-w-full';
        
        projectCard.innerHTML = `
            <a href="project-detail.html?id=${encodeURIComponent(project.id)}" 
               class="tw-relative tw-p-4 tw-transition-all tw-duration-300 tw-group/card tw-gap-3 tw-flex 
                      tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-2xl 
                      hover:tw-scale-[1.02]">
                <div class="tw-overflow-hidden tw-w-full tw-min-h-[120px] tw-h-[120px] tw-rounded-lg">
                    <img src="${project.thumbnail}" 
                         class="tw-w-full tw-h-full tw-object-cover" 
                         alt="${project.title}">
                </div>
                <h2 class="tw-text-lg max-md:tw-text-base tw-font-medium tw-line-clamp-3">${project.title}</h2>
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-auto tw-text-sm">
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
