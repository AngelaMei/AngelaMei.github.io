// E3 — clock, scroll reveal, menu overlay, copy email, playground gate.
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

  // Reduced motion: no autoplaying video; hand over the controls instead.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.pause();
      v.controls = true;
    });
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
      if (!value) return;
      var mail = function () {
        window.location.href = "mailto:" + value;
      };
      if (!navigator.clipboard) return mail();
      navigator.clipboard.writeText(value).then(function () {
        status.textContent = "[ Contact ] — Copied";
        clearTimeout(timer);
        timer = setTimeout(function () {
          status.textContent = original;
        }, 2000);
      }, mail);
    });
  }

  // Playground gate: a two-choice "start screen" on the homepage.
  var gate = document.querySelector("[data-gate]");
  if (gate) {
    var yes = gate.querySelector("[data-gate-yes]");
    var no = gate.querySelector("[data-gate-no]");
    var gateStatus = gate.querySelector("[data-gate-status]");
    var choices = [yes, no];
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    var declined = 0;
    var hint = window.matchMedia("(hover: hover)").matches
      ? "← → to choose · Enter to start"
      : "Tap to choose";
    gateStatus.textContent = hint;

    var select = function (el) {
      choices.forEach(function (c) {
        c.classList.toggle("is-active", c === el);
      });
    };

    choices.forEach(function (c) {
      c.addEventListener("mouseenter", function () { select(c); });
      c.addEventListener("focus", function () { select(c); });
    });

    gate.addEventListener("keydown", function (e) {
      var key = e.key.toLowerCase();
      if (/^arrow(left|right|up|down)$/.test(key)) {
        e.preventDefault();
        (document.activeElement === yes ? no : yes).focus();
      } else if (key === "y") {
        yes.click();
      } else if (key === "n") {
        no.click();
      }
    });

    no.addEventListener("click", function () {
      declined += 1;
      gate.classList.remove("is-starting");
      gate.classList.add("is-resting");
      gateStatus.textContent = declined === 1
        ? "Okay — progress saved. It'll be here."
        : "Still here whenever you are.";
    });

    yes.addEventListener("click", function (e) {
      // New-tab clicks and reduced motion go straight through.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || reduce.matches) return;
      e.preventDefault();
      gate.classList.remove("is-resting");
      gate.classList.add("is-starting");
      var step = 0;
      var load = setInterval(function () {
        step += 1;
        gateStatus.textContent =
          "Loading " + "▮".repeat(step) + "▯".repeat(8 - step);
        if (step === 8) {
          clearInterval(load);
          window.location.href = yes.href;
        }
      }, 110);
    });

    // Coming back with the browser's back button: reset the start screen.
    window.addEventListener("pageshow", function () {
      gate.classList.remove("is-starting", "is-resting");
      gateStatus.textContent = hint;
      select(yes);
    });
  }

  // Hairline under the sticky header once the page has scrolled.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Scroll reveal (once). Reduced motion: CSS already shows the final state.
  var items = document.querySelectorAll(".reveal, .reveal-line, .sketch");
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
