const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3001;

// https logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));

app.set('view engine', 'hbs');
app.set("views", "./src/resources/views");

app.get('/', (req, res) => {
   res.render('home');
})

app.get('/news', (req, res) => {
   res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})