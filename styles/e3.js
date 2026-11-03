// E3 — splash, clock, scroll reveal, menu overlay, copy email, playground game, live covers.
(function () {
  "use strict";

  // Splash: count to 100 (at least ~1.4s, or until the page has loaded), then lift.
  var splash = document.querySelector("[data-splash]");
  if (splash && document.documentElement.classList.contains("is-splash")) {
    try {
      sessionStorage.setItem("e3-splash", "1");
    } catch (e) {}
    var countEl = splash.querySelector("[data-splash-count]");
    var bar = splash.querySelector("[data-splash-bar]");
    var loaded = document.readyState === "complete";
    window.addEventListener("load", function () {
      loaded = true;
    });
    var start = performance.now();
    var shown = 0;
    var finish = function () {
      var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      splash.classList.add("is-done");
      document.documentElement.classList.remove("is-splash");
      if (still) return splash.remove();
      splash.addEventListener("transitionend", function () {
        splash.remove();
      });
    };
    var count = function (t) {
      var time = Math.min((t - start) / 1400, 1);
      // Hold at 90% until the page has loaded (or 4s have passed).
      var cap = loaded || t - start > 4000 ? 1 : 0.9;
      var p = Math.min(1 - Math.pow(1 - time, 3), cap);
      shown = Math.max(shown, p);
      countEl.textContent = Math.round(shown * 100);
      bar.style.transform = "scaleX(" + shown + ")";
      if (shown < 1) return requestAnimationFrame(count);
      setTimeout(finish, 250);
    };
    requestAnimationFrame(count);
  }

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

  // Playground game: walk the pixel character (← →) into the arcade.
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
    // Dance pose: same character, both arms up.
    var bodyUp = body.slice();
    bodyUp[2] = "s.aaaaaa.s";
    bodyUp[3] = "k.kkssss.k";
    bodyUp[4] = "k.ksssks.k";
    bodyUp[5] = ".kkssss.k.";
    bodyUp[6] = ".k.kkk..k.";
    bodyUp[7] = "..kkkkkk..";
    bodyUp[8] = "..kkkkkk..";
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

    var S, W, H, ground, arcX;
    var enterT = 0;
    var hero = { x: 0, dir: 1, frame: 0, dist: 0, alpha: 1, lift: 0, hop: 0, up: false, placed: false };
    var still = window.matchMedia("(prefers-reduced-motion: reduce)");
    var idleT = 1; // seconds since the last step; the dance starts at 1
    var danceT = 0;
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
      arcX = W - 22;
      stage.width = Math.round(rect.width * dpr);
      stage.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      // The character starts in the middle; the ball sits between it and the arcade.
      if (!hero.placed) {
        hero.x = Math.round(W / 2 - 5);
        hero.placed = true;
      }
      if (!ball.placed) {
        ball.x = Math.round((W / 2 + arcX) / 2);
        ball.y = ground - 6;
        ball.placed = true;
      }
      hero.x = Math.min(hero.x, arcX - 12);
      ball.x = Math.min(ball.x, arcX - 8);
      draw();
    };

    var px = function (x, y, w, h, c) {
      ctx.fillStyle = color[c];
      ctx.fillRect(x * S, y * S, w * S, h * S);
    };

    // Arcade cabinet, 20 x 32 art pixels; the control panel juts out 2 to the left.
    var invader = ["..w..w..", ".wwwwww.", "ww.ww.ww", "wwwwwwww", "w.w..w.w", ".w....w."];
    var drawArcade = function () {
      var x = arcX;
      var y = ground - 32;
      px(x, y, 20, 32, "k"); // cabinet
      px(x + 2, y + 2, 16, 3, "d"); // marquee
      for (var i = 0; i < 5; i++) px(x + 4 + i * 3, y + 3, 1, 1, "m"); // marquee lights
      px(x + 2, y + 6, 16, 10, "d"); // bezel
      var flash = state === "enter" && Math.floor(enterT * 10) % 2 === 0;
      px(x + 3, y + 7, 14, 8, flash ? "w" : "k"); // screen
      if (!flash) drawArt(invader, x + 6, y + 8);
      px(x + 3, y + 19, 1, 1, "m"); // joystick
      px(x + 2, y + 17, 3, 2, "a");
      px(x + 12, y + 18, 2, 2, "w"); // buttons
      px(x + 15, y + 18, 2, 2, "w");
      px(x - 2, y + 20, 24, 3, "k"); // control panel
      px(x - 1, y + 20, 22, 1, "d");
      px(x + 6, y + 25, 8, 5, "d"); // coin door
      px(x + 8, y + 26, 1, 2, "k");
      px(x + 11, y + 26, 1, 2, "k");
    };

    var draw = function () {
      ctx.clearRect(0, 0, W * S + S, H * S + S);
      drawArcade();
      var flip = hero.dir < 0;
      var y = ground - 14 - Math.round(hero.lift) - hero.hop;
      var hx = Math.round(hero.x);
      drawArt(hero.up ? bodyUp : body, hx, y, flip, hero.alpha);
      drawArt(legs[hero.frame], hx, y + 11, flip, hero.alpha);
      var spin = Math.floor(ball.x / 3) % 2 === 1;
      drawArt(ballArt, Math.round(ball.x), Math.round(ball.y), spin);
    };

    var enter = function () {
      state = "enter";
      enterT = 0;
      gameStatus.textContent = "Player 1 ready — entering Playground…";
      setTimeout(function () {
        window.location.href = target;
      }, 900);
    };

    var step = function (t) {
      var dt = Math.max(0, Math.min((t - last) / 1000, 0.05));
      last = t;
      var busy = false;

      if (state === "play" && input) {
        idleT = 0;
        danceT = 0;
        hero.up = false;
        hero.hop = 0;
        hero.dir = input;
        hero.x = Math.max(0, Math.min(hero.x + input * 70 * dt, arcX - 12));
        hero.dist += 70 * dt;
        hero.frame = Math.floor(hero.dist / 5) % 2;
        busy = true;
        if (!hinted) {
          hinted = true;
          gameStatus.textContent = "Keep going — the arcade is on the right.";
        }
        // Walking into the ball kicks it.
        if (Math.abs(hero.x + 5 - (ball.x + 3)) < 6 && ball.y >= ground - 7) {
          ball.vx = input * 130;
          ball.vy = -90;
        }
        if (hero.x >= arcX - 12) enter();
      } else if (state === "enter") {
        // Pulled up into the screen while it flashes.
        enterT += dt;
        hero.x += 30 * dt;
        hero.lift += 24 * dt;
        hero.alpha = Math.max(0, hero.alpha - dt * 1.6);
        busy = true;
      } else if (state === "play" && onScreen && !still.matches && (idleT += dt) >= 1) {
        // Waiting for the player: a four-beat dance (arms up, hop, turn).
        danceT += dt;
        var beat = Math.floor(danceT / 0.4) % 4;
        hero.up = beat % 2 === 1;
        hero.hop = hero.up ? 1 : 0;
        hero.frame = beat % 2;
        hero.dir = beat < 2 ? 1 : -1;
        busy = true;
      } else {
        hero.frame = 0;
        hero.up = false;
        hero.hop = 0;
        busy = state === "play" && onScreen && !still.matches; // keep counting idle time
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
        if (ball.x < 0 || ball.x > arcX - 8) {
          ball.x = Math.max(0, Math.min(ball.x, arcX - 8));
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
        if (onScreen) wake();
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

    // Back button from /playground: start over in the middle.
    window.addEventListener("pageshow", function (e) {
      if (!e.persisted) return;
      state = "play";
      hero.x = Math.round(W / 2 - 5);
      idleT = 1;
      hero.alpha = 1;
      hero.lift = 0;
      hero.dir = 1;
      held = {};
      input = 0;
      draw();
    });

    window.addEventListener("resize", resize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    resize();
  }

  // Live hero covers: play the walkthrough / cross-fade screens while on screen; [ Pause ] stops it.
  document.querySelectorAll("[data-live]").forEach(function (live) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var shots = live.querySelectorAll("[data-cycle] img");
    var video = live.querySelector("video");
    var toggle = live.querySelector("[data-live-toggle]");
    var at = 0;
    var paused = false;
    var seen = true;
    var sync = function () {
      if (!video) return;
      if (paused || !seen) video.pause();
      else video.play().catch(function () {});
    };
    setInterval(function () {
      if (paused || !seen || document.hidden || shots.length < 2) return;
      shots[at].classList.remove("is-on");
      at = (at + 1) % shots.length;
      shots[at].classList.add("is-on");
    }, 3200);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        seen = entries[0].isIntersecting;
        sync();
      }).observe(live);
    }
    if (toggle) {
      toggle.addEventListener("click", function () {
        paused = !paused;
        live.classList.toggle("is-paused", paused);
        toggle.setAttribute("aria-pressed", String(paused));
        toggle.textContent = paused ? "[ Play ]" : "[ Pause ]";
        sync();
      });
    }
  });

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
