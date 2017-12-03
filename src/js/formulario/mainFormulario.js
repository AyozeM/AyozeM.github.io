import {bdd,bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
import {escribePaises} from '../formulario/ciclos'
import {filtraPaisesCiclos} from '../formulario/paises';
let marco;
window.addEventListener("load",()=>{
    marco = document.querySelector("nav");

},false);

export const creaFormulario = () =>{
    creaMovilidades();
    creaToggle();
}

const creaMovilidades = ()=>{
    let movilidades = [];
    
        for(let key in bdd){
            if(!movilidades.includes(bdd[key].tipo)){
                movilidades.push(bdd[key].tipo);
            }
        }
        
        movilidades.map(e=>{
            document.querySelector("#movilidad").appendChild(crearElemento({
                etiqueta:"option",
                contenido:e,
                atributos:null,
                hijos:null
            }))
        });
};

const creaToggle = () =>{
    [].slice.call(document.querySelectorAll(`nav input[type="radio"]`)).map(e=>{
        e.addEventListener("change",()=>{
            if(document.querySelector(`nav #modificable`)!= null){
                marco.removeChild(document.querySelector(`nav #modificable`));
            }
            escribeHtml();
            e.value == 'paises'?escribePaises():filtraPaisesCiclos();
        });
    });
}
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
    }),document.querySelector("nav a"));
};