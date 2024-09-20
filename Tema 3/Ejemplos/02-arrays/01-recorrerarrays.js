//declaramos un array vacio

const a1 = new Array(5);

//podemos recorrer arrays de tres formas
//vamos a recorrerlo para inicializarlo del modo tradicional con un for con contador:
//tenemos que hacer uso de la propiedad lenght para saber el número de elementos

for (let i = 0; i < a1.length; i++) {
    a1[i] = i * 10;
}


//Podemos recorrerlo con el  tradicional bucle for

for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}

//ahora vamos a recorrerlo pero con un bucle for_of (ES6)

for (num of a1) {
    console.log(num);
}

//También podemos recorrerlo con un forEach

a1.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
})



//una cadena tambien se puede recorrer como un array de caracteres:

const cadena = "HOLA MUNDO";

for (car of cadena) {
    console.log(car);
}