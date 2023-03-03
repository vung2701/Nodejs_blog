const { multiMongooseToObject } = require('../../untils/mongoose');
const Course = require('../models/Course');

class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({ [req.query.column]: req.query.type });
        }

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCourses]) =>
                res.render('me/stored-courses', {
                    deleteCourses,
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
