// En tom array för wishlist
const wListproduct = JSON.parse(localStorage.getItem("wListproduct")) || [];

// functionen att klicka på knappen
function addProduct(e) {
e.preventDefault();

// Läser in data från produkters individuella HTML-fil
var priset = document.querySelectorAll(".card-price");
const src = document.querySelectorAll(".card-pic");
const productName= document.querySelectorAll(".card-title");
const id = e.target.getAttribute("id");

// Det här läses in från produkterna så att de kan läggas i localStorage på varje produkt och kommande produkter
let productObj= {
product:productName[id].innerHTML,
bild:src[id].getAttribute("src"),
kostnad:priset[id].innerHTML,
} 

 // Pushar in produkten i wListproduct-localStorage
 wListproduct.push(productObj);
 localStorage.setItem("wListproduct", JSON.stringify(wListproduct)); 
}

// För att man kan ska kunna klicka på alla knappar   
 document
.querySelectorAll(".lägg-till-wishlist")
.forEach( btn => btn.addEventListener("click" , addProduct));  
