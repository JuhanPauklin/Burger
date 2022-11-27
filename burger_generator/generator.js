

const lisandid = [' juustuga', ' sinihallitusjuustuga',' sibulamoosiga', ' ketšupikastmega', ' majoneesiga', ' peekoniga'];
const suurus = ['topelt ','kolmekordne ','maxi ','mega ','klassikaline '];

function generate(){
    //võtab teksitvälja sisu muutujasse
    let userInput = document.getElementById("userInput").value;
    // kui muutuja on tühi string siis annab hoiatuse, et tekstiväli on tühi
    if(userInput === ""){
        alert("Sisesta lahtrisse mingi väärtus ka!")
    }else{
        //genereeritakse suvalised lisand ja suurus ning lisatakse
        //üheks stringiks kokku + sisestatakse <p> elementi id="output"
        //viimasene muudetakse lahtri nähtavus nähtavaks    
        let suurusNumber = Math.floor(Math.random()* suurus.length)
        let lisandNumber = Math.floor(Math.random()* lisandid.length)
        
        outputField = document.getElementById("output");
        outputField.innerHTML = suurus[suurusNumber]+String(userInput)+"burger"+lisandid[lisandNumber];
        outputField.style.visibility = "visible";

    }
}