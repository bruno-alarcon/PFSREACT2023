let div1= document.querySelector(".contenedor1");

let div2= document.getElementById("contenedor2");

div2.classList.add("fondoRojo");

let multiples = document.getElementsByClassName("multiplescontenedores");


multiples[0].classList.add("fondoVerde");

console.log(multiples);

let multiplesDivs = document.querySelectorAll("div");
 console.log(multiplesDivs[0]);
 console.log(multiplesDivs[2]);


 let hijoDiv2 = div2.children;
 console.log(hijoDiv2);

 let pDiv3 = document.querySelector(".pDiv3");

 let padreDiv3 = pDiv3.parentElement;

 console.log(padreDiv3); 

 /* NOMENCLATURA FUNCION FLECHA(MUY USADA EN REACT, SIEMPRE DECLARAR ANTES DE UTILIZAR) */
 let verificarClick = () =>{
    console.log("Hola TdF");
 }

 let btn = document.getElementById("enviar");
 btn.addEventListener("click",agregarClase);

 /* function verificarClick(){
    console.log("Hola TdF");
 }
 */

 function saludar(paramNombre){
    console.log("Hola " + paramNombre);
 }


 let nombre = "Bruno";

saludar(nombre);

function calcularArea(paramBase,paramAltura){
    let area = paramBase * paramAltura;
    return area;
}

let a = 5;
let b = 2;

let areaDeCuadrado=calcularArea(a,b);

console.log(areaDeCuadrado);


function agregarClase(){
    div1.classList.toggle("fondoVerde");
    
    
}


