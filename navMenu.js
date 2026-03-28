const setupNavMenu = (nav) => {
  if (nav.dataset.menuBound === "true") return;

  const toggleButton = nav.querySelector(".site-nav__toggle");
  const navLinks = nav.querySelector(".site-nav__links");

  if (!toggleButton || !navLinks) return;
  nav.dataset.menuBound = "true";

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggleButton.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    toggleButton.setAttribute("aria-expanded", "true");
  };

  toggleButton.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    const toggleHidden = window.getComputedStyle(toggleButton).display === "none";
    if (toggleHidden) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
};

const initializeNavMenus = (root = document) => {
  if (!root) return;

  if (root.classList && root.classList.contains("site-nav")) {
    setupNavMenu(root);
    return;
  }

  root.querySelectorAll(".site-nav").forEach(setupNavMenu);
};

window.initializeNavMenus = initializeNavMenus;

document.addEventListener("DOMContentLoaded", () => {
  initializeNavMenus();
});
