'use strict'

var express = require("express");
var controllerUsuario = require("./../controllers/controllerUsuario");

var routes = express.Router();

routes.get("/usuario/:idUsuario", controllerUsuario.obtenerUsuario);
routes.get("/usuarios", controllerUsuario.listarUsuarios);
routes.post("/usuario", controllerUsuario.guardarUsuario);
routes.put("/usuario/:idUsuario", controllerUsuario.actualizarUsuario);
routes.delete("/usuario/:idUsuario", controllerUsuario.eliminarUsuario);

module.exports = routes;