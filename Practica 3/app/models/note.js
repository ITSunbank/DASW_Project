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

// let newNote = {
//     title: "Christian",
//     tag: "Pereda",
//     description: "christian.pereda@iteso.mx"
// }

// let note = Note(newNote);

// //Guardamos el usuario en nuestra UserDB
// note.save()
//     .then(doc =>console.log(doc))
//     .catch(err => console.log(err));

// document.getElementById('notebtn').addEventListener("click",function(){
//     let newNote = {
//         title: document.getElementById("notename").value,
//         tag: document.getElementById("tagM2O").value,
//         description : document.getElementById("descNote").value
//     }
    
//     let note = Note(newNote);
    
//     //Guardamos el usuario en nuestra UserDB
//     note.save()
//         .then(doc =>console.log(doc))
//         .catch(err => console.log(err));
// })


module.exports = Note;