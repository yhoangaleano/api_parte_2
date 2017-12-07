'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelUsuario = Schema({

    nombre: String,
    apellido: String,
    email: String,
    usuario: String,
    contrasena: String,
    rol: {
        type: Schema.ObjectId,
        ref: 'Rol'
    }
});

module.exports = mongoose.model('User', modelUsuario);