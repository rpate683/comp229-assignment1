const express = require('express');
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/', express.static('public'));

// Include routes.
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about-me', (req, res) => {
    res.render('about-me');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact-me', (req, res) => {
    res.render('contact-me');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})