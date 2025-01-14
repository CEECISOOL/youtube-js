/* **********     Curso JavaScript: 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */
const d = document;
let x= 0,
  y= 0;

export function moveBall (e, ball, stage ){
    const $ball = d.querySelector(ball),
     $stage = d.querySelector(stage),
     limitsBall = $ball.getBoundingClientRect(),
     limitsStage = $stage.getBoundingClientRect();


    console.log(e.keyCode);
    console.log(e.key);
    console.log(limitsBall,limitsStage);

    //const move =(direccion) =>{}

    
    switch(e.keyCode){
        case 37:
            e.preventDefault();   //para que no se mueva el scroll de navegacion
            //move("letf");
            if(limitsBall.left>limitsStage.left) x--;
            break;
        case 38:
            e.preventDefault();
            //move("up");
            if(limitsBall.top>limitsStage.top) y--;
            break;
        case 39:
            e.preventDefault();
            //move("right");
            if(limitsBall.right<limitsStage.right) x++;
            break;
        case 40: 
            e.preventDefault();
            if(limitsBall.bottom<limitsStage.bottom) y++;
            //move("down");
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)` ;

}

export function shortcuts(e){
    /* console.log(e.type);
    console.log(e.Key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`atl: ${e.altKey}`);
    console.log( `shift: ${e.shiftKey}`);
    console.log(e); */

    if(e.key === "a"  && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado");
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado")
    }

}