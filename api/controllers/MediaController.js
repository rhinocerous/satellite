/**
 * MediaController
 *
 * @description :: Server-side logic for managing Media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
var domain = require('domain')

//var mkdirp = require('mkdirp');

//  server was crashing with nginx - workaround from https://github.com/balderdashy/skipper/issues/49
module.exports = {
  upload: function (req, res) {
    //  stream file directly to S3 using skipper - misses the server hdd altogether

    var d = domain.create();


    // Intentional noop - only fired when a file upload is aborted and the actual
    // error will be properly passed to the function callback below
    d.on('error', function () {
    });

    d.run(function safelyUpload() {


      req.file('file').upload({
        maxBytes: 10000000,
        adapter: require('skipper-s3'),
        key: sails.config.amazon.key,
        secret: sails.config.amazon.secret,
        bucket: sails.config.amazon.bucket
      }, function whenDone(err, files) {

        if (err) {
          console.log("Error uploading file\n%s", JSON.stringify(err, null, " "));

          return res.negotiate(err);
        }
        //  look up website
        Website.findOne(req.params.websiteId).exec(function (err2, site) {

          console.log("found site\n%s", JSON.stringify(site, null, " "));

          if (err2)
            return res.negotiate(err2);

          //  group files by site in the bucket
          var newKey = sails.config.amazon.prefix + "/" + site.slug + "/" + files[0].extra.Key;

          console.log("new key => " + newKey);

          AmazonService.s3Rename(
            sails.config.amazon.bucket + "/" + files[0].extra.Key,
            newKey,
            function (mvErr, mvData) {

              console.log("Error moving file\n%s", JSON.stringify(mvErr, null, " "));
              console.log("Data moving file\n%s", JSON.stringify(mvData, null, " "));

              if (mvErr)
                return res.negotiate(mvErr);


              var params = {
                title: files[0].filename,
                size: files[0].size,
                mime: files[0].type,
                url: "/" + newKey,
                website: [req.params.websiteId],
                user: [req.user.id]
              };

              if (req.params.recordId) {
                params.record = [req.params.recordId];
              }

              Media.create(params).exec(function (mdErr, media) {

                console.log("ERROR for media\n%s", JSON.stringify(mdErr, null, " "));
                console.log("created media\n%s", JSON.stringify(media, null, " "));
                console.log("user for media\n%s", JSON.stringify(req.user, null, " "));

                //if (mdErr)
                //  return res.negotiate(mdErr);

                return res.ok(media);
              });
            });
        });
      });

    });
  }
};
