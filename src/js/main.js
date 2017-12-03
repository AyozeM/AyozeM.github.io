import {creaFormulario} from './formulario/mainFormulario';
import {dibujaMapa,creaMarcador,porPaises,limiparMapa} from './mapa/mapa';
window.addEventListener("load",()=>{
    creaFormulario();
    dibujaMapa();
    document.querySelector("#ver").addEventListener("click",()=>{
        limiparMapa();
        porPaises().map(e=>{
            creaMarcador(e);
        });
    },false);
},false);
