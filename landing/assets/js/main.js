document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var collapseEl = document.getElementById("navbarContent");
  if (collapseEl) {
    collapseEl.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (collapseEl.classList.contains("show")) {
          var collapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
          collapse.hide();
        }
      });
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }
});