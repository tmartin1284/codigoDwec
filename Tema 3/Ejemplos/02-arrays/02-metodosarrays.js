const lenguajes = new Array('CSS', 'JavaScript', 'HTML', 'hph');
const frameworks = new Array('React', 'Vue', 'Angular.js');


console.log(lenguajes);
lenguajes.reverse();
console.log(lenguajes);
lenguajes.sort();
console.log(lenguajes);


const tecnologias = lenguajes.concat(frameworks);
console.log(lenguajes);
console.log(tecnologias);

tecnologias.push('Webpack');
console.log(tecnologias);


const tecnologiasCsv = tecnologias.join(',');
console.log(tecnologiasCsv);

tecnologias.pop();

console.log(tecnologias);