const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'You need a setup!!'],
            minlength: [10, 'You need at least 10 charaters in your setup.']
        },
        punchline: {
            type: String,
            required: [true, "You can't leave us hangin"],
            minlength: [3, 'You need at least 3 characters in your punchline.']
        }
    }, {timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;