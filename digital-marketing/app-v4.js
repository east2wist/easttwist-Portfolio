(async()=>{
  try{
    const files=['assets/sprite-00.txt','assets/sprite-01.txt','assets/sprite-02.txt','assets/sprite-03.txt','assets/sprite-04.txt','assets/sprite-05.txt','assets/sprite-06.txt','assets/sprite-07.txt'];
    const responses=await Promise.all(files.map(async file=>{const r=await fetch(file,{cache:'force-cache'});if(!r.ok)throw new Error(file+' '+r.status);return r.text()}));
    const binary=atob(responses.join('').replace(/\s/g,''));
    const bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    const imageUrl=URL.createObjectURL(new Blob([bytes],{type:'image/webp'}));
    const positions=['0 0','50% 0','100% 0','0 100%','50% 100%','100% 100%'];
    document.querySelectorAll('.shot').forEach(el=>{const match=[...el.classList].find(c=>/^s[1-6]$/.test(c));if(match){el.style.backgroundImage=`url("${imageUrl}")`;el.style.backgroundSize='300% 200%';el.style.backgroundPosition=positions[Number(match.slice(1))-1]}});
  }catch(error){console.error('East Twist visual assets failed',error)}
})();
window.dataLayer=window.dataLayer||[];
const ENDPOINT='https://script.google.com/macros/s/AKfycbzuBfuMOFQC-0_WU8r62PY5l3MD4vDPfxN36w1WFe5uGD8yEtiRS086moiU0zbhNGF9/exec';
const keys=['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
const params=new URLSearchParams(location.search);keys.forEach(k=>{const v=params.get(k);if(v)try{localStorage.setItem(k,v)}catch(e){}});
document.querySelectorAll('.js-call').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'phone_click',phone_number:'+966567031077'})));
document.querySelectorAll('.js-wa').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'whatsapp_click'})));
const form=document.getElementById('leadForm');if(form)form.addEventListener('submit',async e=>{e.preventDefault();if(!e.target.checkValidity()){e.target.reportValidity();return}const btn=e.target.querySelector('button');const s=document.getElementById('status');btn.disabled=true;btn.textContent='جارٍ الإرسال';s.className='status';const d=Object.fromEntries(new FormData(e.target));keys.forEach(k=>{try{d[k]=localStorage.getItem(k)||''}catch(x){d[k]=''}});d.landing_page=location.href;d.referrer=document.referrer;d.event_id='lead_'+Date.now()+'_'+Math.random().toString(36).slice(2);d.user_agent=navigator.userAgent;d.language=navigator.language;try{await fetch(ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)});dataLayer.push({event:'lead_form_submit',lead_service:d.service,event_id:d.event_id});s.textContent='تم استلام طلبك بنجاح، وسيتواصل معك فريق إيست تويست.';s.className='status show success';e.target.reset()}catch(err){s.textContent='تعذر الإرسال حاليًا. تواصل معنا عبر الاتصال أو واتساب.';s.className='status show error'}finally{btn.disabled=false;btn.textContent='إرسال طلب التواصل'}});