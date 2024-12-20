const personajes = [
  "billsjpeg",
  "bobo",
  "brolly",
  "bubu",
  "buhan",
  "bulma",
  "c18",
  "cell",
  "chau",
  "cichi",
  "freezer",
  "gohan",
  "goku",
  "gotten",
  "hero",
  "karin",
  "krilin",
  "mutenroi",
  "pam",
  "piccolo",
  "porunga",
  "puer",
  "shengon",
  "tenshinhan",
  "trunks",
  "vegeta",
  "videl",
  "yamcha",
];

function UpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//-------------------------------------------

document.title = "pagina web de prueba";

/***
 * jugamos un poco con las propiedades del titulo etc
 * ***************/
console.log(document.getElementsByTagName("title")[0].text);
let titulo = document.getElementsByTagName("title")[0];
//podemos cambiar el titulo asi
titulo.firstChild.nodeValue = "Fonso vente";
console.log("el titulo tiene nodos: " + titulo.childNodes.length);
console.log(titulo.firstChild.nodeValue);
//o mucho más seguro asi
titulo.firstChild.nodeValue = "Ejemplo Daw";

let link = document.createElement("link"),
  oldLink = document.getElementById("dynamic-favicon");
link.id = "dynamic-favicon";
link.rel = "shortcut icon";
link.href = "./img/bola.jpg";
if (oldLink) {
  document.head.removeChild(oldLink);
}
document.head.appendChild(link);
titulo.setAttribute("id", "485");
console.log(document.head.outerHTML);




 console.log(titulo.nodeType);

// for (let propiedad in titulo){
//      console.log(propiedad + " tiene el valor de " + titulo[propiedad])
// }


// /*****
//  * ahora obtenemos todos los cards que haya en el body
//  * */

let cards = document.getElementsByClassName("card");
console.log(cards.length);
titulo.firstChild.nodeValue = "Dragon Ball";

let i = 0;
for (let card of cards) {
  /* obtenemos la imagen del card, y cambiamos el atributo source
   */
  let img = card.getElementsByTagName("img")[0];  
  img.src = "./img/" + personajes[i] + ".jpg"; 
  img.setAttribute("src", "./img/" + personajes[i] + ".jpg");//ojo, lo podemos hacer asi, o con el set attribute. mas abajo uso el otro
  img.setAttribute("border", i);
  img.setAttribute("id", i);
  /* cambiamos el titulo y la descripción del elemento.
     Ojo porque añadimos una linea nueva a la descripción
     */
  let nombre = card.getElementsByTagName("h4")[0];
  nombre.firstChild.nodeValue = UpperFirst(personajes[i]);
  nombre.childNodes[0].nodeValue = UpperFirst(personajes[i]);
  console.log(nombre.childNodes[0].nodeValue);
  let descr = card.getElementsByTagName("p")[0];
  descr.firstChild.nodeValue =
    "Descripción del personaje " + UpperFirst(personajes[i]);
  let descr2 = descr.cloneNode(true);
  descr2.childNodes[0].nodeValue =
    "segunda linea de la descripción de " + personajes[i];
  descr.parentNode.appendChild(descr2);
  i++;
  i = Math.floor(Math.random() * personajes.length);
  console.log(card.outerHTML);
}

// /**notas
//  *
//  * no confundir nunca textContent con firstchild.nodeValue
//  *
//  * children[] está obsoleto
//  */

// /***
//  *
//  * si os fijais, la web inicial, tenia 8 cards y mostramos 8 usuarios.
//  *
//  * que vamos a hacer ahora??
//  * pues cogemos un card, el card0, lo guardamos como card de ejemplo, borramos todos los cards,
//  * y vamos anexando cards con todos y cada uno de los personajes, que tengo
//  *
//  */

const rowCard = document.getElementsByClassName("row")[0]; //de 0, poqeue nos devuelve un array
let colCardModelo = rowCard.childNodes[0];
console.log(rowCard.childNodes);
i = 1;
while (colCardModelo.nodeName != "DIV") colCardModelo = rowCard.childNodes[i++]; //cojo el primer div que me encuentre

while (rowCard.firstChild) {
  rowCard.removeChild(rowCard.lastChild);
}
console.log(colCardModelo);

// /**
//  * ahora creamos una copia del colCardModelo, con el metodo que hay, le cambiamos los valores, y lo appendemos a los hijos del rowcard, todo dentro de un for
//  * 
//  * quien controla al for, pues los personajes de dragon vall que ya tenemos
//  * 
//  * copia:
//  *                  <div class="card">
//                         <img class="card-img-top" src="./img/hero.jpg" alt="Title" border="14" id="14">
//                         <div class="card-body">
//                             <h4 class="card-title">Hero</h4>
//                             <p class="card-text">Descripción del personaje Hero</p>
//                         <p class="card-text">segunda linea de la descripción de hero</p></div>
//                     </div>
//  * 
//  * 
//  */

// /**
//  * añadimos un audio en el footer
//  *
//  *
//  */

let audio = document.createElement("audio");
audio.setAttribute(
  "src",
"./img/musica.mp3");
audio.setAttribute("loop", true);
audio.setAttribute("controls", false);
audio.setAttribute("autoplay", true);

//document.getElementsByTagName("footer")[1].appendChild(audio);


document.getElementsByTagName("footer")[0].appendChild(audio);
console.log(document.getElementsByTagName("footer")[0]);



for (let personaje of personajes) {
  let copia = colCardModelo.cloneNode(true); //importante, crear una copia cada vez
  let imagen = copia.getElementsByTagName("img")[0]; //primero la imagen
  imagen.setAttribute("src", "./img/" + personaje + ".jpg");
  imagen.setAttribute("alt", "Imagen de " + personaje);
  imagen.setAttribute("border", 0);
  imagen.setAttribute("id", personaje);

  // ahora vamos con los pies de foto, tal y como está en el otro bucle
  let nombre = copia.getElementsByTagName("h4")[0];
  nombre.childNodes[0].nodeValue = UpperFirst(personaje);
  let descr = copia.getElementsByTagName("p")[0];
  descr.firstChild.nodeValue =
    "Descripción del personaje " + UpperFirst(personaje);
  let descr2 = copia.getElementsByTagName("p")[1];
  descr2.childNodes[0].nodeValue = "más descripción de " + personaje;
  if (personaje == "goku") {
    // es el mejor
    nombre.style.color = "lightblue";
    descr.style.color = "lightblue";
    descr2.style.color = "lightblue";
    copia.style.color = "red";
  }
  //y lo más importante, el objeto copia, lo metemos en el row card
  rowCard.appendChild(copia);
}




const a = document.createElement("a");
//cuidadiinn joorrlll, que estamos con un literal de cadena
const archivo = new Blob([`
<!doctype html>
<html lang="en">
`+ document.head.outerHTML + `




<!-- Todo lo que viene ahora lo has creado tu solit@ con javascript y jugando con el DOM
     y esto solo la punta del iceberg de todo lo que vas a crear!!!
     venga! vamos a por ello  -->








`+ document.body.outerHTML + `
</html>`], { type: 'html' });
const url = URL.createObjectURL(archivo);
a.href = url;
a.download = "statico.html";
a.innerHTML = "descarga el htlm que has creado con js y el dom"
document.getElementsByTagName("footer")[0].appendChild(a);
