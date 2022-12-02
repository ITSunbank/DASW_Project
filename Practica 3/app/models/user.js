const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://admin:admin@cluster0.wafdbbb.mongodb.net/UsuariosDB';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

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

// let newUser = {
//         nombre: "Ana",
//         apellido: "Gonzalez",
//         correo: "ana.anaya@iteso.mx",
//         contraseña: "LaMejorContraseniaDelMundo2"
// }

// let user = User(newUser);

// //Guardamos el usuario en nuestra UserDB
// user.save()
//     .then(doc =>console.log(doc))
//     .catch(err => console.log(err));



module.exports = User;