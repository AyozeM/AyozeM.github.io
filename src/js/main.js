/**
 * @module main -> Se encarga de unir todos los modulos de la aplicacion
 */
import {creaFormulario} from './formulario/mainFormulario';
import {dibujaMapa,porPaises,porClicos} from './mapa/mapa';
/**
 * Carga los elementos necesarios a cargar la pagina
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