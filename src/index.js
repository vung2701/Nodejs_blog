const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middlewares/SortMiddleWare');
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

// custom middlewares
app.use(SortMiddleware);

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
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'fa-solid fa-sort',
                    asc: 'fa-solid fa-arrow-up-short-wide',
                    desc: 'fa-solid fa-arrow-down-short-wide',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">
                            <i class='${icon}'></i>
                        <a >`;
            },
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
