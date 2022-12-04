"use strict";

const express = require('express');
const router = express.Router();
const dataHandler = require('./../controllers/data_handler');

router.route('/')
    .get((req, res) => dataHandler.getTags(req, res))
    .post((req, res) => dataHandler.createTag(req, res));

router.route('/:title')
    .put((req, res) => dataHandler.updateTag(req, res))
    .delete((req, res) => dataHandler.deleteTag(req, res));

module.exports = router;