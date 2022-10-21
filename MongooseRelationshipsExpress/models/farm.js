const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = require('./product');

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
        required: [true, 'An email is required!']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// farmSchema.pre('findOneAndDelete', async function(data) {
//     console.log('Pre-Middleware!');
//     console.log(data);
// });
// farmSchema.post('findOneAndDelete', async function(data) {
//     console.log('Post-Middleware!');
//     console.log(data);
// });

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;

// One -> Many; One Farm -> Many Products