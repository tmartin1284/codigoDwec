class Persona {
    //método constructor
    constructor(nombre, apellidos, anioNac) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._anioNac = anioNac
    }
    //podemos declarar métodos getters, setters...
    get anioNac() {
        return this._anioNac;
    }
}

const p1 = new Persona('Josefa', 'García', 1991)

//recorremos las propuedades de la persona p1:
for (prop in p1) {
    console.log(`${prop}: ${p1[prop]}`);
}