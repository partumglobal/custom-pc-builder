const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Custom PC Build Application' });
});

module.exports = router;

