/**
 * @module mapa -> se encarga de gestionar el mapa
 */
import {bddar} from '../bdd';
import { crearElemento } from '../libreriaDOM';
/**
 * Contenedor del mapa
 */
let map;
/**
 * Lista de marcadores creados
 */
let marcadores = [];
/**
 * Crea y dibuja el mapa en la web
 */
export const dibujaMapa = () =>{
    let mapOptions = {
        center: new google.maps.LatLng(55.8,9.5),
        zoom:4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    };
    map = new google.maps.Map(document.querySelector(`#mapa`),responsive(compruebaHora(mapOptions)));
    var s =3;
}
/**
 * Comprueba la hora que es y pone un estilo de noche al mapa (si fuera de noche)
 * @param {object} data - objeto de configuracion del mapa
 * @returns {object} - retorna el objeto modificado 
 */
const compruebaHora = data =>{
    let now = new Date();
    if(now.getHours()<7 || now.getHours()>21){
       data.styles = require('./nocturno.json');
    }
    return data;
}

/**
 * modifica el zoom y el centro del mapa en funcion del dispositivo
 * @param {object} datosMapa - opciones originales del mapa
 * @returns {object} - opciones modificadas del mapa
 */
const responsive = datosMapa =>{
    switch(true){
        case Modernizr.mq('(max-width: 320px)'):
        datosMapa.zoom = 3;
        datosMapa.center = new google.maps.LatLng(52.52000659999999,9.993681899999956);
        break;
        case Modernizr.mq('(max-width: 375px)'):
            datosMapa.zoom = 3;
            datosMapa.center = new google.maps.LatLng(59.32932349999999,18.068580800000063);
            break;
        case Modernizr.mq('(max-width: 414px)'):
            datosMapa.zoom = 4;
            datosMapa.center = new google.maps.LatLng(52.52000659999999,9.993681899999956);
            break;
        case Modernizr.mq('(min-width:768px)'):
            datosMapa.zoom = 4;
            datosMapa.center = new google.maps.LatLng(52.52000659999999,13.404953999999975);
            break;
    }
    return datosMapa;
}
/**
 * Crea un marcador en el mapa, ademas crea la animacion y el tooltip
 * @param {object} data - objeto contenedor de la longitud, a longitud y los ciclos de la ciudad
 */
export const creaMarcador = (data)=>{
    let coordenadas = new google.maps.LatLng(data.latitud,data.longitud)
    let marcador = new google.maps.Marker({
        position:coordenadas,
        map:map,
        title:data.nombre
    });
    let info = new google.maps.InfoWindow({
        content:`<strong>Ciclos:</strong><br>${data.ciclos.map(e=>`<li>${e}</li>`).toString().replace(/,/g,'')}`
    });
    google.maps.event.addListener(marcador,"click",()=>{
        //abre la ventana de informacion
        info.open(map,marcador);
        //acerca el mapa a la zona del marcador
        map.setZoom(12);
        map.setCenter(marcador.position);
        //añade y temporiza la animacion
        marcador.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(()=>{marcador.setAnimation(null);},750);
    },false);
    marcadores.push(marcador);
}
/**
 * Pone en el mapa los marcadores necesarios para los paises elegidos y el grado escogido
 */
export const porPaises = () => {
    limiparMapa();
    let x = [];
    [].slice.call(document.querySelectorAll("nav #modificable input:checked")).map(e=>{
        let pais = bddar.filter(y=>y.pais.nombre==e.value);
        pais = pais.filter(d=>d.tipo == document.querySelector("#movilidad").value);
        pais.map(s=>{
            let aux = {
                nombre:s.pais.ciudad.nombre,
                latitud:s.pais.ciudad.latitud,
                longitud:s.pais.ciudad.longitud,
                ciclos:[s.ciclo]
            };
            if(typeof(x.find(q=>q.nombre==aux.nombre)) == `undefined`){
                x.push(aux);
            }else{
                if(!x.find(q=>q.nombre==aux.nombre).ciclos.includes(aux.ciclos[0])){
                    x.find(q=>q.nombre==aux.nombre).ciclos.push(aux.ciclos[0]);
                }
            }
        });
    });
    dibujaMarcadores(x);
}
/**
 * Elimina todos los marcadores
 */
const limiparMapa = ()=>{
    let prototipo = {
        zoom:0,
        center:''
    }
    let original = responsive(prototipo);
    map.setZoom(original.zoom);
    map.setCenter(original.center)
    marcadores.map(e=>{
        e.setMap(null);
    });
}
/**
 * Pone en el mapa los marcadores necesarios para el ciclo escogido del grado escogido
 */
export const porClicos= () => {
    limiparMapa();
    let y = bddar.filter(e=>e.ciclo == document.querySelector("#modificable select").value);
    y = y.map(s=>{return s = {
        nombre:s.pais.ciudad.nombre,
        latitud:s.pais.ciudad.latitud,
        longitud:s.pais.ciudad.longitud,
        ciclos:[s.ciclo]
    }});
    dibujaMarcadores(y);
}
/**
 * Manda a crear los marcadores necesarios en funcion de los filtros
 * @param {array} datos - lista con las ciudades que concuerdan con los filtros
 */
const dibujaMarcadores = datos =>{
    datos.map(e=>{
        creaMarcador(e);
    })
}
