

/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */


/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */


fetch('./data/team.json')
  .then(response => {
    return response.json();
  })
  .then(jsondata => procesarJSON(jsondata))
  .catch(e => {console.log(e)});


function procesarJSON(jsondata) {



//tu codigo aqui










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



}

