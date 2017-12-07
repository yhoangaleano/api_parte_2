'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var modelRol = Schema({
    nombreRol: String
});

module.exports = mongoose.model('Rol', modelRol);
