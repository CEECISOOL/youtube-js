/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
export const PI = Math.PI;  //para decirle a PI que se exporte le ponemos la palabra export

export let usuario = "Jon"; //aca le decimos que va a exportar

const password = "qwerty";  //como no le colocamos la palabra export, por mas que la llamemos no va a exportarse
//export default password;

const hello = () => console.log("Hola");

export default function saludar() {  //export default significa que se exporte por default(osea que se complete la importacion por si sola. No puede haber dos export default por archivo. Cuando habiamos visto el tema de las funciones declaradas y las funciones expresadas vimos que cuando invocabamos la funcion antes de declararla no pasaba nada, ya que JS hace un hoisting y "eleva" la funcion, y si hacemos eso con las funciones expresivas no podia funcionar. Lo mismo sucede con el default. Si yo quiero colocar el default en una funcion declarativa va a funcionar, pero si lo quiero hacer con una funcion expresiva, una variable,ect no va funcionar, eso no quiere decir que no pueda utilizar la palabra default con las variables y las funciones, sino que para utilizarlo tengo que primero declarar la funcion expresiva o la varible y abajo hacer el export default. Por ejemplo const password='qwerty' y abajo coloco export default password. Las unicas que permiten la exportacion default en el momento que las estoy declarando son LAS FUNCIONES DECLARATIVAS Y LAS CLASES, para lo demas hay que hacer ese procedimiento)
  console.log("Hola Módulos +ES6");
}

export class Saludar {
  constructor() {
    console.log("Hola Clases +ES6");
  }
}
