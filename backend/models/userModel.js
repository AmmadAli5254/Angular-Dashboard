const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Enter the user name"],
    },
    email: {
        type: String,
        required: [true, "Enter the email address"],
    },
    password: {
        type: String,
        required: [true, "Enter the password"],
    },
    image: {
        type: String,
        required: [true, "Please add a image"],
    },
    status: {
        type: Boolean,
        required: [true, "Please select a status"],
    },
    date_added: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);