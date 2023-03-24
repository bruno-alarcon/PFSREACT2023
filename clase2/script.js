 let persona = {
    nombre: "Lucas",
    apellido: "Martinez",
    edad : 47,
    sexo: 'M', /*CUANDO SE ESCRIBIMOS SOLO UN CARACTER SE USA UNA SOLA COMILLA  */
     dni :  23223232,
    hijos: ["Ana","Marcos"] 
} 


/* let persona2 = persona;

console.log(persona);
console.log(persona2);

persona2.apellido = "otro apellido";

console.log(persona);
console.log(persona2);
 */




 /* CONVERTIR JSON A OBJETO JAVA */
/*  let data1 = {
    empleados : [
        {nombre : "Juan" , apellido: "Perez"},
        {nombre : "Karina" , apellido: "Gonzalez"},
        {nombre : "Luz" , apellido: "Lopez"},
        {nombre : "Marcos" , apellido: "Villalba"}

    ]
 }


 let dataJson = JSON.stringify(data1); 
 console.log(data1)

 console.log(dataJson);
 console.log(dataJson.empleados); */


 /* let miLista = document.getElementById("mi-lista");

 let elemento1 = document.createElement("li");
 let elemento2 = document.createElement("li");
 let elemento3 = document.createElement("li");

 elemento1.innerHTML = `${persona.nombre} ${persona.apellido}`;
 elemento2.innerHTML = "texto2";
 elemento3.innerHTML = "texto3";

 miLista.appendChild(elemento1);
 miLista.appendChild(elemento2);
 miLista.appendChild(elemento3); */
 
 
/* CONVERTIR JSON A OBJETO JAVA */
let data = `{
    "empresa": "curso", 
    "empleados" : [
       {    "nombre":"Juan",
            "apellido" : "Perez",
            "dni" : "202020"
        }, 
        {   "nombre":"Martin",
            "apellido" : "Perez",
            "dni" : "202020"
        },
        {   "nombre":"Ramiro",
            "apellido" : "Carramza",
            "dni" : "191919"
        },
        {   "nombre":"Jose",
        "apellido" : "Castro",
        "dni" : "181818"
    },
            {   "nombre":"Pablo",
            "apellido" : "Gonzalez",
            "dni" : "171717"
        },
        {   "nombre":"Pablo",
        "apellido" : "Gonzalez",
        "dni" : "171717"
    },
        {   "nombre":"Pablo",
            "apellido" : "Gonzalez",
            "dni" : "171717"
    },
        {   "nombre":"Pablo",
        "apellido" : "Gonzalez",
        "dni" : "171717"
    }
    ]
}`;

let personasEmpleadas = JSON.parse(data);
 
 let miLista = document.getElementById("mi-lista");
    


    personasEmpleadas.empleados.forEach(empleado => {
        let li = document.createElement("li");
    li.innerHTML = `${empleado.nombre} ${empleado.apellido} ${empleado.dni}`;
    
    miLista.appendChild( li);
        
        
    });

    let crearCard = (persona) =>{
        crearCard.classList.add("card-persona");
        let titulo = document.createElement("h2");
        titulo.innerHTML = `${persona.nombre} ${persona.apellido}`;
        crearCard.appendChild(titulo);

    }

    let listaDatos = document.createElement("ul");
    for (key in persona){
        let listItem = document.createElement("li");
        listItem.innerHTML = `${key} : ${persona[key]}}`
    
        listaDatos.appendChild(listItem);
    }

    card.appendChild(listaDatos);
  