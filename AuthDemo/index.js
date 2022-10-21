const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('The MongoDB connection is open.');
    })
    .catch(err => {
        console.log('An error occurred attempting to open MongoDB:');
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));  // Necessary for req.body
app.use(session({
    secret: 'poorSecret',
    resave: true,
    saveUninitialized: true
}));

// Middleware that always checks if a user is logged-in
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();  // Logged in and good to go!
    }
};

app.get('/', (req, res) => {
    res.send('This is the homepage!');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Seems bad because we're using the same password
    // Resolved with user.js middleware
    const user = new User({ username, password });
    
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
});

app.post('/logout', (req, res) => {
    req.session.user_id = null;  // Minimum change to stop login tracking
    // req.session.destroy();  // Removes all traces
    res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
        res.render('secret');
});

app.get('/top-secret', requireLogin, (req, res) => {
    res.send('Top-Secret!');
});

app.listen(3000, () => {
    console.log('Serving the application on localhost:3000');
});