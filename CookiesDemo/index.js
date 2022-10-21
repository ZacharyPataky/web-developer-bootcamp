const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    const { name = 'Anonymoius' } = req.cookies;
    res.send(`Hey there, ${name}!`);
});

app.get('/setName', (req, res) => {
    res.cookie('name', 'Stevie Chicks');
    res.cookie('animal', 'Harlequin Shrimp');
    res.cookie('color', 'Purple');
    res.send('We sent you a cookie!');
});

// Sign Cookie
app.get('/getSignedCookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('Signed your fruit cookie!');
});

// Unsign Cookie
app.get('/verifyFruit', (req, res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
});