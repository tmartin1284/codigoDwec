

fetch('./data/team.json')
  .then(response => {
if (!response.ok)
     throw new Error('La API peta');
    return response.json();
  })
  .then(jsondata => procesarJSON(jsondata))
  .catch(e => { console.log(e) });



const imgURL = "https://media.gettyimages.com/vectors/programming-projection-vector-id483586453?s=2048x2048"
const contenido = document.querySelector(".contenido");
const btn = document.getElementById("btn");
