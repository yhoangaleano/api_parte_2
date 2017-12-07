'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelEvento = Schema({

    nombre: String,
    descripcion: String,
    lugar: String,
    fecha: Date

});

module.exports = mongoose.model('Event', modelEvento);