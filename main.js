import {
  animateEntranceGroup,
  attach3DTiltAndSpotlight,
  attachMagneticPull,
  markMotionReady,
  setupHeader,
  setupParallax,
  setupScrollReveals
} from "./utils.js";

const THUMBNAIL_DIMENSIONS = {
  "rf-antenna": { width: 369, height: 285 },
  "ccsu-thesis": { width: 1598, height: 684 },
  "gyroid-heatexchanger": { width: 450, height: 337 },
  "onera-m6-wing": { width: 627, height: 340 },
  "mtc1300t-damage-modeling": { width: 1061, height: 462 }
};

// 12-Column Asymmetric Apple Keynote Mosaic pattern (8+4 = 12, 5+7 = 12, 12 flagship panorama)
const BENTO_MOSAIC_SPANS = [
  { spanClass: "project-span-8", tiltMax: "7", tiltScale: "1.018" },
  { spanClass: "project-span-4", tiltMax: "8", tiltScale: "1.02" },
  { spanClass: "project-span-5", tiltMax: "8", tiltScale: "1.02" },
  { spanClass: "project-span-7", tiltMax: "7", tiltScale: "1.018" },
  { spanClass: "project-span-12", tiltMax: "5.5", tiltScale: "1.014" }
];

function loadProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid || typeof projectsData === "undefined" || !Array.isArray(projectsData)) {
    return;
  }

  projectsGrid.innerHTML = "";

  for (let i = 0; i < projectsData.length; i++) {
    const project = projectsData[i];
    const dims = THUMBNAIL_DIMENSIONS[project.id] || { width: 800, height: 450 };
    const mosaic = BENTO_MOSAIC_SPANS[i % BENTO_MOSAIC_SPANS.length];

    const item = document.createElement("article");
    item.className = `project-bento-item ${mosaic.spanClass} motion-init`;

    const link = document.createElement("a");
    link.href = `project-detail.html?id=${encodeURIComponent(project.id)}`;
    link.className = "bento-card bento-interactive project-bento-link";
    link.setAttribute("data-tilt-card", "");
    link.setAttribute("data-tilt-max", mosaic.tiltMax);
    link.setAttribute("data-tilt-scale", mosaic.tiltScale);

    const mediaWrap = document.createElement("div");
    mediaWrap.className = "project-media-wrap";

    const img = document.createElement("img");
    img.src = project.thumbnail;
    img.alt = project.title;
    img.width = dims.width;
    img.height = dims.height;
    img.loading = "lazy";
    img.decoding = "async";
    img.className = "project-media-img";
    img.setAttribute("data-parallax-img", "");
    mediaWrap.appendChild(img);

    const body = document.createElement("div");
    body.className = "project-card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = project.title;
    body.appendChild(title);

    if (project.shortDescription) {
      const desc = document.createElement("p");
      desc.className = "project-card-desc";
      desc.textContent = project.shortDescription;
      body.appendChild(desc);
    }

    const cta = document.createElement("div");
    cta.className = "project-card-cta";

    const ctaText = document.createElement("span");
    ctaText.textContent = "Learn more";

    const ctaIcon = document.createElement("i");
    ctaIcon.className = "bi bi-arrow-right";
    ctaIcon.setAttribute("aria-hidden", "true");

    cta.appendChild(ctaText);
    cta.appendChild(ctaIcon);
    body.appendChild(cta);

    link.appendChild(mediaWrap);
    link.appendChild(body);
    item.appendChild(link);
    projectsGrid.appendChild(item);
  }
}

function initHomepage() {
  markMotionReady();
  setupHeader();
  loadProjects();

  const heroItems = document.querySelectorAll("#hero-section .motion-init");
  animateEntranceGroup(heroItems);

  setupScrollReveals(document);
  attach3DTiltAndSpotlight(document);
  attachMagneticPull(document);
  setupParallax(document);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomepage);
} else {
  initHomepage();
}
