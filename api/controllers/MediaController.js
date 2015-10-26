/**
 * MediaController
 *
 * @description :: Server-side logic for managing Media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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

      return res.ok(files);
    });
    }
};

