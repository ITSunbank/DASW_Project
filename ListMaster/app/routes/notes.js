"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');


router.route('/')
    .get((req, res) => dataHandler.getNotes(req, res))
    .post((req, res) => dataHandler.createNote(req, res));

router.route('/:title')
    .put((req, res) => dataHandler.updateNote(req, res))
    .delete((req, res) => dataHandler.deleteNote(req, res));

module.exports = router;