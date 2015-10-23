/**
 * RecordController
 *
 * @description :: Server-side logic for managing records
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  updateRecordValues: function (req, res) {

    RecordService.updateValues(req.body, function (err, record) {
      if (err)
        return res.json(500, err);

      if (!record)
        return res.json(404, "record not found");


        return res.json(record);
    });
  },
  findByWebsiteEntity: function (req, res) {

    Record.getByWebsiteEntity(req.params.websiteId, req.params.entityId, function (err, records) {
      if (err)
        return res.json(500, err);

      if (!records)
        return res.json(404, "entities not found");


      return res.json(records[Object.keys(records)[0]]);
    });
  },
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

