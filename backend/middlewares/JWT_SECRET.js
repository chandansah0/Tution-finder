const jwt = require('jsonwebtoken');

// Generating a token
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

// Verifying a token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
