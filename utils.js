import { animate, inView, press, scroll, stagger } from "motion";

export const SPRING_REVEAL_3D = {
  type: "spring",
  stiffness: 190,
  damping: 23
};

export const SPRING_TILT = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.6
};

export const SPRING_TILT_RETURN = {
  type: "spring",
  stiffness: 200,
  damping: 20
};

export const SPRING_MAGNETIC = {
  type: "spring",
  stiffness: 280,
  damping: 19,
  mass: 0.5
};

export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 400,
  damping: 26
};

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(pointer: fine)");

export function prefersReducedMotion() {
  return reducedMotionQuery.matches;
}

export function markMotionReady() {
  if (!prefersReducedMotion()) {
    document.documentElement.classList.add("motion-ready");
  } else {
    document.documentElement.classList.remove("motion-ready");
  }
}

reducedMotionQuery.addEventListener("change", () => {
  if (prefersReducedMotion()) {
    document.documentElement.classList.remove("motion-ready");
    document.querySelectorAll(".motion-init").forEach((el) => {
      el.classList.remove("motion-init");
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.willChange = "auto";
    });
  }
});

function finalizeRevealedElements(elements) {
  elements.forEach((el) => {
    el.classList.remove("motion-init");
    el.style.opacity = "1";
    if (el.dataset.tiltActive !== "true") {
      el.style.transform = "none";
    }
    el.style.willChange = "auto";
  });
}

/**
 * 3D Spring Entrance Reveal for above-the-fold elements.
 * Settles completely flat and undistorted (transform: none) once completed.
 */
export function animateEntranceGroup(elements) {
  const list = Array.from(elements).filter(Boolean);
  if (!list.length) return;

  if (prefersReducedMotion()) {
    finalizeRevealedElements(list);
    return;
  }

  list.forEach((el) => {
    el.dataset.revealed = "true";
  });

  const controls = animate(
    list,
    {
      opacity: [0, 1],
      transformPerspective: [1500, 1500],
      y: [44, 0],
      z: [-36, 0],
      scale: [0.95, 1],
      rotateX: [6, 0]
    },
    {
      ...SPRING_REVEAL_3D,
      delay: stagger(0.1)
    }
  );

  Promise.resolve(controls.finished || controls).then(() => {
    finalizeRevealedElements(list);
  });
}

/**
 * 3D Spring Scroll Reveal (inView) with frame-batched stagger(0.1).
 * Animates elements in 3D space as they enter the viewport and lands 100% straight.
 */
export function setupScrollReveals(root = document) {
  const candidates = Array.from(root.querySelectorAll(".motion-init")).filter(
    (el) => el.dataset.revealed !== "true" && el.dataset.revealObserved !== "true"
  );

  if (!candidates.length) return;

  if (prefersReducedMotion()) {
    candidates.forEach((el) => {
      el.dataset.revealed = "true";
    });
    finalizeRevealedElements(candidates);
    return;
  }

  let pendingBatch = [];
  let flushScheduled = false;

  function flushBatch() {
    flushScheduled = false;
    if (!pendingBatch.length) return;

    const batch = pendingBatch;
    pendingBatch = [];

    const controls = animate(
      batch,
      {
        opacity: [0, 1],
        transformPerspective: [1500, 1500],
        y: [44, 0],
        z: [-36, 0],
        scale: [0.95, 1],
        rotateX: [6, 0]
      },
      {
        ...SPRING_REVEAL_3D,
        delay: stagger(0.1)
      }
    );

    Promise.resolve(controls.finished || controls).then(() => {
      finalizeRevealedElements(batch);
    });
  }

  candidates.forEach((el) => {
    el.dataset.revealObserved = "true";

    inView(
      el,
      () => {
        if (el.dataset.revealed === "true") return;
        el.dataset.revealed = "true";
        pendingBatch.push(el);

        if (!flushScheduled) {
          flushScheduled = true;
          queueMicrotask(flushBatch);
        }
      },
      { margin: "0px 0px -24px 0px" }
    );
  });
}

/**
 * Interactive 3D Perspective Tilt + Dynamic Cursor Spotlight (--mouse-x, --mouse-y).
 * Cards remain 100% straight and flat at rest, tilting smoothly in 3D on pointer tracking
 * and springing back cleanly to flat (0deg) on pointer leave.
 */
