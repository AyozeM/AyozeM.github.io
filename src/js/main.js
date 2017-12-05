import {creaFormulario} from './formulario/mainFormulario';
import {dibujaMapa,porPaises,limiparMapa,porClicos} from './mapa/mapa';
window.addEventListener("load",()=>{
    creaFormulario();
    dibujaMapa();
    document.querySelector("#ver").addEventListener("click",()=>{
        if(document.querySelector(`input[type="checkbox"]`).checked){
            porPaises();
        }else{
            porClicos();
        }
    },false);
},false);
