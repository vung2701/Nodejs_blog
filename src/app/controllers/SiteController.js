class SiteController {
    // GET / Home
    home(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });

        // res.render('home');
    }

    // GET / seaerch
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
