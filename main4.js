// knapp "lägg till i cart" ser till så att produkten kommer till varukorg //
let korg = document.querySelectorAll('.lägg-till')
// knapp "lägg till i cart" ser till så att produkten kommer till varukorg //

// uppger alla produkter och även bilder med pris //

let produkter = [
    {
        namn: 'Soffa',
        tag:'Soffa',
        pris: 7500,
        iKorg: 0
    },
    {
        namn: 'Badkar',
        tag:'Badkar',
        pris: 3500,
        iKorg: 0
    }, {
        namn: 'Stege',
        tag:'Stege',
        pris: 900,
        iKorg: 0
    },
    {
        namn: 'Spegel',
        tag:'Spegel',
        pris: 999,
        iKorg: 0
    },
    {
        namn: 'Vas',
        tag:'Vas',
        pris: 799,
        iKorg: 0
    }, {
        namn: 'Kruka',
        tag:'Kruka',
        pris: 500,
        iKorg: 0
    },
    {
        namn: 'Bokhylla',
        tag:'Bokhylla',
        pris: 800,
        iKorg: 0
    },
    {
        namn: 'Stol',
        tag:'Stol',
        pris: 699,
        iKorg: 0
    },
]
// uppger alla produkter och även bilder med pris //

// kör en loop så att när man trycker på knappen så ska det synas i varukorg numret och total summan //

for (let i=0; i < korg.length; i++){
    korg[i].addEventListener('click', () => {
        korgNummer(produkter[i]);
        totalSumma(produkter[i])
    })
}
// kör en loop så att när man trycker på knappen så ska det synas i varukorg numret och total summan //


// När sidan uppdateras så ska det finnas kvar och därav sparas det i localstorage //
function onloadkorgNummer() {
    let produktNummer = localStorage.getItem('korgNummer');

    if(produktNummer) {
        document.querySelector('.varukorg span').textContent = produktNummer
        
    }
}
// När sidan uppdateras så ska det finnas kvar och därav sparas det i localstorage //

function korgNummer(produkter){
    let produktNummer = localStorage.getItem('korgNummer');
   
    produktNummer = parseInt(produktNummer);

    if( produktNummer ) {
        localStorage.setItem('korgNummer', produktNummer + 1);
        document.querySelector('.varukorg span').textContent = produktNummer + 1;


    } else {
        localStorage.setItem('korgNummer', 1);
        document.querySelector('.varukorg span').textContent = 1;
    } 
  setItems(produkter);
}
function setItems(produkter) {
    let korgVaror = localStorage.getItem('produkterikorg');
    korgVaror = JSON.parse(korgVaror);
// När sidan uppdateras så ska det finnas kvar och därav sparas det i localstorage //

    if(korgVaror != null) { 
        if(korgVaror[produkter.tag] == undefined){
            korgVaror = {
                ...korgVaror,
                [produkter.tag]: produkter
            }
        }
        korgVaror[produkter.tag].iKorg += 1;
    } else {
        produkter.iKorg = 1;
        korgVaror = {
            [produkter.tag]: produkter
        }
    }
    
    
    localStorage.setItem("produkterikorg", JSON.stringify
    (korgVaror));

}

function totalSumma(produkter) {

    let korgSumma = localStorage.getItem('totalSumma');

    console.log("min korgsumma är", korgSumma);
    console.log(typeof korgSumma );

    if(korgSumma != null) {
        korgSumma = parseInt(korgSumma);
     localStorage.setItem("totalSumma", korgSumma + produkter.pris);
    } else {
        localStorage.setItem("totalSumma", produkter.pris);

    }


}

/*
function removeProdukter() {
    var removeBtn = document.getElementsByClassName('.close');
    console.log(removeBtn)


    console.log("clicked ")
    for (let i=0; i > removeBtn.length; i++){
        removeBtn[i].addEventListener('click', () => {
            korgNummer(produkter[i]);
            totalSumma(produkter[i]);
        })
    }
}

*/


// allt som visas i varukorgen och även att de lagras i localstorage //

function displayCart() {
    let korgVaror =localStorage.getItem("produkterikorg");
    korgVaror = JSON.parse(korgVaror);
    let produktSamling = document.querySelector(".produkt")
    let korgSumma = localStorage.getItem('totalSumma');

    console.log(korgVaror);
    if( korgVaror && produktSamling ) {
    produktSamling.innerHTML = '';
    Object.values(korgVaror).map(item => {
        produktSamling.innerHTML += `
        <div class="produkter">
        <div class="style-varukorg"></div>
        <img src="/Bilder/${item.tag}.jpg" width="90px">
        <span class="change">${item.namn}</span>  
        </div>
        <div class="Pris">${item.pris} kr</div>
        <div class="Antal"><span class="antalartiklar">${item.iKorg}</span>
        </div>
        <div class="totalt">
        ${item.iKorg * item.pris}kr
        </div>
        `;
        
    });
    produktSamling.innerHTML += `
    <div class="style-varukorg"></div>
    <div class="totalSummaLista">
    <h4 class=""totalTitel>
    Totalsumma
    </h4>
    <h4 class="korgTotal">
    ${korgSumma}kr
    </h4>
    </div>
    `
  }
}
// allt som visas i varukorgen och även att de lagras i localstorage //


onloadkorgNummer();
displayCart();