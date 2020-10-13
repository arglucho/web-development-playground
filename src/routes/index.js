const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    res.render('index.html', { title: 'GAVOIG'} );
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'GAVOIG'});
});

module.exports = router;    