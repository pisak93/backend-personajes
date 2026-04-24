const express = require("express");
const router=express.Router();
const personajeController = require("../../controllers/personajeController")

router
    .get("/",personajeController.getAllPersonajes)
    .get("/filtro",personajeController.getPersonajesFiltro)
    .get("/clases",personajeController.getAllClases)
    .get("/:propiedad",personajeController.getAllPersonajesPropiedad)






module.exports = router;