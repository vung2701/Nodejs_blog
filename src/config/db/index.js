const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect successfully!!!');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
