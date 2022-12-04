const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let mongoDB = 'mongodb+srv://admin:admin@cluster0.wafdbbb.mongodb.net/UsuariosDB';
let privateKey = 'ABC123#';

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
    },
    token: String
});

userSchema.pre('save', function(next) {
    let user = this;
    console.log(user)
    user.contraseña = bcrypt.hashSync(user.contraseña, 10);
    next();
})

userSchema.methods.generateToken = function(password) {
    let user = this;
    let payload = {_id: user._id};
    let options = {expiresIn: 60 * 60};

    if(bcrypt.compareSync(password, user.contraseña)) {
        try{
            
            user.token = jwt.sign(payload, privateKey, options);
            console.log(user.token)
            return user.token;
        } catch(err) {
            console.log(err);
        }
    }
}

//(Ahora creamos el modelo)
let User = mongoose.model('user', userSchema);

module.exports = User;