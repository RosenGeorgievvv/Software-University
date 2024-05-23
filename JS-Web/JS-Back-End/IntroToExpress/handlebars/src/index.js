const express = require('express');
const handlebards = require('express-handlebars');
const { homeController } = require('./controllers/home');
const { catalogController, detailsController } = require('./controllers/catalog');
const { createController } = require('./controllers/create');

const app = express();
const hbs = handlebards.create({
    extname: '.hbs',
    defaultLayout: 'default'
});
 
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: true}));

app.get('/', homeController);
app.get('/catalog', catalogController);
app.get('/catalog/:id', detailsController);
app.get('/create', createController.get);
app.post('/create', createController.post);

app.listen(1000);