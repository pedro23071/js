/* variables: var, let, const */

/* var ambito global o funcional */
var nombre = 'test 123' 


mostrarNombre()
function mostrarNombre(){
    console.log(nombre, "dentro de la funcion con el mismo valor de afuera ")
    /* se puede reasignar el valor pero solo se toma el nuevo valor dentro de la funcion */
    nombre = 'test 321'
    console.log(nombre, "dentro de la funcion con valor reasignado ")
    /* variable solo disponible dentro de la funcion */
    var nombre2 = "test 321"
    console.log(nombre2, "variable nueva dentro de la funcion")
}

console.log(nombre, "fuera de la funcion con mismo valor")
