const express = require('express');
const handlebards = require('express-handlebars');

const app = express();
const hbs = handlebards.create({
    extname: '.hbs',
    defaultLayout: 'default'
});
 
app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.get('/', (req, res) =>{
    res.render('home');
});

app.listen(1000);