const Course = require('../models/Course');
const { multiMongooseToObject } = require('../../untils/mongoose');

class SiteController {
    // GET / Home
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                // bao mat object cua handlebars
                res.render('home', { courses: multiMongooseToObject(courses) });
            })
            .catch(next);
    }

    // GET / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
