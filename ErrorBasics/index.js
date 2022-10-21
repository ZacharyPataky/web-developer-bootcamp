const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs!");
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('Password Required', 401);
    // res.send("PASSWORD NEEDED!")
    // throw new AppError('Password required!', 400)
}

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Homepage');
});

app.get('/error', (req, res) => {
    chicken.fly();
});

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Sorry, folks! That ain\'t none of your business!');
});

app.get('/admin', (req, res) => {
    throw new AppError('You\'re not an Admin!', 403);
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
});

// app.use((err, req, res, next) => {
//     console.log("*******************************************");
//     console.log("****************** ERROR ******************");
//     console.log("*******************************************");
//     console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});