window.dataLayer=window.dataLayer||[];
const driveUrls=id=>[
  `https://drive.google.com/thumbnail?id=${id}&sz=w2000`,
  `https://lh3.googleusercontent.com/d/${id}=w2000`,
  `https://drive.google.com/uc?export=view&id=${id}`
];
document.querySelectorAll('img[data-drive-id]').forEach(img=>{
  const urls=driveUrls(img.dataset.driveId);let index=0;
  img.classList.add('image-loading');
  const loadNext=()=>{if(index>=urls.length){img.onerror=null;img.classList.remove('image-loading');img.classList.add('image-error');return;}img.src=urls[index++];};
  img.addEventListener('load',()=>img.classList.remove('image-loading'),{once:true});
  img.addEventListener('error',loadNext);
  loadNext();
});
const ENDPOINT='https://script.google.com/macros/s/AKfycbzuBfuMOFQC-0_WU8r62PY5l3MD4vDPfxN36w1WFe5uGD8yEtiRS086moiU0zbhNGF9/exec';
const keys=['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
const params=new URLSearchParams(location.search);
keys.forEach(k=>{const v=params.get(k);if(v)try{localStorage.setItem(k,v)}catch(e){}});
document.querySelectorAll('.js-call').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'phone_click',phone_number:'+966567031077'})));
document.querySelectorAll('.js-wa').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'whatsapp_click'})));
const form=document.getElementById('leadForm');
if(form)form.addEventListener('submit',async e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}const btn=form.querySelector('button');const status=document.getElementById('status');btn.disabled=true;btn.textContent='جارٍ الإرسال';status.className='status';const d=Object.fromEntries(new FormData(form));keys.forEach(k=>{try{d[k]=localStorage.getItem(k)||''}catch(x){d[k]=''}});d.landing_page=location.href;d.referrer=document.referrer;d.event_id='lead_'+Date.now()+'_'+Math.random().toString(36).slice(2);d.user_agent=navigator.userAgent;d.language=navigator.language;try{await fetch(ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)});dataLayer.push({event:'lead_form_submit',lead_service:d.service,event_id:d.event_id});status.textContent='تم استلام طلبك بنجاح، وسيتواصل معك فريق إيست تويست.';status.className='status show success';form.reset()}catch(err){status.textContent='تعذر الإرسال حاليًا. تواصل معنا عبر الاتصال أو واتساب.';status.className='status show error'}finally{btn.disabled=false;btn.textContent='إرسال طلب التواصل'}});