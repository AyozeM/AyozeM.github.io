/**
 * @module paises -> se encarga de gestionar los filtros que tienen que ver con paises
 */
import {bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
/**
 * Funcion principal que escribe el total de paises con movilizaciones erasmus
 */
export const escribePaises = () =>{
    let i = 0;
    creaEstructura();
    getPaises().map(e=>{
        i++;
        creaHtml(i,e);
    });
    document.querySelector("nav #modificable #todos").addEventListener("change",()=>{
        if(document.querySelector("#todos").checked){
            [].slice.call(document.querySelectorAll("#modificable input")).map(e=>e.checked=true);
        }else{
            [].slice.call(document.querySelectorAll("#modificable input")).map(e=>e.checked=false);
        }
    },false);
    
    [].slice.call(document.querySelectorAll("#modificable p:nth-child(n+2) input")).map(e=>{
        e.addEventListener("change",()=>{
            document.querySelector("#todos").checked = false;
        },false);
    });
};
/**
 * Crea la estructura inical html necesaria para escribir los paises.
 */
const creaEstructura = () =>{
    document.querySelector(`nav #modificable`).appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:null,
        hijos:[{
            etiqueta:"label",
            contenido:null,
            atributos:[{
                nombre:"for",
                valor:"todos"
            }],
            hijos:[
                {
                    etiqueta:"input",
                    contenido:null,
                    atributos:[
                        {
                            nombre:"id",
                            valor:"todos"
                        },
                        {
                            nombre:"type",
                            valor:"checkbox"
                        },
                        {
                            nombre:"name",
                            valor:"paises"
                        },
                        {
                            nombre:"value",
                            valor:"todos"
                        }
                    ],
                    hijos:null
                },
                {
                    etiqueta:"span",
                    contenido:"Todos",
                    atributos:null,
                    hijos:null
                }
            ]
        }]
    }));
};
/**
 * inserta un pais con los datos enviados
 * @param {number} numero - numero de iteracion del bucle
 * @param {string} nombre - nombre del pais iterado
 */
const creaHtml = (numero,nombre) =>{
    document.querySelector(`nav #modificable`).appendChild(crearElemento({
        etiqueta:"p",
        contenido:null,
        atributos:null,
        hijos:[
            {
                etiqueta:"label",
                contenido:null,
                atributos:[
                    {
                        nombre:"for",
                        valor:`pais${numero}`
                    },
                ],
                hijos:[
                    {
                        etiqueta:"input",
                        contenido:null,
                        atributos:[
                            {
                                nombre:`id`,
                                valor:`pais${numero}`
                            },
                            {
                                nombre:"type",
                                valor:`checkbox`
                            },
                            {
                                nombre:"name",
                                valor:"paises"
                            },
                            {
                                nombre:"value",
                                valor:nombre
                            }
                        ]
                    },
                    {
                        etiqueta:"span",
                        contenido:nombre,
                        atributos:null,
                        hijos:null
                    }
                ]
            }
        ]
    }));
};
/**
 * Obtiene los paises existentes en el archivo JSON
 * @returns {array} lista de paises
 */
const getPaises = () => {
    let listaPaises = [];

    bddar.map(e=>{
        let aux = e.pais.nombre;
        if(!listaPaises.includes(aux)){
            listaPaises.push(aux);
        }
    });
    return listaPaises;
};