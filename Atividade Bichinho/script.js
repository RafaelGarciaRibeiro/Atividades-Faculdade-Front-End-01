const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 10){
                cria.src = estados.puto;
            }

            if(contador == 20){
                cria.src = estados.morto;
            }
        }, 1000);
}
btn.addEventListener('click', () => {
    if (contador >= 20) return; 

    contador = 0; 

    cria.src = estados.comendo; 

    setTimeout(() => {
        if (contador < 20) {
            cria.src = estados.alimentado;
        }
    }, 1000);

    setTimeout(() => {
        if (contador < 10) {
            cria.src = estados.normal;
        }
    }, 3000);
});

controlador();