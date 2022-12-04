"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');



router.route('/')
    .get((req, res) => dataHandler.getUsers(req, res))
    .post((req, res) => dataHandler.createUser(req, res));

router.use('/login', dataHandler.verifyToken)

router.route('/:email')
    .put((req, res) => dataHandler.getUserByEmail(req, res))
    .delete((req, res) => dataHandler.deleteUser(req, res));

module.exports = router;