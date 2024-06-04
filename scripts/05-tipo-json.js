let persona = {
    nombre: "Pedro",
    edad: 30,
    profesion: "Desarrollador web"
};

// Obtener claves del objeto
let claves = Object.keys(persona);
console.log(claves); // ["nombre", "edad", "profesion"]

// Obtener valores del objeto
let valores = Object.values(persona);
console.log(valores); // ["Pedro", 30, "Desarrollador web"]

// Obtener entradas (pares clave-valor) del objeto
let entradas = Object.entries(persona);
console.log(entradas); // [["nombre", "Pedro"], ["edad", 30], ["profesion", "Desarrollador web"]]

// Asignar propiedades de un objeto a otro
let destino = {};
let fuente1 = { a: 1 };
let fuente2 = { b: 2 };
Object.assign(destino, fuente1, fuente2);
console.log(destino); // { a: 1, b: 2 }

// Congelar un objeto
let objCongelado = Object.freeze(persona);
objCongelado.edad = 35; // No tendrá efecto
console.log(objCongelado.edad); // 30

// Sellar un objeto
let objSellado = Object.seal(persona);
objSellado.edad = 35; // Esto funciona
delete objSellado.profesion; // No tendrá efecto
console.log(objSellado); // { nombre: "Pedro", edad: 35, profesion: "Desarrollador web" }

// Obtener todas las propiedades (enumerables o no) del objeto
let todasPropiedades = Object.getOwnPropertyNames(persona);
console.log(todasPropiedades); // ["nombre", "edad", "profesion"]
