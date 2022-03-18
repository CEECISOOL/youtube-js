/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model 
 https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API 
 https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model 
 
console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); 


*/

/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
/* console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document); //me devuelve el cuerpo de la pagina HTML mas el tipo de documento(doctype)
console.log(document.head); //me devuelve solo la parte de la cabeza del html
console.log(document.body); //me devuelve solo la parte de lo que tenemos escrito en el body del html
console.log(document.documentElement); //me devuelve la el cuerpo de la pagina html solamente
console.log(document.doctype); //me devuelve el tipo de documento(doctype)
console.log(document.charset); //accedo al juego de caracteres que tiene el documento
console.log(document.title); //accedo al titulo(me devuelve el titulo)
console.log(document.links);  //me devuelve la lista de enlaces, en forma de arreglos pero son elementos HTML
console.log(document.images); //me devuelve las imagenes del documento
console.log(document.forms); //me devuelve los formularios del documento
console.log(document.styleSheets); //me devuelve las hojas de estilos que tiene enlazado mi documento
console.log(document.scripts);  //me devuelve las hojas de script de programacion de mi documento
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000); //me devuelve lo que selecciono del documento, ademas le ponemos el setTimeout para que nos de tiempo de selecionar
document.write("<h2>Hola Mundo desde el DOM</h2>"); // nos permite escribir en el documento, se escribe en la ultima parte del documento(antes del cierre de la etiqueta body). En este ejemplo se escribe un h2
*/
/*





*/
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
/* console.log(document.getElementsByTagName("li"));  //nos devuelve todos los elementos que tengan la etiqueta li
console.log(document.getElementsByClassName("card")); //nos devuelve todos los elementos que tengan la clase card 
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu")); //nos devuelve el id(en singular)
console.log(document.querySelector("#menu")); //detecta que tipo de selector le dimos(#id, .class, y si no tiene nada es un tag), analiza y luego nos devuelve el primer selector del tipo que le especificamos que haya encontrado en el documento HTML
console.log(document.querySelector("a")); //devuelve la primera etiqueta a que haya encontrado(enlace)
console.log(document.querySelectorAll("a")); //devuelve todas las etiquetas a que haya encontrado
console.log(document.querySelectorAll("a").length); //me devuelve la cantidad de etiquetas a hay en el documento(me devuelve un numero)
document.querySelectorAll("a").forEach((el) => console.log(el)); //imprime el codigo de la etiqueta a
console.log(document.querySelector(".card"));  //devuelve la primera clase card 
console.log(document.querySelectorAll(".card")); //me devuelve un nodelist con todo lo que tenga la clase card
console.log(document.querySelectorAll(".card")[2]); //si quiero ingresar a la 3er card(que esta en la posicion 2, se maneja como un arreglo)
console.log(document.querySelector("#menu li")); //me trae la primer li que se encuentra dentro del id menu
console.log(document.querySelectorAll("#menu li")); //me trae todas las li que se encuentran dentro del id menu
*/
/*





*/
/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/* Aprenderemos como interactuar con los atributos del HTML
Accedemos a los atributos: documentElement.nomdeAtributo y document.documentElement.getAttribute("nomdeAtributo")

console.log(document.documentElement.lang); //es
console.log(document.documentElement.getAttribute("lang")); //es
console.log(document.querySelector(".link-dom").href); //busco la clase link-dom y de esa clase (con el punto le digo) quiero acceder al href(en este caso me trae todo el link de la pagina)
console.log(document.querySelector(".link-dom").getAttribute("href")); //me trae el valor que estaba escrito en el href(es como arriba pero aca solo me trae la parte que dice en el href: dom.html)

document.documentElement.lang = "en"; //cambiar el atributo (de es a en)
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX"); //cambiar el atributo de en a es-MX (recibe como primer valor su atributo y el nuevo valor del atributo)
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");  //guardamos en una variable el enlace

Cuando utilizamos una variable para guardar algun elemento del DOM la declaramos anteponiendo el simbolo $ NO ES OBLIGATORIO pero es una manera de distinguir  

$linkDOM.setAttribute("target", "_blank");  //el linkDom hace referencia a la misma pestaña y cuando presionamos recarga la misma pestaña, por lo tanto le podemos agregar un nuevo atributo para que recargue el documento pero en distinta pestaña
$linkDOM.setAttribute("rel", "noopener"); //cuando abrimos una nueva pestaña podemos utilizar esto para evitar que no sea insegura la ventana que estamos abriendo, que no sea hackeada
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha"); //tambien le puedo cambiar el href, en vez de que abra una nueva pestaña en el mismo documento, abre la pagina esa que esta ahi, el youtube de JonMircha
console.log($linkDOM.hasAttribute("rel")); //tiene el atributo rel?? true
$linkDOM.removeAttribute("rel");  //le quito ese atributo
console.log($linkDOM.hasAttribute("rel")); //tiene el atributo rel?? false

//Data-Attributes
console.log($linkDOM.getAttribute("data-description")); //accedemos al  data-attributes
console.log($linkDOM.dataset);  //es un Dom string map, es un mapa de data-atributtes
console.log($linkDOM.dataset.description); //accedo a un data-atribute en particular
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");  //establecer nuevos valores a la data-description
console.log($linkDOM.dataset.description); 
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte"; //establecer nuevos valores a la data-description
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));  //pregunto si existe el data-attributes llamada data-id  true
$linkDOM.removeAttribute("data-id");  //elimino el data-attributes data-id
console.log($linkDOM.hasAttribute("data-id")); // validamos si existe el data-attributes data-id   false
 */
