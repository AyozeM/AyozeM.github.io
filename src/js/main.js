import {bdd} from './bdd';
import {creaFormulario} from './formulario/main';
window.addEventListener("load",()=>{
    creaFormulario(bdd);
},false);
