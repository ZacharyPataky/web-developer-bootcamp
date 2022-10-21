const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);  // Creates a collection called 'movies'



// const amadeus = new Movie({
//     title: 'Amadeus',
//     year: 1984,
//     score: 8.4,
//     rating: 'R'
// });

// Movie.insertMany([
//     amadeus,
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log('It worked!');
//         console.log(data);
//     });

// // amadeus.save();

// // amadeus.score = 9.5;
// // amadeus.save();