export function attach3DTiltAndSpotlight(root = document) {
  const cards = root.querySelectorAll("[data-tilt-card]");

  cards.forEach((card) => {
    if (card.dataset.tiltBound === "true") return;
    card.dataset.tiltBound = "true";

    const maxTilt = parseFloat(card.dataset.tiltMax || "6");
    const hoverScale = parseFloat(card.dataset.tiltScale || "1.018");
    let cachedRect = null;

    const refreshRect = () => {
      cachedRect = card.getBoundingClientRect();
    };

    card.addEventListener("pointerenter", (e) => {
      if (!finePointerQuery.matches) return;
      card.dataset.tiltActive = "true";
      refreshRect();
      card.style.setProperty("--spotlight-opacity", "1");

      if (cachedRect) {
        card.style.setProperty("--mouse-x", `${e.clientX - cachedRect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - cachedRect.top}px`);
      }
    });

    card.addEventListener("pointermove", (e) => {
      if (!finePointerQuery.matches) return;
      if (!cachedRect) refreshRect();
      if (!cachedRect || cachedRect.width === 0 || cachedRect.height === 0) return;

      const px = e.clientX - cachedRect.left;
      const py = e.clientY - cachedRect.top;

      card.style.setProperty("--mouse-x", `${px}px`);
      card.style.setProperty("--mouse-y", `${py}px`);
      card.style.setProperty("--spotlight-opacity", "1");

      if (prefersReducedMotion()) return;

      const nx = Math.max(-0.5, Math.min(0.5, px / cachedRect.width - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, py / cachedRect.height - 0.5));

      const rotateX = -ny * (maxTilt * 2);
      const rotateY = nx * (maxTilt * 2);

      animate(
        card,
        {
          transformPerspective: 1200,
          rotateX,
          rotateY,
          y: -4,
          scale: hoverScale
        },
        SPRING_TILT
      );
    });

    card.addEventListener("pointerleave", () => {
      card.dataset.tiltActive = "false";
      cachedRect = null;
      card.style.setProperty("--spotlight-opacity", "0");

      if (prefersReducedMotion()) return;

      const returnControls = animate(
        card,
        {
          transformPerspective: 1200,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          scale: 1
        },
        SPRING_TILT_RETURN
      );

      Promise.resolve(returnControls.finished || returnControls).then(() => {
        if (card.dataset.tiltActive !== "true") {
          card.style.transform = "none";
        }
      });
    });

    window.addEventListener(
      "scroll",
      () => {
        cachedRect = null;
      },
      { passive: true }
    );
  });
}

/**
 * Magnetic Pull on CTA buttons and Navbar links (±6px cursor tracking + spring snapback)
 */
export function attachMagneticPull(root = document) {
  const targets = root.querySelectorAll(
    "[data-magnetic], .header-links, .brand-link, .footer-social-link"
  );

  targets.forEach((el) => {
    if (el.dataset.magneticBound === "true") return;
    el.dataset.magneticBound = "true";

    const maxPull = parseFloat(el.dataset.magneticStrength || "6");
    const isPrimaryCta = el.classList.contains("apple-btn");
    let rect = null;

    el.addEventListener("pointerenter", () => {
      if (!finePointerQuery.matches || prefersReducedMotion()) return;
      rect = el.getBoundingClientRect();
    });

    el.addEventListener("pointermove", (e) => {
      if (!finePointerQuery.matches || prefersReducedMotion()) return;
      if (!rect) rect = el.getBoundingClientRect();
      if (!rect || rect.width === 0 || rect.height === 0) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      animate(
        el,
        {
          x: normX * maxPull,
          y: normY * maxPull,
          scale: isPrimaryCta ? 1.03 : 1.015
        },
        SPRING_MAGNETIC
      );
    });

    el.addEventListener("pointerleave", () => {
      rect = null;
      if (prefersReducedMotion()) return;
      animate(el, { x: 0, y: 0, scale: 1 }, SPRING_TILT_RETURN);
    });

    press(el, () => {
      if (prefersReducedMotion()) return;
      animate(el, { scale: 0.96 }, SPRING_SNAPPY);
      return () => {
        animate(el, { scale: 1 }, SPRING_MAGNETIC);
      };
    });
  });
}

/**
 * Smooth Scroll Parallax for Hero Section and Project Card Thumbnails
 * Uses motion's scroll((progress) => ...) callback API to avoid ScrollTimeline shorthand crashes.
 */
