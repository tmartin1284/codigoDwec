


document.title="pagi77na web de prueba";
console.log(document.getElementsByTagName("title")[0].text);
let titulo= document.getElementsByTagName("title")[0];
titulo.text="manolo, coñoo";
console.log(titulo.nodeType);

for (let propiedad in titulo){ 
     console.log(propiedad + " tiene el valor de " + titulo[propiedad])
}

titulo.setAttribute("title","hola a todos")
titulo.setAttribute("id","485")
titulo.setAttribute("title","hola a todos")
console.log (titulo.outerHTML)

/*

const cards= document.getElementsByClassName("card");

let contador =0;

for (cars in cards){
const titulo=card.getElementsByClassName("card-tittle")
titulo.getElementsByClassName
}

*/