/*





*/
/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */
/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);  //accedemos al style(es importante que accedamos con la notacion del punto). me sale todos los estilos
console.log($linkDOM.getAttribute("style")); //me sale solamente los estilos que defini
console.log($linkDOM.style.backgroundColor); //accedo al estilo de backgroundColor
console.log($linkDOM.style.color); //accedo al estilo color
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));  //es otra manera de acceder al estilo de la clase linkDOM, ademas podemos ponerle el getPropertyValue que significa que accedemos a la propiedad color(el parametro que le damos es el estilo al que queremos acceder)

$linkDOM.style.setProperty("text-decoration", "none"); //podemos establecer valores, por ej aca le pasamos la propiedad text-decoration y el valor en none
$linkDOM.style.setProperty("display", "block"); //aca le establecimos el valor block a la propiedad display
$linkDOM.style.width = "50%";  //aca establecemos al 50% a la propiedad width
$linkDOM.style.textAlign = "center"; //aca establecemos el valor center a la propiedad textAling
$linkDOM.style.marginLeft = "auto"; //aca establecemos el valor auto a la propiedad marginLeft
$linkDOM.style.marginRight = "auto";  //aca establecemos el valor auto a la propiedad marginRight
$linkDOM.style.padding = "1rem";  //aca le establecemos el valor 1rem a la propiedad padding
$linkDOM.style.borderRadius = ".5rem";  //aca le establecemos el valor .5rem a la propiedad borderRadius

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,  //variable que apunta al html
  $body = document.body; //variable que apunta al body del html

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),  //variable que represente cada Custom Properties
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"); //variable que represente cada Custom Properties

console.log(varDarkColor, varYellowColor); //imprimo las variables

$body.style.backgroundColor = varDarkColor;  //le agrego al estilo del body el color de fondo de la variable varDarkColor
$body.style.color = varYellowColor; //le agrego al estilo del body el color de fuente de la variable varYellowColor

$html.style.setProperty("--dark-color", "#000");  //modificar alguna custom properties, le doy como parametro la custom properties que quiero modifica y el otro parametro es el nuevo valor. Dinamicamente ya tiene el color 000 en el html pero falta cambiarlo en la variable que cree
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");// vuelvo a redefinir el nuevo color en la variable

