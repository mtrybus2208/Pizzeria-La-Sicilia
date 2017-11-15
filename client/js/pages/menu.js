import bgLoader from './../my-modules/img-loader';
import zenscroll from 'zenscroll';

(function(){
  /* cache DOM elements */
  const $el = document.querySelector('.main-header__container_menu');
  const $menucont = document.querySelector('.menu-content');
  /* Scroll to the current menu category */
  const hashcode = window.location.href;
  const categoryHash = hashcode.split('&');
  if(categoryHash.length > 1){
    const catName = categoryHash[1]; 
    const $categoryEl = document.querySelector(`[data-target=${catName}]`);
    /* Check if $categoryEl is truthy*/
    if($categoryEl){
      zenscroll.to($categoryEl, 0, function(){
        $menucont.classList.remove('vanish');
      });
    }else{
      $menucont.classList.remove('vanish');
    }
  }else{
    $menucont.classList.remove('vanish');
  }
  
  /* bg loader */
  bgLoader($el, './../images/bg-final2.jpg', 'loading');
})();