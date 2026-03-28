const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  const toggleBackToTop = () => {
    const shouldShow = window.scrollY > 360;
    backToTopButton.classList.toggle("is-visible", shouldShow);
  };

  toggleBackToTop();
  window.addEventListener("scroll", toggleBackToTop, { passive: true });
}
