const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
// const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// POST from form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// POST from js
app.use(express.json());

// Static url
app.use(express.static(path.join(__dirname, 'public')));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// https logger
// app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