$body.style.setProperty("background-color", varDarkColor); */
/*





*/
/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
/* const $card = document.querySelector(".card");  //guardo en una variable la clase card

console.log($card);  //  card    me aparece la linea de codigo que tenga la clase card
console.log($card.className); //accedo al valor del atributo class, me devuelve la cadena de texto que tiene el atributo class
console.log($card.classList);  //me devuelvo un DOMTokenList que la logitud de la clase y el valor del atributo class
console.log($card.classList.contains("rotate-45")); //es un metodo de classList que nos ayuda a evaluar si un elemento tiene una clase en particular. No devuelve un boolean.  False
$card.classList.add("rotate-45");  //es un metodo de classList que nos ayuda a agregar una clase. En este caso agrego la clase rotate-45
console.log($card.classList.contains("rotate-45")); //True
console.log($card.className); // card rotate-45
console.log($card.classList);  //me aparecen dos elementos como longitud, uno ocupa la posicion 0 y el otro la posicion 1
$card.classList.remove("rotate-45"); //podemos quitar una clase
console.log($card.classList.contains("rotate-45"));  //False
$card.classList.toggle("rotate-45");  //si el elemento tiene la clase se la quita  pero sino la tiene se la agrega, aca mi elemento no tiene la clase rotate-45 por lo tanto toggle se la agrega
console.log($card.classList.contains("rotate-45")); //true
$card.classList.toggle("rotate-45"); //como mi elemento ya tiene la clase rotate-45 toggle se lo elimina
console.log($card.classList.contains("rotate-45")); //false
$card.classList.toggle("rotate-45");  //como mi elemento no tiene la clase rotate-45 toggle se lo agrega
$card.classList.replace("rotate-45", "rotate-135");  //replace va reemplazar el primer parametro que le pasamos por el segundo parametro
$card.classList.add("opacity-80", "sepia"); //agregar varias clases al mismo tiempo
$card.classList.remove("opacity-80", "sepia");  //quitar varias clases al mismo tiempo
$card.classList.toggle("opacity-80", "sepia"); agregar/quitar varias clases al mismo tiempo
*/
/*





*/
/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
/* const $whatIsDOM = document.getElementById("que-es");  //guardo en una variable el elemento que tenga el ID
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;
innerText y textContent sirve para agregarle texto a un elemento

//$whatIsDOM.innerText = text;  //para modificar el contenido de la variable $whatIsDOM y reemplazarlo por la cadena de texto de la variable let, esta es una forma que no esta dentro del standart, no usar
$whatIsDOM.textContent = text; //es la propiedad standart, copia todo lo que hay en el texto, y no toma los tags que hay dentro, o sea los toma como parte del texto. Para que eso no suceda hay que utilizar el innerHTML
$whatIsDOM.innerHTML = text; //para que el contenido se renderice como codigo HTML, innerHTML va a reemplazar lo que tenga como contenido ese nodo y va insertar contenido HTML
Cuando necesite aplicar solo texto, utilizo textContent, cuando necesito aplicar texto y codigo HTML utilizo innerHTML.
Con el innerHTML tengo tres p dentro de p(o sea un pe tiene como hijo tres p) y eso es un error de sintaxis, para que esto no suceda utilizamos outerHTML
$whatIsDOM.outerHTML = text// se va eliminar el parrafo que tiene id que-es y lo va reemplazar por el text, quedando asi tres p, separados 
*/
/*





*/
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
/* 
Estos traversing son enfocados a los elementos, es decir a las etiquetas HTML como tal
const $cards = document.querySelector(".cards"); //creamos una variable que guarda los elementos que tengan la clase cards

console.log($cards); //me aparece todo el codigo HTML que tenga la clase cards, en este caso me muestra la seccion, y tambien lo que hay adentro, adentro hay varios figure
console.log($cards.children); //si yo quiero hacer referencia a sus hijos(cada una de las figure que tiene como hijo la seccion)
console.log($cards.children[2]);  //si quiero acceder a la tarjeta numero 3(esta en la posicion 2)
console.log($cards.parentElement); //el padre de cars, es el body
console.log($cards.firstElementChild);  //obtengo el primer elemento hijo
console.log($cards.lastElementChild);  //obtengo el ultimo elemento hijo
console.log($cards.previousElementSibling);  //obtengo el hermano que esta antes
console.log($cards.nextElementSibling);  //obtengo el hermano que esta despues
console.log($cards.closest("div"));  //closest nos va a buscar el padre mas cercano del tipo de selector que nosotros le demos. Aca le decimos div y nos devuelve un null porque hacia arriba no tiene ningun ancestro que sea div, el ancestro directo seria la etiqueta body o la etiqueta HTML 
console.log($cards.closest("body"));  //me devuelve el body
console.log($cards.children[3].closest("section")); //mi referencia es el tercer hijo de cards, y de ahi me devuelve el padre mas cercano (y aparece lo mismo que cuando marque el console.log($cards))
*/
/*





 */
