/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
/*hago la importacion*/
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopBottom from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtros_busqueda.js";

const d = document; /*guardamos document*/

d.addEventListener("DOMContentLoaded", e =>{  /*aplico al documento el evento DOMContentLoaded se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los submarcos terminen de cargarse, este evento representa la carga del documento. Dentro de este evento ejecuto la funcion de hamburgerMenu*/

    hamburgerMenu(".panel-btn" , ".panel" , ".menu a"); /*la funcion recibe como primer parametro el nombre del selector que esta en el HTML que me va hacer funcionar el boton, entonces le decimos el boton es un selector que se llama .panel-btn. La segunda variable es el elemento que vamos a mover que es el selector panel(es el aside que tiene la clase panel)*/

    digitalClock("#reloj" , "#activar-reloj" , "#desactivar-reloj");

    alarm("assets/alarma.mp3" , "#activar-alarma" , "#desactivar-alarma");

    countdown("countdown" , "May 19, 2022 01:00:00" , "Feliz cumpleaños");

    scrollTopBottom(".scroll-top-btn");

    responsiveMedia("youtube" , "(min-width : 1024px)" , `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener">Ver video</a>` , `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    responsiveMedia("gmaps" , "(min-width : 1024px)" , `<a href= "https://goo.gl/maps/dfgiC3D2pTUw6S8r6" target="_blank" rel="noopener">Ver mapa</a>` ,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.01688788953!2d-58.38375908519529!3d-34.60373446500512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1647973807507!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>` );

    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");  

    webCam("webcam");

    getGeolocation("geolocation");

    searchFilters(".card-filter" , ".card");
});

d.addEventListener("keydown" , e =>{   //keydown es el evento cuando presiono una tecla, el keyup es cuando soltamos la tecla, keypress es mientras tengamos presionamos la tecla se va ejecutar
    shortcuts(e);
    
    moveBall(e, ".ball" , ".stage");
});


darkTheme(".dark-theme-btn" , "dark-mode");

networkStatus();


