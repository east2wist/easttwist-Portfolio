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

/* Keep the gallery on the same GitHub Pages origin. This avoids Safari iOS
   blocking or suspending Google Drive thumbnail requests inside the grid. */
const gallery=document.querySelector('#work .work-grid');
if(gallery){
  const localSources=[
    'assets/work/work-01.jpg',
    'assets/work/work-02.jpg',
    'assets/work/work-03.jpg',
    'assets/work/work-04.jpg',
    'assets/work/work-05.jpg',
    'assets/work/work-06.jpg'
  ];
  const images=[...gallery.querySelectorAll('img')];
  images.forEach((img,index)=>{
    if(!localSources[index])return;
    img.removeAttribute('data-drive-id');
    img.removeAttribute('loading');
    img.loading='eager';
    img.decoding='async';
    img.classList.remove('drive-img','image-loading','image-error');
    img.classList.add('local-work-image');
    img.src=localSources[index]+'?v=1';
  });

  if(!document.querySelector('#work .work-swipe-hint')){
    const hint=document.createElement('p');
    hint.className='work-swipe-hint';
    hint.textContent='اسحب يمينًا ويسارًا لمشاهدة باقي الأعمال';
    gallery.before(hint);
  }
}

if(!document.querySelector('link[data-gallery-carousel]')){
  const stylesheet=document.createElement('link');
  stylesheet.rel='stylesheet';
  stylesheet.href='landing-v8.css?v=10';
  stylesheet.dataset.galleryCarousel='true';
  document.head.appendChild(stylesheet);
}
