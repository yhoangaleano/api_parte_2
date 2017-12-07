'use strict'

var modelUsuario = require("./../models/modelUsuario");

function guardarUsuario(req, res){

    var usuario = new modelUsuario();

    usuario.nombre = req.body.nombre;
    usuario.apellido = req.body.apellido;
    usuario.email = req.body.email;
    usuario.usuario = req.body.usuario;
    usuario.contrasena = req.body.contrasena;
    usuario.rol = req.body.rol; 
    
    usuario.save((error, nuevoUsuario) => {

        if(error){

            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar guardar un usuario",
                object: null,
                response: false
            });

        }else{

            if(!nuevoUsuario){

                res.status(400).send({
                    message: "Ocurrio un error al intentar guardar un usuario",
                    object: null,
                    response: false
                });

            }else{

                res.status(200).send({
                    message: "Usuario guardado correctamente",
                    object: nuevoUsuario,
                    response: true
                });

            }

        }

    });

}

function actualizarUsuario(req, res){

    var idUsuario = req.params.idUsuario;
    var infoUsuario = req.body;

    modelUsuario.findByIdAndUpdate(idUsuario, infoUsuario, {new: true}, (error, usuarioActualizado) => {

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar actualizar un usuario",
                object: null,
                response: false
            });
        }else{

            if(!usuarioActualizado){
                res.status(404).send({
                    message: "Ocurrio un error al intentar actualizar un usuario",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Usuario actualizado correctamente",
                    object: usuarioActualizado,
                    response: true
                });

            }

        }

    });
}

function eliminarUsuario(req, res){

    var idUsuario = req.params.idUsuario;

    modelUsuario.findByIdAndRemove(idUsuario, (error, usuarioBorrado)=>{

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar eliminar un usuario",
                object: null,
                response: false
            });
        }else{

            if(!usuarioBorrado){
                res.status(404).send({
                    message: "Ocurrio un error al intentar eliminar un usuario",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Usuario eliminado correctamente",
                    object: usuarioBorrado,
                    response: true
                });

            }

        }


    });

}

function listarUsuarios(req, res){

    modelUsuario.find().sort('nombre').exec((error, usuarios) => {

        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar listar los usuarios",
                object: null,
                response: false
            });
        }else{

            if(!usuarios){
                res.status(400).send({
                    message: "Ocurrio un error al intentar listar los usuarios",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Listado de usuarios",
                    object: usuarios,
                    response: true
                });

            }

        }

    });

}

function obtenerUsuario(req, res){

    var idUsuario = req.params.idUsuario;

    modelUsuario.findById(idUsuario, (error, usuario) => {
    
        if(error){
            res.status(500).send({
                message: "Ocurrio un error en el servidor al intentar listar un usuario",
                object: null,
                response: false
            });
        }else{

            if(!usuario){
                res.status(404).send({
                    message: "Ocurrio un error al intentar listar un usuario",
                    object: null,
                    response: false
                });
            }else{
             
                res.status(200).send({
                    message: "Usuario encontrado",
                    object: usuario,
                    response: true
                });

            }

        }

    });

}

module.exports = {

    guardarUsuario,
    actualizarUsuario,
    eliminarUsuario,
    listarUsuarios,
    obtenerUsuario

}