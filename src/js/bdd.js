const objetToArray = objeto=>{
  let aux = [];
  for(let key in objeto){
    aux.push(bdd[key]);
  }
  return aux;
}

let bdd = require('./data/data.json');

let bddar = objetToArray(bdd);

export{bdd,bddar};
