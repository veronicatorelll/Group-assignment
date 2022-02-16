

// Function skapad för att definiera variable. 
//Promptmetoden kan användas när man önskar skapa ett dialogfönster för användarinmatning.
//if:Används för att ange koder som ska köras om ett visst villkor är sant.
//Else:Den används för att ange koder som ska köras om samma villkor är falskt. (Används inte för denna sidan.) 
//Objektet window.location.href innehåller information om den aktuella sidans URL(Location)-plats.
function myFunction1() {
  let inputName = document.querySelector("#fname");
  let inputEfternamen = document.querySelector("#lname");
  let inputPost = document.querySelector("#epost");
  let inputPersonnummer = document.querySelector("#pnummer");
  let inputLadress = document.querySelector("#adress");
  if (inputName.value == "") {
    prompt("fyll i namn");
  } else {
    
  }
    if (inputEfternamen.value == ""){
      prompt("fyll i eftername");
    }else{
      
    }
    if (inputPost.value == "") {
      prompt("fyll i epost");
    } else {
      
    }
  if (inputPersonnummer.value == "") {
    prompt("fyll i personnummer");
    
  } else {
    
  }

  if (inputLadress.value == "") {
    prompt("fyll i Levaransadressen");
  } else {
    
    window.location.href= '../HTML/sista.html'
    
  }
  
}



