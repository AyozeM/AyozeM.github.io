import {bdd,bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
import {escribePaises} from '../formulario/ciclos'
import {filtraPaisesCiclos} from '../formulario/paises';
let marco;
window.addEventListener("load",()=>{
    marco = document.querySelector("nav");

},false);

export let creaFormulario = () =>{
    creaMovilidades();
    creaToggle();
    toogleCiclos();
}

let creaMovilidades = ()=>{
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

let creaToggle = () =>{
    [].slice.call(document.querySelectorAll(`nav input[type="radio"]`)).map(e=>{
        e.addEventListener("change",()=>{
            if(document.querySelector(`nav #modificable`)!= null){
                marco.removeChild(document.querySelector(`nav #modificable`));
            }
            e.value == 'paises'?tooglePaises():toogleCiclos();
        });
    });
}

let tooglePaises = ()=>{
    marco.appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:[
            {
                nombre:"id",
                valor:"modificable"
            }
        ]
    }));
    filtraPaisesCiclos();
}

let toogleCiclos = () =>{
    marco.appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:[
            {
                nombre:"id",
                valor:"modificable"
            }
        ],
        hijos:null
    }));
    escribePaises();
}