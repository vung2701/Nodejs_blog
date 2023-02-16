const newsRouter = require('./new')
const siteRouter = require('./site')

function route(app) {
    

app.use('/news', newsRouter);

app.use('/search', siteRouter);

app.use('/', siteRouter);

app.get('/search', (req, res) => {
   res.render('search');
})
}

module.exports = route;