export function setupParallax(root = document) {
  if (prefersReducedMotion()) return;

  const heroSection = document.getElementById("hero-section");
  if (heroSection) {
    const heroCopy = document.getElementById("hero-copy-parallax");
    const heroVisual = document.getElementById("hero-visual-parallax");
    const orbPrimary = document.getElementById("hero-orb-1");
    const orbSecondary = document.getElementById("hero-orb-2");

    scroll(
      (progress) => {
        if (heroCopy) {
          const y = -56 * progress;
          const opacity = Math.max(0.25, 1 - progress * 0.72);
          heroCopy.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
          heroCopy.style.opacity = opacity.toFixed(3);
        }
        if (heroVisual) {
          const y = 72 * progress;
          const scale = 1 - progress * 0.05;
          heroVisual.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        }
        if (orbPrimary) {
          orbPrimary.style.transform = `translate3d(${(-36 * progress).toFixed(1)}px, ${(130 * progress).toFixed(1)}px, 0)`;
        }
        if (orbSecondary) {
          orbSecondary.style.transform = `translate3d(${(42 * progress).toFixed(1)}px, ${(-105 * progress).toFixed(1)}px, 0)`;
        }
      },
      { target: heroSection, offset: ["start start", "end start"] }
    );
  }

  const parallaxImages = root.querySelectorAll("[data-parallax-img]");
  parallaxImages.forEach((img) => {
    if (img.dataset.parallaxBound === "true") return;
    img.dataset.parallaxBound = "true";

    const container = img.closest(".project-media-wrap") || img.parentElement;
    if (!container) return;

    const cardLink = img.closest(".project-bento-link");
    let currentProgress = 0.5;
    let isCardHovered = false;

    const applyImageTransform = () => {
      const y = (currentProgress - 0.5) * 44;
      const scale = isCardHovered ? 1.14 : 1.09;
      img.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale})`;
    };

    if (cardLink) {
      cardLink.addEventListener("pointerenter", () => {
        if (!finePointerQuery.matches || prefersReducedMotion()) return;
        isCardHovered = true;
        applyImageTransform();
      });
      cardLink.addEventListener("pointerleave", () => {
        isCardHovered = false;
        applyImageTransform();
      });
    }

    scroll(
      (progress) => {
        currentProgress = progress;
        applyImageTransform();
      },
      { target: container, offset: ["start end", "end start"] }
    );
  });
}

/**
 * Accessible Responsive Glassmorphic Header
 */
export function setupHeader() {
  const RESPONSIVE_WIDTH = 1024;
  const collapseBtn = document.getElementById("collapse-btn");
  const menuWrapper = document.getElementById("collapsed-header-items");

  if (!collapseBtn || !menuWrapper) return;

  let isOpen = false;

  function setMenuState(nextOpen) {
    isOpen = nextOpen;
    collapseBtn.setAttribute("aria-expanded", String(isOpen));
    const icon = collapseBtn.querySelector("i") || collapseBtn;

    if (isOpen) {
      menuWrapper.classList.add("is-open");
      icon.classList.remove("bi-list");
      icon.classList.add("bi-x-lg");
      document.body.classList.add("modal-open");

      if (!prefersReducedMotion()) {
        animate(menuWrapper, { opacity: [0, 1], y: [-12, 0] }, SPRING_REVEAL_3D);
      } else {
        menuWrapper.style.opacity = "1";
        menuWrapper.style.transform = "none";
      }
    } else {
      icon.classList.remove("bi-x-lg");
      icon.classList.add("bi-list");
      document.body.classList.remove("modal-open");

      if (window.innerWidth < RESPONSIVE_WIDTH && !prefersReducedMotion()) {
        animate(menuWrapper, { opacity: 0, y: -8 }, { duration: 0.16, ease: "easeOut" }).then(() => {
          if (!isOpen) {
            menuWrapper.classList.remove("is-open");
          }
        });
      } else {
        menuWrapper.classList.remove("is-open");
        menuWrapper.style.opacity = "";
        menuWrapper.style.transform = "";
      }
    }
  }

  collapseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setMenuState(!isOpen);
  });

  menuWrapper.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen && window.innerWidth < RESPONSIVE_WIDTH) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (isOpen && !menuWrapper.contains(e.target) && !collapseBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      setMenuState(false);
      collapseBtn.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= RESPONSIVE_WIDTH) {
      if (isOpen) setMenuState(false);
      menuWrapper.style.opacity = "";
      menuWrapper.style.transform = "";
    }
  });
}

/**
 * Performant Table of Contents Scroll Spy using IntersectionObserver
 */
export function setupTocScrollSpy(sectionsNodeList, tocLinksNodeList) {
  const sections = Array.from(sectionsNodeList);
  const tocLinks = Array.from(tocLinksNodeList);
  if (!sections.length || !tocLinks.length) return;

  function setActive(id) {
    tocLinks.forEach((link) => {
      const isMatch = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  setActive(sections[0].id);

  const visibleIds = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          visibleIds.add(entry.target.id);
        } else {
          visibleIds.delete(entry.target.id);
        }
      }

      for (let i = 0; i < sections.length; i++) {
        if (visibleIds.has(sections[i].id)) {
          setActive(sections[i].id);
          break;
        }
      }
    },
    {
      rootMargin: "-104px 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach((sec) => observer.observe(sec));

  tocLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;
      const target = document.getElementById(targetId.slice(1));
      if (!target) return;
      e.preventDefault();
      setActive(target.id);
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start"
      });
      history.replaceState(null, "", targetId);
    });
  });
}
