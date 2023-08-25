// Realice una funcion que dado un arreglo devuelva la suma de sus elementos

function sumaArray(arreglo) {

    let suma = 0;    
    for (let index = 0; index < arreglo.length; index++) {
        suma = arreglo[index] + suma;
    }

    return suma;
}

let miArreglo = [4,8,9,6,3];

let resultadoSuma = sumaArray(miArreglo);
console.log(resultadoSuma);

resultadoSuma = sumaArray([5,6,7,2]);
console.log(resultadoSuma);


// Modificamos la funcion anterior para que solo sume los valores mayores al dado
function sumaArrayMayor(arreglo, maximo) {

    let suma = 0;    
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > maximo)
            suma = arreglo[index] + suma;
    }

    return suma;
}

console.log(sumaArrayMayor([5,7,8], 6));


// crea una funcion que cargue un arreglo con N (cantidad) valores aleatorios

function randomArray(cantidad) {
    const array = [];
    for (let index = 0; index < cantidad; index++) {
        array[index] = Math.floor((Math.random() * 99) + 1);
    }

    return array;
}

console.log(randomArray(5));

