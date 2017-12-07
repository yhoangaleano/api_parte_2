'use strict'

var express = require("express");
var controllerRol = require("./../controllers/controllerRol");

var routes = express.Router();

routes.get("/rol/:idRol", controllerRol.obtenerRol);
routes.get("/roles", controllerRol.listarRoles);
routes.post("/rol", controllerRol.guardarRol);
routes.put("/rol/:idRol", controllerRol.actualizarRol);
routes.delete("/rol/:idRol", controllerRol.eliminarRol);

module.exports = routes;