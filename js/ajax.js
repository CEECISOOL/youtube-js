/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha     ********** */

(() => {   //funcion anonima autoejecutable
  const xhr = new XMLHttpRequest(),  //creamos una variable que haga una instancia del objeto XMLHttpRequest
    $xhr = document.getElementById("xhr"),  //creamos una variable que haga referencia a ese nodo del DOM (o sea que tenga el id xhr)
    $fragment = document.createDocumentFragment(); //guardo en una varible la creacion del fragmento

  /*el readystatechange se lanza cuando detecta cualquier cambio de estado, ya sea que la peticion se haya abortado que haya lanzado un error, que se haya completado, por eso decimos que todos los demas eventos que tiene ajax estan o reciden en este evento. A la variable xhr le asigno un addEventListener (un evento). El listener recibe una callback, recibe como parametro el evento y la programacion(funcion). Le vamos asignarle dos instrucciones mas: la instruccion que va abrir la peticion que es el metodo open (xhr.open), el cual recibe como primer parametro el metodo por el cual vamos a comunicarnos(GET, HEAD, PUT o POST, TRACE) y finalmente recibe como segundo parametro el recurso(en este caso como lo hacemos con GET es la url) a la cual le vamos hacer la peticion. El cuarto paso es enviar la peticion y ejecutamos el metodo send.
  */
  xhr.addEventListener("readystatechange", (e) => {  
    if (xhr.readyState !== 4) return;  //primera validacion: el objeto ajax lo vamos a ejecutar solamente cuando la propiedad readyState sea diferente de 4. Es decir todo lo que no sea readyState 4 simplemente no retornes nada. No le puse las llaves porque es una sola linea y no ejecuta mas lineas de codigo

    //console.log(xhr);  //cuando hago esto(sin tener el if de arriba) se imprime 4 veces el objeto XMLHttpRequest, en cambio si le coloco el condicional if el objeto XMLHttpRequest se imprime una sola vez 

    /*la siguiente validacion va decir que si el status del objeto ajax es mayor o igual a 200 y que sea menor que 300*/

    if (xhr.status >= 200 && xhr.status < 300) { 
      //console.log("éxito");
      //console.log(xhr.responseText);  //me devuelve todo el codigo del JSON 
      //$xhr.innerHTML = xhr.responseText;  //agregamos al body el codigo TEXTUAL del codigo JSON que me devuelve responseText. Para que eso no pase utilizamos el metodo parse para que ese codigo JSON me lo convierta en formato JS(tranformandolo asi en un array)
      let json = JSON.parse(xhr.responseText);  //es una variable que tiene un arreglo 
      //console.log(json);

      /*En el arreglo anterior me salen los usuarios que son 10, dentro de los usuarios hay diferentes valores, en este ejemplo vamos a tratar de que mi body tenga una lista y que esa lista tenga los valores de nombre, email y telefono*/

      json.forEach((el) => {  //recorriendo el arreglo
        const $li = document.createElement("li"); //creamos una li por cada elemento
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;  //luego ponemos en un template string para que imprima el name, email y el phone
        $fragment.appendChild($li);  //a esa variable fragment le agregamos esa li que creamos
      });

      $xhr.appendChild($fragment);  //a la variable xhr le agregamos como hijo dicho fragmento
    } else {
      //console.log("error");
      //cuando el codigo de respuesta no es ninguno de los 200
      let message = xhr.statusText || "Ocurrió un error"; //de la peticion ajax, traer el valor statusText (a veces esta vacio), si ese valor esta vacio nosotros lo personalizamos a Ocurrio un error. 
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;  //aca lo que hacemos es agregarle al body el codigo de error y el mensaje de error(que nosotros personalizamos)
    }

    //console.log("Este mensaje cargará de cualquier forma");
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //xhr.open("GET", "assets/users.json");  //esta forma es para usarlo de forma local, es decir, creo un nuevo archivo JSON y copio ahi lo que me da el api, y luego lo utilizo en la peticion

  xhr.send(); //enviar la peticion

})();

/*PASO 1: Instanciar el objeto XMLHttpRequest, es decir crear una variable de este tipo
PASO 2: Asignarle el o los eventos
PASO 3: Abrir la peticion con el metodo open, estableciendo el metodo en el que lo vamos hacer y el recurso que vamos acceder
PASO 4: Enviar la peticion con el metedo send*/

/*Ahora solo vamos aprender a consumir apis, pero cuando hagamos peticiones de insercion o actualizacion de datos el metodo send puede recibir ese dato que se va modificar o actualizar, por el momento para consumir ese send va vacio*/

/*GET: es la peticion mas utilizada, es cuando lo hacemos atraves de la url
POST: es cuando lo hacemos atraves de las cabeceras del documento*/

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch("assets/users.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    /* .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    }) */
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch")
    });
})();

/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      //console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();

/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    //.get("assets/users.json")
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();

/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      //console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      //console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
