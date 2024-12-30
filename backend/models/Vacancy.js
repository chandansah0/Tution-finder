const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    classLevel: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    genderPreference: {
        type: String,
        enum: ['Male', 'Female', 'Any'],
        required: true,
    },
    vacancyCode: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending',
    }
});

module.exports = mongoose.model('Vacancy', vacancySchema);
