var AWS = require('aws-sdk');

//  make sure to set the credentials in ~/.aws/credentials so aws-sdk can connect
//  http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-intro.html

module.exports =
{
  s3Rename : function(from, to, cb, bucket) {
    var s3 = new AWS.S3();

    var params = {
      Bucket: bucket || sails.config.amazon.bucket,
      CopySource: from,
      Key: to
    };

    //  copy to new path
    s3.copyObject(params, function (copyErr, copyData) {

      if (copyErr)
        return cb(copyErr);

      params = {
        Bucket: bucket || sails.config.amazon.bucket,
        Key: from
      };

      //  delete the original so we don't have duplicates
      s3.deleteObject(params, function (delErr, delData) {
          cb(null, true);
      });

    });
  }
};
