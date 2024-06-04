/* let ambito del bloque */


let pais = 'Mexico';
console.log(pais)

mostrarPais()
function mostrarPais(){
    console.log(pais, "dentro de la funcion")
}

if(pais === 'Mexico'){
    console.log(pais, "dentro de if ")
    let variableDentrodeBloque = 'variable dentro de un bloque'
    console.log(variableDentrodeBloque, '- Esta variable no esta disponible fuera del if')
}

