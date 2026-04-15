const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const personajeRouter = require("./v1/routes/personajeRouters");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("API REST DE PERSONAJES");
});

app.listen(process.env.PORT,function(){
console.log("CONTECTADO AL PUERTO: "+process.env.PORT);
});


const connection = mongoose.connect(process.env.MONGODB_URI,{
    dbName:process.env.BBDD_NAME
});

connection
.then(function(){
    console.log("CONECTADO A LA BBDD");
})
.catch(function(err){
    console.log("ERROR EN LA CONEXIÓN: "+err);

});

app.use("/api/v1/personajes",personajeRouter);