/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
/* 
const $figure = document.createElement("figure"), //creamos una variable para crear una etiqueta HTML con el metodo createElement. En este caso creamos un elemento figure
  $img = document.createElement("img"),  //creamos una variable para crear un elemento HTML en este caso un elemento img
  $figcaption = document.createElement("figcaption"),  //creamos una variable para crear un elemento HTML en este caso un elemento figcaption
  $figcaptionText = document.createTextNode("Animals"),  //creamos el nodo de texto para la figcaption
  $cards = document.querySelector(".cards"), //creamos una variable para guardar el elemento padre que es donde voy a insertar esa tarjeta y lo seleccionamos con la clase cards
  $figure2 = document.createElement("figure"); //creamos una variable para agregar una segunda tarjeta

  Aca arriba ya creamos esas etiquetas, sin embargo todavia no estan incoporadas en el arbol del DOM y hay que ir incorporandoselas

Configuramos la etiqueta image:
$img.setAttribute("src", "https://placeimg.com/200/200/animals"); //en su atributo src le agregamos la imagen
$img.setAttribute("alt", "Animals"); //configuramos el atributo alt con el valor Animals
$figure.classList.add("card");  // al nodo figure, en su lista de clases, le agregamos la clase card

$figcaption.appendChild($figcaptionText); //al nodo figcaption le agregamos el figcaptionText
$figure.appendChild($img); //al nodo figure le agregamos el nodo image
$figure.appendChild($figcaption); //al nodo figure le agregamos el nodo figcaption
$cards.appendChild($figure); //al padre que tenga la clase cards se le agrega una nueva etiqueta figure como hijo 


Utilizo el innerHTML para agregarle el contenido dinamicamente, la desventaja que al hacerlo como texto JS no lo considera como un nodo, pero finalmente estamos generando contenido dinamico. Con el innerHTML me ahorre la creacion de la variable img, figcaption y figcaptionText 

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People"> //agregamos la imagen
<figcaption>People</figcaption> //el figcaption
`;

$figure2.classList.add("card"); //le agregamos la clase card
$cards.appendChild($figure2);  //al nodo card le agregamos la figura 2



const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");  //creo una etiqueta ul

document.write("<h3>Estaciones del Año</h3>");  //ponemos un titulo h3
document.body.appendChild($ul);   //al  body le agrego la ul creada

estaciones.forEach((el) => {    //recorro la variable estacion
  const $li = document.createElement("li");  //por cada elemento me cree una variable li
  $li.textContent = el;  //le agrego texto al li, que seria el valor del elemento que en ese momento esta recorriendo el forEach
  $ul.appendChild($li); //le decimos que a la ul le agreguemos el elemento li
});

Con lo de arriba creamos una lista de las estaciones del año.

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul"); //creo una variable que tenga la ul

document.write("<h3>Continentes del Mundo</h3>"); //agrego al body un h3 que dice Continentes del Mundo

document.body.appendChild($ul2);  //al body le agrego un ul
$ul2.innerHTML = ""; //para usar el innerHTML lo igualo a una cadena vacia, para que despues cuando la llene dinamicamente(con la ayuda del forEach) 
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); 

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),   //guardo en una variable el nuevo ul
  $fragment = document.createDocumentFragment();  //agrego un fragmento al documento

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */
/*





*/
/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/* 

  const $cards = document.querySelector(".cards"), //guardo en una variable que apunte la clase cards
  $template = document.getElementById("template-card").content, //guardo en una variable que apunta al id template-card, guarda el contenido del template
  $fragment = document.createDocumentFragment(),  //guardo en una variable la creacion del fragmento para que cada vez que se cree una nueva tarjeta no se este creando en el dom sino que se cree un solo fragmento que vaya almacenando dinamicamente esas tarjetas
  cardsContent = [   //agregamos una tarjeta por cada una de las categorias que tenemos en el sitio donde sacamos las imagenes, la unica diferencia es que en el dom los titulos los tenemos en ingles y aca en español. Es un arreglo, que cada tarjeta seria un objeto con su atributo tittle y su atributo img
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardsContent.forEach((el) => {   //recorrer el array, por cada elemento que trae cardsContent :
  $template.querySelector("img").setAttribute("src", el.img); //navego por el contenido del template, en este caso dentro de template buscar img  y en su atributo src vamos a establecer el valor de el.img
  $template.querySelector("img").setAttribute("alt", el.title); // dentro de template buscar img y en su atributo alt vamos a establecer el valor de el.title
  $template.querySelector("figcaption").textContent = el.title;  //vamos a buscar dentro del template vamos a buscar figcaption y en la propiedad text content vamos agregar el titulo de la tarjeta(el.title)

  let $clone = document.importNode($template, true);  //clonamos el nodo del template para que sirva con otra tarjeta
  $fragment.appendChild($clone);  //agrego el clone al fragmento
});

$cards.appendChild($fragment);  //al elemento cards le agrego el fragmento
 */
