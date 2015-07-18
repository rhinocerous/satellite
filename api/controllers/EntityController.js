/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ingest: function (req, res) {

    async.map(req.body, function iterator (entity, cb){

            Entity.findOneBySlug(entity.slug).exec(function (err, dbEntity) {

              if (!dbEntity) {
                Entity.create({name: entity.name, slug: entity.slug}).exec(function (ce, cr) {

                  AttributeService.attach(cr, entity.attributes);
                });
              }
              else {
                AttributeService.attach(dbEntity, entity.attributes);
              }

              cb(null, {});
            });
    },
    function () {

      return res.json(req.body);


    });
  },
  findBySlug: function (req, res) {

    Entity.findOneBySlug(req.params.slug).exec(function (err, entity) {
      if (err)
        return res.json(500, err);

      if (!entity)
        return res.json(404, "entity not found");

      return res.json(entity)
    });
  },
  findByGroup: function (req, res) {

    Entity.findByGroup(req.params.group).exec(function (err, entities) {
      if (err)
        return res.json(500, err);

      if (!entities)
        return res.json(404, "entities not found");

      return res.json(entities)
    });
  }
};

