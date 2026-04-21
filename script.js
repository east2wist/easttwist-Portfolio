
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeMenuBtn');
const drawer = document.getElementById('mobileDrawer');
const overlay = document.getElementById('drawerOverlay');

function openDrawer(){
  if(!drawer || !overlay) return;
  drawer.classList.add('show');
  overlay.classList.add('show');
  body.classList.add('drawer-open');
  if(menuBtn) menuBtn.setAttribute('aria-expanded','true');
  drawer.setAttribute('aria-hidden','false');
}
function closeDrawer(){
  if(!drawer || !overlay) return;
  drawer.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('drawer-open');
  if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
  drawer.setAttribute('aria-hidden','true');
}
menuBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
overlay?.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-links a').forEach(a=>a.addEventListener('click', closeDrawer));

document.querySelectorAll('.carousel-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.dataset.target);
    if(!target) return;
    const amount = target.clientWidth * 0.82;
    target.scrollBy({left: btn.classList.contains('prev') ? -amount : amount, behavior:'smooth'});
  });
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name')?.value.trim() || '';
  const company = document.getElementById('company')?.value.trim() || '';
  const phone = document.getElementById('phone')?.value.trim() || '';
  const service = document.getElementById('service')?.value.trim() || '';
  const details = document.getElementById('details')?.value.trim() || '';
  const msg = `مرحبًا، لدي طلب جديد من موقع إيست تويست:%0A%0Aالاسم: ${name}%0Aاسم النشاط/الشركة: ${company}%0Aرقم الجوال: ${phone}%0Aالخدمة المطلوبة: ${service}%0Aالتفاصيل: ${details}%0A`;
  window.open(`https://wa.me/966567031077?text=${msg}`, '_blank');
});
