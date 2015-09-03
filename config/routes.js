/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',

  '/': {
    controller: 'IndexController',
    action: 'index',
    skipAssets: true
  },
  'get /alternate': {
    controller: 'IndexController',
    action: 'alternate',
    skipAssets: true
  },
  'get /admin': {
    controller: 'IndexController',
    action: 'admin',
    skipAssets: true
  },
  'get /api/entity/slug/:slug': {
    controller: 'EntityController',
    action: 'findBySlug',
    skipAssets: true
  },
  'get /api/entity/group/:group': {
    controller: 'EntityController',
    action: 'findByGroup',
    skipAssets: true
  },
  'get /api/entity/group/:group/records': {
    controller: 'RecordController',
    action: 'findByEntityGroup',
    skipAssets: true
  },
  'put /api/record/:id/values': {
    controller: 'RecordController',
    action: 'updateRecordValues',
    skipAssets: true
  },
  'post /api/entity/ingest': {
    controller: 'EntityController',
    action: 'ingest',
    skipAssets: true
  },
  'get /api/attribute/slug/:slug': {
    controller: 'AttributeController',
    action: 'findBySlug',
    skipAssets: true
  },
  'get /api/export': {
    controller: 'IstuntRelationController',
    action: 'export',
    skipAssets: true
  }
};
