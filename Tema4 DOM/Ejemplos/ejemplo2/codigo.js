

/**
 * con esto leemos el archivo json. ahora mismo nos suena un poco raro.. usa dos promesas (asincronas etc)
 * de momento, sabed que esto funciona y ya esta
 * 
 * dentro de la función procesarJson, damos por supuesto que el archivo ya esta leido
 */





fetch('./data/team.json')
    .then(response => {
      return response.json();
    })
    .then(jsondata => procesarJSON(jsondata));

   
function procesarJSON (jsondata){

// console.log(jsondata);


for (data in jsondata.teams){
  let equipo = jsondata.teams[data];
  console.log(data +" = "+ equipo);


let card = document.createElement("div");
card.setAttribute("class","col-sm-6 col-md-4 col-xl-3");
let card2 = document.createElement("div");
card.setAttribute("class","card");
card.appendChild(card2);
document.getElementById("rowspantalla").appendChild(card);

/**
 * aqui empezamos a procesar el json 
 * y a crear los objetos que necesito para mostrar los datos
 *  
 * equipos (en el json)
 * 
 * "id": "1",
      "nombre": "1K FC",
      "abr": "1K",
      "escudo": "https://kingsleague-cdn.kama.football/account/production/team/image/398917228.png",
      "color": "#403893",
      "video": "https://kingsleague-cdn.kama.football/account/production/team/video/LOOP%20KINGS%201K%20FC_v1.mp4",
      "poster": "https://cms-es.kingsleague.pro/wp-content/uploads/2024/01/KL-1K.jpg",
      "presupuesto": "102",
      "nombrepresidente": "Iker Casillas",
      "imagenpresidente": "https://s3.eu-central-2.wasabisys.com/kingsleague-cdn.kama.football/account/production/staff/429468257.png",
      "nombreentrenador": "Juanjo Moreno",
      "imagenentrenador": "https://s3.eu-central-2.wasabisys.com/kingsleague-cdn.kama.football/account/production/staff/911257481.png"
    },
 */

    let card3=document.createElement("div");
    let img=document.createElement("img");
    let h5=document.createElement("h5");
    card2.setAttribute("id",equipo.nombre);
    card3.setAttribute("class","cardbody");








}

}