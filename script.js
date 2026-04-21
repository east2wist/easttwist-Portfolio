
const body = document.body;
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

function openMenu(){ if(!mobileDrawer) return; mobileDrawer.classList.add("show"); mobileMenuOverlay.classList.add("show"); body.classList.add("menu-open"); }
function closeMenu(){ if(!mobileDrawer) return; mobileDrawer.classList.remove("show"); mobileMenuOverlay.classList.remove("show"); body.classList.remove("menu-open"); }
if(menuBtn) menuBtn.addEventListener("click", openMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);
if(mobileMenuOverlay) mobileMenuOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".drawer-links a").forEach(a => a.addEventListener("click", closeMenu));

const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.92;
  reveals.forEach(el => { if(el.getBoundingClientRect().top < trigger) el.classList.add("active"); });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");
  if(!track || !prev || !next) return;
  const amount = () => Math.min(380, track.clientWidth * 0.9);
  prev.addEventListener("click", () => track.scrollBy({left:-amount(), behavior:"smooth"}));
  next.addEventListener("click", () => track.scrollBy({left:amount(), behavior:"smooth"}));
});

const form = document.getElementById("contactForm");
if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || "";
    const company = document.getElementById("company")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const service = document.getElementById("service")?.value || "";
    const details = document.getElementById("details")?.value || "";
    const text = `مرحبًا، لدي استفسار جديد من موقع إيست تويست:%0A%0Aالاسم: ${name}%0Aاسم النشاط/الشركة: ${company}%0Aرقم الجوال: ${phone}%0Aالخدمة المطلوبة: ${service}%0Aالتفاصيل: ${details}`;
    window.open(`https://wa.me/966567031077?text=${text}`, "_blank");
  });
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});