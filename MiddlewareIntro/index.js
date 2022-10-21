const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.use((req, res, next) => {
    // req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!');
    next();
});

// app.use((req, res, next) => {
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        res.send("Sorry, you need the correct password!");
    }
};

// Whatever you put in an [app.use(XXX)] will always be called when
// you load a page. This takes precedence over explicit route calls.

// app.use((req, res, next) => {
//     res.send('Hijacked by my [app.use(XXX)]');
//     console.log('This is my first middleware!');
//     next();  // Omitting return for the sake of the following comment
//     console.log('This is my first middlware after calling [next()] - On a stack!);
// });
// app.use((req, res, next) => {
//     console.log('This is my second middleware!');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('This is my third middleware!');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Homepage');
});

// Requires a password to access /dogs
// app.get('/dogs', verifyPassword, (req, res) => {
app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Sorry, folks! That\'s a secret!');
});

// If nothing else is matched!
app.use((req, res) => {
    res.status(404).send('Not Found!');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});