"use strict";

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
        goTopBtn.classList.add('_back-to-top-show');
      }
      else{
        goTopBtn.classList.remove('_back-to-top-show');
      }
    } else{
      goTopBtn.classList.remove('_back-to-top-show');
    }
  };

  let goTopBtn = document.getElementById('back-top');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);

  let menuBtn = document.getElementById('menu-burger-button');
  menuBtn.addEventListener('click' , function(){
    let nav = document.getElementById('nav-wrapper');
    menuBtn.classList.toggle('_active-menu-btn');
    nav.classList.toggle('_active-nav-line');
  });

  let animItems = document.querySelectorAll('.anim-item');
  if (animItems.length > 0) {
    window.addEventListener('scroll' , animOnScroll);
    function animOnScroll(){
      for(var animItem of animItems){
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('_active-item');
        }
      }
    }
    function offset(elem){
      let rect = elem.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop}
    }
    animOnScroll();
  }
