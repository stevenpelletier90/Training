document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector(".main-content");

  // Initialize ScrollSpy
  const scrollSpy = new bootstrap.ScrollSpy(mainContent, {
    target: ".nav-wrapper",
    offset: 20,
    method: "position",
  });

  // Handle navigation clicks
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Handle mobile menu
        const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector("#sidebar"));
        if (offcanvas) {
          offcanvas.hide();
        }

        // Calculate scroll position
        const offset = 20;
        const targetPosition = targetSection.offsetTop - offset;

        // Smooth scroll to target
        mainContent.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Add copy buttons to code blocks
  document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
    // Create wrapper div
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";

    // Insert wrapper before pre
    pre.parentNode.insertBefore(wrapper, pre);

    // Move pre into wrapper
    wrapper.appendChild(pre);

    // Create and add button before pre
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
