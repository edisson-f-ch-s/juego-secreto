// let  parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un Número del 1 al 10';

let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo =10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El ususario no acertó.
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p', `El número secreto es Menor`)
        } else{
            asignarTextoElemento('p', 'El número secreto es Mayor')
        }
        intentos++;
        limpiarCaja();
    }
return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento("p", `Indica un Número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio nuevamente
    // Inicializar el número de intetos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')


}

condicionesIniciales();

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si el numeor generado esta incluido en la lista
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los núemros posibles')
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); 
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    } 
    }

}

function decirHola(){
    return console.log("¡Hola, mundo!");
}

//Funcion que recibe un nombre como parametro y muestre "Hola, [nombre]"  en la consola.
function saludar(nombre) {
   return console.log("Hola, " + nombre);
}

