"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => {
        let users;
        try{
            users = res.json(dataHandler.getUsers());
        } catch (e) {
            res.status(400).send("Error")
        }
        res.status(200).json(users);
    })

router.route('/')
    .post((req, res) => {
        let user = req.body;
        let num = 0;
        try {
            for(let property in user) {
                if(!(['nombre', 'apellido', 'correo','contraseña'].includes(property))) continue;
                else num = num+1;
            }
            if(num == 0){
                let nom = dataHandler.createUser(user);
                res.status(201).send(`User ${nom.nombre} created`);
            }
        } catch(e) {
            res.status(400).send(`Invalid properties. ${num} missing properties`);
        }
});

router.route('/:id')
    .put((req, res) => {
        let id = req.params.id;
        let user = req.body;
        try {
            let nom = dataHandler.updateUser(id, user);
            if(nom != -1){
                res.type('text/plain; charset=utf-8');
                res.status(200).send(`User ${nom.nombre} was updated!`);
            }
            else {
                res.status(404).send(`User not found`);
            }
        } catch(e) {
            res.status(400).send(`User cannot be updated`);
        }
    })
    .delete((req, res) => {
        let uuid = req.params.id;
        let toDelete = dataHandler.deleteUser(uuid);

        if(toDelete != -1) {
            res.type('text/plain; charset=utf-8');
            res.status(200).send(`User ${toDelete.nombre} was deleted!`);
        } else {
            res.status(404).send(`User not found`);
        }
    });

module.exports = router;