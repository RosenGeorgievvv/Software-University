const data = require('../../data/catalog.json');




module.exports = {
    catalogController: (req, res) => {
        res.render('catalog');
    }
}