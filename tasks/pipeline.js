/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [

//  'styles/admin.css',
  'styles/prestige/bootstrap-theme.css',
  'styles/prestige/bootstrap.css',
  'styles/prestige/bootstrap.min.css',
  'styles/prestige/carousel.css',
  'styles/prestige/colorbox.css',
  'styles/prestige/et-line-font.css',
  'styles/prestige/font-awesome.min.css',
  'styles/prestige/importer.css',
  'styles/prestige/less/variables.css',
  'styles/prestige/magnific-popup.css',
  //'styles/prestige/theme-blue.css',
  //'styles/prestige/theme-orange.css',
  //'styles/prestige/theme-salmonpink.css',
  'styles/prestige/theme-updates.css',
  'styles/prestige/theme.css',
  'styles/prestige/stuntfights.css'

//  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  'js/dependencies/bootstrap.js',
  'js/dependencies/jqBootstrapValidation.js',
  'js/dependencies/jquery.flexslider.js',
  'js/dependencies/jquery.magnific-popup.js',
  'js/dependencies/jquery.mb.YTPlayer.js',
  'js/dependencies/jquery.nav.js',
  'js/dependencies/jquery.scrollTo.js',

  //'js/prestige/docs.min.js',
  'js/prestige/scrollReveal.js',
  'js/prestige/isotope.pkgd.min.js',
  'js/prestige/isotope.js',
  'js/prestige/cbpAnimatedHeader.min.js',
  'js/prestige/classie.js',
  'js/prestige/imagesloaded.pkgd.js',
  'js/prestige/less.js',
  'js/prestige/modernizr.custom.js',
  'js/prestige/owl.carousel.js',
  //'js/prestige/jssor.slider.mini.js',
  'js/prestige/custom.js'

  //'js/ng/angular-1.4.1.js',
  //'js/ng/angular-1.4.1.route.js',
  //'js/ng/ui-bootstrap-tpls-0.13.0.min.js',
  //'js/ng/ng.satellite.js',
  //'js/ng/ng.application.js'

];
/*  SATELLITE */

var jsSatelliteDependencies = [
  '/js/ng/satellite/dependencies/jquery-2.1.3.js',
  '/js/ng/satellite/dependencies/dropzone.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.route.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.animate.js',
  '/js/ng/satellite/dependencies/angular-1.4.1.sanitize.js',
  '/js/ng/satellite/dependencies/angular-dropzone.js',
  '/js/ng/satellite/dependencies/ui-bootstrap-tpls-0.13.4.min.js',
  '/js/ng/satellite/dependencies/textAngular-rangy.min.js',
  '/js/ng/satellite/dependencies/textAngular-sanitize.min.js',
  '/js/ng/satellite/dependencies/textAngular.min.js',
  '/js/ng/satellite/dependencies/angular-drag-n-drop.js',
  '/js/ng/satellite/dependencies/tv4.js',
  '/js/ng/satellite/dependencies/ObjectPath.js',
  '/js/ng/satellite/dependencies/ng.schema-form.js',
  '/js/ng/satellite/dependencies/bootstrap-decorator.js',
  '/js/ng/satellite/dependencies/angular-toastr.tpls.js'
];

var jsSatelliteCore= [
  '/js/ng/satellite/core/satellite.core.js',
  '/js/ng/satellite/core/base/*.js',
  '/js/ng/satellite/core/services/*.js',
  '/js/ng/satellite/core/satellite.core.config.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)


/*  SATELLITE */
module.exports.jsSatelliteDependencies = jsSatelliteDependencies.map(function(path) {
  return '.tmp/public/' + path;
});

module.exports.jsSatelliteCore = jsSatelliteCore.map(function(path) {
  return '.tmp/public/' + path;
});


module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
