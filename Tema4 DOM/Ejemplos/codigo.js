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
//podemos cambiar el titulo asi
titulo.text="manolo, coñoo";
console.log("el titulo tiene nodos: "+titulo.childNodes.length);
console.log(titulo.firstChild.nodeValue)
//o mucho más seguro asi
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


/***
 * 
 * si os fijais, la web inicial, tenia 8 cards y mostramos 8 usuarios.
 * 
 * que vamos a hacer ahora??
 * pues cogemos un card, el card0, lo guardamos como card de ejemplo, borramos todos los cards, 
 * y vamos anexando cards con todos y cada uno de los personajes, que tengo
 * 
 */


const rowCard= document.getElementsByClassName("row")[0]; //de 0, poqeue nos devuelve un array
let colCardModelo=rowCard.childNodes[0];
console.log(colCardModelo.nodeName);
i =0;
 //do colCardModelo=rowCard.childNodes[i++]; while (colCardModelo.nodeName!="DIV") //cojo el primer div que me encuentre

 console.log(colCardModelo);


// for (let col of rowCard.childNodes){  //fijaos aqui, que además de recuperar los 8 nodos div, me recupera los 8 espacios en blanco, como nodos de texto vacios

//      console.log(col.nodeName+ col.nodeType)
//      console.log(col.outerHTML)
// }
//      //rowCard.removeChild(col); // ahora elimino a todos los nodos. cuidado que me los cargo, salvo al primero, que esta guardado




