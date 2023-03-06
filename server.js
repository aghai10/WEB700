const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const views = __dirname + '/views';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/students/add', function(req, res) {
    res.sendFile(views + '/addStudent.html');
});
app.post('/students/add', function(req, res) {
    addStudent(req.body)
        .then(() => {
            res.redirect('/students');
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
});

app.listen(3000, () => console.log('Server is listening on port 3000.'));
