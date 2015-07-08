/**
 * SettingController
 *
 * @description :: Server-side logic for managing settings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findByName: function(req, res) {

    var name = req.param('name');

    Setting.find({ key:name}).exec(function (err, setting) {
      if (err) {
        res.send(400);
      } else if(setting.length < 1){
        res.send(404);
      } else {
        res.send(setting[0]);
      }
    });
  },
  findByGroup: function(req, res) {

    var name = req.param('name');

    Setting.find({ group:name}).exec(function (err, settings) {
      if (err) {
        res.send(400);
      } else if(settings.length < 1){
        res.send(404);
      } else {
        res.send(settings);
      }
    });
  }
};

