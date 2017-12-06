/**
 * @module ciclos -> se encarga de gestionar los filtros que tienen que ver con ciclos
 */
import { bddar } from '../bdd';
import { crearElemento } from '../libreriaDOM';
/**
 * Funcion principal que escribe el total de ciclos en funcion del grado seleccinado
 */
export const filtraPaisesCiclos = () =>{
    let paises = cambiaPaises(document.querySelector("#movilidad").value);
    document.querySelector("#modificable").appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:null,
        hijos:[
            {
                etiqueta:"span",
                contenido:"Ciclo por el que filtrar",
                atributos:null,
                hijos:null
            },
            {
                etiqueta:"select",
                contenido:null,
                atributos:null,
                hijos:null
            }
        ]
    }));
    paises.map(e=>{
        document.querySelector("#modificable select").appendChild(crearElemento({
            etiqueta:"option",
            contenido:e,
            atributos:null,
            hijos:null
        }));
    })
}
/**
 * Crea una lista con los ciclos acorde al la movilidad pasada por parametro
 * @param {String} movilidad - movilidad elegida por el usuario
 * @returns {array} retorna la lista de ciclos pedida
 */
const cambiaPaises = movilidad =>{ 
    let paises = [];
    bddar.filter(e=>e.tipo == movilidad).map(e=>{
        if(!paises.includes(e.ciclo)){
            paises.push(e.ciclo);
        }
    });
    return paises;
}