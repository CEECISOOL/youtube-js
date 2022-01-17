/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export const aritmetica = {   //creo un objeto para agrupar las funciones y asi exportarlas
  sumar,
  restar
};
