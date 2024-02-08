//se reemplaza este bloque al utlizar la funcion "asignarTextoElemento()"
// let parrafo = document.querySelector("p")
// parrafo.innerHTML="Indica un numero del 1 al 10"

let numeroSecreto =0;
let contador =0;
let listaNumeroSectro = [];
let numeroMaximo = 5;
// console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) { //esta funcion selecciona y modifica el contenido de un elemento HTML
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroDeUsuario==numeroSecreto);
    
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento("p",`acertaste el numero secreto en ${contador} ${(contador== 1) ? "vez":"veces"}`)
        document.getElementById("reiniciar").removeAttribute(`disabled`)

    }else{
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p",`el numero secreto es menor`)
        }else{
            asignarTextoElemento("p", "el numero secreto es mayor")
        }
        contador++;
        console.log(contador);
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // let valorCaja = document.querySelector(`#valorUsuario`);
    // valorCaja.value="";

    let valorCaja = document.querySelector(`#valorUsuario`).value =""; //forma reducida
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSectro);
    //si ya sorteamos todos los numeros mostramos un mensjae
    if(listaNumeroSectro.length == numeroMaximo){

        asignarTextoElemento("p","ya se sortearon todos los numeros posibles")

    }else{
        //si el numero esta incluido en la lista no se utiliza
        if (listaNumeroSectro.includes(numeroGenerado)) {
        
            return generarNumeroSecreto();

        }else{
        
            listaNumeroSectro.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function CondicionesIniciales() {
    asignarTextoElemento(`h1`,`Juego del numero secreto prueba`)
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}!`)
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
    
}
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //limpiar mensaje de intervalo de numero
    //Generar nuevo nuemero secreto
    //inicializar numero de intentos
    CondicionesIniciales()
    //desabilitar boton de "juego nuevo"
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
}

CondicionesIniciales();

