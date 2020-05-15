const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong while retrieving your jokes", error: err}));
};


module.exports.findJustOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(justOneJoke => res.json({ joke: justOneJoke }))
        .catch(err => res.json({ message: 'Something went wrong while retrieving your joke', error: err }));
};


module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(brandNewJoke => res.json({ joke: brandNewJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};


module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};


module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong. Looks like the computer likes this joke too much', error: err }))
};