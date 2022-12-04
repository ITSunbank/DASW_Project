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

module.exports = Tag;