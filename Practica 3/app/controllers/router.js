"use strict";

const express = require('express');
const router = express.Router();
const adminNoteRouter = require('../routes/admin_notes');
const Notes = require('../routes/notes');

const adminTagRouter = require('../routes/admin_tags');
const Tags = require('../routes/tags');
//const products = require('../routes/products');


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