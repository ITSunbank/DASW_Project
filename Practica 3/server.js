"use strict";
//
const express = require('express');
// Nos conectamos a nuestra instancia local de MongoDB a traves de mongoose
const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://admin:admin@cluster0.wafdbbb.mongodb.net/UsuariosDB';

mongoose.connect(mongoDB, {useNewUrlParser: true});
//
const router = require('./app/controllers/router');
//
const app = express();
const port = 3000;
const cors = require('cors');
//
app.use(cors());
app.use(express.json()); // Use express body-parser to parse all request bodies.
app.use(router);
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})

let userSchema = mongoose.Schema({
  nombre: {
      type: String,
      required: true
  },
  apellido: {
      type: String
  },
  correo: {
      type: String,
      required: true
  },
  contraseña: {
      type: String,
      required: true
  }
});
//(Ahora creamos el modelo)
let User = mongoose.model('user', userSchema);

//Creamos un nuevo usuario
let newUser = {
    nombre: "Christian",
    apellido: "Pereda",
    correo: "christian.pereda@iteso.mx",
    contraseña: "Pass1"
}
let user = User(newUser);

//Guardamos el usuario en nuestra UserDB
// user.save()               //Si esto lo dejo sin comentar, se agrega otra vez :)
//   .then(doc =>console.log(doc))
//   .catch(err => console.log(err));



