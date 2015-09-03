/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  cb();

//  see: https://irman6.wordpress.com/2015/01/12/sailsjs-authentication-with-sails-generate-auth-passportjs-wso2-identity-server/
  sails.services.passport.loadStrategies();

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';// a workaround to prevent from Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE]
};
