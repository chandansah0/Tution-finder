const express = require('express');
const Vacancy = require('../models/Vacancy');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Create a new vacancy (Student post)
router.post('/', authMiddleware, async (req, res) => {
    const { subject, classLevel, time, location, salary, genderPreference } = req.body;
    const vacancyCode = `VC-${Math.random().toString(36).substr(2, 9)}`; // Generate unique code

    const vacancy = new Vacancy({
        student: req.user.id,
        subject,
        classLevel,
        time,
        location,
        salary,
        genderPreference,
        vacancyCode,
    });

    try {
        await vacancy.save();
        res.status(201).json({ message: 'Vacancy created successfully', vacancy });
    } catch (error) {
        res.status(400).json({ message: 'Failed to create vacancy', error: error.message });
    }
});

// Get all vacancies
router.get('/', async (req, res) => {
    try {
        const vacancies = await Vacancy.find().populate('student', 'name');
        res.status(200).json(vacancies);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching vacancies', error: error.message });
    }
});

module.exports = router;
