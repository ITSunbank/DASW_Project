"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => {
        let notes;
        try{
            notes = res.json(dataHandler.getNotes());
        } catch (e) {
            res.status(400).send("Error")
        }
        res.status(200).json(notes);
    })

router.route('/')
    .post((req, res) => {
        let note = req.body;
        let num = 0;
        try {
            for(let property in note) {
                if(!(['title', 'tag', 'description'].includes(property))) continue;
                else num = num+1;
            }
            if(num == 0){
                let nom = dataHandler.createNote(note);
                res.status(201).send(`Note ${nom.title} created`);
            }
        } catch(e) {
            res.status(400).send(`Invalid properties. ${num} missing properties`);
        }
});

router.route('/:id')
    .put((req, res) => {
        let id = req.params.id;
        let note = req.body;
        try {
            let nom = dataHandler.updateNote(id, note);
            if(nom != -1){
                res.type('text/plain; charset=utf-8');
                res.status(200).send(`Note ${nom.title} was updated!`);
            }
            else {
                res.status(404).send(`Note not found`);
            }
        } catch(e) {
            res.status(400).send(`Note cannot be updated`);
        }
    })
    .delete((req, res) => {
        let uuid = req.params.id;
        let toDelete = dataHandler.deleteNote(uuid);

        if(toDelete != -1) {
            res.type('text/plain; charset=utf-8');
            res.status(200).send(`Note ${toDelete.title} was deleted!`);
        } else {
            res.status(404).send(`Note not found`);
        }
    });

module.exports = router;