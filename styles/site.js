// Subtle, tasteful interactions: scroll reveal + sticky header state.
(function () {
  "use strict";

  // Sticky topbar border on scroll
  var topbar = document.querySelector(".topbar");
  if (topbar) {
    var onScroll = function () {
      if (window.scrollY > 8) topbar.classList.add("scrolled");
      else topbar.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Live local time (College Park, MD — US Eastern)
  var clock = document.querySelector("[data-clock]");
  if (clock) {
    var tick = function () {
      try {
        clock.textContent = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()) + " ET";
      } catch (e) {
        // Older browsers: leave the static fallback in place.
      }
    };
    tick();
    setInterval(tick, 30000);
  }

  // Scroll reveal
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("in");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute("data-delay");
          if (delay) el.style.transitionDelay = delay + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach(function (el) {
    io.observe(el);
  });
})();
