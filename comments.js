// Create web server
// Import express module
const express = require('express');
const app = express();
// Import body-parser module
const bodyParser = require('body-parser');
// Import database module
const db = require('./database');
// Set up body-parser
app.use(bodyParser.json());
// Set up web server
app.listen(3000, () => {
    console.log('Server started');
});
// Set up route for getting comments
app.get('/comments', (req, res) => {
    db.getComments().then((comments) => {
        res.json(comments);
    });
});
// Set up route for creating a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    db.createComment(comment).then(() => {
        res.send('Comment created');
    });
});