const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

// GET/POST from form
app.use(express.urlencoded({
  extended: true
}))
// GET/POST from js
app.use(express.json())

// Static url
app.use(express.static(path.join(__dirname,'public')));

// https logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, '/resources/views'));


app.get('/', (req, res) => {
   res.render('home');
})

app.get('/news', (req, res) => {
   res.render('news');
})

app.get('/search', (req, res) => {
  console.log(req.query)
   res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body)
   res.send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})