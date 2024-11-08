/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */


/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */


fetch('./data/heros.json')
  .then(response => {
    return response.json();
  })
  .then(jsondata => procesarJSON(jsondata))
  .catch(e => { console.log(e) });

function procesarJSON(jsondata) {
  const plantilla = document.getElementById("plantilla").content;
  const container = document.querySelector(".row");
  const heroes = jsondata.data.results;

  heroes.forEach(hero => {
    const newCard = plantilla.cloneNode(true);
    var add = true;

    if (!(newCard.querySelector("h2").textContent = hero.name)) add = false;

    if (hero.description) newCard.querySelector("p").textContent = hero.description;
    else   add = false;
    


    if (hero.thumbnail) {
      const imgSrc = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
      newCard.querySelector("img").setAttribute("src", imgSrc);
    } else add = false;


    if (add) container.appendChild(newCard);
  });
}