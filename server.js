const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500; // Set your preferred port

// Middleware
app.use(express.json());

// Routes
// Define your routes here

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
