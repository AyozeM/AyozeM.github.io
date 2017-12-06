import { bdd , bddar } from '../bdd';
import { crearElemento } from '../libreriaDOM';

<<<<<<< HEAD
window.addEventListener("load",()=>{
    document.querySelector("#movilidad").addEventListener("change",()=>{
        [].slice.call(document.querySelector("#modificable").children).map(e=>{
            e.parentElement.removeChild(e);
        })
        filtraPaisesCiclos();
    },false);
},false);

export let filtraPaisesCiclos = () =>{
=======
export const filtraPaisesCiclos = () =>{
>>>>>>> vista
    let paises = cambiaPaises(document.querySelector("#movilidad").value);
    document.querySelector("#modificable").appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:null,
        hijos:[
            {
<<<<<<< HEAD
                etiqueta:"label",
                contenido:null,
                atributos:[
                    {
                        nombre:"for",
                        valor:"ciclos"
                    }
                ],
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
=======
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
>>>>>>> vista
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

<<<<<<< HEAD
let cambiaPaises = movilidad =>{ 
=======
const cambiaPaises = movilidad =>{ 
>>>>>>> vista
    let paises = [];
    bddar.filter(e=>e.tipo == movilidad).map(e=>{
        if(!paises.includes(e.ciclo)){
            paises.push(e.ciclo);
        }
    });
    return paises;
}