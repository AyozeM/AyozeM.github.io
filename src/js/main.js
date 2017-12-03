import {bdd} from './bdd';
import {creaFormulario} from './formulario/mainFormulario';
window.addEventListener("load",()=>{
    creaFormulario(bdd);
},false);
