const data = require('../../data/catalog.json');

module.exports = {
    catalogController: (req, res) => {
        res.render('catalog', { parts: data});
    },
    detailsController: (res, req) => {
        const { id } = req.params;
        const partData = data[Number(id)];
        res.render('details', )
    }
}