/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";  //para que en el archivo modulos mandemos a llamar el archivo constantes, tenemos que colocar la palabra import mas las llaves {} que ahi va ir el nombre de la funcion que exporte, y por ultimo colocar el from "./url del archivo" si esta en la misma carpeta hay que colocarle el ./
import { aritmetica as calculos } from "./aritmetica.js"; //a la funcion aritmetica con la palabra as le cambio el nombre  por calculos, en ves de llamar a la funcion aritmetica.sumar llamo calculos.sumar

console.log("Archivo modulos.js");  //Archivo modulos.js
console.log(PI, usuario);  //3.141592653589793 Jon (exporto la variable PI y usuario del archivo constantes.js)
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4)); //7
console.log(calculos.restar(3, 4)); //-1
saludar();   //Hola Módulos +ES6
let saludo = new Saludar(); //creamos una nueva variable, saludo va a ser igual a un nuevo objeto de la clase Saludar
saludo;  //Hola Clases +ES6
