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

