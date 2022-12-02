"use strict";

// const Note = require('./../Practica 3/app/models/note');

const express = require('express');
const router = express.Router();

const Notes = require('../routes/notes');
const Tags = require('../routes/tags');
const Users = require('../routes/users');

// router.use('/MisNotas',express.static('./app/views/MisNotas.html'));

router.use('/notes', Notes);
router.use('/tags', Tags);
router.use('/users', Users);

router.get('/', (req, res) => {
    res.send('Proyecto final - Note Master');
});

module.exports = router;