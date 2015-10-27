/**
 * MediaController
 *
 * @description :: Server-side logic for managing Media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = {
  upload: function (req, res)
  {
    req.file('file').upload({
      maxBytes: 10000000
    }, function whenDone(err, files) {
        if (err) {
          return res.negotiate(err);
        }

        // If no files were uploaded, respond with an error.
        if (files.length === 0){
          return res.badRequest('No file was uploaded');
        }

        var baseDir = path.resolve(sails.config.appPath, '.tmp/public/images/uploads/');
        var file = files[0];
        var filename = path.basename(file.fd);

        mkdirp(baseDir, function(err) {

          if(err)
            return res.negotiate(err);

          fs.rename(file.fd, baseDir + "/" + filename, function(err)
          {
            if(err)
              return res.negotiate(err);

            Media.create({
              title:file.filename,
              size:file.size,
              mime:file.type,
              url:"/images/uploads/" + filename
            }).exec(function(err, media){

              media.user.add(req.user.id);
              media.website.add(req.params.websiteId);
              media.save(function(){});

              if(err)
                return res.negotiate(err);

              return res.ok(media);
            });
          });

        });
    });
    }
};

