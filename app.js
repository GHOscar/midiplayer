const express = require('express'); // Import express
const app = express(); // Instantiate express
const PORT = process.env.PORT || 1221; // This is the PORT the app uses
const musicRoutes = require('./routes/music'); // Declaring the routes to the app
const morgan = require('morgan');
morgan('dev');

// Middleware
app.use(express.json()); // Enables fetching application/json
app.use(express.static('public')); // Enables frontend for our app
// Endpoint for our route
app.use('/music', musicRoutes);

// End of middleware 

app.listen(PORT, () => { // Tells what port we run our app on
    console.log(`Server running on port ${PORT}`);
});