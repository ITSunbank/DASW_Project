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

module.exports = User;