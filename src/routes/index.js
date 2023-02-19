const newsRouter = require('./new');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);

    app.use('/search', siteRouter);

    app.use('/', siteRouter);
}

module.exports = route;
