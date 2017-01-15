/*jshint esversion:6
*/
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const products = require('./routes/products');
const bodyParser = require('body-parser');



//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

/*app.get('/', (req, res) => {
    res.render('index', products);
});*/

app.use('/products', products);

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports = app;