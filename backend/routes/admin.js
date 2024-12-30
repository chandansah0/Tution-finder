const express = require('express');
const Vacancy = require('../models/Vacancy');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Admin approves or rejects a vacancy application
router.patch('/approve/:vacancyId', authMiddleware, async (req, res) => {
    const { vacancyId } = req.params;
    const { status } = req.body; // 'Approved' or 'Rejected'

    try {
        const vacancy = await Vacancy.findById(vacancyId);
        if (!vacancy) {
            return res.status(404).json({ message: 'Vacancy not found' });
        }

        // Update the application status
        vacancy.status = status;
        await vacancy.save();
        res.status(200).json({ message: 'Vacancy status updated successfully', vacancy });
    } catch (error) {
        res.status(400).json({ message: 'Error updating vacancy status', error: error.message });
    }
});

module.exports = router;
