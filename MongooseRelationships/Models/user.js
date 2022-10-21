const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection error');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { id: false }, // Removes the ID that automatically generates with an address
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const user = new User({
        first: 'Harry',
        last: 'Potter',
        addresses: [
            {
                street: '123 Sesame St.',
                city: 'New York',
                state: 'NY',
                country: 'USA'
            }
        ]
    })
    // user.addresses.push({
    //     street: '123 Sesame St.',
    //     city: 'New York',
    //     state: 'NY',
    //     country: 'USA'
    // });

    const res = await user.save();
    console.log(res);
};

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '99 3rd. St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )

    const res = await user.save();
    console.log(res);
}

addAddress('633cc7c5179d7ac4600cf6b0');

makeUser();