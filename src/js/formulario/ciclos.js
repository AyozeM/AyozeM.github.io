import {bdd,bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';
let marco;
window.addEventListener("load",()=>{
    marco = document.querySelector("nav #modificable");

},false);
export let escribePaises = () =>{
    let i = 0;
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
    getPaises().map(e=>{
        i++;
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
                            valor:`pais${i}`
                        },
                    ],
                    hijos:[
                        {
                            etiqueta:"input",
                            contenido:null,
                            atributos:[
                                {
                                    nombre:`id`,
                                    valor:`pais${i}`
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
                                    valor:e
                                }
                            ]
                        },
                        {
                            etiqueta:"span",
                            contenido:e,
                            atributos:null,
                            hijos:null
                        }
                    ]
                }
            ]
        }))
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

let getPaises = () => {
    let listaPaises = [];

    for(let key in bdd){
        if(!listaPaises.includes(bdd[key].pais.nombre)){
            listaPaises.push(bdd[key].pais.nombre);
        }
    }
    
    return listaPaises;
};