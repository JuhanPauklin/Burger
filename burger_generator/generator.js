

const lisandid = [' juustuga', ' sinihallitusjuustuga',' sibulamoosiga', ' ketšupikastmega', ' majoneesiga', ' peekoniga'];
const suurus = ['topelt ','kolmekordne ','maxi ','mega ','klassikaline '];

function generate(){
    let userInput = document.getElementById("userInput").value;
    let suurusNumber = Math.floor(Math.random()* suurus.length)
    let lisandNumber = Math.floor(Math.random()* lisandid.length)

    outputField = document.getElementById("output");
    outputField.innerHTML = suurus[suurusNumber]+String(userInput)+"burger"+lisandid[lisandNumber];
    outputField.style.visibility = "visible";


    return 
}