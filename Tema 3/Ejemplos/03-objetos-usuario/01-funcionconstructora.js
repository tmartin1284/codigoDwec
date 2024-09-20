function Persona(nombre, apellido, fechaNac) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anioNac = fechaNac;
    this.getFechaNac = function () {
        return this.anioNac;
    }
}

//creamos una instancia del objeto Persona
const p1 = new Persona('Pepe', 'Pérez', 1975);

console.log(p1);
console.log(p1.getFechaNac());