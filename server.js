// server
const express = require('express');
const app = express();

// Middleware setup
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', require('./routes/index'));

// database connection
const { connect } = require('./db')

// model import











const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

