const express = require('express');
const handlebards = require('express-handlebars');
const { homeController } = require('./controllers/home');

const app = express();
const hbs = handlebards.create({
    extname: '.hbs',
    defaultLayout: 'default'
});
 
app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.get('/', homeController);

app.listen(1000);