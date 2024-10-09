

/**
 * con esto leemos el archivo json. ahora mismo nos suena un poco raro.. usa dos promesas (asincronas etc)
 * de momento, sabed que esto funciona y ya esta
 * 
 * dentro de la función procesarJson, damos por supuesto que el archivo ya esta leido
 */





fetch('./data/heros.json')
    .then(response => {
      return response.json();
    })
    .then(jsondata => procesarJSON(jsondata));

   
function procesarJSON (jsondata){

console.log(jsondata);


}