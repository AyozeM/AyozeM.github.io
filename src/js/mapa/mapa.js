import {bddar, bdd} from '../bdd';
import { crearElemento } from '../libreriaDOM';
let map;
let marcadores = [];
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
    
    map = new google.maps.Map(document.querySelector(`#mapa`),mapOptions);
}
export const creaMarcador = (data)=>{
    let coordenadas = new google.maps.LatLng(data.latitud,data.longitud)
    let marcador = new google.maps.Marker({
        position:coordenadas,
        map:map,
        title:`<strong>Ciclos:</strong><br>${data.ciclos.map(e=>`<li>${e}</li>`).toString().replace(/,/g,'')}` 
    });
    let info = new google.maps.InfoWindow({
        content:marcador.title
    });
    google.maps.event.addListener(marcador,"click",()=>{
        info.open(map,marcador);
        marcador.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(()=>{marcador.setAnimation(null);},750);
    },false);
    marcadores.push(marcador);
}

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

export const limiparMapa = ()=>{
    marcadores.map(e=>{
        e.setMap(null);
    });
}
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

const dibujaMarcadores = datos =>{
    datos.map(e=>{
        creaMarcador(e);
    })
}