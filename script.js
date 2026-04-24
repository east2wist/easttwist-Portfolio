document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const revealElements = document.querySelectorAll(".reveal");
  const counterElements = document.querySelectorAll("[data-counter]");
  const heroVisualImage = document.querySelector(".hero-visual img");
  const leadForm = document.getElementById("leadForm");

  const serviceSlider = document.getElementById("serviceSlider");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

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
      const target = event.target;
      if (!(target instanceof Node)) return;

      const clickedInsideNav = nav.contains(target);
      const clickedToggle = menuToggle.contains(target);

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
    const href = link.getAttribute("href");
    if (!href) return;

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "/" && href === "index.html")
    ) {
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
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  /* =========================
     REVEAL ON SCROLL
  ========================= */
  if (revealElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
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

    const prefix = element.dataset.prefix || "";
    const suffix = element.dataset.suffix || "";

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * target);

      element.textContent = `${prefix}${currentValue.toLocaleString("en-US")}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = `${prefix}${target.toLocaleString("en-US")}${suffix}`;
      }
    };

    window.requestAnimationFrame(step);
  };

  if (counterElements.length > 0) {
    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            observer.unobserve(entry.target);
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
      const offsetTop =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        12;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      closeMenu();
    });
  });

  /* =========================
     WHATSAPP FORM
  ========================= */
  if (leadForm) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();

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
        message ? `التفاصيل: ${message}` : "",
      ].filter(Boolean);

      const whatsappUrl =
        "https://wa.me/966567031077?text=" +
        encodeURIComponent(lines.join("\n"));

      window.open(whatsappUrl, "_blank", "noopener");
    });
  }

  /* =========================
     HERO PARALLAX
  ========================= */
  const handleParallax = () => {
    if (!heroVisualImage) return;
    if (window.innerWidth < 821) return;

    const offset = window.scrollY * 0.08;
    heroVisualImage.style.transform = `translateY(${offset}px)`;
  };

  if (heroVisualImage) {
    handleParallax();
    window.addEventListener("scroll", handleParallax, { passive: true });
  }

  /* =========================
     SERVICE SLIDER
  ========================= */
  if (serviceSlider) {
    const getSlideAmount = () => {
      const firstSlide = serviceSlider.querySelector(".service-slide");
      if (!firstSlide) return 320;

      const slideWidth = firstSlide.getBoundingClientRect().width;
      const sliderStyle = window.getComputedStyle(serviceSlider);
      const gapValue = parseFloat(sliderStyle.columnGap || sliderStyle.gap || "18");

      return slideWidth + gapValue;
    };

    const scrollSlider = (direction) => {
      serviceSlider.scrollBy({
        left: direction * getSlideAmount(),
        behavior: "smooth",
      });
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        scrollSlider(-1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        scrollSlider(1);
      });
    }

    /* =========================
       DRAG / SWIPE SUPPORT
    ========================= */
    let isPointerDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (clientX) => {
      isPointerDown = true;
      startX = clientX;
      startScrollLeft = serviceSlider.scrollLeft;
      serviceSlider.classList.add("is-dragging");
    };

    const onPointerMove = (clientX) => {
      if (!isPointerDown) return;
      const distance = clientX - startX;
      serviceSlider.scrollLeft = startScrollLeft - distance;
    };

    const onPointerUp = () => {
      isPointerDown = false;
      serviceSlider.classList.remove("is-dragging");
    };

    serviceSlider.addEventListener("mousedown", (event) => {
      onPointerDown(event.pageX);
    });

    serviceSlider.addEventListener("mousemove", (event) => {
      onPointerMove(event.pageX);
    });

    serviceSlider.addEventListener("mouseleave", () => {
      onPointerUp();
    });

    serviceSlider.addEventListener("mouseup", () => {
      onPointerUp();
    });

    serviceSlider.addEventListener(
      "touchstart",
      (event) => {
        if (!event.touches.length) return;
        onPointerDown(event.touches[0].clientX);
      },
      { passive: true }
    );

    serviceSlider.addEventListener(
      "touchmove",
      (event) => {
        if (!event.touches.length) return;
        onPointerMove(event.touches[0].clientX);
      },
      { passive: true }
    );

    serviceSlider.addEventListener("touchend", () => {
      onPointerUp();
    });
  }
});

/* =========================
   FIX YOUTUBE IFRAMES RENDER
========================= */
const youtubeFrames = document.querySelectorAll(".video-shell iframe");

const refreshYoutubeFrames = () => {
  youtubeFrames.forEach((iframe) => {
    const src = iframe.getAttribute("src");
    if (!src) return;

    iframe.style.opacity = "0.99";

    requestAnimationFrame(() => {
      iframe.style.opacity = "1";
    });
  });
};

if (youtubeFrames.length > 0) {
  window.addEventListener("load", () => {
    setTimeout(refreshYoutubeFrames, 300);
    setTimeout(refreshYoutubeFrames, 900);
  });

  window.addEventListener("resize", refreshYoutubeFrames);
}

/* =========================
   YOUTUBE TAP TO LOAD
========================= */
document.querySelectorAll(".youtube-card").forEach((card) => {
  card.addEventListener("click", () => {
    const videoId = card.dataset.video;
    if (!videoId) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    card.innerHTML = "";
    card.appendChild(iframe);
  });
});