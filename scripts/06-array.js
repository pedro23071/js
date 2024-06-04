let frutas = ["Manzana", "Banana", "Naranja"];

// Añadir elementos
frutas.push("Mango");
console.log(frutas); // ["Manzana", "Banana", "Naranja", "Mango"]

// Eliminar el último elemento
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "Mango"
console.log(frutas); // ["Manzana", "Banana", "Naranja"]

// Eliminar el primer elemento
let primeraFruta = frutas.shift();
console.log(primeraFruta); // "Manzana"
console.log(frutas); // ["Banana", "Naranja"]

// Añadir elementos al principio
frutas.unshift("Fresa");
console.log(frutas); // ["Fresa", "Banana", "Naranja"]

// Obtener la longitud del array
console.log(frutas.length); // 3

// Obtener el índice de un elemento
let indice = frutas.indexOf("Banana");
console.log(indice); // 1

// Crear una copia de una porción del array
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ["Banana", "Naranja"]

// Modificar el contenido del array
frutas.splice(1, 1, "Kiwi");
console.log(frutas); // ["Fresa", "Kiwi", "Naranja"]

// Ejecutar una función en cada elemento
frutas.forEach(function(fruta) {
    console.log(fruta);
});
// "Fresa"
// "Kiwi"
// "Naranja"

// Crear un nuevo array con los resultados de una función
let frutasEnMayusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log(frutasEnMayusculas); // ["FRESA", "KIWI", "NARANJA"]

// Crear un nuevo array con elementos que pasen una prueba
let frutasConA = frutas.filter(function(fruta) {
    return fruta.includes("a");
});
console.log(frutasConA); // ["Naranja"]

// Reducir el array a un único valor
let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual;
}, 0);
console.log(suma); // 15
