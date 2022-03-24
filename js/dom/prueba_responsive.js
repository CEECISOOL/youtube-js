/* **********     Curso JavaScript: 91. DOM: Ejercicios Prácticos | Responsive Tester - #jonmircha     ********** */
const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);

    let tester;

    d.addEventListener("submit" , (e) =>{   //en el formulario colocando una url y ancho y alto,apretando el boton "probar" se abre una nueva pestaña con esa url con esas medidas de ancho y alto
        if(e.target=== $form){
            e.preventDefault();  //para que cuando enviemos el formulario no se vuelva a recargar la pagina
            tester = window.open(
                $form.direccion.value, 
                "tester", 
                `innerWidth= ${$form.ancho.value}, innerHeight= ${$form.alto.value}`
                );
        }
    });

    d.addEventListener("click" , e =>{   //apretando el boton cerrar se va cerrar la ventana que abrimos apretando el boton probar
        if(e.target === $form.cerrar) tester.close();
    })
}