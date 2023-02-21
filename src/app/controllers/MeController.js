const { multiMongooseToObject } = require('../../untils/mongoose');
const Course = require('../models/Course');

class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
