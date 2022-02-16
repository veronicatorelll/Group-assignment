   //Registrera och skapa admin

function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
   

    if(name.value.length == 0){
        alert('Vänligen fyll i email');

    }else if(pw.value.length == 0){
        alert('Vänligen fyll i lösenord');


    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Ditt konto har skapats!');

    }
}


//Logga in som registrerad admin

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Du är inloggad!');
    }else{
        alert('Något gick fel!');
    }
}


//JavaScript för produkter

const productList = JSON.parse( localStorage.getItem("productList")) || [];
function addProduct(e) {
e.preventDefault();

const src= document.querySelector("#imgSrc").value;
const productName= document.querySelector("#productName").value;
const beskrivning = document.querySelector("#beskrivning").value;
const kostnad = document.querySelector("#kostnad").value;


let productObj= {
productName:productName,
img:src,
bes:beskrivning,
kos:kostnad,
}

productList.push(productObj);
localStorage.setItem("productList", JSON.stringify(productList));

}

document.querySelector("button").addEventListener("click" , addProduct);



