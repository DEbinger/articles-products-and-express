/*jshint esversion:6
*/
const express = require('express');
const handlebars = require('express-handlebars');
let app = express();

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

/*if (name && price && inventory) {}
let data = {
  "productRequest": [
    {id: 'number',
    name: 'string' ,
    price: 'number',
    inventory: 'number' },
  ]
};*/

app.get('/', (req, res) => {
    res.render('index', data);
});


app.listen(3000, () => {
  console.log('listening on port 3000');
});