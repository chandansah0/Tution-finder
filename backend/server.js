require('dotenv').config();  // Load environment variables

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

    app.use(cors()); // This will allow all domains to access the backend API.

// Start your server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
