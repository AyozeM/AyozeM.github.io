import {creaFormulario} from './formulario/mainFormulario';
import {dibujaMapa,porPaises,limiparMapa,porClicos} from './mapa/mapa';

/**
 * Crea los elementos al cargar la pagina
 */
window.addEventListener("load",()=>{
    creaFormulario();
    dibujaMapa();
    document.querySelector("#ver").addEventListener("click",()=>{
        if(document.querySelector(`.toggle input[type="checkbox"]`).checked){
            porPaises();
        }else{
            porClicos();
        }
    },false);
},false);