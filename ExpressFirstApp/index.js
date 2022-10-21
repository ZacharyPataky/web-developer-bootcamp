// We're running with [nodemon index.js]
// This refreshes the server every time we alter the code

const express = require('express');
const app = express();
console.dir(app);

// app.use((req, res) => {
//     console.log('We got a new request!');
//     // console.dir(req);
//     // res.send('Hello, we got your request! This is a response!');
//     // res.send({
//     //     color: 'red'
//     // })
//     res.send('<h1>This is my webpage!</h1>')
// });

//
// Routes
//

// '/' - AKA. Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
});

// /cats => 'meow'
app.get('/cats', (req, res) => {
    // console.log('Cat Request!');
    res.send('meow');
});

app.post('/cats', (req, res) => {
    res.send('Post Request to Cats!')
});

// /dogs => 'woof'
app.get('/dogs', (req, res) => {
    // console.log('Dog Request!');
    res.send('woof');
});

// Express Path Parameters
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
});

// Express Path Parameters
app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing ${postId} on the ${subreddit} subreddit!</h1>`);
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing found if nothing searched</h1>`);
    }
    res.send(`<h1>Search results for ${q}</h1>`);
})

// EVERYTHING - Must be placed at the end!
app.get('*', (req, res) => {
    res.send('I don\'t know the route to that path!')
});

app.listen(8080, () => {
    console.log('Listening on Port 8080!');
});