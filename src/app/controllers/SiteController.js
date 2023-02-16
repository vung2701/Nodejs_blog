
class SiteController {

    // GET / Home
    home (req, res) {
        res.render('home')
    }

    // GET / seaerch
    search (req, res) {
        res.render('search')
    }
}

module.exports = new SiteController
