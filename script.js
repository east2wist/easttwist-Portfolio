const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMenu(){
  if(!mobileDrawer || !mobileMenuOverlay) return;
  mobileDrawer.classList.add('show');
  mobileMenuOverlay.classList.add('show');
  body.classList.add('menu-open');
}

function closeMenu(){
  if(!mobileDrawer || !mobileMenuOverlay) return;
  mobileDrawer.classList.remove('show');
  mobileMenuOverlay.classList.remove('show');
  body.classList.remove('menu-open');
}

if(menuBtn) menuBtn.addEventListener('click', openMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if(mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.drawer-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.92;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const track = document.getElementById('worksTrack');
const prevBtn = document.getElementById('prevWork');
const nextBtn = document.getElementById('nextWork');
function getScrollAmount(){
  if(!track) return 0;
  return Math.min(420, track.clientWidth * 0.88);
}
if(prevBtn && track){
  prevBtn.addEventListener('click', ()=>track.scrollBy({left:-getScrollAmount(), behavior:'smooth'}));
}
if(nextBtn && track){
  nextBtn.addEventListener('click', ()=>track.scrollBy({left:getScrollAmount(), behavior:'smooth'}));
}

const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const company = document.getElementById('company')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const service = document.getElementById('service')?.value || '';
    const details = document.getElementById('details')?.value || '';
    const message = `مرحبًا، لدي طلب جديد من موقع إيست تويست:%0A%0Aالاسم: ${name}%0Aاسم النشاط/الشركة: ${company}%0Aرقم الجوال: ${phone}%0Aالخدمة المطلوبة: ${service}%0Aالتفاصيل: ${details}%0A%0Aشكرًا لكم.`;
    window.open(`https://wa.me/966567031077?text=${message}`, '_blank');
  });
}
