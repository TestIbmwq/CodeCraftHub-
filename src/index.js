const express = require('express');
const app = express();
const port = 3000;

// Initialize MongoDB connection
const connectDB = require('./config/database');
connectDB();

// Set up middleware
require('./config/express')(app);

// Define routes
app.use('/api/users', require('./routes/userRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
