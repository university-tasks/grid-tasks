const { Schema } = require('mongoose');

const PersonSchema = new Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    gender: String,
    age: String,
    email: String,
    date: { type: Date, default: Date.now },
});

module.exports = PersonSchema;
