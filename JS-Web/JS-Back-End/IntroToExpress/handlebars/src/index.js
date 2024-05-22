const express = require('express');
const handlebards = require('express-handlebars');

const app = express();
const hbs = handlebards.create();

app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.get('/', (req, res) =>{
    res.render('home');
});

app.listen(1000);