/*jshint esversion:6
*/
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const products = require('./routes/products');
/*const articles = require('./routes/articles');*/
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', products);
});

app.use('/products', products);

/*app.use('/articles', articles);*/


app.listen(PORT, () => {
  console.log('currently listening on port', PORT);
});

module.exports = app;