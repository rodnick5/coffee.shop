function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  };

  function trackScroll(){
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let scrolled = scrollTop + document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    if(width > 991){
      if(scrolled == scrollHeight){
        goTopBtn.classList.add('back-to-top-show');
      }
      else{
        goTopBtn.classList.remove('back-to-top-show');
      }
    } else{
      goTopBtn.classList.remove('back-to-top-show');
    }
  };

  let goTopBtn = document.getElementById('back-top');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  let menuBtn = document.getElementById('menu-burger-button');
  menuBtn.addEventListener('click' , function(){
    let nav = document.getElementById('nav-wrapper');
    menuBtn.classList.toggle('active-menu-btn');
    nav.classList.toggle('active-nav-line');
  });
