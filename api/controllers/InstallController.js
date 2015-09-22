/**
 * InstallController
 *
 * @description :: Server-side logic for installing Satellite
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  initialize: function (req, res) {

    InstallService.initialize(function(err){

      if (err)
        return res.json(500, err);

      //return res.json({success:true, message:"installation successful"});

      Scope.find(function (err2, scopes) {

        if (err2)
          return res.json(500, err2);

        return res.json(err2)

      });

    });

  }
};
