const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    price: { type: String, default: 'Miễn phí' },
    description: { type: String, maxLength: 600 },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);