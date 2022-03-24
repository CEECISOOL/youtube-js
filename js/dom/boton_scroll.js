/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document,
    w = window;

export default function scrollTopBottom(btn){
    const $scrollBtn = d.querySelector(btn);

    

    w.addEventListener("scroll" , e => {
        let scrollTop = w.pageXOffset || d.documentElement.scrollTop;

        if(scrollTop > 600) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }


       // console.log(w.pageYOffset, d.documentElement.scrollTop); //nos devuelve dos numeros, son los mismos, la diferencia esta si lo queremos hacer desde el objeto window o desde la etiqueta HTML
    });

    d.addEventListener("click" , e => {
        if(e.target.matches(btn)){
            w.scrollTo({   //scrollTo es para decirle a donde quiero ir, es un objeto que tiene tres importantes:
                behavior: "smooth",  //el comportamiento, si queremos que sea con una animacion le colocamos como valor smooth
                top: 0,   //el valor de top, o sea a donde queremos que regrese la barra de desplazazmiento vertical 
            })
        }
    });
}