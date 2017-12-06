import {bdd,bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
import {escribePaises} from '../formulario/ciclos'
import {filtraPaisesCiclos} from '../formulario/paises';
let marco;
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

export const creaFormulario = () =>{
    creaMovilidades();
    creaToggle();
    filtraPaisesCiclos();
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
    document.querySelector('.toggle input[type="checkbox"]').addEventListener("change",e=>{
        if(document.querySelector(`nav #modificable`)!= null){
            marco.removeChild(document.querySelector(`nav #modificable`));
        }
        escribeHtml();
        e.currentTarget.checked?escribePaises():filtraPaisesCiclos();
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
    }),document.querySelector("nav p:last-of-type"));
};