/*





*/
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/* const $cards = document.querySelector(".cards"),  //creamos una variable que haga referencia a nuestra clase cards
  $newCard = document.createElement("figure"),  //creamos una nueva tarjeta, creamos el elemento figure
  $cloneCards = $cards.cloneNode(true);  //tambien podemos clonar con el metodo cloneNode(clona todo el contenido de la variable cards)

$newCard.innerHTML = `  
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;  //agrego el contenido de la tarjeta, usando la propiedad innerHTML 
$newCard.classList.add("card");  // para que esa etiqueta figure tenga la clase card

//$cards.replaceChild($newCard, $cards.children[2]);  //replaceChild reemplaza al hijo, necesita dos parametro, el nuevo nodo y el nodod a reemplazar(accedo a los hijos de cards y reemplazo al hijo que esta en la posicion 2)
//$cards.removeChild($cards.lastElementChild);  //metodo para eliminar, tiene como parametro el nodo que queremos eliminar, en este caso queremos eliminar el ultimo nodo de la clase cards
$cards.insertBefore($newCard, $cards.firstElementChild);  //insertBefore nos permite insertar el nodo nuevo antes de un nodo que tomemos como referencia, necesita dos parametros el nuevo nodo y  el nodo de referencia, por ej aca insertamos la newCar antes del primer elemento hijo de la clase cards
document.body.appendChild($cloneCards); //agregamos al final del documento html la clonacion que hicimos
*/
/*





*/
/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/*
.insertAdjacent...  
  .insertAdjacentElement(position, el)//agrega un elemento(es como un appendChild o insertBefore), este metodo recibe dos parametros, la posicion y el elemento
  .insertAdjacentHTML(position, html) //agrega contenido HTML(es como un innerHTML), este metodo recibe dos parametros, la posicion y el codigo HTML
  .insertAdjacentText(position, text) //es como textContent,este metodo recibe dos parametros, la posicion y el contenido textual 

Los tres metodos anteriores tienen estas posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
/* const $cards = document.querySelector(".cards"), ///creamos una variable que haga referencia a nuestra clase cards
  $newCard = document.createElement("figure"); //creamos una nueva tarjeta, creamos el elemento figure

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`; //guardo en una variable el contenido de la tarjeta
$newCard.classList.add("card");  //// para que esa etiqueta figure tenga la clase card

$newCard.insertAdjacentHTML("afterbegin", $contenCard);  //en newCard inserto elemento HTML de la variable contenCard al primer hijo
$cards.insertAdjacentElement("beforeend", $newCard); //voy a tomar como referencia a cards y voy a insertar a newCard como ultimo hijo
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");  //tomo como referencia newCard, busco el selecto que coincida con el selector figcaption y ahi le inserto texto
*/
//$cards.prepend($newCard);  //tomando como referencia cards, agrega como hijo primero al nodo newCard
//$cards.append($newCard); //tomando como referencia cards, agrega como ultimo hijo al nodo newCard
//$cards.before($newCard); //tomando como referencia cards, agrega como hermano anterior al nodo newCard
//$cards.after($newCard); //tomando como referencia cards, agrega como hermano posterior al nodo newCard
/*





*/
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

