document.addEventListener("DOMContentLoaded", function () {
  // Handle mobile menu close and smooth scroll
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only handle this for mobile view
      if (window.innerWidth < 992) {
        // Bootstrap's lg breakpoint
        e.preventDefault(); // Prevent default action

        // Get the target section id from href
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Update URL with hash
          history.pushState(null, null, targetId);

          // Scroll to target
          targetElement.scrollIntoView({ behavior: "smooth" });

          // Close menu after a short delay to allow scroll to start
          setTimeout(() => {
            const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector("#sidebar"));
            if (offcanvas) {
              offcanvas.hide();
            }
          }, 150);
        }
      } else {
        // For desktop, just update the URL
        const targetId = this.getAttribute("href");
        if (document.querySelector(targetId)) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // Handle initial load with hash in URL
  if (window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  // Add copy buttons to code blocks
  document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.className = "copy-button";
    button.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
    wrapper.insertBefore(button, pre);

    button.addEventListener("click", async () => {
      const code = pre.querySelector("code").innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add("copied");
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
          button.classList.remove("copied");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
        button.innerHTML = '<i class="fas fa-times"></i> Error';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
        }, 2000);
      }
    });
  });

  // Initialize Prism.js
  Prism.highlightAll();
});
