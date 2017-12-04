import {creaFormulario} from './formulario/mainFormulario';
import {dibujaMapa,creaMarcador,porPaises,limiparMapa,porClicos} from './mapa/mapa';
window.addEventListener("load",()=>{
    creaFormulario();
    dibujaMapa();
    document.querySelector("#ver").addEventListener("click",()=>{
        limiparMapa();
        if(document.querySelector("input[name='toggle']:checked").value == "paises"){
            porPaises().map(e=>{
                creaMarcador(e);
            });
        }else{
            porClicos().map(e=>{
                creaMarcador(e);
            })
        }
    },false);
},false);
