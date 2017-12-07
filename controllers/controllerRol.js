'use strict'

var modelRol = require("./../models/modelRol");

function guardarRol(req, res){

    var rol = new modelRol();

    rol.nombreRol = req.body.nombreRol;

    rol.save((error, nuevoRol) => {

        if(error){

            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar guardar un rol",
                object: null,
                response: false
            });

        }else{

            if(!nuevoRol){

                res.status(400).send({
                    message: "Ocurrio un error al intentar guardar un rol",
                    object: null,
                    response: false
                });

            }else{

                res.status(200).send({
                    message: "Rol guardado correctamente",
                    object: nuevoRol,
                    response: true
                });

            }

        }

    });

}

function actualizarRol(req, res){

    var idRol = req.params.idRol;
    var infoRol = req.body;

    modelRol.findByIdAndUpdate(idRol, infoRol, {new: true}, (error, rolActualizado) => {

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar actualizar un rol",
                object: null,
                response: false
            });
        }else{

            if(!rolActualizado){
                res.status(404).send({
                    message: "Ocurrio un error al intentar actualizar un rol",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Rol actualizado correctamente",
                    object: rolActualizado,
                    response: true
                });

            }

        }

    });
}

function eliminarRol(req, res){

    var idRol = req.params.idRol;

    modelRol.findByIdAndRemove(idRol, (error, rolBorrado)=>{

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar eliminar un rol",
                object: null,
                response: false
            });
        }else{

            if(!rolBorrado){
                res.status(404).send({
                    message: "Ocurrio un error al intentar eliminar un rol",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Rol eliminado correctamente",
                    object: rolBorrado,
                    response: true
                });

            }

        }


    });

}

function listarRoles(req, res){

    modelRol.find().sort('nombreRol').exec((error, roles) => {

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar listar los roles",
                object: null,
                response: false
            });
        }else{

            if(!roles){
                res.status(400).send({
                    message: "Ocurrio un error al intentar listar los roles",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Listado de roles",
                    object: roles,
                    response: true
                });

            }

        }

    });

}

function obtenerRol(req, res){

    var idRol = req.params.idRol;

    modelRol.findById(idRol, (error, rol) => {
    
        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar listar un rol",
                object: null,
                response: false
            });
        }else{

            if(!rol){
                res.status(404).send({
                    message: "Ocurrio un error al intentar listar un rol",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Rol encontrado",
                    object: rol,
                    response: true
                });

            }

        }

    });

}

module.exports = {

    guardarRol,
    actualizarRol,
    eliminarRol,
    listarRoles,
    obtenerRol

}