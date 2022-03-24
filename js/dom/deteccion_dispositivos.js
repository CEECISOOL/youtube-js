/* **********     Curso JavaScript: 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent - #jonmircha     ********** */
const d = document,
  n = navigator,
  ua= navigator.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
        isMobile = {   //para ver en que sistema operativo movil estamos
            android: () => ua.match(/android/i),
            ios: () =>  ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/),
            any: function () {
                return this.android() || this.ios() || this.windows();
            },
        },
        isDesktop = {  //para ver en que sistema operativo desktop estamos
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            },
        }, 
        isBrowser = {   //para ver en que navegador estamos
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function(){
                return(
                    this.ie()||
                    this.edge()||
                    this.chrome()||
                    this.safari()||
                    this.firefox()||
                    this.opera()
                );
            }
        };
    //console.log(ua); //muestra en la consola en que dispositivo estoy, informacion del dispositivo
    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li> 
            <li>Navegador: <b>${isBrowser.any()}</b></li> 
        </ul>
    `;
    //isMobile.any esta evaluando si dentro de la cadena de texto user agent hay alguna palabra que sea valida en el userAgent de los sistemas operativos moviles, entonces le decimos si es true que imprima el sistema operativo que detecto y si no es sistema operativo movil es un sistema operativo desktop

    //Contenido Exclusivo para cada
    if(isBrowser.chrome()){    //texto que le voy a poner al usuario solamente cuando este en chrome
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`

    };

    if(isBrowser.firefox()){    //texto que le voy a poner al usuario solamente cuando este en firefox
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`

    };

    if(isDesktop.windows()){    //texto que le voy a poner al usuario solamente cuando este en windows
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`

    };
}
