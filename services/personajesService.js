const mongoose = require("mongoose");
require("../models/PersonajeSchema.js");
const Personaje = mongoose.model("Personaje");

const getAllPersonajes = async function () {
  const personajes = await Personaje.find();
  return personajes;
}

const getPersonajesFiltro = async function(queryParams){

  const filtros ={};

    if(queryParams.nombre){
      filtros.nombre={};
      filtros.nombre.$regex = queryParams.nombre;
      filtros.nombre.$options = "i";
  }

     if(queryParams.clase){
      filtros.clase = queryParams.clase;

  }
  
     if(queryParams.expMin || queryParams.expMax ){
      filtros.experiencia = {};
      if(queryParams.expMin){
        filtros.experiencia.$gte = Number(queryParams.expMin);

      }
      if(queryParams.expMax){
        filtros.experiencia.$lte = Number(queryParams.expMax);
      }

  }

    if(queryParams.expIgual){
      filtros.experiencia.$eq = Number(queryParams.expIgual);

  }

  if(queryParams.habilidad){
    filtros.habilidades = {};
    filtros.habilidades.$regex = queryParams.habilidad;
    filtros.habilidades.$options = "i";
  }




  const personajes = await Personaje.find(filtros);
  return personajes;

}

const crearPersonaje = async function (datos){
  const personaje = new Personaje(datos);
  console.log(personaje);

  await personaje.save();

  return personaje;
}

const eliminarPersonaje = async function (id) {
  const personaje = await Personaje.findByIdAndDelete(id);
  return personaje;
}

module.exports = {
  getAllPersonajes,
  getPersonajesFiltro,
  crearPersonaje,
  eliminarPersonaje

};