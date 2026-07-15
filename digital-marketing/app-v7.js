document.querySelectorAll('.js-scroll-form').forEach(link=>{
  link.addEventListener('click',event=>{
    const target=document.querySelector('#contact');
    if(!target)return;
    event.preventDefault();
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:'creative_to_form_click',creative_alt:link.querySelector('img')?.alt||''});
    target.scrollIntoView({behavior:'smooth',block:'start'});
    setTimeout(()=>document.querySelector('#leadForm input[name="name"]')?.focus({preventScroll:true}),650);
  });
});
