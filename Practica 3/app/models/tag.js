const mongoose = require('mongoose');


let tagSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});
//(Ahora creamos el modelo)
let Tag = mongoose.model('tag', tagSchema);

// let newTag = {
//     title: "Ana",
//     description: "Gonzalez"
// }

// let tag = Tag(newTag);

// //Guardamos el usuario en nuestra UserDB
// tag.save()
// .then(doc =>console.log(doc))
// .catch(err => console.log(err));

module.exports = Tag;