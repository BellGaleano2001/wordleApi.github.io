let intentos=6;
//let diccionario = "APPLE";
let palabra= "APPLE";
const api= "https://random-word-api.herokuapp.com/word?number=1&length=5&lang=es";



window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}


fetch (api).then (response => response.json())
.then (response => {
        console.log(response[0].toUpperCase())
        palabra= response[0].toUpperCase()
       // console.log(palabra)
})
 .catch (err  => console.log(err) )

const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar);

//function elegirPalabra (){
   // let diccionario = ["APPLE", "ANGEL", "HOUSE", "HEART", "MOUSE", "PEARL", "SLEEP"]
   // const palabra= diccionario[Math.floor(Math.random() * diccionario.length)];

//}


function leerIntento(){
    let intento= document.getElementById("guess-input").value;
    //console.log(intento); 
    return intento.toUpperCase();
}


    function intentar(){
        
        const INTENTO = leerIntento();
        if (INTENTO === palabra ) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            terminar("<h1>¡GANASTE!😀</h1>");
            return;
        }

        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#a4aec4";
    }
    ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if (intentos==0){
        terminar("<h1>¡PERDISTE!😖</h1>")
    }
}

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
    

