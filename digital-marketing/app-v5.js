window.dataLayer=window.dataLayer||[];
(async()=>{
  try{
    const files=Array.from({length:8},(_,i)=>`assets/sprite-${String(i).padStart(2,'0')}.txt`);
    const texts=[];
    for(const file of files){const r=await fetch(file,{cache:'no-store'});if(!r.ok)throw new Error(`${file}: ${r.status}`);texts.push(await r.text());}
    const binary=atob(texts.join('').replace(/\s/g,''));
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    const url=URL.createObjectURL(new Blob([bytes],{type:'image/webp'}));
    const pos={s1:'0 0',s2:'50% 0',s3:'100% 0',s4:'0 100%',s5:'50% 100%',s6:'100% 100%'};
    document.querySelectorAll('.shot').forEach(el=>{const key=[...el.classList].find(c=>pos[c]);if(key){el.style.backgroundImage=`url(${url})`;el.style.backgroundPosition=pos[key];}});
  }catch(err){console.error('East Twist images failed',err);document.documentElement.classList.add('images-failed');}
})();
const ENDPOINT='https://script.google.com/macros/s/AKfycbzuBfuMOFQC-0_WU8r62PY5l3MD4vDPfxN36w1WFe5uGD8yEtiRS086moiU0zbhNGF9/exec';
const keys=['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
const params=new URLSearchParams(location.search);
keys.forEach(k=>{const v=params.get(k);if(v)try{localStorage.setItem(k,v)}catch(e){}});
document.querySelectorAll('.js-call').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'phone_click',phone_number:'+966567031077'})));
document.querySelectorAll('.js-wa').forEach(a=>a.addEventListener('click',()=>dataLayer.push({event:'whatsapp_click'})));
const form=document.getElementById('leadForm');
if(form)form.addEventListener('submit',async e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}const btn=form.querySelector('button');const status=document.getElementById('status');btn.disabled=true;btn.textContent='جارٍ الإرسال';status.className='status';const d=Object.fromEntries(new FormData(form));keys.forEach(k=>{try{d[k]=localStorage.getItem(k)||''}catch(x){d[k]=''}});d.landing_page=location.href;d.referrer=document.referrer;d.event_id='lead_'+Date.now()+'_'+Math.random().toString(36).slice(2);d.user_agent=navigator.userAgent;d.language=navigator.language;try{await fetch(ENDPOINT,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)});dataLayer.push({event:'lead_form_submit',lead_service:d.service,event_id:d.event_id});status.textContent='تم استلام طلبك بنجاح، وسيتواصل معك فريق إيست تويست.';status.className='status show success';form.reset()}catch(err){status.textContent='تعذر الإرسال حاليًا. تواصل معنا عبر الاتصال أو واتساب.';status.className='status show error'}finally{btn.disabled=false;btn.textContent='إرسال طلب التواصل'}});