https://developer.mozilla.org/en-US/docs/Web/Events
*/
/* function holaMundo() {  //es una funcion que maneja eventos, Event Handler
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico",   //guardo en una variable el id evento-semantico
  $eventoMultiple = document.getElementById("evento-multiple"),  //    guardo en una variable el id evento-multiple
  $eventoRemover = document.getElementById("evento-remover");   //guardo en una variable el id evento-remover

$eventoSemantico.onclick = holaMundo;  //al elemento que tenemos guardado en el id evento-semantico cuando le hacemos click se ejecuta la funcion holaMundo(sin parentesis porque si se recarga la pagina se ejecuta la funcion)

$eventoSemantico.onclick = function (e) {  //piso la funcion anterior de holaMundo, osea es como si estuviera asignandole un nuevo valor ya que los eventos con manejador semantico no se permiten dos tipos de funciones
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);  //imprime el evento, en como la linea de abajo
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);  //addEventListener es un metodo que recibe como parametro el tipo de evento que va estar esperando, y como segundo parametro una funcion callback que es la que se va ejecutar cuando dicho evento ocurra.
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

//hasta aca va a ejecutarse holaMundo, despues va ejecutarse el alert de la segunda funcion, se va imprimir el evento, se va imprimir el type del evento, se va imprimir el target del evento, y finalment se imprime el evento. Asi es como funciona el manejador de eventos multiple(van arrojar 2 alertas y 5 console.log)

PASAR PARAMETROS A LOS MANEJADORES DE EVENTOS

$eventoMultiple.addEventListener("click", () => {
  saludar();  //se va ejecutar y me va salir un alert 'hola desconocido'+ el consolelog del evento
  saludar("Jon");  //se va ejecutar y me va salir un alert Hola Jon y un console.log del evento
});

REMOVER EVENTOS(solo se puede hacer con el manejador de eventos multiple), para remover un manejador de eventos esta tiene  que estar guardada en una funcion ya sea declarada o expresada.

const removerDobleClick = (e) => {  //recibe el evento
  alert(`Removiendo el evento de tipo ${e.type}`);  
  console.log(e);  //imprime el evento
  $eventoRemover.removeEventListener("dblclick", removerDobleClick); //para remover el evento uso el metodo removeEventListerner que recibe dos parametros: el evento que voy a remover y el manejador de eventos
  $eventoRemover.disabled = true;   //  //le agrego el atributo disabled
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); 
evento dblclick-> doble click en el boton

Aca lo que va hacer es, en el primer doble click se va crear el alerta Removiendo el evento de tipodbclick, luego se hace un console,log del evento, luego hace el remove, entonces si yo quiero volver hacer doble click al boton, el evento se elimino
*/
/*





*/
/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div") //creamos una variable que me guarde todos los divs que estan en esa clase eventos-flujo;

