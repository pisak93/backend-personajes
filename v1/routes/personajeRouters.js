const express = require("express");
const router=express.Router();
const personajeController = require("../../controllers/personajeController")

router
    
    .get("/:propiedad",personajeController.getAllPersonajesPropiedad)
    .get("/",personajeController.getPersonajesFiltro)





module.exports = router;