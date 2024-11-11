fetch('http://localhost:3000/posts')
  .then(response => {
    return response.json();
  })
  .then(jsondata => procesarJSON(jsondata))
  .catch(e => { console.log(e) });

function procesarJSON(jsondata) {

     //mucho ojo, jsondata ya es una variable con el contenido json procesado. si intentamos procesarlo de nuevo, peta
const mostrar=document.getElementById("mostrar");


jsondata.forEach ( objeto => {
     const p =document.createElement("p");
     let texto="";
     for (let prop in objeto) texto=texto+ prop +": " + objeto[prop]+ "  ";
p.innerText=texto
mostrar.appendChild(p)
})



}



