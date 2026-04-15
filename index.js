const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = require("./app");

const mongoose = require("mongoose");

dotenv.config();


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

