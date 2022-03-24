/* **********     Curso JavaScript: 81. DOM: Ejercicios Prácticos | Menú de Hamburguesa - #jonmircha     ********** */
export default function hamburgerMenu(panelBtn, panel, menuLink){ /*exportar por default una funcion, para que funcione esta funcion necesita el boton que activa(panelBtn) y tambien necesita el panel que es el elemento que vamos a mover. Le agregamos un tercer parametro que hace referencia a un link del menu(es como para que cuando el aprete una opcion del menu se cierre el menu y no tenga que presionar el boton)*/
const d = document; /*guardamos el document*/

d.addEventListener("click" , e =>{  /*vamos asignar mediante la delegacion de evento el evento click al document*/
if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){  /*si el objeto que origina el evento coincide con panelBtn, o cualquier elemento hijo(por eso utilizamos el *), cuando se pulse cualquiera de los dos va desencadenar ese intercambio de clases*/
    d.querySelector(panel).classList.toggle("is-active")  /*buscamos por selector que tenga de nombre lo que esta en el segundo parametro(panel), entramos a su lista de clases y utilizamos el metodo toggle para intercambiar esa clase por is-active*/
    d.querySelector(panelBtn).classList.toggle("is-active")/*la libreria que usamos nos permite hacer que el boton se anime(o sea que tenga el boton de hamburguesa y una cruz para cerrar el menu de boton hamburguesa, y para hacerle eso tenemos que agregarle la clase is-active tambien(lo dice la pagina de la libreria)*/
}

if(e.target.matches(menuLink)){ /*si el objeto que origina el evento coincide con menuLink */
/*no hacemos un intercambio de clases, lo que vamos hacer es hacer un remove y se lo hacemos tanto al panelBtn para que regrese de la cruz a linea(boton hamburguesa) y se lo hacemos al panel para que se oculte, utilizamos las mismas lineas de codigo lo unico que cambiamos toggle por remove*/
    d.querySelector(panel).classList.remove("is-active")  
    d.querySelector(panelBtn).classList.remove("is-active")
   }
  });
}