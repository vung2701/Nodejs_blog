const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, require: true },
        price: { type: String },
        description: { type: String },
        slug: { type: String },
        videoId: { type: String, require: true },
        image: { type: String },
        level: { type: String, default: 'Trung bình' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
