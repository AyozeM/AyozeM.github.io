/**
 * @module mainFormulario -> se encarga de gestionar el formulario
 */
import {bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
import {escribePaises} from '../formulario/paises'
import {filtraPaisesCiclos} from '../formulario/ciclos';
let marco;
/**
 * Evento que cambia los ciclos disponibles en funcion del grado seleccionado
 */
window.addEventListener("load",()=>{
    marco = document.querySelector("nav");
    document.querySelector("#movilidad").addEventListener("change",()=>{
        if(document.querySelector('.toggle input[type="checkbox"]:checked') == null){
            [].slice.call(document.querySelector("#modificable").children).map(e=>{
                e.parentElement.removeChild(e);
            })
            filtraPaisesCiclos();
        }
    },false);
},false);
/**
 * Crea todo el formulario
 */
export const creaFormulario = () =>{
    creaMovilidades();
    creaToggle();
    // La opcion que equivaldría al estado inicial del toogle
    filtraPaisesCiclos();
}
/**
 * Rellena los grado disponibles en funcion al JSON
 */
const creaMovilidades = ()=>{
    let movilidades = [];

    bddar.map(e=>{
        if(!movilidades.includes(e.tipo)){
            movilidades.push(e.tipo);
        }
    });
        movilidades.map(e=>{
            document.querySelector("#movilidad").appendChild(crearElemento({
                etiqueta:"option",
                contenido:e,
                atributos:null,
                hijos:null
            }))
        });
};
/**
 * Crea el evento controlador para el toogle
 */
const creaToggle = () =>{
    document.querySelector('.toggle input[type="checkbox"]').addEventListener("change",e=>{
        if(document.querySelector(`nav #modificable`)!= null){
            marco.removeChild(document.querySelector(`nav #modificable`));
        }
        escribeHtml();
        e.currentTarget.checked?escribePaises():filtraPaisesCiclos();
    });
}
/**
 * Escribe el marco de trabajo para la parte dinamica del formulario
 */
const escribeHtml = () =>{
    marco.insertBefore(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:[
            {
                nombre:"id",
                valor:"modificable"
            }
        ]
    }),document.querySelector("nav p:last-of-type"));
};
