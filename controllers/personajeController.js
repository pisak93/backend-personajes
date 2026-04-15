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

const getAllPersonajesPropiedad = async function(req,res){
    const propiedad = req.params.propiedad;
    try {
        const personajes = await personajesService.getAllPersonajesPropiedad(propiedad);
        
       res.status(200).json({
         message: "Propedad: "+propiedad+" de Personajes obtenidos correctamente",
         data: personajes});
        
    } catch (error) {
         res.status(500).json({
    message: "Error al obtener los personajes",
    error: error.message
  });
    }
}

const getPersonajesFiltro = async function(req,res){
  const queryParams = req.query;
  try {
        const personajes = await personajesService.getPersonajesFiltro(queryParams);
       
       res.status(200).json({
         message: "Personajes obtenidos correctamente",
         data: personajes});

        
    } catch (error) {
         res.status(500).json({
    message: "Error al obtener los personajes",
    error: error.message
  });
    }
}

module.exports = {
  getAllPersonajes,
    getAllPersonajesPropiedad,
    getPersonajesFiltro

};