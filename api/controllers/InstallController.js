/**
 * InstallController
 *
 * @description :: Server-side logic for installing Satellite
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  initialize: function (req, res) {

    InstallService.initialize(function(err, scopes){

      if (err)
        return res.json(500, {success:false, message:err});

        return res.json({success:true, items:scopes});

    });

  }
};
