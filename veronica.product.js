//Samlade variabler
const src = localStorage.getItem("src");
const productName= localStorage.getItem("productList");
const beskrivning = localStorage.getItem("beskrivning");
const kostnad = localStorage.getItem("kostnad");
const products = JSON.parse(productName);



products.map( (product)=> {

document.querySelector(".productWrap").innerHTML

+= `
<div class= "styleContainer">
<img class="card-pic" src=${product.img} width="250px" id="9" alt="${product.productName}">

<h5 class="card-title" id="9">  ${product.productName} </h5>

<p class="ProdBes">  ${product.bes} </p> 
<br>
<a class="lägg-till cart9" href="#"><ion-icon name="basket"></ion-icon></a>
<a class="lägg-till-wishlist" heart9 wishlist" href="#"><ion-icon name="heart" id="9"></ion-icon></a>

<h3 class="card-price" id="9"> ${product.kos}kr </h3>

</div>
`
})



//src=${product.img} alt="${product.productName}
