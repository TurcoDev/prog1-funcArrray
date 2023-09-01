/*
 Ej2:
 La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escriba una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

*/


function solveQuadEquation(a, b, c) {
    let adentroDeRaiz = parseInt(b * b - 4 * a * c);
    let suma;
    let resta;
    
    if (adentroDeRaiz < 0) {
        console.log("No posee solucion");
    } else if (adentroDeRaiz == 0){
        console.log(-b / (2 * a));
    } else {
        suma = ((-b + Math.sqrt(adentroDeRaiz)) / (2 * a))
        resta = ((-b - Math.sqrt(adentroDeRaiz)) / (2 * a))
        console.log(suma, resta);
    }        

    // let resultadosEquacioncuadratica = [suma, resta] 
    // return resultadosEquacioncuadratica;
}


solveQuadEquation(1, 4, 4);
solveQuadEquation(1, -1, -2);
solveQuadEquation(1, 7, 12);
solveQuadEquation(1, 0, -4);
solveQuadEquation(1, -1, 0);


/**
 Declare un nombre de función addItem. Toma un parámetro de elemento y devuelve un arreglo después de agregar el elemento (no utilice métodos de arreglos)
 */

function addItem(element, array) {
    array[array.length] = element;
    // return array;        
}

let arreglo = [5, 7, 9, 2];
// console.log(addItem(3, arreglo));
addItem(3, arreglo);
console.log(arreglo);

/*
 Realice una funcion que dado un string y un caracter devuelva un substring a partir del caracter dado.
 */

function truncar(caracter, cadena) {
    let truncado = '';
    let encontrado = false;
    for (let index = 0; index < cadena.length; index++) {
         if (cadena[index] == caracter || encontrado) {
            truncado += cadena[index];
            encontrado = true;
         }       
    }
    return truncado;
}


console.log(truncar('m', 'Hola como estas'));







