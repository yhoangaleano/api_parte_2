'use strict'

//Importar la configuación de APP
var app = require("./app");

var mongoose = require("mongoose");

//Configuracion del puerto y el host
var port = process.env.PORT || 3977;
var host = process.env.HOST || '127.0.0.1';

var hostMongo = 'localhost';
var portMongo = '27017';

mongoose.connect(`mongodb://${hostMongo}:${portMongo}/eventos_sena`, (error, response) => {

    if (error) {
        throw error;
    } else {
        console.log("La base de datos de mongo esta corriendo correctamente");
    }

    //Creamos el servidor
    var server = app.listen(port, host, function () {

        console.log("Estas conectado al servidor: " + host + " por el puerto: " + port);

    });

});
