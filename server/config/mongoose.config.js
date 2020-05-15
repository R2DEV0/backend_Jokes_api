const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Jokes_API', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('connection to database confirmed'))
    .catch(err => console.log('Cannot connect to the database', err));