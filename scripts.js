// Initialize Prism.js
// Initialize Bootstrap scrollspy
document.addEventListener("DOMContentLoaded", function () {
  // Get all links in the offcanvas menu
  const offcanvasLinks = document.querySelectorAll(".offcanvas .nav-link");

  // Add click handler to each link
  offcanvasLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Get the target section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        e.preventDefault();

        // Close the offcanvas menu
        const offcanvasElement = document.querySelector("#sidebar");
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
          offcanvas.hide();
        }

        // Scroll to the section after a brief delay to allow the menu to close
        setTimeout(() => {
          targetSection.scrollIntoView();
        }, 350);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // If any code was added dynamically, we need to call Prism.highlightAll()
  Prism.highlightAll();
});
