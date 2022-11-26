"use strict";

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

// function validateAdmin(req, res, next) {
//     let adminToken = req.get('x-auth');
//     if (adminToken == undefined || adminToken != "admin") {
//         return res.status(403).send("Acceso no permitido");
//     }
//     next(); //Si es admin continuamos.
// }

module.exports = router;