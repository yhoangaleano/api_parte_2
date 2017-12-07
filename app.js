'use strict'

//Cargar a express
var express = require("express");

//Cargar Body-Parser
var bodyParser = require("body-parser");

//Instancia de express
var app = express();

//Configuramos las imagenes
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));

//Configuramos los json
app.use(bodyParser.json({
    limit: "50mb"
}));

//Middleware para los CORS (Control de Acceso HTTP)
app.use((req, res, next) => {
    // Accesos a todos los dominios
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    res.header("Allow", "GET, POST, PUT, DELETE, PATCH");
    next();
});

//Cargar las routes de la aplicación
var routeRol = require("./routes/routeRol");
app.use("/api", routeRol);

var routeUsuario = require("./routes/routeUsuario");
app.use("/api", routeUsuario);

app.get("/prueba", function(req, res){

    res.status(200).send({
        mensaje: "Bienvenido al API"
    });

});

module.exports = app;