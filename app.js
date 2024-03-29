const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome1';
    res.render('index', {
        title: title
    });
});

app.get('/about', (req, res) => {
    res.send('ABOUT')
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});