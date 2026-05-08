const personajesService = require("../services/personajesService");

const getAllPersonajes = async function(req,res){

    try {
        const personajes = await personajesService.getAllPersonajes();

       res.status(200).json({
    message: "Personajes obtenidos correctamente",
    data: personajes
  });
  
    } catch (error) {
       res.status(500).json({
    message: "Error al obtener los personajes",
    error: error.message
  });
    }
    
}

const getPersonajesFiltro = async function(req,res){
const queryParams = req.query

  try{

    const personajes = await personajesService.getPersonajesFiltro(queryParams);
        
    res.status(200).json({
    message: "Personajes con filtros obtenidos correctamente",
    data: personajes
  });

  }

  catch(error){
   res.status(500).json({
    message: "Error al obtener los personajes con Filtros",
    error: error.message
  });
  }
}

const crearPersonaje = async function (req,res){
  const datos = req.body;
  console.log(datos);

  try{
      const personaje = await personajesService.crearPersonaje(datos);

       res.status(200).json({
    message: "Personaje creado correctamente",
    data: personaje
  });
  }
  catch(error){
    res.status(500).json({
    message: "Error al crear el personaje",
    error: error.message
  });
  }

}

const eliminarPersonaje = async function(req,res){

  const id = req.params.id;
  try {
    const personaje = await personajesService.eliminarPersonaje(id);
      res.status(200).json({
    message: "Personaje eliminado correctamente",
    data: personaje
  });
    
  } catch (error) {
        res.status(500).json({
    message: "Error al eliminar el personaje",
    error: error.message
  });
  }
}

module.exports = {
  getAllPersonajes,
  getPersonajesFiltro,
  crearPersonaje,
  eliminarPersonaje
   
};