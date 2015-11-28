/**
 * Passport Middleware
 *
 * Policy for Sails that initializes Passport.js and as well as its built-in
 * session support.
 *
 * In a typical web application, the credentials used to authenticate a user
 * will only be transmitted during the login request. If authentication
 * succeeds, a session will be established and maintained via a cookie set in
 * the user's browser.
 *
 * Each subsequent request will not contain credentials, but rather the unique
 * cookie that identifies the session. In order to support login sessions,
 * Passport will serialize and deserialize user instances to and from the
 * session.
 *
 * For more information on the Passport.js middleware, check out:
 * http://passportjs.org/guide/configure/
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
module.exports = function (req, res, next) {
  passport.initialize()(req, res, function () {
    passport.session()(req, res, function () {
      res.locals.user = req.user;

      //  TODO: wtf is this shit
      if(req.options.controller.indexOf('auth')>-1
        ||req.options.controller.indexOf('index')>-1
        ||req.options.controller.indexOf('install')>-1
        ||req.options.controller.indexOf('sean')>-1
        ||req.options.controller.indexOf('autodealio')>-1
        ||req.options.controller.indexOf('stuntfights')>-1
        ||req.user){

        if(req.user)
        {
          //console.log("user is logged in\n%s", JSON.stringify(req.user, null, 2));
        }

        next();
      }else{
        return res.json(401, {success:false,message:"not authorized"});// res.redirect('/login');
      }
    });
  });
};
