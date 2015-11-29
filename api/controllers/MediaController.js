/**
 * MediaController
 *
 * @description :: Server-side logic for managing Media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var path = require('path');
//var mkdirp = require('mkdirp');
var AWS = require('aws-sdk');

module.exports = {
  upload: function (req, res)
  {
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

      console.log("files uploaded to S3\n%s", JSON.stringify(files, null, " "));

  //  look up website
      Website.findOne(req.params.websiteId).exec(function(err2, site){

        if (err2)
          return res.negotiate(err2);

        console.log("website loaded\n%s", JSON.stringify(site, null, " "));

    //  group files by site in the bucket
        var newKey = sails.config.amazon.prefix + "/" + site.slug + "/" + files[0].extra.Key;

        console.log("new key: " + newKey);
        console.log("old key: " + files[0].extra.Key);


        var s3 = new AWS.S3();

        var params = {
          Bucket: sails.config.amazon.bucket,
          CopySource: sails.config.amazon.bucket + "/" + files[0].extra.Key,
          Key: newKey
        };

        console.log("copy params\n%s", JSON.stringify(params, null, " "));

    //  copy to new path
        s3.copyObject(params, function(copyErr, copyData) {

          console.log("copy file \n%s", JSON.stringify(copyData, null, " "));
          console.log("copy file ERROR \n%s", JSON.stringify(copyErr, null, " "));

          if (copyErr)
            return res.negotiate(copyErr);

          params = {
            Bucket: sails.config.amazon.bucket,
            Key: files[0].extra.Key
          };

      //  delete the original so we don't have duplicates
          s3.deleteObject(params, function(delErr, delData) {

            if(delErr)
              return res.negotiate(delErr);

                Media.create({
                  title:files[0].filename,
                  size:files[0].size,
                  mime:files[0].type,
                  url:"/" + newKey
                }).exec(function(mdErr, media){

                  if(mdErr)
                    return res.negotiate(mdErr);

                  media.user.add(req.user.id);
                  media.website.add(req.params.websiteId);
                  media.save(function(){});

                  return res.ok(media);
                });
          });
        });
      });
    });
    }
};

