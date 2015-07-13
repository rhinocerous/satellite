/**
 * IstuntRelationController
 *
 * @description :: Server-side logic for managing istuntrelations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var PHPUnserialize = require('php-unserialize');

module.exports = {
  export: function (req, res) {

    IstuntRelation.query("select * from user_relations where ur_user_ID=467", function(err, results) {
      if (err) return res.serverError(err);

      var output = [];

      for (var i = 0, len = results.length; i < len; i++) {

        var row = results[i];

        results[i]['ur_data'] = PHPUnserialize.unserialize(row['ur_data']);
        console.log(row);
      }


      return res.ok(results);
    });


  }

};

