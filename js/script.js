function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop, 0);
    }
  }
  let goTopBtn = document.getElementById('back-top');
  goTopBtn.addEventListener('click', backToTop);
  