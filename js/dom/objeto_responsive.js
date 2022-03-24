/* **********     Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha     ********** */
const d = document,
  w = window;


export default function responsiveMedia(id, mq, mobileContent, desktopContent){  //mq significa mediaQuerie
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if(e.matches){    //si estoy a mas de 1024px me da true, sino false
            d.getElementById(id).innerHTML = desktopContent;   //si esta a mas de 1024, o sea si es true, me va poner el contenido de escritorio
        } else {
            d.getElementById(id).innerHTML = mobileContent;  //si esta a menos de 1024, o sea si es false, me va poner el contenido del movil
        }
    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}