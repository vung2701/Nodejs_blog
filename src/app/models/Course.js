const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    price: { type: String, default: 'Free' },
    description: { type: String, maxLength: 600 },
    price: { type: String, default: 'Free' },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
