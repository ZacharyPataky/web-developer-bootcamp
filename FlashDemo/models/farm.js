const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'The email is required!']
    }
})


const Farm = mongoose.model('Farm', farmSchema);



module.exports = Farm;