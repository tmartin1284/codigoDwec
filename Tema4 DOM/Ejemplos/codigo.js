const personajes =['billsjpeg', 'bobo', 'brolly', 'bubu', 'buhan', 'bulma', 'c18', 'cell', 'chau', 'cichi', 'freezer', 'gohan', 'goku', 'gotten', 'hero', 'karin', 'krilin', 'mutenroi', 'pam', 'piccolo', 'porunga', 'puer', 'shengon', 'tenshinhan', 'trunks', 'vegeta', 'videl', 'yamcha']

function UpperFirst(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
   }



//-------------------------------------------



document.title="pagi77na web de prueba";

/***
 * jugamos un poco con las propiedades del titulo etc
 * ***************/
console.log(document.getElementsByTagName("title")[0].text);
let titulo= document.getElementsByTagName("title")[0];
titulo.text="manolo, coñoo";
console.log("el titulo tiene nodos: "+titulo.childNodes.length);
console.log(titulo.firstChild.nodeValue)
titulo.firstChild.nodeValue="Ejemplo Daw";

console.log(titulo.nodeType);

// for (let propiedad in titulo){ 
//      console.log(propiedad + " tiene el valor de " + titulo[propiedad])
// }


titulo.setAttribute("id","485")
console.log (titulo.outerHTML) 

/*****
 * ahora obtenemos todos los cards que haya en el body
 * */

let cards=document.getElementsByClassName("card");
console.log (cards.length);
titulo.firstChild.nodeValue="Dragon Ball";

let i=0;
for (let card of cards){
     /* obtenemos la imagen del card, y cambiamos el atributo source
     */
     let img = card.getElementsByTagName("img")[0];
     img.src="./img/"+personajes[i]+".jpg";
     img.setAttribute("border", i);
     img.setAttribute("id", i);
     /* cambiamos el titulo y la descripción del elemento.
     Ojo porque añadimos una linea nueva a la descripción
     */
     let nombre=card.getElementsByTagName("h4")[0];
     nombre.firstChild.nodeValue=UpperFirst(personajes[i]);
     nombre.childNodes[0].nodeValue=UpperFirst(personajes[i]);
     console.log(nombre.childNodes[0].nodeValue);
    let descr=card.getElementsByTagName("p")[0];
     descr.firstChild.nodeValue="Descripción del personaje "+UpperFirst(personajes[i]);
     let descr2=descr.cloneNode(true);
    descr2.childNodes[0].nodeValue="segunda linea de la descripción de "+personajes[i];
     descr.parentNode.appendChild(descr2);
     i++;
     i=Math.floor(Math.random()*personajes.length);
     console.log(card.outerHTML);
}

/**notas
 * 
 * no confundir nunca text content con firstchild.nodeValue
 * 
 * children[] está obsoleto
 */



