/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findBySlug: function (req, res) {

    console.log(req.params);

    Entity.findOneBySlug(req.params.slug).exec(function (err, entity) {
      if (err)
        return res.json(500, err);

      if (!entity)
        return res.json(404, "entity not found");

      return res.json(entity)
    });
  }
};

