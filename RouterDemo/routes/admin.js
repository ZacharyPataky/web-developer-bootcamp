const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
    // http://localhost:3000/admin/top-secret?isAdmin=true
    if (req.query.isAdmin) {
        next();
    }
    res.send('Sorry, you\'re not an admin!');
})

router.get('/top-secret', (req, res) => {
    res.send('This is top-secret!');
});

router.get('/delete-everything', (req, res) => {
    res.send('Sayonara, secrets!');
});

module.exports = router;