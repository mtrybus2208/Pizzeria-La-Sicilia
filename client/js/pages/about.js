import bgLoader from './../my-modules/img-loader';

(function(){
  /* cache DOM elements */
  const $header = document.querySelector('.main-header__about');
  /* bg loader */
  bgLoader($header, './../images/about-background.jpg', 'loading');
})();
