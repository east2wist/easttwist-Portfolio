
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
function openMenu(){ if(!mobileDrawer) return; mobileDrawer.classList.add('show'); mobileMenuOverlay.classList.add('show'); body.classList.add('menu-open');}
function closeMenu(){ if(!mobileDrawer) return; mobileDrawer.classList.remove('show'); mobileMenuOverlay.classList.remove('show'); body.classList.remove('menu-open');}
if(menuBtn) menuBtn.addEventListener('click', openMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
if(mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.drawer-links a').forEach(a=>a.addEventListener('click', closeMenu));

document.querySelectorAll('.reveal').forEach(el=>el.classList.add('active'));

document.querySelectorAll('[data-carousel]').forEach(section=>{
 const track = section.querySelector('.carousel-track');
 const prev = section.querySelector('[data-prev]');
 const next = section.querySelector('[data-next]');
 if(track && prev && next){
   const amount = ()=> Math.min(380, track.clientWidth * .86);
   prev.addEventListener('click',()=>track.scrollBy({left:-amount(), behavior:'smooth'}));
   next.addEventListener('click',()=>track.scrollBy({left: amount(), behavior:'smooth'}));
 }
});

const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const v=id=>document.getElementById(id)?.value||'';
    const msg = `مرحبًا، لدي طلب جديد من موقع إيست تويست:%0A%0Aالاسم: ${v('name')}%0Aاسم النشاط/الشركة: ${v('company')}%0Aرقم الجوال: ${v('phone')}%0Aالخدمة المطلوبة: ${v('service')}%0Aالتفاصيل: ${v('details')}`;
    window.open(`https://wa.me/966567031077?text=${msg}`,'_blank');
  });
}
