
const body = document.body;
const html = document.documentElement;
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const langToggle = document.getElementById('langToggle');

if(menuBtn && navMenu){
  menuBtn.addEventListener('click', ()=> navMenu.classList.toggle('show'));
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> navMenu.classList.remove('show')));
}

if(langToggle){
  langToggle.addEventListener('click', ()=>{
    body.classList.toggle('en');
    if(body.classList.contains('en')){
      html.setAttribute('lang','en');
      html.setAttribute('dir','ltr');
    }else{
      html.setAttribute('lang','ar');
      html.setAttribute('dir','rtl');
    }
  });
}

const ytTrack = document.getElementById('ytTrack');
const prevWork = document.getElementById('prevWork');
const nextWork = document.getElementById('nextWork');
function scrollAmount(){ return ytTrack ? Math.min(420, ytTrack.clientWidth * .92) : 0; }
if(prevWork && ytTrack) prevWork.addEventListener('click', ()=> ytTrack.scrollBy({left:-scrollAmount(), behavior:'smooth'}));
if(nextWork && ytTrack) nextWork.addEventListener('click', ()=> ytTrack.scrollBy({left:scrollAmount(), behavior:'smooth'}));

const leadForm = document.getElementById('leadForm');
if(leadForm){
  leadForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const company = document.getElementById('company').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const budget = document.getElementById('budget').value.trim();
    const details = document.getElementById('details').value.trim();
    const msg =
`السلام عليكم، لدي طلب جديد من موقع East Twist:

الاسم: ${name}
اسم النشاط/الشركة: ${company}
رقم الجوال: ${phone}
الخدمة المطلوبة: ${service}
الميزانية التقريبية: ${budget || '-'}
تفاصيل المشروع:
${details || '-'}

الرجاء التواصل معي في أقرب وقت.`;
    window.open('https://wa.me/966567031077?text=' + encodeURIComponent(msg), '_blank');
  });
}
