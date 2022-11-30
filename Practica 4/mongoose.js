"user strict";

// Nos conectamos a nuestra instancia local de MongoDB a traves de mongoose
const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1:27017/AlumnosDB';
mongoose.connect(mongoDB, { useNewUrlParser: true });