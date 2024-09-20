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

//creación de un objeto por instanciación.
const p1 = new Persona('Leire', 'García', 1980);

console.log(p1);
console.log(p1.anioNac);