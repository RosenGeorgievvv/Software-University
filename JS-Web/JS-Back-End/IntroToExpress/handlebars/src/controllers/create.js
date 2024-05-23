const { createPart } = require("../services/parts");

module.exports = {
  createController: {
    get: (req, res) => {
      res.render("create");
    },
    post: (req, res) => {
      const { name, price, description } = req.body;

      if (!name || !price || !description) {
        res.render("create", {
          name,
          price,
          description,
          error: { name: !name, price: !price, description: !description },
        });
        return;
      }
      createPart(req.body);
      res.redirect("/catalog");
    },
  },
};
