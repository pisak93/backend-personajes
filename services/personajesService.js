const mongoose = require("mongoose");
require("../models/PersonajeSchema.js");
const Personaje = mongoose.model("Personaje");

const getAllPersonajes = async function(){
    const personajes = await Personaje.find();
    return personajes;
}

const getAllPersonajesPropiedad = async function(propiedad){
    const personajes = await Personaje.find().select("nombre "+propiedad);
    return personajes;

}


const getPersonajesFiltro = async function (queryParams)  {
  const filtros = {};
  var selectFields= "";
  console.log(queryParams);
  if (Object.keys(queryParams).length>0){
    console.log("ENTRA AQUI");
    selectFields += "nombre";

  }

  if (queryParams.clase) {
    filtros.clase = queryParams.clase;
    selectFields+=" clase";
  }


  if (queryParams.expMin || queryParams.expMax) {
    filtros.experiencia = {};
    if (queryParams.expMin){
         filtros.experiencia.$gte = Number(queryParams.expMin);

        }

    if (queryParams.expMax){
         filtros.experiencia.$lte = Number(queryParams.expMax)
        }
        selectFields+=" experiencia";
  }


  if (queryParams.fuerzaMin || queryParams.fuerzaMax) {
    filtros.fuerza = {};
    if (queryParams.fuerzaMin) {
      filtros.fuerza.$gte = Number(queryParams.fuerzaMin);
    }
    if (queryParams.fuerzaMax) {
      filtros.fuerza.$lte = Number(queryParams.fuerzaMax);
    }
    selectFields+=" fuerza";
  }

  if (queryParams.velocidadMin || queryParams.velocidadMax) {
    filtros.velocidad = {};
    if (queryParams.velocidadMin) {
      filtros.velocidad.$gte = Number(queryParams.velocidadMin);
    }
    if (queryParams.velocidadMax) {
      filtros.velocidad.$lte = Number(queryParams.velocidadMax);
    }
    selectFields+=" velocidad";
  }
  if(queryParams.HPMin || queryParams.HPMax){
    filtros.healthPoints = {};
    if (queryParams.HPMin) {
      filtros.healthPoints.$gte = Number(queryParams.HPMin);
    }
    if (queryParams.HPMax) {
      filtros.healthPoints.$lte = Number(queryParams.HPMax);
    }
    selectFields+=" healthPoints";

  }
  

      const personajes = await Personaje.find(filtros).select(selectFields);
    return personajes;

};



module.exports = {
    getAllPersonajes,
    getAllPersonajesPropiedad,
    getPersonajesFiltro
};