import { obtenerPersonajes, mostrarFemenino } from "./script2";

let arreglo = [33,34,45,53,32,36,54];


for (let index = 0; index < arreglo.length; index++) {
    element = arreglo[index];
    console.log(element);
    
}

arreglo.forEach(element => {

    console.log(element)
    
});


console.log("ARREGLO FILTRO PARES");

let pares = arreglo.filter(
    par => par % 2 ==0
)

console.log(pares);

console.log("ARREGLO MAP");

let multiplo = arreglo.map(numero => numero*2);

console.log(multiplo);

/* console.log(mostrarFemenino()); */





