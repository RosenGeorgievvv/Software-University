module.exports = {
    createController: {
        get: (req, res) =>{
            res.render('create');
        },
        post: (req, res) => {
            res.redirect('/catalog');
        }
    }
}