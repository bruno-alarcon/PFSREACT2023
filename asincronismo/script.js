let btnConsulta = document.getElementById("consultarAPI");

btnConsulta.addEventListener("click", verInfo);

let  titulo = document.getElementById("frase");




async function verInfo(){
  try {
    let respuesta = await fetch ("mockjs.json");
      if(respuesta.ok){
        let aux = await respuesta.json();
        console.log(aux);
        titulo.innerHTML = aux.persona[0].nombre;
      }
    
  } catch{
    console.log("Error al obtener los datos");
    
  }
}