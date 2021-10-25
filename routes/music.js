// Enables another endpoint
const router = require('express').Router();
const scribbletune = require('scribbletune');  // Import downloaded module

router.get('/', (req, res) => { 
    console.log('Music playing'); // Check to see the endpoint works as intended
});

router.get('/search/:music', (req, res) => {
    console.log('Searching music...'); // Check to see endpoint works as intended

    omdb.search(req.params.music, (err, songs) => { 
        if (err) {
            console.log(err);
        }
        console.log(songs);
        res.json(songs);
    });
});

module.exports = router; // Enable the router to communicate with app.js