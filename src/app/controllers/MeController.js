const { multiMongooseToObject } = require('../../untils/mongoose');
const Course = require('../models/Course');

class MeController {
    // GET /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCourses]) => 
                res.render('me/stored-courses', {
                    deleteCourses,
                    courses: multiMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    // GET /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({ })
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
