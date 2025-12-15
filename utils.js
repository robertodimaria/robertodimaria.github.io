// Shared utility functions for theme and navigation

const RESPONSIVE_WIDTH = 1024;

// Theme Management
function initTheme() {
    if (localStorage.getItem('color-mode') === 'dark' || 
        (!('color-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('tw-dark');
    } else {
        document.documentElement.classList.remove('tw-dark');
    }
    updateToggleModeBtn();
}

function toggleMode() {
    document.documentElement.classList.toggle("tw-dark");
    updateToggleModeBtn();
}

function updateToggleModeBtn() {
    const toggleIcon = document.querySelector("#toggle-mode-icon");
    if (!toggleIcon) return;
    
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

// Header Navigation
function setupHeader() {
    let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;
    const collapseBtn = document.getElementById("collapse-btn");
    const collapseHeaderItems = document.getElementById("collapsed-header-items");
    
    if (!collapseBtn || !collapseHeaderItems) return;
    
    function onHeaderClickOutside(e) {
        if (!collapseHeaderItems.contains(e.target)) {
            toggleHeader();
        }
    }
    
    window.toggleHeader = function() {
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
    };
    
    function responsive() {
        if (!isHeaderCollapsed && window.innerWidth < RESPONSIVE_WIDTH) {
            window.toggleHeader();
        }
        if (window.innerWidth > RESPONSIVE_WIDTH) {
            collapseHeaderItems.style.height = "";
        } else {
            isHeaderCollapsed = true;
        }
    }
    
    responsive();
    window.addEventListener("resize", responsive);
}

// Initialize theme and header on page load
initTheme();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHeader);
} else {
    setupHeader();
}
