/**
 * @module libreriaDOM -> se encarga de crear elementos html
 */
/**
 * Crea elementos html a partir de un objeto definido
 * @param {object} elemento - definicion de la etiqueta html que se quiere crear
 * El objeto tendra 4 claves, etiqueta,contenido,atributos e hijos.
 * Etiqueta --> sera un string con el nombre de la etiqueta,
 * Contenido --> sera un string con el contenido de la etiqueta.
 * Atributos --> sera un array de objetos con 2 claves, nombre(sera un string con el nombre), valor(sera un string con el valor),
 * Hijos --> sera un array de objetos (de este mismo tipo de objeto)
 */
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