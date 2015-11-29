/**
 * MediaController
 *
 * @description :: Server-side logic for managing Media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
//var mkdirp = require('mkdirp');


module.exports = {
  upload: function (req, res) {
    //  stream file directly to S3 using skipper - misses the server hdd altogether
    req.file('file').upload({
      maxBytes: 10000000,
      adapter: require('skipper-s3'),
      key: sails.config.amazon.key,
      secret: sails.config.amazon.secret,
      bucket: sails.config.amazon.bucket
    }, function whenDone(err, files) {
      if (err) {
        return res.negotiate(err);
      }
      //  look up website
      Website.findOne(req.params.websiteId).exec(function (err2, site) {

        if (err2)
          return res.negotiate(err2);

        //  group files by site in the bucket
        var newKey = sails.config.amazon.prefix + "/" + site.slug + "/" + files[0].extra.Key;

        AmazonService.s3Rename(
          sails.config.amazon.bucket + "/" + files[0].extra.Key,
          newKey,
          function (mvErr, mvData) {

            if (mvErr)
              return res.negotiate(mvErr);


            Media.create({
              title: files[0].filename,
              size: files[0].size,
              mime: files[0].type,
              url: "/" + newKey
            }).exec(function (mdErr, media) {

              if (mdErr)
                return res.negotiate(mdErr);

              media.user.add(req.user.id);
              media.website.add(req.params.websiteId);
              media.save(function () {
              });

              return res.ok(media);
            });
          });
      });
    });
  }
};
