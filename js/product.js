 "use strict";

 let weightBtn = document.getElementById('weightBtn');
      let weightText = document.getElementById('weightText'); 
      let weightMenu = document.getElementById('weightMenu');
      let arrowWeight = document.getElementById('arrowWeight');
      
      let quintBtn = document.getElementById('quintityBtn');
      let quintMenu = document.getElementById('quintityMenu');
      let quintText = document.getElementById('quintityText');
      let arrowQuint = document.getElementById('arrowQuint');

  weightBtn.addEventListener('click' , (e) => {
        if(!quintMenu.classList.contains('_quintity-active')){
            weightMenu.classList.toggle('_weight-active');
        arrowWeight.classList.toggle('_rotate180');  
        window.onclick = function weightClose(e)  {
        if(!e.target.classList.contains('product-weight')){
            weightMenu.classList.remove('_weight-active');
            arrowWeight.classList.remove('_rotate180');
        } else{return};
        }
      } else {return};
    
  });


  let weightNumArr = document.querySelectorAll('.weight-number').forEach(weightElem => { 
  weightElem.addEventListener('click', (e)=> {
    let menuID = e.target.getAttribute('weight-id'); 
    let blockID = weightText.getAttribute('weight-id');
    let targetWeight = e.target.textContent;
    let currentWeight = weightText.textContent;
    if(menuID) {
        weightText.textContent = targetWeight;
        e.target.textContent = currentWeight;
        weightText.setAttribute('weight-id', menuID);
        e.target.setAttribute('weight-id' , blockID);
        
    } else {return};
    weightMenu.classList.toggle('_weight-active');
    arrowWeight.classList.toggle('_rotate180');
    console.log(menuID);
    });
});


quintBtn.addEventListener('click' , () => {
    if(!weightMenu.classList.contains('_weight-active')){
        quintMenu.classList.toggle('_quintity-active');
        arrowQuint.classList.toggle('_rotate180');
        window.onclick = function quintClose(e){
        if(!e.target.classList.contains('product-quintity')){
            quintMenu.classList.remove('_quintity-active');
            arrowQuint.classList.remove('_rotate180');
        } else {return};
    }
    } else {return};

});

let quintNumArr = document.querySelectorAll('.quintity-number').forEach(quintElem => {
    quintElem.addEventListener('click', (e) => {
    let menuID = e.target.getAttribute('quintity-id');
    let blockID = quintText.getAttribute('quintity-id');
    let targetQuint = e.target.textContent;
    let currentQuint = quintText.textContent;
    if(menuID){
        quintText.textContent = targetQuint;
        e.target.textContent = currentQuint;
        quintText.setAttribute('quintity-id', menuID);
        e.target.setAttribute('quintity-id' , blockID);
    } else {return};
    quintMenu.classList.toggle('_quintity-active');
    arrowQuint.classList.toggle('_rotate180');
    console.log(menuID);
    });
});
