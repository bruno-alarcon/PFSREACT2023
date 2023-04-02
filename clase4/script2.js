export async function obtenerPersonajes(){
    let res = await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json(); /* AGARRA EL JSON Y ME DEVUELVE UN OBJETO DE JAVA(EN ESTE CASO CONVIERTE LA RES) */
    

/*    data.results.forEach(element => {
        console.log(element.name);
        console.log(element.status);
        
    });  */

    /*     
    //Creo un arreglo de personajes mediante map a partir del archivo data.
    let personajes = data.results.map(personaje => ({nombre: personaje.name, tipo: personaje.type})) /* MAP DEVUELVE UNA COPIA DEL ARRREGLO CON LOS FILTROS APLICADOS */

/*     console.log(personajes); */

/*     console.log(personajes[0].nombre);  */

  //Creo un arreglo de personajes mediante map a partir del archivo data donde los nombre estan con mayuscula
    let personajesMayuscula= data.results.map(personajes => personajes.name.toUpperCase());

/*     console.log(personajesMayuscula); */
     
    //Creo un arrelo de solo personajes femeninos
    let femenino = data.results.filter(personaje =>personaje.gender == "Female");

/*     console.log(femenino); */

    //me quedo solo con los nombre de los personajes femeninos
    let femeninoNombres =  femenino.map(personaje=>personaje.name);

    /* console.log(femeninoNombres); */

    return femeninoNombres;
}

/* PARA TODA FUNCION ASINCRONICA LA TENGO QUE LLAMAR ASINCRONICAMENTE */

export async function mostrarFemenino(){
    let f = await obtenerPersonajes();
    console.log(f);
}


mostrarFemenino();