function flujoEventos(e) {  //recibe como parametro el evento
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

//hacemos un forEach para aplicarle a cada uno de los divs de manera dinamica un EventListener

$divsEventos.forEach((div) => {  //por cada div
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos); //1*
  //div.addEventListener("click", flujoEventos, false); //2
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);  //3*
  div.addEventListener("click", flujoEventos, {  //
    capture: false,  //capture hace referencia a si es fase de captura o de burbuja(en false es de burbuja)
    once: true,  //once en true significa que el evento se va ejecutar una sola vez(como cuando utilizamos el remove), y once en false o no esta significa que el evento se va ejecutar todas las veces que hagamos click en el div
  });
}); 
//Cuando el addEventListener es el 1*, lo que hace es que cuando doy click en el div 3 me sale en la consola: Hola te saluda tres, el click lo originó tres; Hola te saluda dos, el click lo originó tres; Hola te saluda uno, el click lo originó tres; eso es lo que se conoce como burbuja, porque por mas que yo solo hice click en el tres, se va imprimir para los 3 divs.
//Cuando el addEventListener es el 2*, recibe un tercer parametro, ese parametro por defecto es false, cuando nosotros le ponemos false significa que estamos en fase de burbuja, es decir, el flujo de los eventos se propaga del mas interno al mas externo dentro del arbol del DOM. Pero si quisieramos el modelo contrario que es la FASE DE CAPTURA, van del evento mas externo al evento mas interno, entonces esos mensajes anteriores de la consola se van a invertir cambiando el valor false por el valor true(addEventListener en el 3*). Por lo tanto me va imprimir en la consola:  Hola te saluda uno, el click lo originó tres; Hola te saluda dos, el click lo originó tres; Hola te saluda tres, el click lo originó tres.

//FASE DE BURBUJA: Cuando no especificamos el tercer valor, o cuando lo especificamos en false(1* y 2*)
//FASE DE CAPTURA: Cuando esppecificamos el tercer valor en true(3*)
*/
/*





*/
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");, // creamos una variable que me guarde todos los divs que estan en esa clase eventos-flujo
  $linkEventos = document.querySelector(".eventos-flujo a"); // creamos una variable que me guarde el primer a que esta en esa clase eventos-flujo

function flujoEventos(e) { //recibe como parametro el evento
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();  //es para evitar la propagacion, por ejemplo cuando damos click en el div tres que solo salga para el tres, y que cuando demos click en dos que solo salga para el dos
}

console.log($divsEventos);

////hacemos un forEach para aplicarle a cada uno de los divs de manera dinamica un EventListener

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();  //cancela la accion que tenga por default el elemento(en este caso la accion por default es abrir el enlace, por lo tanto no abre el enlace en una nueva pestaña, solo sale el alert)
  e.stopPropagation();  //para evitar la propagacion, osea como el link esta dentro del div tres, si presionamos el link me va ejecutar el EventListener del div tres, pero si colocamos stopPropagation eso no ocurre y solo aplica el EventListener de linkEventos
}); */
/*



*/
/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
/* 

La delegacion de eventos es una tecnica para que en lugar de tener varias EventListener, vamos a tener solo la asignacion de un EventListener al evento click al nodo principal que en este caso es el document. Ademas de mejorar el rendimiento de nuestra aplicacion a nivel de memoria y de recursos, solamente vamos a tener una asignacion al evento click y con un condicional vamos evaluando cada uno de los elementos que necesitemos aplicarle la programacion 
1.Declaro la funcion donde asignamos el evento
2.Hago un document.addEventListener que recibe como parametro el evento click y una funcion. 
3.Creo las condicionales para que cuando haga click(para aplicarle programacion a ciertos elementos del document):- en el enlace de la clase eventos-flujo, no se abra; -en los divs de la clase eventos-flujo se ejecute la funcion que creamos en el paso 1

function flujoEventos(e) {  //funcion donde estamos asignando el evento
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  //e.stopPropagation();  //es para evitar la propagacion, por ejemplo cuando damos click en el div tres que solo salga para el tres, y que cuando demos click en dos que solo salga para el dos. Pero en este caso no lo vamos a utilizar porque no se hace ninguna propagacion porque el evento fue asignado al elemento padre que en este caso en el document
}

document.addEventListener("click", (e) => {  //el EventListener se lo asigno al documento. Abajo vamos hacer uso de condicionales para buscar la coincidencia de algun selector y dentro de ese condicional vamos a ejecutar la programacion que necesitemos para cada elemento del DOM 
  if (e.target.matches(".eventos-flujo div")) {   //el metodo matches sirve para buscar un selector valido, el selector valido en este caso es el que tiene el div que esta dentro de la clase eventos-flujo. El metodo .marches va validar a true cuando presione el div que esta dentro de la clase eventos-flujo, y va ejecutar la funcion flujo eventos que hace un console.log Hola te saluda ${this} el click lo originó ${e.target.className}
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) { //el metodo matches sirve para buscar un selector valido, el selector valido en este caso es el que tiene el enlace que esta dentro de la clase eventos-flujo. El metodo .matches va validar a true cuando presione el selector que esta entreparentisis, y va ejecutar el alert y el e.preventDefault
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();  //con este metodo no abre el link
    //e.stopPropagation();
  }
}); */
/*





*/
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

