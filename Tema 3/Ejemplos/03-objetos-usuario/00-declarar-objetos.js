//podemos declarar un objeto vacío e ir creando sus propiedades
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

//podemos crear directamente un objeto dando sus propiedades y métodos

const myCar2 = {
    make: 'Seat',
    model: '127',
    year: '1975'

}





//declaración de un objeto con propiedades y métodos
const persona = {
    nombre: 'juan',
    apellido: 'sin miedo',
    edad: 30,
    saludar: function () {
        //this es la palabra reservada para acceder a un valor del objeto
        console.log(`Me llamo ${this.nombre}`);
        console.log('Hola!');
    }
};

console.log(persona);
console.log(persona.edad);
persona.saludar();