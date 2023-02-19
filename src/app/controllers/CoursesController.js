const { mongooseToObject } = require('../../untils/mongoose');
const Course = require('../models/Course');

class CourseController {
    // GET / courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