El evento load se dispara cuando se ha detectado la carga completa de la página.

Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

Peticiones asíncronas pausan el parseo del DOM.
*/
/* window.addEventListener("resize", (e) => {  //al window le asignamos el evento resize que se van ejecutar los console.log cuando cambie el tamaño de la ventana, o sea cuando redimensiono la pantalla
  console.clear(); //hacemos un clear(limpiar la consola) antes de cada redicionamiento
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth);  //innerWidth va hacer referencia al tamaño del ancho del viewport de nuestra ventana
  console.log(window.innerHeight);//innerHeight va hacer referencia al tamaño de altura del viewport de nuestra ventana
  console.log(window.outerWidth);  //outerWidth va hacer referencia al tamaño del ancho que tiene la ventana de nuesto navegador
  console.log(window.outerHeight);//outerHeight va hacer referencia al tamaño de altura que tiene la ventana de nuesto navegador
  console.log(e);  //imprime el evento
});

window.addEventListener("scroll", (e) => {  //window tiene un evento que es del scroll que cada vez que movamos la barra de desplazamiento va ejecutar una funcion que tiene console.log(la de abajo)
  console.clear();//limpamos la consola(si no lo tuvieramos tendriamos un console.log de muchos eventos scroll)
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);  //hace referencia a la barra de desplazamiento del eje x, nos esta dando un  valor en px que significa cuanto se aleja la barra de desplazamiento horizontal del margen izquierda
  console.log(window.scrollY);//hace referencia a la barra de desplazamiento del eje y, nos esta dando un  valor en px que significa cuanto se aleja la barra de desplazamiento vertical del margen top
  console.log(e);  //imprime el evento
});

window.addEventListener("load", (e) => {  //window tiene un evento load, este evento se va ejecutar cuando la ventana del navegador haya terminado de cargar
  console.log("********** Evento Load **********");
  console.log(window.screenX);  //
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {  //document tiene un evento DOMContentLoaded que hace que imprima los mismosm valores que window load pero el de document carga mas rapido que el de window, o sea cargo primero el documento que el window
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */
/*





*/
/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
//window.alert("Alerta");  //sale una alerta
//window.confirm("Confirmación"); //es una cajita que nos va mandar un mensaje con boton de aceptar y cancelar
//window.prompt("Aviso");  //un mensaje de texto que puede aceptar y cancelar, el usuario puede escribir 

/* const $btnAbrir = document.getElementById("abrir-ventana"),  
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;  //creamos una variable ventana

$btnAbrir.addEventListener(
  "click",
  (e) => (ventana = window.open("https://jonmircha.com")) //le da valor a la variable ventana, que abre una nueva ventana con la url que le dimos
);  

$btnCerrar.addEventListener("click", (e) => {
  //window.close();  //para cerrar la ventana en la que estabamos
  ventana.close();  //para cerrar la variable ventana
});

$btnImprimir.addEventListener("click", (e) => window.print());  //abre la ventana en la que estamos para imprimirla
 */
/*





*/
/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
/* console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */
