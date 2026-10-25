// E3 — clock, scroll reveal, menu overlay, copy email.
(function () {
  "use strict";

  // Live Zürich time, refreshed on each minute boundary.
  var clocks = document.querySelectorAll("[data-clock]");
  if (clocks.length) {
    var fmt, zoneFmt;
    try {
      fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Zurich",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      });
      zoneFmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Zurich",
        timeZoneName: "shortOffset",
      });
    } catch (e) {
      fmt = null; // Older browsers keep the static fallback.
    }

    var zone = function (date) {
      // "GMT+1" → CET, "GMT+2" → CEST
      try {
        var part = zoneFmt.formatToParts(date).find(function (p) {
          return p.type === "timeZoneName";
        });
        return part && /\+2/.test(part.value) ? "CEST" : "CET";
      } catch (e) {
        return "CET";
      }
    };

    var tick = function () {
      if (!fmt) return;
      var now = new Date();
      var text = fmt.format(now) + " " + zone(now);
      clocks.forEach(function (el) {
        el.textContent = text;
      });
    };

    tick();
    setTimeout(function () {
      tick();
      setInterval(tick, 60000);
    }, 60000 - (Date.now() % 60000));
  }

  // Menu overlay
  var menu = document.getElementById("menu");
  var toggle = document.querySelector("[data-menu-open]");
  if (menu && toggle && typeof menu.showModal === "function") {
    toggle.addEventListener("click", function () {
      menu.showModal();
      toggle.setAttribute("aria-expanded", "true");
    });
    menu.addEventListener("close", function () {
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    });
    menu.querySelectorAll("[data-menu-close], a").forEach(function (el) {
      el.addEventListener("click", function () {
        menu.close();
      });
    });
  } else if (toggle) {
    toggle.hidden = true; // No <dialog> support: the nav links are still there.
  }

  // Copy email
  var copy = document.querySelector("[data-copy]");
  var status = document.querySelector("[data-copy-status]");
  if (copy && status) {
    var original = status.textContent;
    var timer;
    copy.addEventListener("click", function () {
      var value = copy.getAttribute("data-copy");
      if (!value || !navigator.clipboard) return;
      navigator.clipboard.writeText(value).then(function () {
        status.textContent = "[ Contact ] — Copied";
        clearTimeout(timer);
        timer = setTimeout(function () {
          status.textContent = original;
        }, 2000);
      });
    });
  }

  // Scroll reveal (once). Reduced motion: CSS already shows the final state.
  var items = document.querySelectorAll(".reveal, .reveal-line, .paddle");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  items.forEach(function (el) {
    io.observe(el);
  });
})();
