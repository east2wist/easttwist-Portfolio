document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const revealElements = document.querySelectorAll(".reveal");
  const counterElements = document.querySelectorAll("[data-counter]");

  /* =========================
     MOBILE MENU
  ========================= */
  const closeMenu = () => {
    if (!nav || !menuToggle) return;
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!nav || !menuToggle) return;
    nav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    body.classList.add("menu-open");
  };

  if (menuToggle && nav) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideNav = nav.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideNav && !clickedToggle) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        closeMenu();
      }
    });
  }

  /* =========================
     ACTIVE NAV LINK
  ========================= */
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* =========================
     HEADER SCROLL EFFECT
  ========================= */
  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll);

  /* =========================
     REVEAL ON SCROLL
  ========================= */
  if (revealElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });
    } else {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });
    }
  }

  /* =========================
     COUNTERS
  ========================= */
  const animateCounter = (element) => {
    const target = Number(element.dataset.counter);
    const duration = 1400;

    if (Number.isNaN(target)) return;

    let start = 0;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * (target - start) + start);

      element.textContent = currentValue.toLocaleString("en-US");

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = target.toLocaleString("en-US");
      }
    };

    window.requestAnimationFrame(step);
  };

  if (counterElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.45,
        }
      );

      counterElements.forEach((counter) => {
        counterObserver.observe(counter);
      });
    } else {
      counterElements.forEach((counter) => animateCounter(counter));
    }
  }

  /* =========================
     SMOOTH ANCHOR SCROLL
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      closeMenu();
    });
  });

  /* =========================
     WHATSAPP FORM (NEW)
  ========================= */
  const leadForm = document.getElementById("leadForm");

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(leadForm);

      const name = (data.get("name") || "").toString().trim();
      const business = (data.get("business") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const service = (data.get("service") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      const lines = [
        "مرحبًا، أرغب في طلب خدمة من إيست تويست.",
        name ? `الاسم: ${name}` : "",
        business ? `النشاط: ${business}` : "",
        phone ? `رقم التواصل: ${phone}` : "",
        service ? `الخدمة: ${service}` : "",
        message ? `التفاصيل: ${message}` : ""
      ].filter(Boolean);

      const url =
        "https://wa.me/966567031077?text=" +
        encodeURIComponent(lines.join("\n"));

      window.open(url, "_blank", "noopener");
    });
  }

  /* =========================
     PARALLAX
  ========================= */
  const heroVisualImage = document.querySelector(".hero-visual img");

  const handleParallax = () => {
    if (!heroVisualImage) return;
    if (window.innerWidth < 821) return;

    const offset = window.scrollY * 0.08;
    heroVisualImage.style.transform = `translateY(${offset}px)`;
  };

  handleParallax();
  window.addEventListener("scroll", handleParallax, { passive: true });
});

  const serviceSlider = document.getElementById("serviceSlider");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  if (serviceSlider && prevBtn && nextBtn) {
    const slideAmount = 320;

    prevBtn.addEventListener("click", () => {
      serviceSlider.scrollBy({
        left: -slideAmount,
        behavior: "smooth",
      });
    });

    nextBtn.addEventListener("click", () => {
      serviceSlider.scrollBy({
        left: slideAmount,
        behavior: "smooth",
      });
    });
  }
