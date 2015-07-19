/**
 * RecordController
 *
 * @description :: Server-side logic for managing records
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  findByEntityGroup: function (req, res) {

    Record.getByEntityGroup(req.params.group, function (err, records) {
      if (err)
        return res.json(500, err);

      if (!records)
        return res.json(404, "entities not found");


        return res.json(records);
    });
  }
};

