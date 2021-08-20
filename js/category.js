"use strict";

let countryBtn = document.getElementById('countryBtn');
countryBtn.addEventListener('click', function func1 (){
  document.getElementById('countryMarks').classList.toggle('country-list-active');
  document.getElementById('imgCountry').classList.toggle('rotate180');
});

let TrdBtn = document.getElementById('trdBtn');
TrdBtn.addEventListener('click' , function func2() {
  document.getElementById('trdList').classList.toggle('list-trade-active');
  document.getElementById('imgTrade').classList.toggle('rotate180');
});

document.getElementById('filter-btn1').addEventListener('click', fltrMenu);
document.getElementById('filter-btn2').addEventListener('click', fltrMenu);

function fltrMenu() {
  let menu = document.getElementById('filter-menu');
  menu.classList.toggle("filter-active");
  document.body.classList.toggle("freeze-page");
};

document.querySelector('.weight-list').addEventListener('click' , (e) => {
if (e.target.classList.contains('weight-link') || e.target.classList.contains('weight-check') || e.target.classList.contains('weight-list')) {
  return;
}
    let weightNumArr = document.querySelectorAll('.weight-num');
    weightNumArr.forEach(weightNum => {
      weightNum.classList.remove('active-weight');
       weightNum.firstElementChild.classList.remove('active-check-weight');
    })
    e.target.classList.add('active-weight');
    e.target.firstElementChild.classList.add('active-check-weight');
    
});

let countBtn = document.getElementById('countBtn');
let countMenu = document.getElementById('countMenu');
let countArrow = document.getElementById('countArrow');


countBtn.addEventListener('click' , () => {
  countMenu.classList.toggle('active-count');
  countArrow.classList.toggle('rotate180');
  window.onclick = function quintClose(e){
    if(!e.target.classList.contains('count-btn')){
        countMenu.classList.remove('active-count');
        countArrow.classList.remove('rotate180');
    } else {return};
}

});

let CountNumArr = document.querySelectorAll('.count-elem').forEach(countElem => {
  countElem.addEventListener('click' , (e) => {
  let menuID = e.target.getAttribute('count-id');
  let blockID = countText.getAttribute('count-id');
  let targetCount = e.target.textContent;
  let currentCount = countText.textContent;
  let countNum = document.querySelector('.num-count');
  if(menuID){
    countText.textContent = targetCount;
    e.target.textContent = currentCount;
    countText.setAttribute('count-id', menuID);
    e.target.setAttribute('count-id' , blockID);
    countNum.textContent = targetCount + " von 136 Ergebnisse";
  } else {return};
  let count = countText.getAttribute('count-id');
  countMenu.classList.toggle('active-count');
  countArrow.classList.toggle('rotate180');
  let productArr = document.querySelectorAll('.top-products-block');
    if (count == 6 || count == 9 || count == 12) {
    productArr.forEach(product => {
      product.classList.add('nonactive-product');
    })
      for (let i = 0; i < count; i++) {
        productArr[i].classList.remove('nonactive-product');
      }
    };
    
  })
  
});
  let brickView = document.getElementById('brickView');
  brickView.addEventListener('click' , () => {
    document.getElementById('productsWrapper').classList.toggle('view-change-brick');
  });

