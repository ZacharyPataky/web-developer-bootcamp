const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Mongo connection error');
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User({
        username: 'chickenfan99',
        age: 61
    });
    const tweet1 = new Tweet({
        text: 'Oh my god, I love my chickens!',
        likes: 0
    });
    const tweet2 = new Tweet({
        text: 'I\'m a chicken!  Buh-cawk!',
        likes: 42
    });

    tweet1.user = user;  // Associates [tweet1] with [user]

    user.save();
    tweet1.save();
}

makeTweets();

const findTweet = async () => {
    const tweet = await Tweet.find({}).populate('user')  // Fill in the user details for every tweet instead of only providing the ID
    console.log(tweet);
}

findTweet();