module.exports = {

  getWebsiteRecords:function(websiteId, cb)
  {

    Record.getByWebsite(websiteId, function (err, records) {

      return cb(err, records);
    });
  },
  getRecords:function(userId, cb)
  {
    //  TODO: add more groups as they come online in admin
    //  TODO: move this list to config?
    var groups = ["resume"];
    var out = {};

    async.map(groups, function iterator (group, groupCb){

        Record.getByEntityGroup(group, function (err, records) {

          if (err || !records)
            return groupCb();

          out[group] = records;

          groupCb();
        });
      },
      function () {
        cb(null, out);
      });
  }
};
