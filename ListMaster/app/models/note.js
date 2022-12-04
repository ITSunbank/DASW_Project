const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://admin:admin@cluster0.wafdbbb.mongodb.net/UsuariosDB';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

let noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String
    },
    description: {
        type: String
    }
});
//(Ahora creamos el modelo)
let Note = mongoose.model('note', noteSchema);

module.exports = Note;