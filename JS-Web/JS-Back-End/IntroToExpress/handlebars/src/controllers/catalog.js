const data = require('../../data/catalog.json');

module.exports = {
    catalogController: (req, res) => {
        res.render('catalog', { parts: data});
    },
    detailsController: (req, res) => {
        const { id } = req.params;
        const partData = data.find(p => p.id == id);

        if(!partData){
            res.redirect('/404');
        }
        res.render('details', partData);
    }
}