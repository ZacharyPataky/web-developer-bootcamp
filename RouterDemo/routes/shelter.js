const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All shelters');
});

router.post('/', (req, res) => {
    res.send('Creating one shelter');
});

router.get('/:id', (req, res) => {
    res.send('Viewing one shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing one shelter');
});

module.exports = router;