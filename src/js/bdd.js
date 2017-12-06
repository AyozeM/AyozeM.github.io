/**
 * @module  bdd -> se encarga de la informacion del JSON
 */
/**
 * Crea un array a partir de un objeto literal.
 * @param {object} objeto - JSON
 */
const objetToArray = objeto=>{
  let aux = [];
  for(let key in objeto){
    aux.push(bdd[key]);
  }
  return aux;
}
let bdd = require('./data/data.json');

export let bddar = objetToArray(bdd);
