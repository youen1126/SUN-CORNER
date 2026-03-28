const loadNavbar = async () => {
  const mountPoints = document.querySelectorAll("[data-navbar-root]");
  if (mountPoints.length === 0) return;

  try {
    const response = await fetch("navbar.html", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load navbar: ${response.status}`);
    }

    const navbarMarkup = await response.text();
    const currentPage = document.body.dataset.page || "";

    mountPoints.forEach((mountPoint) => {
      mountPoint.innerHTML = navbarMarkup;
      const nav = mountPoint.querySelector(".site-nav");
      if (!nav) return;

      const hotspotLink = nav.querySelector('[data-nav-link="hotspot"]');
      const inspirationLink = nav.querySelector('[data-nav-link="inspiration"]');
      const aboutLink = nav.querySelector('[data-nav-link="about"]');

      if (currentPage === "home") {
        if (hotspotLink) hotspotLink.setAttribute("href", "#hotspot");
        if (inspirationLink) inspirationLink.setAttribute("href", "#inspiration");
      }

      if (aboutLink) {
        if (currentPage === "about") {
          aboutLink.setAttribute("aria-current", "page");
        } else {
          aboutLink.removeAttribute("aria-current");
        }
      }

      if (typeof window.initializeNavMenus === "function") {
        window.initializeNavMenus(nav);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", loadNavbar);
