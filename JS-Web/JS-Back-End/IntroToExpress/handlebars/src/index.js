const express = require('express');
const handlebards = require('express-handlebars');
const { homeController } = require('./controllers/home');
const { catalogController } = require('./controllers/catalog');

const app = express();
const hbs = handlebards.create({
    extname: '.hbs',
    defaultLayout: 'default'
});
 
app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');

app.get('/', homeController);
app.get('/catalog', catalogController);

app.listen(1000);