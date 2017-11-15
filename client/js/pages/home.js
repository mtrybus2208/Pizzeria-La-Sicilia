import bgLoader from './../my-modules/img-loader';
import zenscroll from 'zenscroll';

(function(){
  /* cache DOM elements */
  const $el = document.querySelector('.main-header_home');
  const $scroller = document.querySelector('.main-header__scroller');
  const $scrollerTarget = document.querySelector('.product-info');
  /* Event binding */
  /* Initialize the smooth scroller */
  $scroller.addEventListener('click', function (event) {
    zenscroll.to($scrollerTarget, 700)
  })
  /* bg loader */
  bgLoader($el, './../images/bg-final2.jpg', 'loading');
})();