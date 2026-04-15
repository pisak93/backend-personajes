const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        clase:{
            type:String,
             enum: ["Mago", "Guerrero", "Arquero", "Explorador"],
            required: true
        },
  experiencia: {
    type: Number,
    default: 0
  },
  healthPoints: {
    type: Number,
    required: true
  },
  mana: {
    type: Number,
    required: true
  },
  velocidad: {
    type: Number,
    required: true
  },
  fuerza: {
    type: Number,
    required: true
  },
  habildades:{
    type:[String]
  }
    },{collection:"personajes"}
);

module.exports = mongoose.model("Personaje", personajeSchema);