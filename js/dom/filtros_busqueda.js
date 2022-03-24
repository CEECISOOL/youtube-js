/* **********     Curso JavaScript: 96. DOM: Ejercicios Prácticos | Filtros de Búsqueda - #jonmircha     ********** */
const d = document;

export default function searchFilters(input, selector){   //esta funcion necesita el input(el selector del input que va hacer la busqueda) y sobre que selector va hacer la busqueda de texto
    d.addEventListener("keyup" , (e) =>{    //el keyup es cuando soltamos la tecla
        if(e.target.matches(input)){   //si el objeto que origino el evento, su selector coincide con lo que viene en la variable input entonces:
            //console.log(e.key);  //imprime la letra que estoy presionando
            //cosole.log(e.target.value); //se imprime, se va autocompletando las palabras

            if(e.key === "Escape") e.target.value= "";

            d.querySelectorAll(selector).forEach((el) =>  
                el.textContent.toLowerCase().includes(e.target.value)  //condicion a evaluar
                ? el.classList.remove("filter")    //si es verdadero le saca la clase filter
                : el.classList.add("filter")      //si es falso le agrega la clase filter
            );
            //vamos a recorrer cada una de las cartas que tienen el selector card(que pasamos como parametro en el archivo index), el textContent de esas cartas lo vamos a convertir forzosamente en minuscula. El texto que le pongamos al metodo includes va evaluar en el textContent de cada una de esas tarjetas. Si lo anterior me devuelve verdadero le voy a decir al elemento en cuestion que en su lista de clases le saque la clase filter, le va sacar esa clase filter porque significa que coincide con lo que el usuario escribio y entonces mostramos ese contenido como resultado de la busqueda. En caso contrario de que no coincida con lo que el usuario vaya escribiendo en esa caja de busqueda, le agregamos la clase filter para que oculte el elemento
        
        };
    });
}