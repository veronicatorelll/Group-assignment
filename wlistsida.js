// Gör en ny div-tag där sätter in produkten läggs in på html-filen
const wListproducts = JSON.parse(localStorage.getItem("wListproduct") ) || [];
    
wListproducts.map( (product)=> {
   
    document.querySelector(".wListproduct-container").innerHTML
     += `
      <div class="Wproduct-container"> 
      <img class="Wcard-pic" src="${product.bild}" width="90px" alt="${product.product}">
      <h5 class="Wcard-title"> ${product.product} </h5> 
      <h3 class="Wcard-price"> ${product.kostnad} </h3> 
      <button class="wButton" type="button"> Ta bort från wishlist </button>
      <div class="Wborder"></div>
      </div>
     `
 }) 
 
 