"use strict";

const express = require('express');

const router = require('./app/controllers/router');
const loginRouter = require('./app/routes/login');

const app = express();
const port = 3000;
const cors = require('cors');
const { login } = require('./app/controllers/data_handler');
app.use('/api/users',router)
app.use(cors());
app.use(express.json()); // Use express body-parser to parse all request bodies.
app.use(router);
app.use('/login',loginRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})

