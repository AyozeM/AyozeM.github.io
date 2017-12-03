//Funcion para crear elementos html (Generico)
export function crearElemento(elemento){
    var element = document.createElement(elemento.etiqueta);
    var elementText;
    if(elemento.contenido != null){
        elementText = document.createTextNode(elemento.contenido);
    }else{
        elementText = document.createTextNode("");
    }
    element.appendChild(elementText);
    if(elemento.hijos != null){
        elemento.hijos.map(function(e){
                element.appendChild(crearElemento(e));            
        });
    }
    if(elemento.atributos != null){
        elemento.atributos.map(e=>element.setAttribute(e.nombre,e.valor));
    }
    return element;
}