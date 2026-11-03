// E3 — clock, scroll reveal, menu overlay, copy email, playground game.
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

  // Playground game: walk the pixel character (← →) through the gate.
  var game = document.querySelector("[data-game]");
  var stage = game && game.querySelector("[data-game-stage]");
  if (stage && stage.getContext) {
    var ctx = stage.getContext("2d");
    var gameStatus = game.querySelector("[data-game-status]");
    var target = game.querySelector(".game-skip").href;
    var css = getComputedStyle(document.documentElement);
    var color = {
      k: css.getPropertyValue("--ink").trim() || "#0A0A0A",
      a: css.getPropertyValue("--accent").trim() || "#C4553D",
      m: css.getPropertyValue("--muted").trim() || "#6B6B66",
      d: css.getPropertyValue("--row-hl").trim() || "#F4F3F0",
      w: "#FFFFFF",
      s: "#E9C9A8",
    };

    // Sprites, facing right. One character = one art pixel.
    var body = [
      "....a.....",
      "...aaaa...",
      "..aaaaaa..",
      "..kkssss..",
      "..ksssks..",
      "..kssss...",
      "...kkk....",
      "..kkkkkk..",
      ".skkkkkks.",
      "..kkkkkk..",
      "..kkkkkk..",
    ];
    var legs = [
      ["..kk..kk..", "..kk..kk..", "..kkk.kkk."],
      ["...kkkk...", "...kkkk...", "...kkkkk.."],
    ];
    var ballArt = [
      ".aaaa.",
      "aawwaa",
      "awaaaa",
      "aaaawa",
      "aawwaa",
      ".aaaa.",
    ];

    var S, W, H, ground, gateX;
    var hero = { x: 6, dir: 1, frame: 0, dist: 0, alpha: 1 };
    var ball = { x: 0, y: 0, vx: 0, vy: 0, placed: false };
    var input = 0;
    var held = {};
    var state = "play";
    var last = 0;
    var raf = 0;
    var hinted = false;

    var drawArt = function (art, x, y, flip, alpha) {
      ctx.globalAlpha = alpha == null ? 1 : alpha;
      for (var r = 0; r < art.length; r++) {
        for (var c = 0; c < art[r].length; c++) {
          var ch = art[r][flip ? art[r].length - 1 - c : c];
          if (ch === ".") continue;
          ctx.fillStyle = color[ch];
          ctx.fillRect((x + c) * S, (y + r) * S, S, S);
        }
      }
      ctx.globalAlpha = 1;
    };

    var resize = function () {
      var dpr = window.devicePixelRatio || 1;
      var rect = stage.getBoundingClientRect();
      S = rect.width < 600 ? 3 : 5;
      W = Math.floor(rect.width / S);
      H = Math.floor(rect.height / S);
      ground = H - 2;
      gateX = W - 30;
      stage.width = Math.round(rect.width * dpr);
      stage.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      if (!ball.placed) {
        ball.x = Math.round(W * 0.42);
        ball.y = ground - 6;
        ball.placed = true;
      }
      hero.x = Math.min(hero.x, gateX + 6);
      ball.x = Math.min(ball.x, gateX - 7);
      draw();
    };

    var drawGate = function () {
      var top = ground - 30;
      ctx.fillStyle = color.d;
      ctx.fillRect((gateX + 3) * S, (top + 3) * S, 18 * S, 27 * S);
      // A slide inside the gate, so it reads as a playground.
      ctx.fillStyle = color.m;
      for (var r = top + 12; r < ground; r++) {
        ctx.fillRect((gateX + 6) * S, r * S, S, S); // ladder rails
        ctx.fillRect((gateX + 9) * S, r * S, S, S);
        if ((r - top) % 3 === 0) ctx.fillRect((gateX + 7) * S, r * S, 2 * S, S);
      }
      ctx.fillRect((gateX + 6) * S, (top + 11) * S, 6 * S, S); // platform
      for (var i = 0; i < 9; i++) {
        ctx.fillRect((gateX + 11 + i) * S, (top + 12 + i * 2) * S, 2 * S, 2 * S); // chute
      }
      ctx.fillStyle = color.k;
      ctx.fillRect(gateX * S, top * S, 24 * S, 3 * S); // beam
      ctx.fillRect(gateX * S, top * S, 3 * S, 30 * S); // posts
      ctx.fillRect((gateX + 21) * S, top * S, 3 * S, 30 * S);
      ctx.fillStyle = color.a;
      ctx.fillRect((gateX + 11) * S, (top - 4) * S, 2 * S, 4 * S); // flag pole tip
      ctx.font = "12px 'IBM Plex Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillStyle = color.k;
      ctx.fillText("PLAYGROUND", (gateX + 12) * S, (top - 7) * S);
    };

    var draw = function () {
      ctx.clearRect(0, 0, W * S + S, H * S + S);
      drawGate();
      var flip = hero.dir < 0;
      var y = ground - 14;
      var hx = Math.round(hero.x);
      drawArt(body, hx, y, flip, hero.alpha);
      drawArt(legs[hero.frame], hx, y + 11, flip, hero.alpha);
      var spin = Math.floor(ball.x / 3) % 2 === 1;
      drawArt(ballArt, Math.round(ball.x), Math.round(ball.y), spin);
      // The far post is drawn again so the character walks "through" the gate.
      if (hero.x > gateX + 14) {
        ctx.fillStyle = color.k;
        ctx.fillRect((gateX + 21) * S, (ground - 30) * S, 3 * S, 30 * S);
      }
    };

    var enter = function () {
      state = "enter";
      gameStatus.textContent = "You made it — entering Playground…";
      setTimeout(function () {
        window.location.href = target;
      }, 700);
    };

    var step = function (t) {
      var dt = Math.max(0, Math.min((t - last) / 1000, 0.05));
      last = t;
      var busy = false;

      if (state === "play" && input) {
        hero.dir = input;
        hero.x = Math.max(0, Math.min(hero.x + input * 70 * dt, gateX + 16));
        hero.dist += 70 * dt;
        hero.frame = Math.floor(hero.dist / 5) % 2;
        busy = true;
        if (!hinted) {
          hinted = true;
          gameStatus.textContent = "Keep going — the gate is on the right.";
        }
        // Walking into the ball kicks it.
        if (Math.abs(hero.x + 5 - (ball.x + 3)) < 6 && ball.y >= ground - 7) {
          ball.vx = input * 130;
          ball.vy = -90;
        }
        if (hero.x >= gateX + 16) enter();
      } else if (state === "enter") {
        hero.x += 40 * dt;
        hero.dist += 40 * dt;
        hero.frame = Math.floor(hero.dist / 5) % 2;
        hero.alpha = Math.max(0, hero.alpha - dt * 2);
        busy = true;
      } else {
        hero.frame = 0;
      }

      if (ball.vx || ball.vy || ball.y < ground - 6) {
        ball.vy += 320 * dt;
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;
        if (ball.y >= ground - 6) {
          ball.y = ground - 6;
          ball.vy = Math.abs(ball.vy) > 30 ? -ball.vy * 0.45 : 0;
          ball.vx *= 0.9;
          if (Math.abs(ball.vx) < 4) ball.vx = 0;
        }
        if (ball.x < 0 || ball.x > gateX - 6) {
          ball.x = Math.max(0, Math.min(ball.x, gateX - 6));
          ball.vx = -ball.vx * 0.5;
        }
        busy = true;
      }

      draw();
      raf = busy ? requestAnimationFrame(step) : 0;
    };

    var wake = function () {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(step);
    };

    var setInput = function () {
      input = (held.right ? 1 : 0) - (held.left ? 1 : 0);
      if (input) wake();
    };

    // ← → (and A / D) steer while the game is on screen; the page has no
    // horizontal scroll, so nothing else is listening for these keys.
    var onScreen = false;
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
      }, { threshold: 0.5 }).observe(stage);
    } else {
      onScreen = true;
    }

    var keyDir = function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return null;
      if (/^(input|textarea|select)$/i.test(e.target.tagName)) return null;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") return "left";
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") return "right";
      return null;
    };

    document.addEventListener("keydown", function (e) {
      var k = keyDir(e);
      if (!k || !onScreen || state !== "play") return;
      e.preventDefault();
      held[k] = true;
      setInput();
    });
    document.addEventListener("keyup", function (e) {
      var k = keyDir(e);
      if (!k) return;
      held[k] = false;
      setInput();
    });
    window.addEventListener("blur", function () {
      held = {};
      setInput();
    });

    // Touch and mouse: hold ◀ / ▶.
    game.querySelectorAll("[data-walk]").forEach(function (btn) {
      var k = btn.getAttribute("data-walk") === "1" ? "right" : "left";
      var release = function () {
        held[k] = false;
        btn.classList.remove("is-held");
        setInput();
      };
      btn.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        if (state !== "play") return;
        held[k] = true;
        btn.classList.add("is-held");
        setInput();
      });
      btn.addEventListener("pointerup", release);
      btn.addEventListener("pointerleave", release);
      btn.addEventListener("pointercancel", release);
      btn.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
    });

    if (!window.matchMedia("(hover: hover)").matches) {
      gameStatus.textContent = "Hold ◀ ▶ to walk";
    }

    // Back button from /playground: start over at the left.
    window.addEventListener("pageshow", function (e) {
      if (!e.persisted) return;
      state = "play";
      hero.x = 6;
      hero.alpha = 1;
      hero.dir = 1;
      held = {};
      input = 0;
      draw();
    });

    window.addEventListener("resize", resize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    resize();
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
