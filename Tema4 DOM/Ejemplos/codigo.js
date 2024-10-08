


document.title="pagi77na web de prueba";
// console.log(document.getElementsByTagName("title")[0].text);
// let titulo= document.getElementsByTagName("title")[0];
// titulo.text="manolo, coñoo";
// console.log(titulo.nodeType);

// for (let propiedad in titulo){ 
//      console.log(propiedad + " tiene el valor de " + titulo[propiedad])
// }

// titulo.setAttribute("title","hola a todos")
// titulo.setAttribute("id","485")
// titulo.setAttribute("title","hola a todos")
// console.log (titulo.outerHTML) 

let cards=document.getElementsByClassName("card");
console.log (cards.length);
let i=0;

const personajes =['billsjpeg', 'bobo', 'brolly', 'bubu', 'buhan', 'bulma', 'c18', 'cell', 'chau', 'cichi', 'freezer', 'gohan', 'goku', 'gotten', 'hero', 'karin', 'krilin', 'mutenroi', 'pam', 'piccolo', 'porunga', 'puer', 'shengon', 'tenshinhan', 'trunks', 'vegeta', 'videl', 'yamcha']

for (let card of cards){
     let img = card.getElementsByTagName("img")[0];
img.src="./img/"+personajes[i]+".jpg"


}

