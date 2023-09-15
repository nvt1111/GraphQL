const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var authorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

//Export the model
module.exports = mongoose.model('authors', authorSchema);