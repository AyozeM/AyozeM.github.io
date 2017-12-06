import {bdd,bddar} from '../bdd';
import {crearElemento} from '../libreriaDOM';

export let escribePaises = () =>{
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

<<<<<<< HEAD
let creaEstructura = () =>{
=======
const creaEstructura = () =>{
>>>>>>> vista
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
<<<<<<< HEAD
let creaHtml = (numero,nombre) =>{
=======
const creaHtml = (numero,nombre) =>{
>>>>>>> vista
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

<<<<<<< HEAD
let getPaises = () => {
=======
const getPaises = () => {
>>>>>>> vista
    let listaPaises = [];

    for(let key in bdd){
        if(!listaPaises.includes(bdd[key].pais.nombre)){
            listaPaises.push(bdd[key].pais.nombre);
        }
    }
    
    return listaPaises;
};